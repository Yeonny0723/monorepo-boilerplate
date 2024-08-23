import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // 컴포넌트에서 오류가 발생하면 상태를 업데이트
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    // 오류 정보를 로깅하거나 외부 서비스에 전송할 수 있음
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 렌더링
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
