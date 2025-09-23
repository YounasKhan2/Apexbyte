"use client";
import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferred, setDeferred] = useState<any>(null);
  const [show, setShow] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const dismissedAt = Number(localStorage.getItem("installPromptDismissedAt") || 0);
    const coolOff = 1000 * 60 * 60 * 24 * 7; // 7 days
    const withinCooldown = Date.now() - dismissedAt < coolOff;

    const ua = typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase() : "";
    const iOS = /iphone|ipad|ipod/.test(ua);
    setIsIos(iOS);
    // iOS Safari exposes this when installed
    setIsStandalone(typeof window !== "undefined" && (window.navigator as any).standalone === true);

    const onBeforeInstall = (e: any) => {
      e.preventDefault();
      setDeferred(e);
      if (!withinCooldown) setShow(true);
    };
    const onAppInstalled = () => {
      setShow(false);
      setDeferred(null);
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onAppInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  // For iOS Safari there is no beforeinstallprompt, show instructions if not installed
  const shouldShowIosHint = isIos && !isStandalone && !deferred;
  if (!show && !shouldShowIosHint) return null;

  const InfoBox = (
    <div className="rounded-2xl border border-slate-200 bg-white/95 backdrop-blur px-4 py-3 shadow-soft">
      <div className="flex items-center gap-3">
        <img src="/icon.svg" alt="ApexByte" className="h-6 w-6" />
        {shouldShowIosHint ? (
          <div className="text-xs md:text-sm text-slate-800">
            Install on iPhone: tap the Share icon, then “Add to Home Screen”.
          </div>
        ) : (
          <div className="text-xs md:text-sm text-slate-800">
            Install ApexByte for a faster app-like experience.
          </div>
        )}
        {/* Desktop inline buttons */}
        {!shouldShowIosHint && (
          <div className="ml-auto hidden md:flex gap-2">
            <button
              className="rounded-xl bg-slate-900 px-3 py-1.5 text-sm text-white"
              onClick={async () => {
                try {
                  await deferred?.prompt();
                } catch {}
                setShow(false);
              }}
            >
              Install
            </button>
            <button
              className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm"
              onClick={() => {
                localStorage.setItem("installPromptDismissedAt", String(Date.now()));
                setShow(false);
              }}
            >
              Not now
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-[60] -translate-x-1/2">
      <div className="relative w-[min(92vw,640px)]">
        {InfoBox}
        {/* Mobile buttons outside the box */}
        {!shouldShowIosHint && (
          <div className="mt-2 flex md:hidden justify-end gap-2">
            <button
              className="rounded-xl bg-slate-900 px-3 py-1.5 text-xs text-white"
              onClick={async () => {
                try {
                  await deferred?.prompt();
                } catch {}
                setShow(false);
              }}
            >
              Install
            </button>
            <button
              className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs"
              onClick={() => {
                localStorage.setItem("installPromptDismissedAt", String(Date.now()));
                setShow(false);
              }}
            >
              Not now
            </button>
          </div>
        )}
        {/* iOS hint dismiss button (mobile) */}
        {shouldShowIosHint && (
          <div className="mt-2 flex justify-end gap-2">
            <button
              className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs md:text-sm"
              onClick={() => {
                localStorage.setItem("installPromptDismissedAt", String(Date.now()));
                setShow(false);
              }}
            >
              Got it
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
