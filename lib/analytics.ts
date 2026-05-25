type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const sendEvent = (eventName: string, params?: EventParams) => {
  if (typeof window !== 'undefined') {
    // 1. GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params,
    });

    // 2. Direct GA4 (gtag)
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
    
    // 3. Direct Yandex Metrika Goal Trigger
    const ymId = Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID);
    if ((window as any).ym && ymId) {
      (window as any).ym(ymId, 'reachGoal', eventName, params);
    }

    // Optional: Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', eventName, params);
    }
  }
};

export const handleContactClick = (type: 'phone' | 'email' | 'messenger', channel: string, value?: string) => {
  sendEvent('contact_click', {
    type,
    channel,
    value, // Be careful with PII, maybe hash or just omit if not needed
  });
};
