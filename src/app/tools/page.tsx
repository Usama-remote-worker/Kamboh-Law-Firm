import Container from '@/components/common/Container';
import Link from 'next/link';
import { 
  Calculator, 
  Coins, 
  ShieldCheck, 
  FileText, 
  TrendingUp, 
  Building2,
  ArrowRight,
  Star
} from 'lucide-react';
import { TOOLS } from '@/lib/constants';

const ICON_MAP: Record<string, any> = {
  Calculator, Coins, ShieldCheck, FileText, TrendingUp, Building2,
};

const TOOLS_EXTENDED = [
  {
    id: 'salary-calculator',
    title: 'Salary Tax Calculator',
    description: 'Calculate your monthly & annual income tax with FBR 2025-26 official slabs.',
    icon: 'Calculator',
    path: '/tools/salary-calculator',
    badge: 'Most Used',
    live: true,
  },
  {
    id: 'gst-calculator',
    title: 'GST / Sales Tax Calculator',
    description: 'Add or extract GST at 17% standard or any custom rate instantly.',
    icon: 'Coins',
    path: '/tools/gst-calculator',
    badge: null,
    live: true,
  },
  {
    id: 'ntn-checker',
    title: 'NTN Status Checker',
    description: 'Verify your NTN registration status with FBR records.',
    icon: 'ShieldCheck',
    path: '/tools/ntn-checker',
    badge: 'Popular',
    live: true,
  },
  {
    id: 'withholding-calculator',
    title: 'Withholding Tax Calculator',
    description: 'Calculate withholding tax on contracts, payments, and imports.',
    icon: 'FileText',
    path: '/tools/withholding-calculator',
    badge: 'Updated',
    live: true,
  },
  {
    id: 'investment-calculator',
    title: 'Investment Return Calculator',
    description: 'Calculate ROI and projections for your business investments.',
    icon: 'TrendingUp',
    path: '/tools/investment-calculator',
    badge: 'Popular',
    live: true,
  },
  {
    id: 'company-fee-estimator',
    title: 'Company Registration Fee Estimator',
    description: 'Estimate SECP fees for Pvt Ltd, AOP, and Sole Prop registrations.',
    icon: 'Building2',
    path: '/tools/company-fee-estimator',
    badge: 'New',
    live: true,
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold rounded-full filter blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green rounded-full filter blur-[120px]" />
        </div>
        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="text-gold font-black uppercase tracking-[0.4em] text-sm mb-6 block">Free Tools</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Tax <span className="text-green">Intelligence</span> Hub
            </h1>
            <p className="text-xl text-gray-400 font-medium">
              Professional-grade tax calculation tools — all free, all accurate, updated with FBR 2025-26 regulations.
            </p>
          </div>
        </Container>
      </section>

      {/* Tools Grid */}
      <section className="py-24 md:py-36 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOOLS_EXTENDED.map((tool) => {
              const Icon = ICON_MAP[tool.icon] || Calculator;
              return (
                <div
                  key={tool.id}
                  className={`group relative rounded-[2.5rem] p-10 border transition-all duration-500 flex flex-col ${
                    tool.live
                      ? 'border-border hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/5 bg-white'
                      : 'border-border bg-muted/10 opacity-70'
                  }`}
                >
                  {/* Badge */}
                  {tool.badge && (
                    <span className={`absolute top-8 right-8 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                      tool.badge === 'Most Used' ? 'bg-gold text-primary' :
                      tool.badge === 'Popular' ? 'bg-primary text-white' :
                      tool.badge === 'New' ? 'bg-gold-dark text-white' :
                      'bg-primary text-white'
                    }`}>
                      {tool.badge}
                    </span>
                  )}

                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                    <Icon className="w-7 h-7 text-gold-dark" />
                  </div>
                  <h3 className="text-2xl font-black text-primary mb-4">{tool.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed flex-1">{tool.description}</p>

                  <div className="mt-8">
                    {tool.live ? (
                      <Link
                        href={tool.path}
                        className="flex items-center gap-2 text-gold-dark font-black text-sm uppercase tracking-widest group-hover:text-primary transition-colors"
                      >
                        Open Tool <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="flex items-center gap-2 text-gray-400 font-black text-sm uppercase tracking-widest hover:text-gold transition-colors"
                      >
                        Request Early Access <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Need Personalised Advice?</h2>
            <p className="text-xl text-gray-600 font-medium mb-10">
              Our chartered accountants are available for 1-on-1 consultations at our Lahore office.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-gold hover:text-primary transition-all duration-300"
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
