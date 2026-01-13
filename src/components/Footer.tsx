import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl italic mb-4">Lumière Beauty</h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              Produtos de beleza premium desenvolvidos para realçar sua beleza natural.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Início", "Skincare", "Maquiagem", "Sobre Nós", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-cream/70 hover:text-cream transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Mail className="w-4 h-4" />
                contato@lumierebeauty.com
              </li>
              <li className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/20 mt-12 pt-8 text-center">
          <p className="text-cream/50 text-sm">
            © 2024 Lumière Beauty. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
