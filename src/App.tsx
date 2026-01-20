import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, MapPin, Ruler, Scissors, Compass } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-serif font-bold tracking-tighter text-white"
        >
          IRON <span className="text-amber-500">&</span> INDIGO
        </motion.div>
        
        <div className="hidden md:flex space-x-12 text-sm uppercase tracking-[0.3em] text-white/80">
          <a href="#bespoke" className="hover:text-amber-500 transition-colors">The Service</a>
          <a href="#heritage" className="hover:text-amber-500 transition-colors">Our Heritage</a>
          <a href="#atelier" className="hover:text-amber-500 transition-colors">Atelier</a>
          <a href="#contact" className="hover:text-amber-500 transition-colors underline underline-offset-8 decoration-amber-500/50">Consultation</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black text-white p-8 flex flex-col space-y-6 text-center border-t border-white/10"
          >
            <a href="#bespoke" onClick={() => setIsOpen(false)}>The Service</a>
            <a href="#heritage" onClick={() => setIsOpen(false)}>Our Heritage</a>
            <a href="#atelier" onClick={() => setIsOpen(false)}>Atelier</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Consultation</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen bg-neutral-900 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale opacity-60"
          alt="Raw concrete texture and architecture"
        />
      </div>
      
      <div className="relative z-20 text-center px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-amber-500 font-serif italic text-xl mb-6"
        >
          Architects of the New South
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-9xl font-serif font-black text-white tracking-tighter leading-none"
        >
          IRON & INDIGO
        </motion.h1>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-px bg-amber-500 w-32 mx-auto my-12"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto text-white/60 text-lg uppercase tracking-[0.4em] font-light"
        >
          Untamed spirit meets architectural precision.
        </motion.p>
      </div>

      <div className="absolute bottom-10 left-10 hidden md:block border-l border-amber-500/40 pl-4 py-2">
        <p className="text-white/40 text-xs tracking-widest uppercase">Coordinates</p>
        <p className="text-white text-sm tracking-tighter">30.2672° N, 97.7431° W</p>
      </div>
    </section>
  );
};

const SectionHeading = ({ subtitle, title }: { subtitle: string, title: string }) => (
  <div className="mb-16">
    <p className="text-amber-600 font-serif italic mb-2">{subtitle}</p>
    <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter text-neutral-900 border-l-4 border-amber-500 pl-6">
      {title}
    </h2>
  </div>
);

const ServiceCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-neutral-100 p-10 border border-neutral-200 group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
      <Icon size={120} className="text-amber-500" strokeWidth={0.5} />
    </div>
    <Icon className="text-amber-500 mb-8" size={32} />
    <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">{title}</h3>
    <p className="text-neutral-600 leading-relaxed font-light">{desc}</p>
    <div className="mt-8 flex items-center text-xs font-bold tracking-[0.2em] text-neutral-900 uppercase">
      Learn More <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
  </motion.div>
);

