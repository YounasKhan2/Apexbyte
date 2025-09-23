"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GATracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!id) return;
    const gtag = (window as any).gtag as undefined | ((...args: any[]) => void);
    if (!gtag) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
      send_to: id,
    });
  }, [pathname, searchParams, id]);

  return null;
}
