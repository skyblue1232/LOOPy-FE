declare global {
  interface Window {
    grecaptcha?: {
      reset: (widgetId?: number) => void;
    };
  }
}

export {};
