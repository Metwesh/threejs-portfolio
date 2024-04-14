import React from "react";

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    return this.state.hasError ? (
      <div className="flex flex-col items-center justify-center h-screen px-5">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          className="w-full"
        >
          <path
            d="M-1.74846e-05 1.52588e-05C30 70 30 280 -1.74846e-06 360C40.6667 358 125.5 360 80 400C98 400 120 367 120 320C120 240 111.5 236 60 236C70 216 70 180 60 160C80 170 120 170 140 160L200 380L260 160C280 170 320 170 340 160C330 180 330 216 340 236C288.5 236 280 240 280 320C280 367 302 400 320 400C274.5 360 359.333 358 400 360C370 280 370 70 400 -2.22577e-06C379.5 13.5 272.4 32.4 240 4.76806e-06L200 160L160 8.26497e-06C127.6 32.4 20.5 13.5 -1.74846e-05 1.52588e-05Z"
            fill="#915DFF"
          />
        </svg>
        <h1 className="text-2xl font-bold mb-4 text-cen">
          Sorry, something went wrong.
        </h1>
      </div>
    ) : (
      this.props.children
    );
  }
}
