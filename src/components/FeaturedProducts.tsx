import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { getSkincareProducts, getMakeupProducts } from "@/data/products";

const FeaturedProducts = () => {
  const { addItem } = useCart();
  const skincareProducts = getSkincareProducts();
  const makeupProducts = getMakeupProducts();

  const getBadgeClass = (badgeType: string | null) => {
    switch (badgeType) {
      case "new":
        return "badge-new";
      case "bestseller":
        return "badge-bestseller";
      case "exclusive":
        return "badge-exclusive";
      default:
        return "";
    }
  };

  const handleAddToCart = (e: React.MouseEvent, product: typeof skincareProducts[0]) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const ProductCard = ({ product, index }: { product: typeof skincareProducts[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/produto/${product.id}`} className="card-product block group">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.badge && (
            <span className={`absolute top-4 left-4 ${getBadgeClass(product.badgeType)}`}>
              {product.badge}
            </span>
          )}
          {/* Quick view overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="bg-background text-foreground px-4 py-2 rounded-full text-sm font-medium">
              Ver Detalhes
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h4 className="font-heading text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h4>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <p className="text-primary font-semibold text-lg mb-4">{product.priceFormatted}</p>
          <Button 
            className="w-full btn-primary gap-2"
            onClick={(e) => handleAddToCart(e, product)}
          >
            <ShoppingBag className="w-4 h-4" />
            Adicionar
          </Button>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section id="produtos" className="py-20 md:py-28 gradient-hero">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title mb-4 italic">Produtos em Destaque</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Skincare Products */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-2xl text-primary text-center mb-8 italic"
          >
            Skincare Premium
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skincareProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* Makeup Products */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-2xl text-primary text-center mb-8 italic"
          >
            Maquiagem Artesanal
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {makeupProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index + 3} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="btn-primary px-10 py-6 text-base">
            Ver Toda a Coleção
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
