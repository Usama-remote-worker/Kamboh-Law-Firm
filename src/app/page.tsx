import Link from 'next/link';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { TOOLS, SERVICES } from '@/lib/constants';
import * as Icons from 'lucide-react';
import { 
  CircleCheck as CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Users, 
  ArrowRight,
  TrendingDown,
  Briefcase,
  Search,
  MessageSquare,
  FileText,
  Coins,
  TrendingUp,
  Star
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-48 md:pb-36 border-b border-border">
        {/* Subtle Background pattern or gradient */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold-dark rounded-full filter blur-[120px]"></div>
        </div>

        <Container>
          <div className="relative z-10 max-w-4xl">
            <div className="animate-fadeInUp">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-green/10 border border-green/20 rounded-full">
                <span className="text-green font-black text-xs uppercase tracking-widest">✨ Pakistan&apos;s #1 Regulatory Platform</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-primary tracking-tight">
                Tax & Business <br /> <span className="gradient-text">Excellence</span> Redefined
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 font-medium leading-relaxed max-w-2xl">
                Premium tax filing, seamless business registration, and strategic financial advisory tailored for Pakistan&apos;s elite professionals and enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/services">
                  <Button size="lg" className="bg-primary text-white hover:bg-gold transition-all duration-500 shadow-xl shadow-gold/10 px-8">
                    Our Premium Services
                  </Button>
                </Link>
                <Link href="/tools">
                  <Button size="lg" variant="outline" className="border-border hover:border-gold hover:text-gold transition-all duration-300">
                    Explore Advisory Tools
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust & Stats Section */}
      <section className="bg-primary text-white py-14 overflow-hidden">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">
            {[
              { label: 'Verified Users', value: '50K+', icon: Users, color: 'text-gold' },
              { label: 'Tax Optimized', value: '₨100Cr+', icon: TrendingDown, color: 'text-gold' },
              { label: 'Advisory Hours', value: '24/7', icon: Clock, color: 'text-gold' },
              { label: 'Data Security', value: 'AES-256', icon: ShieldCheck, color: 'text-gold' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-gold/20 transition-colors border border-white/10 group-hover:border-gold/30">
                  <stat.icon className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold group-hover:text-gold transition-colors">{stat.value}</div>
                  <div className="text-xs font-semibold text-gray-400 group-hover:text-gray-200 uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Kamboh Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <Container>
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">The Kamboh Advantage</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                We combine deep industrial expertise with modern technology to deliver performance-driven financial and regulatory solutions.
              </p>
            </div>
            <Link href="/about" className="text-gold font-bold flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-gold pb-1 mb-2">
              Learn Our Philosophy <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Lightning Fast Execution', desc: 'Precision-engineered workflows that deliver results in hours.', icon: Clock },
              { title: 'Expert Advisory', desc: 'Certified tax strategists and business legal experts at your disposal.', icon: Briefcase },
              { title: 'Transparent Pricing', desc: 'No hidden levies. Just pure value-driven professional engagement.', icon: Coins },
              { title: 'Ironclad Security', desc: 'Bank-grade encryption protecting your most sensitive credentials.', icon: ShieldCheck },
              { title: 'Elite Support', desc: 'Dedicated account managers for white-glove customer assistance.', icon: MessageSquare },
              { title: 'FBR/SECP Excellence', desc: 'Flawless compliance with all Pakistani regulatory authorities.', icon: CheckCircle2 },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white border border-border hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-muted group-hover:bg-gold-light/30 flex items-center justify-center mb-6 transition-colors duration-500">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-gold-dark transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-gold-dark transition-colors">{feature.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Advisory Tools Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Precision Advisory Tools</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Data-backed calculators and management tools designed for high-stakes financial planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOOLS.map((tool, i) => {
              const IconComponent = (Icons as any)[tool.icon] || Icons.HelpCircle;
              return (
                <Link key={tool.id} href={tool.path}>
                  <div className="h-full p-8 rounded-3xl bg-muted/20 border border-border hover:border-gold/30 group hover:bg-white hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 cursor-pointer flex flex-col">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500 border border-border/50">
                      <IconComponent className="w-8 h-8 text-gold-dark" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">{tool.title}</h3>
                    <p className="text-gray-600 font-medium mb-8 flex-grow">{tool.description}</p>
                    <div className="text-gold-dark font-bold text-base flex items-center gap-2 group-hover:gap-3 transition-all">
                      Access Tool <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Core Services Overhaul */}
      <section className="py-24 md:py-32 bg-primary text-white relative">
        <Container>
          <div className="text-center mb-20">
            <span className="text-gold font-black uppercase tracking-[0.3em] text-sm mb-4 block">Engineered for Success</span>
            <h2 className="text-4xl md:text-6xl font-black mb-4">Professional Ecosystem</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Tailored regulatory solutions for startups, freelancers, and corporations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
               const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
               return (
                <div
                  key={service.id}
                  className={`rounded-[2.5rem] p-10 transition-all duration-500 border-2 flex flex-col ${
                    service.popular
                    ? 'bg-gradient-to-br from-[#222] to-primary border-gold shadow-[0_20px_50px_rgba(212,175,55,0.15)] scale-105 z-10'
                    : 'bg-white/5 border-white/10 hover:border-gold/30'
                  }`}
                >
                  {service.popular && (
                    <div className="self-start mb-8 px-4 py-1.5 bg-gold text-primary rounded-full text-xs font-black tracking-widest uppercase">
                      Premium Choice
                    </div>
                  )}
                  <IconComponent className={`w-12 h-12 mb-6 ${service.popular ? 'text-gold' : 'text-gold/80'}`} />
                  <h3 className="text-3xl font-bold mb-4">{service.name}</h3>
                  <p className="text-lg font-medium mb-10 text-gray-400">
                    {service.description}
                  </p>
                  <div className="space-y-4 mb-12 flex-grow">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                        <span className="text-sm font-semibold text-gray-300 tracking-wide uppercase">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full py-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      service.popular 
                      ? 'bg-gold text-primary hover:bg-white' 
                      : 'bg-white text-primary hover:bg-gold'
                    }`}
                  >
                    Engagement Inquiry
                  </Button>
                </div>
               );
            })}
          </div>
        </Container>
      </section>

      {/* Speed & Trust Section */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-gold-light/30 border border-gold/30 rounded-full">
                <Clock className="w-4 h-4 text-gold-dark" />
                <span className="text-gold-dark font-bold text-xs uppercase tracking-widest">Ultra-Fast Turnaround</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">
                Efficiency that <span className="text-gold">Moves Mountains</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 font-medium leading-relaxed">
                In the world of finance, speed is currency. Our accelerated submission engine ensures your filings are processed with unprecedented velocity.
              </p>
              
              <div className="space-y-8">
                {[
                  { time: '2 Hours', label: 'Consultation Response', desc: 'Expert strategic advice delivered directly to your inbox.' },
                  { time: '24 Hours', label: 'Tax Return Ready', desc: 'Complete FBR filing preparation and validation guarantee.' },
                  { time: '48 Hours', label: 'Entity Registration', desc: 'SECP and NTN processing for immediate business operation.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="text-3xl font-black text-gold-dark/20 group-hover:text-gold transition-colors">{item.time}</div>
                    <div>
                      <h4 className="text-xl font-extrabold text-primary mb-1">{item.label}</h4>
                      <p className="text-gray-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               <div className="absolute -inset-4 bg-gold rounded-[3rem] rotate-3 opacity-10"></div>
               <div className="relative bg-muted rounded-[3rem] p-12 border border-border overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ShieldCheck className="w-48 h-48 text-gold" />
                  </div>
                  <h3 className="text-3xl font-black text-primary mb-6">Guaranteed Compliance</h3>
                  <div className="space-y-6">
                    {[
                      '99.9% FBR Acceptance Rate',
                      'Legal Indemnity on Filings',
                      'Real-time Status Tracking',
                      'Automated Deadline Alerts'
                    ].map((check, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-gold-dark" />
                        </div>
                        <span className="text-lg font-bold text-gray-700">{check}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="mt-12 inline-block">
                    <Button size="lg" className="bg-primary text-white rounded-2xl px-10">Get Started Now</Button>
                  </Link>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-muted/30">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Trusted by Pakistan&apos;s leading entrepreneurs and digital innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { author: 'Ahmed Khan', role: 'Strategic Consultant', quote: 'Kamboh Associates delivered my FBR filings with surgical precision. Unmatched professionalism.' },
              { author: 'Fatima Ali', role: 'Tech Founder', quote: 'Registering my startup was effortless. They handled the legal complexity while I focused on building.' },
              { author: 'Hassan Malik', role: 'Business Owner', quote: 'The tax planning alone saved us millions. Their advisory is worth every penny of the engagement.' },
            ].map((testimonial, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Icons.Star key={s} className="w-5 h-5 fill-gold text-gold" />)}
                </div>
                <p className="text-xl font-medium text-gray-700 mb-8 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-light/50 flex items-center justify-center font-bold text-gold-dark">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-gray-500 font-semibold">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="relative rounded-[3rem] bg-primary overflow-hidden text-center p-16 md:p-32">
            <div className="absolute top-0 right-0 p-20 opacity-10">
              <TrendingUp className="w-96 h-96 text-gold" />
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8">Secure Your <br /> <span className="text-gold">Financial Future</span></h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                Join 50,000+ satisfied clients who trust Kamboh Associates for regulatory excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/contact">
                   <Button size="lg" className="bg-gold text-primary hover:bg-white px-12 py-8 rounded-2xl text-xl font-bold">Initiate Engagement</Button>
                 </Link>
                 <Link href="/services">
                   <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-8 rounded-2xl text-xl font-bold">Our Strategies</Button>
                 </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
