import React, { Component, ErrorInfo, ReactNode } from "react";
import StarburstIcon from "./StarburstIcon.tsx";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#faf8f5] text-black flex items-center justify-center p-6 border-4 border-black font-sans" id="error-boundary-container">
          <div className="max-w-md w-full border border-black bg-white p-8 sm:p-12 shadow-sm text-center flex flex-col items-center gap-6" id="error-boundary-card">
            <StarburstIcon points={12} className="w-16 h-16 text-brand-red animate-spin-slow" strokeWidth={2} />
            <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tighter uppercase leading-none text-black">
              Something went wrong.
            </h1>
            <p className="text-neutral-600 text-sm leading-relaxed font-sans">
              An unexpected error occurred in the application. Let's try reloading the page to resolve the state.
            </p>
            {this.state.error && (
              <div className="w-full bg-neutral-100 p-3 text-left overflow-auto max-h-32 border border-black/10 font-mono text-[11px] text-neutral-500">
                {this.state.error.toString()}
              </div>
            )}
            <button
              onClick={this.handleReset}
              className="w-full bg-black text-white hover:bg-brand-red transition-all duration-300 font-sans font-bold text-sm tracking-widest uppercase py-4 rounded-none cursor-pointer border border-black"
              id="btn-error-reset"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
