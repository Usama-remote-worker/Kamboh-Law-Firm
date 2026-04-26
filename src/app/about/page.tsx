import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import Link from 'next/link';
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  ShieldCheck, 
  Target, 
  Lightbulb, 
  Heart,
  Briefcase,
  Clock,
  Coins,
  Smartphone,
  CheckCircle2,
  Lock,
  Building2,
  FileCheck2,
  Globe
} from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white text-primary py-24 md:py-40 overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <span className="text-gold-dark font-black uppercase tracking-[0.4em] text-sm mb-6 block">Our Heritage & Vision</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight text-primary">
              Kamboh <span className="text-gold-dark">Associates</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-500 font-medium leading-relaxed">
              Pakistan&apos;s premier advisory for regulatory excellence and financial strategic growth.
            </p>
          </div>
        </Container>
      </section>

      {/* Narrative Section */}
      <section className="py-24 md:py-36 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-10 leading-tight">Defining Professional <br /><span className="text-gold">Standards</span> since 2008</h2>
              <p className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
                Kamboh Associates is not just a filing platform; we are a strategic partner to Pakistan&apos;s most ambitious entrepreneurs and established corporations. Our team comprises industry-leading tax strategists, legal consultants, and financial advisors.
              </p>
              <p className="text-xl text-gray-600 mb-12 font-medium leading-relaxed">
                We have successfully processed over ₨100 Crore in cumulative filings, maintaining a near-perfect compliance record with the Federal Board of Revenue (FBR) and SECP.
              </p>
              <div className="flex gap-6">
                 <div className="w-16 h-1 bg-gold"></div>
                 <div className="italic text-gray-500 font-medium">"Excellence is not an act, but a habit that we practice in every filing."</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Private Clients', val: '50K+', icon: Users, delay: '0.1s' },
                { label: 'Tax Optimized', val: '₨100Cr+', icon: TrendingUp, delay: '0.2s' },
                { label: 'Market Tenure', val: '15+ Yrs', icon: Calendar, delay: '0.3s' },
                { label: 'Success Ratio', val: '99.9%', icon: ShieldCheck, delay: '0.4s' },
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-muted/30 border border-border group hover:border-gold/30 transition-all duration-500">
                  <item.icon className="w-10 h-10 text-gold mb-6" />
                  <div className="text-4xl font-black text-primary mb-2 group-hover:text-gold-dark transition-colors">{item.val}</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 md:py-36 bg-white border-y border-border">
        <Container>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-6">Our Strategic Pillars</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[3rem] bg-muted/30 border border-border hover:border-gold transition-all duration-500">
              <Target className="w-16 h-16 text-gold mb-8" />
              <h3 className="text-4xl font-black text-primary mb-6">The Mission</h3>
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                To institutionalize financial literacy and regulatory ease across Pakistan, ensuring every corporate and individual entity achieves peak compliance with minimal friction.
              </p>
            </div>
            <div className="p-12 rounded-[3rem] bg-muted/30 border border-border hover:border-gold transition-all duration-500">
              <Lightbulb className="w-16 h-16 text-gold mb-8" />
              <h3 className="text-4xl font-black text-primary mb-6">The Vision</h3>
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                To become the undisputed sovereign entity for digital regulatory advisory in Pakistan, setting world-class benchmarks for transparency and technological integration.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-36 bg-muted/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Foundational Values</h2>
            <p className="text-xl text-gray-600 font-medium">The non-negotiable principles that govern the Kamboh ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: 'Uncompromising Integrity', desc: 'Absolute transparency in every transaction and strategic advice.' },
              { icon: Lightbulb, title: 'Technological Agility', desc: 'Continuous innovation in proprietary advisory tools and workflows.' },
              { icon: Heart, title: 'Client Centricity', desc: 'Deep alignment with client goals to ensure sustained financial growth.' },
            ].map((value, i) => (
              <div
                key={i}
                className="text-center p-12 rounded-[3rem] bg-white border border-border shadow-sm hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
                  <value.icon className="w-10 h-10 text-gold-dark" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-4">{value.title}</h3>
                <p className="text-lg text-gray-600 font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Government Integration & Compliance */}
      <section className="py-24 md:py-36 bg-white overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1">
              <span className="text-gold font-black uppercase tracking-widest text-xs mb-4 block">Official Sovereignty</span>
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">Regulatory <br /> <span className="text-gold">Sovereignty</span></h2>
              <p className="text-xl text-gray-600 mb-12 font-medium">Kamboh Associates maintains active, high-priority integrations with all primary Pakistani regulatory bodies.</p>
              
              <div className="space-y-6">
                {[
                  { name: 'FBR Integration', desc: 'Direct secure-token access for expedited tax submissions.' },
                  { name: 'SECP Compliance', desc: 'Certified digital consultant for tiered company formation.' },
                  { name: 'PRRA Registered', desc: 'Strict adherence to provincial regulatory protocols.' },
                  { name: 'Data Sovereignty', desc: 'Bank-grade AES-256 encryption protocol for all client data.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-gold-dark" />
                    </div>
                    <span className="text-lg font-bold text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              <div className="absolute -inset-10 bg-gold rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>
              {[
                { name: 'FBR', icon: Building2, desc: 'Direct Tax Pipeline' },
                { name: 'SECP', icon: FileCheck2, desc: 'Corporate Consultant' },
                { name: 'GST', icon: Coins, desc: 'Sales Tax Authority' },
                { name: 'GLOBAL', icon: Globe, desc: 'International Protocol' },
              ].map((reg, i) => (
                <div key={i} className="relative p-10 rounded-[2.5rem] bg-muted/40 border border-border group hover:bg-white transition-all duration-500">
                  <reg.icon className="w-12 h-12 text-gold-dark mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-2xl font-black text-primary mb-2 tracking-widest">{reg.name}</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase">{reg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <Container>
          <div className="bg-white border-4 border-primary rounded-[3.5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 p-10 opacity-[0.03]">
               <ShieldCheck className="w-[40rem] h-[40rem] text-gold" />
             </div>
             <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-black text-primary mb-8 tracking-tight">Institutional Excellence <br /> <span className="text-gold-dark">Begins Here</span></h2>
                <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">Secure your entity&apos;s financial future with the most trusted advisory in Pakistan.</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-primary text-white hover:bg-gold hover:text-primary px-12 py-8 rounded-2xl text-xl font-bold">Consult an Expert</Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-muted px-12 py-8 rounded-2xl text-xl font-bold">Our Strategies</Button>
                  </Link>
                </div>
             </div>
          </div>
        </Container>
      </section>
    </>
  );
}

