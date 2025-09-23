"use client";
import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferred, setDeferred] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferred(e);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed bottom-3 left-1/2 z-[60] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur px-4 py-3 shadow-soft">
      <div className="flex items-center gap-3">
        <img src="/icon.svg" alt="ApexByte" className="h-6 w-6" />
        <div className="text-sm text-slate-800">Install ApexByte for a faster app-like experience.</div>
        <div className="flex gap-2">
          <button className="rounded-xl bg-slate-900 px-3 py-1.5 text-sm text-white" onClick={async () => { await deferred?.prompt(); setShow(false); }}>Install</button>
          <button className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm" onClick={() => setShow(false)}>Not now</button>
        </div>
      </div>
    </div>
  );
}
