"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { Award, Sparkles, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Calidad Premium",
    description:
      "Seleccionamos las frutas más frescas del mercado local. Nuestro proceso artesanal garantiza un sabor auténtico y consistente en cada botella.",
    color: "bg-frutiva-primary/10 text-frutiva-primary",
  },
  {
    icon: Sparkles,
    title: "Tu Marca, Tu Estilo",
    description:
      "Ofrecemos etiquetas personalizadas con el logo de tu restaurante. Eleva la experiencia de tus clientes con un producto que lleva tu identidad.",
    color: "bg-frutiva-accent/10 text-frutiva-accent",
  },
  {
    icon: ShieldCheck,
    title: "Higiene Certificada",
    description:
      "Seguimos estrictos protocolos de BPM (Buenas Prácticas de Manufactura). Nuestras instalaciones y procesos cumplen con todas las normativas sanitarias.",
    color: "bg-frutiva-leaf/10 text-frutiva-leaf",
  },
];

export function About() {
  return (
    <section
      id="nosotros"
      className="relative py-24 md:py-32 lg:py-40 bg-frutiva-cream overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-frutiva-lime/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-frutiva-primary/10 text-frutiva-primary text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            Nosotros
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-frutiva-dark leading-tight mb-6">
            Pasión por lo <span className="text-gradient">Natural</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa comprometida con la frescura y la autenticidad. 
            Creemos que cada restaurante merece ofrecer a sus clientes bebidas 
            que reflejen el mismo cuido y dedicación que pones en tu cocina.
          </p>
        </ScrollReveal>

        {/* Values Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <div className="group relative p-8 lg:p-10 rounded-[2rem] bg-white border border-stone-100 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
                {/* Double bezel effect */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${value.color} mb-6`}>
                    <value.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="font-display text-2xl text-frutiva-dark mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-stone-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats Row */}
        <ScrollReveal delay={0.3} className="mt-20 md:mt-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12 rounded-[2rem] bg-frutiva-dark text-white">
            {[
              { number: "10+", label: "Años de experiencia" },
              { number: "50+", label: "Restaurantes aliados" },
              { number: "12", label: "Sabores disponibles" },
              { number: "100%", label: "Fruta natural" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl text-frutiva-lime mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
