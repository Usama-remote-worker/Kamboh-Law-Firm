import Container from '@/components/common/Container';

export default function Disclaimer() {
  return (
    <section className="py-24 bg-white text-primary">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-10">Regulatory <span className="text-gold">Disclaimer</span></h1>
          <div className="prose prose-lg prose-gold max-w-none space-y-8 font-medium text-gray-700">
            <p>The information and tools provided on this website are for educational and estimation purposes only and do not constitute legal or professional tax advice.</p>
            <h2 className="text-2xl font-black text-primary">No Client Relationship</h2>
            <p>Use of this website or its tools does not create an attorney-client or advisor-client relationship between you and Kamboh Associates. Such a relationship is only established upon signing a formal engagement letter.</p>
            <h2 className="text-2xl font-black text-primary">FBR Compliance</h2>
            <p>While we strive for 100% accuracy based on 2025-26 FBR slabs and SECP regulations, regulatory authorities may change laws without notice. Always verify final figures with a qualified professional.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
