import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ApexByte',
  description: 'Read ApexByte’s Terms of Service, including use of the website, engagement terms, and legal information.',
  alternates: {
    canonical: 'https://apexbyte.vercel.app/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="container prose prose-slate mx-auto max-w-3xl px-4 py-16">
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using this website or engaging ApexByte for services, you agree to be bound by these Terms of Service. If
        you do not agree to these terms, please do not use the site or our services.
      </p>

      <h2>2. Services</h2>
      <p>
        We provide software design and development services including web, mobile, and AI solutions. Specific scope, deliverables,
        and timelines will be defined in individual proposals or statements of work (SOWs).
      </p>

      <h2>3. Engagement & Payment</h2>
      <p>
        Projects may be billed fixed-fee or time-and-materials. Unless otherwise specified, invoices are due within 14 days. Late
        payments may incur a late fee. Intellectual property transfers upon receipt of full payment unless agreed differently.
      </p>

      <h2>4. Client Responsibilities</h2>
      <p>
        You agree to provide timely feedback, access, and materials necessary to deliver the project. Delays in feedback may affect
        delivery dates.
      </p>

      <h2>5. Confidentiality</h2>
      <p>
        Both parties agree to keep confidential information private and not disclose it to third parties except as required by law
        or with prior written consent.
      </p>

      <h2>6. Warranties & Disclaimer</h2>
      <p>
        Services are provided on an “as is” basis. We disclaim all warranties to the maximum extent permitted by law. We do not
        guarantee uninterrupted or error-free operation.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, ApexByte is not liable for any indirect, incidental, special, consequential, or
        punitive damages, or loss of profits, revenue, data, or use.
      </p>

      <h2>8. Termination</h2>
      <p>
        Either party may terminate an engagement with written notice as defined in the governing SOW or agreement. Upon termination,
        you will pay for services rendered through the termination date.
      </p>

      <h2>9. Governing Law</h2>
      <p>These terms are governed by the laws of Pakistan, without regard to conflict of law principles.</p>

      <h2>10. Changes</h2>
      <p>We may update these Terms from time to time. Material changes will be posted on this page with an updated date.</p>

      <h2>11. Contact</h2>
      <p>
        For questions about these Terms, contact us at <a href="mailto:apexbyte63@gmail.com">apexbyte63@gmail.com</a>.
      </p>
    </main>
  );
}
