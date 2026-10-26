import React from "react";

interface StarburstIconProps {
  points?: 8 | 12 | 16;
  className?: string;
  strokeWidth?: number;
}

export default function StarburstIcon({
  points = 16,
  className = "w-6 h-6 text-brand-red",
  strokeWidth = 2.8,
}: StarburstIconProps) {
  // A starburst is created by drawing lines crossing the center (12, 12).
  // A points value of 16 means 8 lines (each line has 2 opposing rays).
  // A points value of 8 means 4 lines.
  // A points value of 12 means 6 lines.
  const lineCount = points / 2;
  const angleStep = 180 / lineCount;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id={`starburst-${points}`}
    >
      <g transform="translate(12, 12)">
        {Array.from({ length: lineCount }).map((_, i) => {
          const rotation = i * angleStep;
          return (
            <line
              key={i}
              x1="0"
              y1="-9.5"
              x2="0"
              y2="9.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              transform={`rotate(${rotation})`}
            />
          );
        })}
      </g>
    </svg>
  );
}
