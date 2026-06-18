"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", business: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    { icon: MapPin, label: "Ubicación", value: "Zona Metropolitana, CDMX" },
    { icon: Phone, label: "Teléfono", value: "+52 (55) 1234-5678" },
    { icon: Mail, label: "Email", value: "hola@frutiva.mx" },
    { icon: Clock, label: "Horario", value: "Lun - Sab: 8:00 - 18:00" },
  ];

  return (
    <section
      id="contacto"
      className="relative py-24 md:py-32 lg:py-40 bg-frutiva-cream overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-frutiva-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info & CTA */}
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-frutiva-primary/10 text-frutiva-primary text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              Contacto
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-frutiva-dark leading-tight mb-6">
              Hagamos Crecer <br />
              <span className="text-gradient">Tu Negocio</span>
            </h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              ¿Listo para ofrecer aguas frescas artesanales en tu restaurante? 
              Cuéntanos sobre tu negocio y te contactaremos con una propuesta 
              personalizada.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-frutiva-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-frutiva-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-stone-500">{item.label}</span>
                    <p className="font-medium text-frutiva-dark">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={0.2}>
            <div className="relative p-8 lg:p-10 rounded-[2rem] bg-white shadow-elevated border border-stone-100">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-frutiva-lime/20 rounded-full blur-2xl" />
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-frutiva-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-frutiva-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-frutiva-dark mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-stone-600">
                    Nos pondremos en contacto contigo pronto.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-frutiva-primary focus:ring-2 focus:ring-frutiva-primary/20 outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Negocio
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.business}
                        onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-frutiva-primary focus:ring-2 focus:ring-frutiva-primary/20 outline-none transition-all"
                        placeholder="Nombre del restaurante"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-frutiva-primary focus:ring-2 focus:ring-frutiva-primary/20 outline-none transition-all"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-frutiva-primary focus:ring-2 focus:ring-frutiva-primary/20 outline-none transition-all"
                        placeholder="(55) 1234-5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-frutiva-primary focus:ring-2 focus:ring-frutiva-primary/20 outline-none transition-all resize-none"
                      placeholder="Cuéntanos sobre tu negocio y qué necesitas..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-frutiva-primary text-white rounded-xl font-semibold hover:bg-frutiva-dark transition-all duration-300 active:scale-[0.98] shadow-glow"
                  >
                    Enviar Mensaje
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
