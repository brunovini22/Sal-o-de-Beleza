import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-product.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-16">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4"
            >
              Beleza Natural & Sustentável
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 italic"
            >
              Descubra a <span className="text-primary">Beleza</span>
              <br />que Existe em Você
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Produtos de skincare e maquiagem artesanais, feitos com ingredientes naturais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/#produtos">
                <Button size="lg" className="btn-primary px-8 py-6 text-base">
                  Explorar Coleção
                </Button>
              </Link>
              <Link to="/#colecoes">
                <Button size="lg" variant="outline" className="btn-secondary px-8 py-6 text-base">
                  Skincare Premium
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              src={heroImage}
              alt="Produtos de beleza Lumière"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
