/**
 * Optional Google Sheets mirror for contact inquiries.
 * Deploy as a Web App (execute as you; access: anyone), then put its URL in
 * GOOGLE_SHEETS_WEBHOOK_URL and the same random secret in both environments.
 * MongoDB remains the primary database; this script mirrors only contact leads.
 */
function doPost(e) {
  const props = PropertiesService.getScriptProperties();
  const expected = props.getProperty('WEBHOOK_SECRET');
  const spreadsheetId = props.getProperty('SPREADSHEET_ID');
  if (!expected || !spreadsheetId) return json({ ok: false, error: 'Not configured' });
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (!data.secret || data.secret !== expected) return json({ ok: false, error: 'Unauthorized' });
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('Inquiries') || SpreadsheetApp.openById(spreadsheetId).insertSheet('Inquiries');
    if (sheet.getLastRow() === 0) sheet.appendRow(['Received at', 'Name', 'Email', 'Service', 'Message', 'Mongo ID']);
    // Prefix user-controlled values with an apostrophe to prevent spreadsheet formula injection.
    const cell = value => String(value || '').replace(/^[=+@-]/, "'$&").slice(0, 3000);
    sheet.appendRow([new Date(data.createdAt || Date.now()), cell(data.name), cell(data.email), cell(data.service), cell(data.message), cell(data.id)]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: 'Could not store inquiry' });
  }
}
function json(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
