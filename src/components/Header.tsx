import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Skincare", href: "/#colecoes" },
    { name: "Maquiagem", href: "/#colecoes" },
    { name: "Sobre", href: "/#depoimentos" },
    { name: "Contato", href: "/#newsletter" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-heading text-2xl md:text-3xl text-foreground italic">
            Lumière Beauty
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="relative p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-foreground" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-border overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-base font-medium py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
