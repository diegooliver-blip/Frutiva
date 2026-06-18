"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { Truck, PartyPopper, Tag, FlaskConical } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Distribución a Domicilio",
    description:
      "Llevamos tu pedido directo a la puerta de tu negocio. Mínimo de 200 botellas mensuales. Cobertura en zona metropolitana con entregas programadas.",
    features: ["Entrega programada", "Sin costo de envío", "Pedido mínimo flexible"],
    gradient: "from-frutiva-primary to-frutiva-primary-light",
    size: "large", // spans 2 columns
  },
  {
    icon: PartyPopper,
    title: "Eventos Especiales",
    description:
      "Desde festivales hasta bodas. Refresca a tus invitados con sabores únicos que nadie olvida.",
    features: ["Catering personalizado", "Variedad de sabores", "Servicio express"],
    gradient: "from-frutiva-accent to-frutiva-accent-warm",
    size: "small",
  },
  {
    icon: Tag,
    title: "Etiqueta Personalizada",
    description:
      "Desde 1,500 piezas mensuales, diseñamos etiquetas con tu logo y colores de marca. Potencia tu identidad en cada mesa.",
    features: ["Diseño incluido", "Varios formatos", "Entrega incluida"],
    gradient: "from-frutiva-leaf to-frutiva-lime",
    size: "small",
  },
  {
    icon: FlaskConical,
    title: "Sabores Especiales",
    description:
      "¿Tienes una idea única? Trabajamos contigo para desarrollar sabores exclusivos que solo tu restaurante ofrezca.",
    features: ["Desarrollo R&D", "Pruebas gratuitas", "Exclusividad disponible"],
    gradient: "from-frutiva-accent-warm to-frutiva-lime",
    size: "large",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 md:py-32 lg:py-40 bg-frutiva-dark overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-frutiva-lime text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            Servicios
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Todo lo que tu <br />
            <span className="text-frutiva-lime">Negocio Necesita</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Más que un proveedor, somos tu aliado estratégico. 
            Adaptamos nuestros servicios a las necesidades de tu restaurante.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="group relative h-full p-8 lg:p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Gradient glow on hover */}
                <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-700`} />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-display text-2xl lg:text-3xl text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-white/50">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
