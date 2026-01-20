import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Background Texture/Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1590079019458-0eb5b40a3371?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale mix-blend-overlay"></div>
      
      {/* Concrete Texture Layer */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <div className="mb-4">
          <span className="text-[#D4AF37] uppercase tracking-[0.5em] text-xs font-semibold animate-fade-in">
            EST. IN THE HEART OF TEXAS
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white leading-tight tracking-tighter mb-8 max-w-5xl">
          IRON & <br />
          <span className="italic text-[#E5E5E5]">INDIGO</span>
        </h1>

        <div className="w-24 h-px bg-[#D4AF37] mb-8"></div>

        <p className="max-w-xl text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12 uppercase tracking-wide">
          Bespoke tailoring for the architects of the new South. 
          Where heritage craft meets modern frontier ambition.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#consultation"
            className="group relative px-10 py-4 bg-transparent border border-white text-white font-medium uppercase tracking-widest overflow-hidden transition-all duration-300 hover:text-black"
          >
            <span className="relative z-10">Request Consultation</span>
            <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
          </a>
          
          <a
            href="#collection"
            className="group px-10 py-4 bg-transparent text-[#D4AF37] border border-[#D4AF37] font-medium uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            View Collection
          </a>
        </div>
      </div>

      {/* Corner Accents - Brutalist Elements */}
      <div className="absolute top-12 left-12 hidden lg:block">
        <div className="w-1 h-24 bg-[#D4AF37] opacity-50"></div>
        <div className="w-24 h-1 bg-[#D4AF37] opacity-50"></div>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden lg:block text-right">
        <div className="mb-4 text-[#D4AF37] font-mono text-sm tracking-tighter">30.2672° N, 97.7431° W</div>
        <div className="flex justify-end">
          <div className="w-24 h-1 bg-[#D4AF37] opacity-50"></div>
          <div className="w-1 h-24 bg-[#D4AF37] opacity-50"></div>
        </div>
      </div>

      {/* Side Label */}
      <div className="absolute left-6 bottom-32 -rotate-90 origin-left hidden md:block">
        <span className="text-[10px] uppercase tracking-[1em] text-gray-500 font-bold">
          ARCHITECTURAL TAILORING
        </span>
      </div>
    </section>
  );
};

export default Hero;