const App: React.FC = () => {
  return (
    <div className="bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Narrative Section */}
        <section className="py-24 px-6 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading subtitle="The Manifesto" title="Texan Brutalism" />
              <p className="text-xl text-neutral-700 leading-relaxed font-light mb-8">
                We reject the ephemeral. Iron and Indigo is a fusion of the rigid precision found in architectural tailoring and the untamed, raw spirit of the Texas plains.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="border-t border-neutral-200 pt-6">
                  <span className="block text-3xl font-serif font-bold">24k</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-400">Gold Stitching</span>
                </div>
                <div className="border-t border-neutral-200 pt-6">
                  <span className="block text-3xl font-serif font-bold">100%</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-400">Heritage Craft</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-neutral-200 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Tailoring process" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-neutral-900 p-8 hidden md:flex flex-col justify-end">
                <span className="text-white/40 text-xs uppercase tracking-[0.2em]">Established</span>
                <span className="text-amber-500 text-3xl font-serif font-bold">MMXXIV</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="bespoke" className="py-24 px-6 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
              <div className="max-w-xl">
                <p className="text-amber-500 font-serif italic mb-2">Bespoke Luxury</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">Second Skins</h2>
              </div>
              <p className="text-white/40 max-w-sm mt-6 md:mt-0 font-light italic">
                Each piece is engineered to move with the wearer, a shield for the frontier of modern industry.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-1px bg-neutral-800">
              <ServiceCard 
                icon={Scissors}
                title="Architectural Cut"
                desc="Structure built through geometry. We utilize pattern making techniques usually reserved for structural engineering."
              />
              <ServiceCard 
                icon={Ruler}
                title="Precision Fit"
                desc="Over 40 points of measurement ensure that the garment doesn't just fit—it empowers the silhouette."
              />
              <ServiceCard 
                icon={Compass}
                title="The Indigo Path"
                desc="Navigating heritage and future. Each client journey includes source-mapping for every textile used."
              />
            </div>
          </div>
        </section>

        {/* Texture/Brand section */}
        <section className="h-[60vh] relative overflow-hidden flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
            alt="Cedar and Concrete"
          />
          <div className="relative z-10 text-center text-white px-6">
            <h2 className="text-4xl md:text-7xl font-serif font-bold tracking-tighter italic mb-8">
              "Build it once, build it to last."
            </h2>
            <div className="h-px w-20 bg-amber-500 mx-auto" />
          </div>
        </section>

        {/* Contact/CTA */}
        <section id="contact" className="py-24 px-6 bg-neutral-100 border-y border-neutral-200">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading subtitle="The Consultation" title="Enter the Atelier" />
            <p className="text-neutral-600 mb-12 text-lg">
              Bespoke commissions are accepted quarterly. Join our waitlist for an architectural fitting and fabric consultation in our Austin atelier.
            </p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-white border border-neutral-300 p-4 focus:outline-none focus:border-amber-500 transition-colors uppercase text-xs tracking-widest"
                />
                <input 
                  type="email" 
                  placeholder="Professional Email" 
                  className="w-full bg-white border border-neutral-300 p-4 focus:outline-none focus:border-amber-500 transition-colors uppercase text-xs tracking-widest"
                />
              </div>
              <textarea 
                placeholder="The Project Requirements" 
                rows={4}
                className="w-full bg-white border border-neutral-300 p-4 focus:outline-none focus:border-amber-500 transition-colors uppercase text-xs tracking-widest"
              ></textarea>
              <button className="w-full bg-neutral-900 text-white p-6 font-bold uppercase tracking-[0.4em] hover:bg-neutral-800 transition-colors">
                Request Audience
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 text-white py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-serif font-bold tracking-tighter mb-6">
              IRON <span className="text-amber-500">&</span> INDIGO
            </div>
            <p className="text-white/40 max-w-xs text-sm leading-relaxed mb-8">
              Fusing the rigid precision of architectural tailoring with the untamed spirit of the Texas plains.
            </p>
            <div className="flex space-x-6 text-white/60">
              <span className="hover:text-amber-500 cursor-pointer transition-colors uppercase text-[10px] tracking-widest">Instagram</span>
              <span className="hover:text-amber-500 cursor-pointer transition-colors uppercase text-[10px] tracking-widest">LinkedIn</span>
              <span className="hover:text-amber-500 cursor-pointer transition-colors uppercase text-[10px] tracking-widest">Journal</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-amber-500 uppercase text-[10px] tracking-[0.3em] font-bold mb-6">Location</h4>
            <div className="flex items-start space-x-3 text-white/60">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <p className="text-sm">
                The Foundry District<br />
                Austin, Texas<br />
                78701
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-amber-500 uppercase text-[10px] tracking-[0.3em] font-bold mb-6">Legal</h4>
            <ul className="text-sm text-white/60 space-y-3">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy & Data</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Craft</li>
              <li className="hover:text-white cursor-pointer transition-colors">Ethical Sourcing</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-white/30 uppercase">
          <p>© 2024 Iron and Indigo Atelier. All rights reserved.</p>
          <p className="mt-4 md:mt-0 italic">Designed for the Modern Frontier</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
