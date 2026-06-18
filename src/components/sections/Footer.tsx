"use client";

import { Leaf, ArrowUpRight, Globe, MessageCircle } from "lucide-react";

const footerLinks = {
  navegacion: [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sabores", href: "#sabores" },
    { label: "Contacto", href: "#contacto" },
  ],
  servicios: [
    { label: "Distribución", href: "#servicios" },
    { label: "Eventos", href: "#servicios" },
    { label: "Etiquetas Personalizadas", href: "#servicios" },
    { label: "Sabores Especiales", href: "#servicios" },
  ],
  legal: [
    { label: "Términos y Condiciones", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Aviso de Cookies", href: "#" },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-frutiva-dark text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frutiva-lime/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-frutiva-primary to-frutiva-leaf flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-2xl">Frutiva</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              Aguas frescas artesanales elaboradas con fruta 100% natural. 
              El complemento perfecto para restaurantes que buscan calidad y autenticidad.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Frutiva. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-sm">
            Hecho con <span className="text-frutiva-accent">♥</span> en México
          </p>
        </div>
      </div>
    </footer>
  );
}
