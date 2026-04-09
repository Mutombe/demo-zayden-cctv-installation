import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowDown, Phone, WhatsappLogo, Star, Quotes, CaretLeft, CaretRight,
  ShieldCheck, Eye, Lock, Lightbulb, Buildings, Rocket, CheckCircle, Target,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';

const iconMap = { ShieldCheck, Eye, Lock, Lightbulb, Buildings, Rocket, Star, Target, CheckCircle };

function AnimatedCounter({ target, suffix = '', duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const num = parseInt(String(target).replace(/[^0-9]/g, ''), 10) || 0;
  useEffect(() => {
    if (!inView) return; let s = 0; const inc = num / (duration * 60);
    const t = setInterval(() => { s += inc; if (s >= num) { setCount(num); clearInterval(t); } else setCount(Math.floor(s)); }, 1000/60);
    return () => clearInterval(t);
  }, [inView, num, duration]);
  return <span ref={ref}>{inView ? count.toLocaleString() : '0'}{suffix}</span>;
}

function NoiseTexture({ opacity = 0.035 }) {
  return <div className="absolute inset-0 pointer-events-none z-10" style={{ opacity, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />;
}

/* ================================================================
   1. HERO — Split layout: text left, image right, amber accent
   ================================================================ */
function HeroSection() {
  const { business, hero } = siteData;
  const containerRef = useRef(null);
  const heroImages = hero.backgroundImages.map(img => img.url);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-zinc-950">
      <NoiseTexture opacity={0.03} />
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          <motion.div style={{ y: textY, opacity }}>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.3 }}
              className="w-16 h-[2px] bg-gradient-to-r from-amber-500 to-amber-400/50 mb-6 origin-left" />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-8" style={{ fontFamily: 'var(--font-sans)' }}>{hero.badge}</motion.p>

            <div className="overflow-hidden">
              {(hero.titleParts || []).map((part, i) => (
                <motion.div key={i} initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}>
                  <h1 className={`font-heading leading-[0.92] tracking-tight ${part.highlight ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent' : 'text-white'}`}
                    style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', fontWeight: part.highlight ? 700 : 300 }}>{part.text}</h1>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="flex items-center gap-3 mt-8">
              <div className="w-8 h-[1px] bg-amber-500/40" />
              <p className="text-white/30 text-xs sm:text-sm uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-sans)' }}>
                {business.projectsCompleted} Protected &middot; {business.yearsExperience} Years &middot; {business.city}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.1 }}
              className="flex items-center gap-3 mt-6 border border-amber-500/20 bg-amber-500/5 px-4 py-2 w-fit">
              <ShieldCheck size={20} weight="fill" className="text-amber-500" />
              <span className="text-amber-400/80 text-xs uppercase tracking-[0.15em] font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>ISO 18788 Certified</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.3 }} className="flex flex-wrap gap-4 mt-10">
              <Link to="/contact" className="group inline-flex items-center gap-3 bg-amber-500 text-zinc-950 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
                {hero.ctaPrimary} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="group inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:border-amber-500/50 hover:text-amber-400 transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
                {hero.ctaSecondary}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.4 }} className="relative hidden lg:block">
            <div className="relative">
              <img src={heroImages[0]} alt={hero.backgroundImages[0]?.alt} className="w-full aspect-[3/4] object-cover object-center" loading="eager" />
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-amber-500/20 -z-10" />
              <div className="absolute bottom-6 left-6 bg-zinc-950/90 border border-amber-500/20 px-5 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="relative"><div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                    <motion.div animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full" /></div>
                  <span className="text-white/60 text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-sans)' }}>All Systems Online</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-white/20 text-[10px] uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--font-sans)' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowDown size={14} className="text-amber-500/40" /></motion.div>
      </motion.div>
    </section>
  );
}

