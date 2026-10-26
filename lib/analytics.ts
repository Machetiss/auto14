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
    // Цели шлём в оба счётчика: основной (106881681) и Яндекс Бизнес (91798480),
    // ID совпадают с app/components/YandexMetrika.tsx
    if ((window as any).ym) {
      for (const ymId of [106881681, 91798480]) {
        (window as any).ym(ymId, 'reachGoal', eventName, params);
      }
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
