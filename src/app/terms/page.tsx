import Container from '@/components/common/Container';

export default function TermsOfService() {
  return (
    <section className="py-24 bg-white text-primary">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-10">Service <span className="text-gold">Mandate</span></h1>
          <div className="prose prose-lg prose-gold max-w-none space-y-8 font-medium text-gray-700">
            <p>By using the Kamboh Associates platform and tools, you agree to the following terms and conditions governing our advisory relationship.</p>
            <h2 className="text-2xl font-black text-primary">Advisory Nature</h2>
            <p>The calculations provided by our free tools (Strategic Hub) are for estimation purposes only. Formal tax liability is determined upon final verification of all documents by our licensed consultants.</p>
            <h2 className="text-2xl font-black text-primary">User Responsibility</h2>
            <p>Users are responsible for the accuracy of data entered into our calculators. Kamboh Associates is not liable for errors resulting from incorrect user input.</p>
            <p>Consultations booked via this site are subject to professional service agreements provided during the engagement.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
