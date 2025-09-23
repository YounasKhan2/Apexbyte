export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-xl bg-gradient-to-br from-primary to-purple" />
          <span className="font-heading">ApexByte</span>
        </div>
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} ApexByte. All rights reserved.</div>
      </div>
    </footer>
  );
}
