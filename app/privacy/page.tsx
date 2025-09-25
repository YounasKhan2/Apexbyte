export const metadata = {
  title: "Privacy Policy",
  description: "How ApexByte collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main className="container py-16">
      <h1 className="font-heading text-3xl md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-slate-600">Last updated: {new Date().toISOString().slice(0,10)}</p>

      <section className="prose prose-slate max-w-none mt-8">
        <h2>Overview</h2>
        <p>We respect your privacy. This policy explains what we collect, why we collect it, and how we protect it.</p>

        <h2>Information we collect</h2>
        <ul>
          <li>Contact details you submit: name, email, message, project details.</li>
          <li>Technical data: IP address, user agent, basic analytics events.</li>
        </ul>

        <h2>How we use your information</h2>
        <ul>
          <li>To respond to inquiries and provide services.</li>
          <li>To improve our website and user experience.</li>
        </ul>

        <h2>Sharing</h2>
        <p>We do not sell your data. We may share with service providers (e.g., email service) solely to operate our services.</p>

        <h2>Security</h2>
        <p>We use industry-standard measures to protect your data.</p>

        <h2>Your rights</h2>
  <p>Contact us at <a href="mailto:cubixbyte@gmail.com">cubixbyte@gmail.com</a> to request access, correction, or deletion.</p>

        <h2>Contact</h2>
  <p>CubixByte — USA & Pakistan. Email: <a href="mailto:cubixbyte@gmail.com">cubixbyte@gmail.com</a></p>
      </section>
    </main>
  );
}
