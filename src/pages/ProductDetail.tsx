import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Star, Minus, Plus, ShoppingBag, Heart, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const reviews = [
  {
    id: 1,
    name: "Mariana Costa",
    rating: 5,
    date: "15/12/2024",
    comment: "Produto incrível! Minha pele nunca esteve tão hidratada. Recomendo muito!",
    verified: true,
  },
  {
    id: 2,
    name: "Juliana Almeida",
    rating: 4,
    date: "10/12/2024",
    comment: "Muito bom, textura leve e absorção rápida. Só achei a embalagem um pouco pequena pelo preço.",
    verified: true,
  },
  {
    id: 3,
    name: "Fernanda Lima",
    rating: 5,
    date: "05/12/2024",
    comment: "Já é minha segunda compra! Não troco por nenhum outro produto. Qualidade premium.",
    verified: true,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading mb-4">Produto não encontrado</h1>
          <Link to="/">
            <Button className="btn-primary">Voltar ao Início</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        ...product,
        images: product.images,
      });
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar para produtos
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 ${
                      product.badgeType === "new"
                        ? "badge-new"
                        : product.badgeType === "bestseller"
                        ? "badge-bestseller"
                        : "badge-exclusive"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-primary scale-105"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <span className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {product.category === "skincare" ? "Skincare" : "Maquiagem"}
              </span>

              <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4 italic">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-gold fill-current"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews} avaliações)
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.longDescription}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-semibold text-primary">
                  {product.priceFormatted}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  ou 3x de R$ {(product.price / 3).toFixed(2).replace(".", ",")} sem juros
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium">Quantidade:</span>
                <div className="flex items-center gap-3 bg-secondary rounded-lg p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-accent rounded-md transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-accent rounded-md transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary py-6 text-base gap-2"
                  disabled={addedToCart}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      Adicionado!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      Adicionar ao Carrinho
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-14 h-14 ${isWishlisted ? "text-destructive border-destructive" : ""}`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="icon" className="w-14 h-14">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Ingredients */}
              {product.ingredients && (
                <div className="border-t border-border pt-6 mb-6">
                  <h3 className="font-heading text-lg mb-3">Ingredientes Principais</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-sm rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* How to Use */}
              {product.howToUse && (
                <div className="border-t border-border pt-6">
                  <h3 className="font-heading text-lg mb-3">Como Usar</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.howToUse}
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Reviews Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <h2 className="font-heading text-2xl mb-8 italic">Avaliações dos Clientes</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                    {review.verified && (
                      <span className="ml-auto bg-emerald-500/10 text-emerald-600 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Verificado
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-gold fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {review.comment}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 pt-8 border-t border-border"
            >
              <h2 className="font-heading text-2xl mb-8 italic">Produtos Relacionados</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relProduct, index) => (
                  <motion.div
                    key={relProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link to={`/produto/${relProduct.id}`} className="card-product block">
                      <div className="relative aspect-square overflow-hidden bg-secondary">
                        <img
                          src={relProduct.image}
                          alt={relProduct.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="font-heading text-lg text-foreground mb-1">
                          {relProduct.name}
                        </h4>
                        <p className="text-primary font-semibold">
                          {relProduct.priceFormatted}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
