import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import Link from 'next/link';
import { 
  FileText, 
  Building2, 
  Coins, 
  ShieldCheck, 
  MessageSquare,
  ChevronRight,
  ArrowRight,
  Search,
  Users2,
  LineChart,
  Scale
} from 'lucide-react';

export default function FAQPage() {
  const faqCategories = [
    {
      category: 'Tax Strategic Advisory',
      icon: FileText,
      faqs: [
        {
          q: 'What is the absolute deadline for income tax filing in Pakistan?',
          a: 'The official statutory deadline is September 30th annually. However, Kamboh Associates recommends document submission by August 15th to ensure peak optimization and audit defense mapping.',
        },
        {
          q: 'Does higher income mandate more complex filing protocols?',
          a: 'Yes. Beyond basic income thresholds, high-net-worth individuals and corporate entities fall under specialized FBR compliance tiers. We manage these complex trajectories with expert precision.',
        },
        {
          q: 'How does Kamboh Associates integrate with the FBR IRIS portal?',
          a: 'We utilize authorized, secure-token protocols for direct integration, allowing for expedited verification and near-instant acknowledgement of filings.',
        },
      ],
    },
    {
      category: 'Corporate Incorporation',
      icon: Building2,
      faqs: [
        {
          q: 'What are the defining benefits of a Private Limited entity?',
          a: 'Private Limited structures offer limited liability protection, enhanced corporate credibility, and a sovereign legal identity separate from shareholders. It is the gold standard for scalable enterprises.',
        },
        {
          q: 'What is the Kamboh SLA for SECP registration?',
          a: 'Our streamlined workflow ensures complete SECP incorporation, including Memorandum and Articles of Association, within 7-10 business days.',
        },
        {
          q: 'Can international entities incorporate in Pakistan through Kamboh?',
          a: 'Yes. We provide specialized "Foreign Direct Investment" advisory for international corporations seeking a regulatory foothold in Pakistan.',
        },
      ],
    },
    {
      category: 'VAT & GST Compliance',
      icon: Coins,
      faqs: [
        {
          q: 'Is GST registration mandatory for all service sectors?',
          a: 'Mandatory thresholds apply based on annual turnover. Kamboh provides a "Regulatory Audit" to determine your exact GST mandates and provincial obligations.',
        },
        {
          q: 'How does Kamboh manage recursive monthly GST filings?',
          a: 'We deploy automated reconciliation tools that sync with your financial records to ensure monthly returns are filed with zero deviation from FBR protocols.',
        },
      ],
    },
    {
      category: 'Institutional Security',
      icon: ShieldCheck,
      faqs: [
        {
          q: 'How is client data sovereignity maintained?',
          a: 'Kamboh Associates employs AES-256 bank-grade encryption for all digital documentation. Physical records are housed in a high-security vault with restricted biometric access.',
        },
        {
          q: 'Is Kamboh Associates an officially registered firm?',
          a: 'Yes. Kamboh Associates is an authorized regulatory advisory firm with active credentials from FBR, SECP, and relevant provincial tax boards.',
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold rounded-full filter blur-[150px]"></div>
        </div>
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
             <span className="text-gold font-black uppercase tracking-[0.4em] text-sm mb-6 block">Knowledge Base</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-tight tracking-tight">
              Regulatory <span className="gradient-text">Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
              Transparent answers to complex tax, legal, and corporate mandates in Pakistan.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 md:py-36 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-24">
            {faqCategories.map((section, sIdx) => (
              <div key={sIdx} className="space-y-12">
                <div className="flex items-center gap-6 border-b border-gold/20 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
                    <section.icon className="w-8 h-8 text-gold-dark" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-primary">{section.category}</h2>
                </div>

                <div className="space-y-6">
                  {section.faqs.map((faq, fIdx) => (
                    <details
                      key={fIdx}
                      className="group p-8 rounded-[2rem] bg-muted/20 border border-transparent hover:border-gold/20 hover:bg-white hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 cursor-pointer"
                    >
                      <summary className="flex items-center justify-between font-extrabold text-xl text-primary cursor-pointer list-none">
                        <span>{faq.q}</span>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-border group-open:bg-gold group-open:border-gold group-open:text-primary transition-all">
                           <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                        </div>
                      </summary>
                      <div className="mt-8 pt-8 border-t border-gold/10">
                        <p className="text-lg text-gray-600 font-medium leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 md:py-48 bg-primary">
        <Container>
          <div className="bg-white/5 border border-white/10 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 opacity-5">
               <MessageSquare className="w-[40rem] h-[40rem] text-gold" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Unresolved <span className="text-gold">Mandates</span>?</h2>
              <p className="text-xl text-gray-400 mb-12 font-medium">
                Our senior legal consultants are available for direct discovery calls to address your specific entity requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gold text-primary hover:bg-white px-12 py-8 rounded-2xl text-xl font-black shadow-2xl shadow-gold/20">
                    Consult an Expert <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-8 rounded-2xl text-xl font-bold">
                    View Advisory Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

