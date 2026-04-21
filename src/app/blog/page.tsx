'use client';

import Container from '@/components/common/Container';
import Link from 'next/link';
import { 
  BookOpen, 
  TrendingUp, 
  ShieldCheck, 
  Building2, 
  Search, 
  Laptop, 
  Layers,
  ArrowRight,
  ChevronRight,
  Clock,
  Calendar,
  Briefcase,
  CheckCircle2,
  FileText,
  Calculator,
  Download
} from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    title: '2026 Income Tax Guide: Everything You Need to Know',
    category: 'Tax Advisory',
    date: 'April 2026',
    excerpt: 'Complete guide to filing taxes in Pakistan for 2026. Learn about new tax brackets, deductions, and compliance requirements.',
    icon: BookOpen,
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'How to Maximize Tax Deductions for Your Business',
    category: 'Corporate Strategy',
    date: 'April 2026',
    excerpt: 'Discover legitimate tax deductions that can save your business thousands. From office expenses to vehicle deductions.',
    icon: TrendingUp,
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Understanding GST: A Beginner\'s Guide',
    category: 'Compliance',
    date: 'April 2026',
    excerpt: 'New to GST? Learn what it is, how it works, and how to calculate your GST liability correctly.',
    icon: Layers,
    readTime: '7 min read',
  },
  {
    id: 4,
    title: 'Registering Your Business: SECP vs NADRA vs FBR',
    category: 'Business Formation',
    date: 'April 2026',
    excerpt: 'Confused about different registrations? We break down SECP, NADRA, and FBR requirements for your business.',
    icon: Building2,
    readTime: '10 min read',
  },
  {
    id: 5,
    title: 'FBR Tax Audit: Prepare and Survive',
    category: 'Regulatory',
    date: 'April 2026',
    excerpt: 'Tips on preparing for FBR tax audits, maintaining proper documentation, and responding to audit notices.',
    icon: Search,
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'Freelancer Tax Filing: Deductions You Can Claim',
    category: 'Freelance Economy',
    date: 'April 2026',
    excerpt: 'As a freelancer, learn what expenses you can deduct and how to properly file your income tax returns.',
    icon: Laptop,
    readTime: '7 min read',
  },
];

const RESOURCES = [
  { title: 'Tax Strategy Whitepaper', desc: 'Advanced tax planning for HNWIs.', icon: FileText },
  { title: 'Compliance Roadmap', desc: 'Annual regulatory calendar 2026.', icon: CheckCircle2 },
  { title: 'Entity Fee Estimator', desc: 'Calculate SECP and FBR setup costs.', icon: Calculator },
  { title: 'Legal Templates', desc: 'Download standard AOP & MOA drafts.', icon: Download },
];

