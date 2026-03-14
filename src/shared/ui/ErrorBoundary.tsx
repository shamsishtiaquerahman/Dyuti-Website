import React, { type ReactNode } from "react";

type State = {
  hasError: boolean;
  message?: string;
  stack?: string;
};

export class ErrorBoundary extends React.Component<{ children: ReactNode }, State> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      message: error?.message || "Unknown runtime error",
      stack: error?.stack,
    };
  }

  componentDidCatch(error: Error) {
    console.error("Unhandled UI error:", error);
  }

  render() {
    if (this.state.hasError) {
      const isDev =
        typeof window !== "undefined" &&
        (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

      return (
        <div className="min-h-screen bg-slate-100 px-6 py-16 text-slate-900 dark:bg-[#08111f] dark:text-white">
          <div className="mx-auto max-w-4xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h1 className="text-3xl font-bold">Something went wrong.</h1>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              The page encountered an unexpected error. Refresh the page or return home.
            </p>

            {isDev && this.state.message ? (
              <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-900 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-100">
                <p className="font-semibold">Runtime error:</p>
                <pre className="mt-3 whitespace-pre-wrap break-words font-mono">{this.state.message}</pre>
                {this.state.stack ? (
                  <>
                    <p className="mt-4 font-semibold">Stack:</p>
                    <pre className="mt-3 max-h-96 overflow-auto whitespace-pre-wrap break-words font-mono text-xs opacity-90">
                      {this.state.stack}
                    </pre>
                  </>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