/* 2. TRUST STRIP — Client counter */
function TrustStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <section ref={ref} className="bg-zinc-900 border-y border-amber-500/10 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.1 }} className="text-center">
              <div className="font-heading text-amber-500 leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                <AnimatedCounter target={String(stat.number).replace(/[^0-9]/g, '')} suffix={String(stat.number).replace(/[0-9]/g, '')} />
              </div>
              <div className="text-white/30 text-xs uppercase tracking-[0.25em] mt-3" style={{ fontFamily: 'var(--font-sans)' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 3. SECURITY TIER COMPARISON */
function SecurityTiers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const tiers = [
    { name: 'Essential', desc: 'Basic CCTV and alarm for homes and small offices.', features: ['4x HD Cameras', 'Motion Alerts', 'Mobile App', '1-Year Warranty'], highlight: false },
    { name: 'Professional', desc: 'Complete security with access control and monitoring.', features: ['8x HD Cameras', 'Access Control', '24/7 Monitoring', 'Electric Fencing', 'Gate Automation'], highlight: true },
    { name: 'Enterprise', desc: 'Full-scale security for large properties.', features: ['16+ HD Cameras', 'Biometric Access', 'Command Centre', 'Fire Detection', 'Panic Systems', 'Dedicated Engineer'], highlight: false },
  ];
  return (
    <section ref={ref} className="bg-zinc-950 py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14 sm:mb-20">
          <div className="w-12 h-[2px] bg-amber-500 mx-auto mb-6" />
          <h2 className="font-heading text-white leading-[0.92]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>Security <span className="text-amber-500">Packages</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {tiers.map((tier, i) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`relative p-8 border ${tier.highlight ? 'border-amber-500/40 bg-amber-500/5' : 'border-white/5 bg-zinc-900/50'}`}>
              {tier.highlight && <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-500" />}
              {tier.highlight && <div className="absolute -top-3 right-6"><span className="bg-amber-500 text-zinc-950 text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-bold" style={{ fontFamily: 'var(--font-sans)' }}>Popular</span></div>}
              <h3 className="font-heading text-white text-xl sm:text-2xl mb-3">{tier.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>{tier.desc}</p>
              <div className="space-y-3 mb-8">
                {tier.features.map(f => (<div key={f} className="flex items-center gap-3"><CheckCircle size={16} weight="fill" className={tier.highlight ? 'text-amber-500' : 'text-white/20'} /><span className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{f}</span></div>))}
              </div>
              <Link to="/contact" className={`group inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.15em] font-semibold transition-all ${tier.highlight ? 'bg-amber-500 text-zinc-950 hover:bg-amber-400' : 'border border-white/10 text-white hover:border-amber-500/40 hover:text-amber-400'}`} style={{ fontFamily: 'var(--font-sans)' }}>
                Get Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 4. SERVICES */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview, services } = siteData;
  const imgs = ['https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80','https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80','https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80','https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80','https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80','https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'];
  return (
    <section ref={ref} className="bg-zinc-900 py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-14 sm:mb-20">
          <div className="w-12 h-[2px] bg-amber-500 mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div><p className="text-amber-500/60 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Our Expertise</p>
              <h2 className="font-heading text-white leading-[0.92]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>Security <span className="text-amber-500">Solutions</span></h2></div>
            <Link to="/services" className="group text-white/30 text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:text-amber-500 transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>All Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></Link>
          </div>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {servicesPreview.map((service, i) => {
            const Icon = iconMap[service.icon] || ShieldCheck;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.08*i }} className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}>
                <Link to={`/services#${services?.items?.[i]?.slug || ''}`} className={`group relative block overflow-hidden ${i === 0 ? 'aspect-[16/9] sm:aspect-[2/1]' : 'aspect-[3/4]'}`}>
                  <img src={imgs[i]} alt={service.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/20 opacity-90" />
                  <div className="absolute top-4 right-5 z-10"><span className="text-amber-500/15 font-heading text-6xl sm:text-7xl leading-none">{String(i+1).padStart(2,'0')}</span></div>
                  <div className="absolute top-5 left-5 z-10 w-10 h-10 bg-amber-500 flex items-center justify-center group-hover:bg-amber-400 transition-colors"><Icon size={18} weight="fill" className="text-zinc-950" /></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                    <h3 className="font-heading text-white text-xl sm:text-2xl tracking-wide mb-2">{service.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{service.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-amber-500 group-hover:translate-x-1 transition-transform"><span className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-sans)' }}>Explore</span><ArrowRight size={14} /></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 to-amber-400 z-10" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 5. PORTFOLIO */
function PortfolioGallery() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-80px' });
  const { projects } = siteData;
  return (
    <section ref={containerRef} className="bg-zinc-950 py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div><div className="w-12 h-[2px] bg-amber-500 mb-6" /><p className="text-amber-500/60 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Track Record</p>
            <h2 className="font-heading text-white leading-[0.92]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>Our <span className="text-amber-500">Portfolio</span></h2></div>
          <Link to="/projects" className="group text-white/30 text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:text-amber-500 transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></Link>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.2 }}>
        <div className="flex gap-4 sm:gap-5 overflow-x-auto px-5 sm:px-8 lg:px-12 pb-4" style={{ scrollbarWidth: 'none' }}>
          {projects.items.map(project => (
            <div key={project.slug} className="group relative flex-shrink-0 w-[300px] sm:w-[360px] lg:w-[420px] overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/40 transition-colors duration-700" />
                <div className="absolute top-5 left-5 z-10"><span className="bg-amber-500 text-zinc-950 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{project.category}</span></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent">
                <h4 className="text-white font-heading text-lg sm:text-xl tracking-wide">{project.title}</h4>
                <p className="text-white/40 text-xs mt-1 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* 6. ABOUT */
function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { business } = siteData;
  return (
    <section ref={ref} className="bg-zinc-950 py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }}>
            <div className="w-12 h-[2px] bg-amber-500 mb-6" />
            <p className="text-amber-500/60 text-xs uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>About Us</p>
            <h2 className="font-heading text-white leading-[0.95] mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              The {business.name}<br /><span className="text-amber-500">Advantage</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 max-w-lg" style={{ fontFamily: 'var(--font-sans)' }}>
              Established in {business.established}, {business.name} has built a reputation for reliable, professional security services in {business.city}. We combine cutting-edge technology with experienced personnel to deliver protection you can count on.
            </p>
            <p className="text-white/35 text-sm leading-relaxed max-w-lg" style={{ fontFamily: 'var(--font-sans)' }}>
              Our {business.employees} team of trained operatives and technicians provides round-the-clock protection, with {business.projectsCompleted} successful deployments and counting.
            </p>
            <div className="w-full h-px bg-white/5 my-8" />
            <div className="flex gap-10 sm:gap-16">
              {[{ v: business.established, l: 'Founded' }, { v: business.projectsCompleted, l: 'Secured' }, { v: '24/7', l: 'Operations' }].map(s => (
                <div key={s.l}><div className="text-amber-500 font-heading text-3xl sm:text-4xl leading-none">{s.v}</div><div className="text-white/30 text-[10px] uppercase tracking-[0.2em] mt-2" style={{ fontFamily: 'var(--font-sans)' }}>{s.l}</div></div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
            <div className="overflow-hidden"><img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80" alt="Security" className="w-full aspect-[4/5] object-cover object-center" loading="lazy" /></div>
            <div className="absolute -bottom-8 -left-6 w-[45%] overflow-hidden border-4 border-zinc-950 shadow-2xl"><img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80" alt="Systems" className="w-full aspect-square object-cover object-center" loading="lazy" /></div>
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-amber-500 text-zinc-950 p-5 sm:p-7 shadow-2xl"><div className="text-center"><div className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-sans)' }}>Est.</div><div className="font-heading text-3xl sm:text-4xl leading-none mt-1">{business.established}</div></div></div>
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-amber-500/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* 7. TESTIMONIALS */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const next = useCallback(() => setActive(p => (p+1) % homeTestimonials.length), [homeTestimonials.length]);
  const prev = useCallback(() => setActive(p => (p-1+homeTestimonials.length) % homeTestimonials.length), [homeTestimonials.length]);
  useEffect(() => { const t = setInterval(next, 7000); return () => clearInterval(t); }, [next]);
  const t = homeTestimonials[active];
  return (
    <section ref={ref} className="relative bg-zinc-900 py-24 sm:py-32 lg:py-40 overflow-hidden">
      <NoiseTexture opacity={0.02} />
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center">
          <Quotes size={48} weight="fill" className="text-amber-500/15 mx-auto mb-8" />
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
              <blockquote className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed font-heading mb-10">&ldquo;{t.text}&rdquo;</blockquote>
              <div className="flex flex-col items-center gap-3">
                {t.avatar && <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/30" loading="lazy" />}
                <div className="w-8 h-[2px] bg-amber-500" />
                <div className="text-white text-sm uppercase tracking-[0.15em] font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{t.name}</div>
                <div className="text-white/40 text-xs uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-sans)' }}>{t.role}</div>
                <div className="flex gap-0.5 mt-1">{[...Array(t.rating)].map((_, i) => <Star key={i} size={12} weight="fill" className="text-amber-500" />)}</div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-6 mt-12">
            <button onClick={prev} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-amber-500 transition-colors" aria-label="Previous"><CaretLeft size={16} /></button>
            <div className="flex gap-2">{homeTestimonials.map((_, i) => (<button key={i} onClick={() => setActive(i)} className={`h-[2px] transition-all duration-500 ${i === active ? 'w-10 bg-amber-500' : 'w-3 bg-white/10'}`} aria-label={`Testimonial ${i+1}`} />))}</div>
            <button onClick={next} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-amber-500 transition-colors" aria-label="Next"><CaretRight size={16} /></button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* 8. CTA */
function CTASection() {
  const { business } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section ref={ref} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=80" alt="Security" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
      <div className="absolute inset-0 bg-zinc-950/70" />
      <NoiseTexture opacity={0.03} />
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }}>
          <div className="w-12 h-[2px] bg-amber-500 mx-auto mb-6" />
          <h2 className="font-heading text-white leading-[0.95] mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Ready for <span className="text-amber-500">Real Security?</span></h2>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10" style={{ fontFamily: 'var(--font-sans)' }}>
            Let {business.name} protect what matters most. Get a free security audit and tailored protection plan today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-amber-500 text-zinc-950 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-amber-400 transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
              Free Security Audit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:border-green-500/50 hover:text-green-400 transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
              <WhatsappLogo size={18} /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <TrustStrip />
      <SecurityTiers />
      <ServicesGrid />
      <PortfolioGallery />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}
