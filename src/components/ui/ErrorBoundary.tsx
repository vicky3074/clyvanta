'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error?: Error;
  resetError: () => void;
}

function DefaultErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-clyvanta-bg-light rounded-2xl p-8">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">⚠️</div>
        <h2 className="text-2xl font-bold text-clyvanta-text-primary mb-4">
          Something went wrong
        </h2>
        <p className="text-clyvanta-text-secondary mb-6">
          We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
        </p>
        {process.env.NODE_ENV === 'development' && error && (
          <details className="mb-6 text-left">
            <summary className="cursor-pointer text-clyvanta-blue-dark font-medium">
              Error Details
            </summary>
            <pre className="mt-2 p-4 bg-red-50 rounded-lg text-xs text-red-800 overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}
        <button
          onClick={resetError}
          className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

function ContactFormErrorFallback({ resetError }: ErrorFallbackProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] max-w-2xl mx-auto">
      <div className="text-center">
        <div className="text-4xl mb-4">📧</div>
        <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">
          Contact Form Error
        </h3>
        <p className="text-clyvanta-text-secondary mb-6">
          There was an issue loading the contact form. Please try refreshing the page or contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetError}
            className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark text-white px-6 py-3 rounded-lg font-semibold"
          >
            Reload Form
          </button>
          <a
            href="mailto:hello@clyvanta.com"
            className="border-2 border-clyvanta-blue-dark text-clyvanta-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-clyvanta-blue-dark hover:text-white transition-all duration-300"
          >
            Email Us Directly
          </a>
        </div>
      </div>
    </div>
  );
}

function ServiceErrorFallback({ resetError }: ErrorFallbackProps) {
  return (
    <div className="bg-clyvanta-bg-light p-8 rounded-2xl">
      <div className="text-center">
        <div className="text-4xl mb-4">🔧</div>
        <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">
          Service Unavailable
        </h3>
        <p className="text-clyvanta-text-secondary mb-6">
          This service section is temporarily unavailable. Please try again later.
        </p>
        <button
          onClick={resetError}
          className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark text-white px-6 py-3 rounded-lg font-semibold"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
export { ContactFormErrorFallback, ServiceErrorFallback, DefaultErrorFallback };