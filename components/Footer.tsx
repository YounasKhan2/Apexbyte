"use client";
import { FiTwitter, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-primary to-purple" />
              <span className="font-heading text-lg">ApexByte</span>
            </div>
            <p className="text-sm text-slate-600 max-w-xs">
              Pakistan‑based premium software agency delivering Web, Mobile, and AI solutions for clients worldwide.
            </p>
            <div className="flex gap-3">
              <a aria-label="Twitter" className="group rounded-xl border border-slate-200 p-2 hover:shadow-glow" href="#"><FiTwitter className="h-4 w-4 text-slate-700 group-hover:text-primary" /></a>
              <a aria-label="LinkedIn" className="group rounded-xl border border-slate-200 p-2 hover:shadow-glow" href="#"><FiLinkedin className="h-4 w-4 text-slate-700 group-hover:text-primary" /></a>
              <a aria-label="GitHub" className="group rounded-xl border border-slate-200 p-2 hover:shadow-glow" href="#"><FiGithub className="h-4 w-4 text-slate-700 group-hover:text-primary" /></a>
              <a aria-label="Email" className="group rounded-xl border border-slate-200 p-2 hover:shadow-glow" href="mailto:apexbyte63@gmail.com"><FiMail className="h-4 w-4 text-slate-700 group-hover:text-primary" /></a>
            </div>
          </div>

          <div>
            <div className="font-heading mb-3">Company</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-slate-900" href="#home">Home</a></li>
              <li><a className="hover:text-slate-900" href="#about">About</a></li>
              <li><a className="hover:text-slate-900" href="#portfolio">Portfolio</a></li>
              <li><a className="hover:text-slate-900" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-heading mb-3">Services</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-slate-900" href="#services">Web Development</a></li>
              <li><a className="hover:text-slate-900" href="#services">React Native & Flutter</a></li>
              <li><a className="hover:text-slate-900" href="#services">Shopify & WordPress</a></li>
              <li><a className="hover:text-slate-900" href="#services">AI Solutions</a></li>
            </ul>
          </div>

          <div>
            <div className="font-heading mb-3">Stay in the loop</div>
            <p className="text-sm text-slate-600">Monthly insights on shipping better products.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
              <input className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30" placeholder="Email address" />
              <button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white hover:shadow-glow">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6">
        <div className="container flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} ApexByte. All rights reserved.</div>
          <div className="flex gap-4 text-sm text-slate-500">
            <a className="hover:text-slate-700" href="#">Privacy</a>
            <a className="hover:text-slate-700" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
