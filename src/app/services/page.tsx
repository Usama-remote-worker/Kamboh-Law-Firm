import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import Link from 'next/link';
import { SERVICES, SERVICE_CATEGORIES } from '@/lib/constants';
import * as Icons from 'lucide-react';
import { CheckCircle2, ArrowRight, ShieldCheck, Building2, Clock, Award } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white text-primary py-24 md:py-36 overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold rounded-full filter blur-[150px]" />
        </div>
        <Container>
          <div className="relative z-10 max-w-3xl">
            <span className="text-gold-dark font-black uppercase tracking-[0.3em] text-xs mb-4 block">Complete Advisory Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-primary">
              Tax & Business <br /><span className="text-gold-dark">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium">
              FBR-compliant solutions for individuals, SMEs & corporations — all under one roof in Lahore.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Section by Category */}
      {SERVICE_CATEGORIES.map((category) => {
        const catServices = SERVICES.filter(s => s.category === category);
        if (!catServices.length) return null;
        return (
          <section key={category} className="py-20 md:py-28 bg-white odd:bg-muted/10">
            <Container>
              {/* Category Header */}
              <div className="mb-16">
                <span className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-3 block">{category}</span>
                <div className="flex items-center gap-6">
                  <div className="w-1 h-12 bg-gold"></div>
                  <h2 className="text-3xl md:text-5xl font-black text-primary">{category} Services</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {catServices.map((service) => {
                  const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
                  return (
                    <div
                      key={service.id}
                      className={`relative rounded-[2.5rem] p-10 border-2 flex flex-col transition-all duration-500 ${
                        service.popular
                          ? 'bg-white border-gold shadow-[0_20px_60px_rgba(212,175,55,0.15)]'
                          : 'bg-white border-border hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5'
                      }`}
                    >
                      {service.popular && (
                        <span className="absolute top-8 right-8 px-4 py-1.5 bg-gold text-primary text-xs font-black uppercase tracking-widest rounded-full">
                          Most Popular
                        </span>
                      )}

                      <IconComponent className={`w-12 h-12 mb-8 ${service.popular ? 'text-gold' : 'text-gold-dark'}`} />

                      <h3 className={`text-2xl font-black mb-4 text-primary`}>
                        {service.name}
                      </h3>
                      <p className={`font-medium mb-8 leading-relaxed flex-1 text-gray-600`}>
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-10">
                        {service.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                            <span className={`text-sm font-semibold text-gray-600`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link href="/contact">
                        <Button
                          className={`w-full py-4 font-black rounded-2xl transition-all duration-300 ${
                            service.popular
                              ? 'bg-gold text-primary hover:bg-primary hover:text-white'
                              : 'bg-primary text-white hover:bg-gold hover:text-primary'
                          }`}
                        >
                          Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
        );
      })}

      {/* Why Kamboh */}
      <section className="py-24 md:py-36 bg-white">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-6">Why Kamboh Associates?</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Award, title: 'FBR Certified', desc: 'Active, high-priority integrations with FBR & SECP for direct submission.' },
              { icon: ShieldCheck, title: 'Data Sovereignty', desc: 'Bank-grade AES-256 encryption. Your financial data stays private.' },
              { icon: Clock, title: '24-48 Hour SLA', desc: 'Automated workflows deliver results in under 48 hours after document receipt.' },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold/10 transition-colors">
                  <item.icon className="w-10 h-10 text-gold-dark" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-4">{item.title}</h3>
                <p className="text-lg text-gray-600 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-36 bg-white border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-black text-primary mb-10 leading-tight">Strategic <span className="text-gold-dark">Engagement</span></h2>
            <p className="text-xl text-gray-500 mb-12 font-medium">Discuss your regulatory requirements with Pakistan&apos;s trusted advisory.</p>
            <Link href="/contact">
              <Button className="bg-primary text-white hover:bg-gold hover:text-primary px-12 py-6 rounded-2xl text-xl font-black transition-all duration-300 shadow-xl shadow-primary/10">
                Initiate Consultation
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