export default function InsightsPage() {
  const featuredArticle = ARTICLES.find(a => a.featured);
  const remainingArticles = ARTICLES.filter(a => !a.featured);

  return (
    <>
      {/* Premium Hero */}
      <section className="relative bg-white text-primary py-24 md:py-36 overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.1]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold rounded-full filter blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-dark rounded-full filter blur-[120px]" />
        </div>
        <Container>
          <div className="relative z-10 max-w-4xl">
            <span className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Intelligence Hub</span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight text-primary">
              Strategic <span className="text-gold-dark">Insights</span> & Compliance
            </h1>
            <p className="text-xl text-gray-500 font-medium max-w-2xl">
              Professional-grade intelligence for the elite. Stay ahead of FBR regulations with curated advisory from Pakistan's leading consultants.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Insight */}
      {featuredArticle && (
        <section className="py-24 bg-white">
          <Container>
            <div className="relative group overflow-hidden rounded-[3rem] border border-border bg-white shadow-2xl flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8">
                  <span className="px-4 py-1.5 bg-gold/10 text-gold-dark rounded-full text-[10px] font-black uppercase tracking-widest">Featured Analysis</span>
                  <span className="text-gray-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                    <Clock className="w-3 h-3" /> {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight group-hover:text-gold transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-gray-600 font-medium mb-10 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gold transition-all self-start"
                >
                  Access Full Intelligence <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="lg:w-1/2 bg-muted relative min-h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center p-20">
                  <div className="w-full h-full border-4 border-white rounded-[2rem] shadow-2xl relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary to-gray-800">
                     <featuredArticle.icon className="w-32 h-32 text-gold/20" />
                     <div className="absolute bottom-10 left-10 text-white/50 font-black text-6xl opacity-5 tracking-tighter uppercase leading-none">
                       ANALYSIS
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Resources Ribbon */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <Container>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {RESOURCES.map((res, i) => (
               <div key={i} className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shadow-sm group-hover:bg-gold-dark group-hover:border-gold-dark transition-all">
                   <res.icon className="w-5 h-5 text-gold group-hover:text-white" />
                 </div>
                 <div>
                   <h4 className="text-xs font-black text-primary uppercase tracking-widest leading-none mb-1">{res.title}</h4>
                   <p className="text-[10px] font-bold text-gray-400">{res.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="py-24 md:py-36 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-2xl">
               <h2 className="text-4xl md:text-6xl font-black text-primary mb-6">Latest <span className="text-gold">Intelligence</span></h2>
               <p className="text-lg text-gray-500 font-medium">Decoding complex FBR regulations into actionable business strategies.</p>
             </div>
             <div className="flex gap-4">
               {['All', 'Tax', 'Corporate', 'Compliance'].map(filter => (
                 <button key={filter} className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${filter === 'All' ? 'bg-primary text-white shadow-xl' : 'bg-white border border-border text-gray-400 hover:border-gold'}`}>
                   {filter}
                 </button>
               ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {remainingArticles.map((article) => (
              <article key={article.id} className="group bg-white rounded-[2.5rem] p-10 border border-border hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-muted group-hover:bg-gold/10 flex items-center justify-center transition-colors">
                    <article.icon className="w-7 h-7 text-gold-dark transition-colors" />
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{article.category}</span>
                </div>
                
                <h3 className="text-2xl font-black text-primary mb-4 flex-1 group-hover:text-gold transition-colors">{article.title}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8 line-clamp-3">{article.excerpt}</p>
                
                <div className="pt-8 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </div>
                  <Link href="/contact" className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter - Premium Version */}
      <section className="py-24 bg-white relative overflow-hidden">
        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-white border-2 border-primary rounded-[4rem] p-12 md:p-24 shadow-2xl">
            <div>
               <Briefcase className="w-12 h-12 text-gold mb-8" />
               <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 leading-tight">Secure Your <span className="text-gold-dark">Corporate</span> Edge</h2>
               <p className="text-xl text-gray-600 font-medium">Join 5,000+ business leaders receiving our monthly compliance digest.</p>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Official Email Address"
                  className="w-full bg-muted border-2 border-border rounded-2xl px-8 py-6 text-primary text-lg font-bold focus:outline-none focus:border-gold transition-all"
                />
              </div>
              <button className="w-full bg-primary text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.3em] hover:bg-gold hover:text-primary transition-all duration-500 shadow-xl shadow-primary/20">
                Subscribe to Intelligence
              </button>
              <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-gold" /> End-to-End Data Encryption Active
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white border-t border-border">
        <Container>
           <div className="text-center">
             <h2 className="text-4xl font-black text-primary mb-8">Ready for a Strategic Review?</h2>
             <Link
               href="/contact"
               className="inline-flex items-center gap-3 bg-gold text-primary px-12 py-6 rounded-2xl font-black text-lg hover:bg-primary hover:text-white transition-all shadow-xl shadow-gold/20"
             >
               Book Consultation <ArrowRight className="w-5 h-5" />
             </Link>
           </div>
        </Container>
      </section>
    </>
  );
}
