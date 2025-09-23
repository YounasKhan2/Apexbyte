export const metadata = {
  title: "Offline",
};

import OfflinePanel from "../../components/OfflinePanel";

export default function OfflinePage() {
  return (
    <main className="min-h-screen grid place-items-center bg-surface-subtle">
      <OfflinePanel />
    </main>
  );
}