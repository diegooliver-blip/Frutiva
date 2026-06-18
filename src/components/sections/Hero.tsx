"use client";

import { motion } from "framer-motion";
import { ArrowDown, Droplets } from "lucide-react";
import { FloatingBubbles, WaveDecoration } from "@/components/animations/FloatingBubbles";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-frutiva-dark/70 via-frutiva-dark/50 to-frutiva-dark/80" />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-frutiva-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-frutiva-accent/20 rounded-full blur-[100px]"
        />

        {/* Floating bubbles effect */}
        <FloatingBubbles />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <Droplets className="w-4 h-4 text-frutiva-lime" />
          <span className="text-sm font-medium text-white/90 tracking-wide uppercase">
            100% Fruta Natural
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-6"
        >
          Aguas Frescas
          <br />
          <span className="text-frutiva-lime">Hechas a Mano</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          El complemento perfecto para tu restaurante. Distribución local de aguas de sabor 
          artesanales con fruta 100% natural.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("#contacto")}
            className="group relative px-8 py-4 bg-white text-frutiva-dark rounded-full font-semibold text-base transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] active:scale-[0.98]"
          >
            <span className="flex items-center gap-3">
              Quiero Distribuir
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-frutiva-primary/10 group-hover:bg-frutiva-primary group-hover:text-white transition-all duration-300">
                <ArrowDown className="w-4 h-4 rotate-[-135deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </span>
          </button>
          <button
            onClick={() => scrollToSection("#sabores")}
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-base border border-white/20 hover:bg-white/20 transition-all duration-300 active:scale-[0.98]"
          >
            Ver Sabores
          </button>
        </motion.div>
      </div>

      {/* Wave decoration at bottom */}
      <WaveDecoration />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
