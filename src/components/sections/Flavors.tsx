"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { ChevronRight, Leaf } from "lucide-react";

interface Flavor {
  name: string;
  description: string;
  color: string;
  gradient: string;
  ingredients: string[];
  image: string;
}

const flavors: Flavor[] = [
  {
    name: "Limón",
    description: "Clásico refrescante con el toque cítrico perfecto.",
    color: "#C5D86D",
    gradient: "from-[#C5D86D] to-[#8FA83B]",
    ingredients: ["Limón fresco", "Agua purificada", "Pizca de azúcar"],
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Jamaica",
    description: "Intenso color y sabor floral con beneficios naturales.",
    color: "#9B2335",
    gradient: "from-[#D4304B] to-[#9B2335]",
    ingredients: ["Flor de jamaica", "Agua purificada", "Miel natural"],
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Horchata",
    description: "Cremosa y reconfortante con canela de Ceylán.",
    color: "#F4A261",
    gradient: "from-[#F4A261] to-[#E76F51]",
    ingredients: ["Arroz integral", "Canela Ceylán", "Vainilla natural"],
    image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sandía",
    description: "Dulce y ultra refrescante, ideal para el calor.",
    color: "#E76F51",
    gradient: "from-[#FF6B6B] to-[#E76F51]",
    ingredients: ["Sandía madura", "Agua purificada", "Menta fresca"],
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Pepino con Limón",
    description: "Combinación única que sorprende y deleita.",
    color: "#81B622",
    gradient: "from-[#A8D46F] to-[#81B622]",
    ingredients: ["Pepino fresco", "Limón", "Chía orgánica"],
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Mango",
    description: "Tropical y dulce, el favorito de muchos.",
    color: "#F4A261",
    gradient: "from-[#FFB347] to-[#F4A261]",
    ingredients: ["Mango Ataulfo", "Agua purificada", "Chile piquín opcional"],
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400",
  },
];

export function Flavors() {
  const [activeFlavor, setActiveFlavor] = useState<Flavor>(flavors[0]);

  return (
    <section
      id="sabores"
      className="relative py-24 md:py-32 lg:py-40 bg-frutiva-cream overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-frutiva-dark to-transparent opacity-5" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-frutiva-accent/10 text-frutiva-accent text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            Nuestros Sabores
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-frutiva-dark leading-tight mb-6">
            Naturalmente <span className="text-gradient">Deliciosos</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
            Cada sabor es una experiencia. Elaborados diariamente con frutas seleccionadas 
            y recetas que han perfeccionado durante años.
          </p>
        </ScrollReveal>

        {/* Flavor Selector + Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Flavor List */}
          <StaggerContainer className="space-y-3">
            {flavors.map((flavor, index) => (
              <StaggerItem key={index}>
                <button
                  onClick={() => setActiveFlavor(flavor)}
                  className={`w-full group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                    activeFlavor.name === flavor.name
                      ? "bg-white shadow-elevated border border-stone-100"
                      : "hover:bg-white/50 border border-transparent"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${flavor.gradient} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-frutiva-dark">{flavor.name}</h4>
                    <p className="text-sm text-stone-500 hidden sm:block">{flavor.description}</p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-all duration-300 ${
                      activeFlavor.name === flavor.name
                        ? "text-frutiva-primary translate-x-0 opacity-100"
                        : "text-stone-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Active Flavor Detail */}
          <ScrollReveal delay={0.2} className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlavor.name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Card with image */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-elevated bg-white">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={activeFlavor.image}
                      alt={activeFlavor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${activeFlavor.gradient} opacity-30 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-display text-4xl text-white mb-2">
                        {activeFlavor.name}
                      </h3>
                      <p className="text-white/80">{activeFlavor.description}</p>
                    </div>
                  </div>
                  
                  {/* Ingredients */}
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3 block">
                      Ingredientes Naturales
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeFlavor.ingredients.map((ingredient, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-stone-50 text-stone-700 text-sm font-medium border border-stone-100"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating decorative element */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${activeFlavor.gradient} opacity-20 blur-xl`}
                />
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
