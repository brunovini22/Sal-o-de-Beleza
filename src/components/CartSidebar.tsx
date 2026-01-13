import { X, Minus, Plus, Trash2, ShoppingBag, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart, ShippingOption } from "@/contexts/CartContext";
import { useState } from "react";

const shippingOptions: ShippingOption[] = [
  { name: "PAC", price: 15.9, days: "5-8 dias úteis" },
  { name: "SEDEX", price: 25.9, days: "2-3 dias úteis" },
  { name: "Express", price: 35.9, days: "1-2 dias úteis" },
];

const CartSidebar = () => {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    totalPrice,
    totalItems,
    selectedShipping,
    setSelectedShipping,
  } = useCart();

  const [cep, setCep] = useState("");
  const [showShipping, setShowShipping] = useState(false);
  const [loadingCep, setLoadingCep] = useState(false);

  const handleCalculateShipping = async () => {
    if (cep.replace(/\D/g, "").length === 8) {
      setLoadingCep(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setShowShipping(true);
      setLoadingCep(false);
    }
  };

  const formatCep = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)}-${digits.slice(5, 8)}`;
  };

  const finalTotal = totalPrice + (selectedShipping?.price || 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-xl">Seu Carrinho</h2>
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-lg">
                    Seu carrinho está vazio
                  </p>
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="mt-4 btn-primary"
                  >
                    Continuar Comprando
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4 p-4 bg-card rounded-xl"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-heading text-sm">{item.name}</h4>
                          <p className="text-primary font-semibold text-sm mt-1">
                            {item.priceFormatted}
                          </p>

                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-7 h-7 flex items-center justify-center bg-secondary rounded-md hover:bg-accent transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-7 h-7 flex items-center justify-center bg-secondary rounded-md hover:bg-accent transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Shipping Calculator */}
                  <div className="border-t border-border pt-4 mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Truck className="w-5 h-5 text-primary" />
                      <span className="font-medium">Calcular Frete</span>
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Digite seu CEP"
                        value={cep}
                        onChange={(e) => setCep(formatCep(e.target.value))}
                        maxLength={9}
                        className="flex-1"
                      />
                      <Button
                        onClick={handleCalculateShipping}
                        disabled={cep.replace(/\D/g, "").length < 8 || loadingCep}
                        variant="outline"
                        className="px-4"
                      >
                        {loadingCep ? "..." : "Calcular"}
                      </Button>
                    </div>

                    <AnimatePresence>
                      {showShipping && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 space-y-2"
                        >
                          {shippingOptions.map((option) => (
                            <button
                              key={option.name}
                              onClick={() => setSelectedShipping(option)}
                              className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                                selectedShipping?.name === option.name
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <div className="text-left">
                                <p className="font-medium text-sm">
                                  {option.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {option.days}
                                </p>
                              </div>
                              <span className="font-semibold text-sm">
                                R$ {option.price.toFixed(2).replace(".", ",")}
                              </span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border bg-card">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                  </div>
                  {selectedShipping && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Frete ({selectedShipping.name})
                      </span>
                      <span>
                        R$ {selectedShipping.price.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">
                      R$ {finalTotal.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                </div>
                <Button className="w-full btn-primary py-6 text-base">
                  Finalizar Compra
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
