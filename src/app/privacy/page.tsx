import Container from '@/components/common/Container';

export default function PrivacyPolicy() {
  return (
    <section className="py-24 bg-white text-primary">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-10">Privacy <span className="text-gold">Protocols</span></h1>
          <div className="prose prose-lg prose-gold max-w-none space-y-8 font-medium text-gray-700">
            <p>At Kamboh Associates, your financial and personal data privacy is our paramount priority. We adhere to the highest standards of confidentiality as mandated by the law and professional ethics of advisory services.</p>
            <h2 className="text-2xl font-black text-primary">Data Collection</h2>
            <p>We only collect information necessary to facilitate your tax filings and regulatory registrations. This includes but is not limited to CNIC, NTN, and financial statements provided via secure channels.</p>
            <h2 className="text-2xl font-black text-primary">Information Security</h2>
            <p>All data is processed using industry-standard encryption protocols. We do not share your private financial data with any third party except as required by law (e.g., FBR or SECP) during formal filing processes.</p>
            <p>For any queries regarding your data protection, please contact our compliance desk at info@kambohlaw.com.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
