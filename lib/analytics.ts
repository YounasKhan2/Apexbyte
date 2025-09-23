export type EventPayload = Record<string, string | number | boolean | undefined>;

export function track(event: string, payload?: EventPayload) {
  try {
    window.dispatchEvent(new CustomEvent("track", { detail: { event, payload } }));
    const gtag = (window as any).gtag as undefined | ((...args: any[]) => void);
    if (gtag) {
      gtag('event', event, payload || {});
    }
  } catch {}
}
