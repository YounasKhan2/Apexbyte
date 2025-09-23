"use client";
export default function OfflinePanel() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft">
      <div className="mx-auto mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-purple" />
      <h1 className="font-heading text-2xl">You’re offline</h1>
      <p className="mt-2 text-slate-600">Please check your connection and try again.</p>
      <div className="mt-4 flex justify-center gap-2">
        <button className="rounded-2xl border border-slate-200 px-4 py-2 text-sm" onClick={() => location.reload()}>Retry</button>
        <a className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white" href="/">Go Home</a>
      </div>
    </div>
  );
}
