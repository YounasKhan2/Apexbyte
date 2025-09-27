import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Careers at CubixByte",
  description:
    "Join the CubixByte team and help build the future of web, mobile, and AI solutions. See open roles and apply today!",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20" />
      <main className="container py-16 min-h-[60vh]">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-heading text-3xl md:text-4xl mb-3">Careers at CubixByte</h1>
          <p className="text-slate-600 max-w-2xl">
            We’re building a thoughtful, curious, and kind team to craft world-class digital products.
            If you love solving real problems with modern tech and great design, you’ll feel right at home.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-soft">
            Remote-friendly
          </div>
        </div>

        {/* Project Manager */}
        <section id="role-project-manager" className="mb-8 overflow-hidden rounded-3xl border border-slate-200 p-5 shadow-soft relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h2 className="font-heading text-xl md:text-2xl">Project Manager</h2>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600">0–3 yrs</span>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600">Remote · Full Time</span>
            </div>
            <p className="text-slate-700 mb-3">
              Lead cross‑functional teams, own delivery, and keep quality high across web and mobile projects.
            </p>
            <a href="mailto:cubixbyte@gmail.com?subject=Application%20for%20Project%20Manager" className="text-primary font-medium hover:underline">
              Apply Now
            </a>
          </div>
        </section>

        {/* UI/UX Designer */}
        <section id="role-ui-ux" className="mb-8 overflow-hidden rounded-3xl border border-slate-200 p-5 shadow-soft relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple/5 to-transparent" />
          <div className="relative">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h2 className="font-heading text-xl md:text-2xl">UI/UX Designer</h2>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600">0–3 yrs</span>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600">Remote · Full Time</span>
            </div>
            <p className="text-slate-700 mb-3">
              Design intuitive, beautiful experiences. Portfolio that shows process and outcomes is required.
            </p>
            <a href="mailto:cubixbyte@gmail.com?subject=Application%20for%20UI%2FUX%20Designer" className="text-primary font-medium hover:underline">
              Apply Now
            </a>
          </div>
        </section>

        {/* Backend Developer */}
        <section id="role-backend" className="mb-8 overflow-hidden rounded-3xl border border-slate-200 p-5 shadow-soft relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-highlight/5 to-transparent" />
          <div className="relative">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h2 className="font-heading text-xl md:text-2xl">Backend Developer</h2>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600">0–3 yrs</span>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600">Remote · Full Time</span>
            </div>
            <p className="text-slate-700 mb-3">
              Build robust APIs and services using Node.js and databases. Bonus: exposure to DevOps/cloud.
            </p>
            <a href="mailto:cubixbyte@gmail.com?subject=Application%20for%20Backend%20Developer" className="text-primary font-medium hover:underline">
              Apply Now
            </a>
          </div>
        </section>

        {/* SEO Intern */}
        <section id="role-seo-intern" className="mb-8 overflow-hidden rounded-3xl border border-slate-200 p-5 shadow-soft relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h2 className="font-heading text-xl md:text-2xl">Intern — SEO</h2>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600">Internship</span>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600">Remote · 3–6 months</span>
            </div>
            <p className="text-slate-700 mb-3">
              Learn technical and on‑page SEO, content optimization, and analytics with hands‑on mentorship.
            </p>
            <a href="mailto:cubixbyte@gmail.com?subject=Application%20for%20SEO%20Internship" className="text-primary font-medium hover:underline">
              Apply Now
            </a>
          </div>
        </section>

        {/* Digital Marketing Intern */}
        <section id="role-dm-intern" className="mb-12 overflow-hidden rounded-3xl border border-slate-200 p-5 shadow-soft relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple/5 to-transparent" />
          <div className="relative">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h2 className="font-heading text-xl md:text-2xl">Intern — Digital Marketing</h2>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600">Internship</span>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600">Remote · 3–6 months</span>
            </div>
            <p className="text-slate-700 mb-3">
              Support campaigns across social, email, and paid; learn performance tracking and creative testing.
            </p>
            <a href="mailto:cubixbyte@gmail.com?subject=Application%20for%20Digital%20Marketing%20Internship" className="text-primary font-medium hover:underline">
              Apply Now
            </a>
          </div>
        </section>

        {/* How to apply */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl mb-2">How to Apply</h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <ol className="list-decimal pl-5 space-y-2 text-slate-700">
              <li>Send your resume/CV (and portfolio if applicable).</li>
              <li>Briefly tell us why you’re a great fit for the role.</li>
              <li>Include your location and earliest start date.</li>
            </ol>
            <div className="mt-4">
              <a
                href="mailto:cubixbyte@gmail.com?subject=Careers%20Application%20—%20CubixByte"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:shadow-glow"
              >
                Email your application
              </a>
            </div>
          </div>
        </section>

        {/* Talent pool */}
        <section>
          <h2 className="font-heading text-2xl mb-2">Don’t see your role?</h2>
          <p className="text-slate-600 mb-2">
            We’re always open to exceptional talent. Email your resume and portfolio to
            {" "}
            <a href="mailto:cubixbyte@gmail.com" className="text-primary hover:underline">cubixbyte@gmail.com</a>
            {" "}
            and tell us how you can make a difference at CubixByte.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
