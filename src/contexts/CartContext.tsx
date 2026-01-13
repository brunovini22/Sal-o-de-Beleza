import { createContext, useContext, useState, ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  priceFormatted: string;
  image: string;
  badge: string | null;
  badgeType: string | null;
  category: string;
  rating: number;
  reviews: number;
  images?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  totalItems: number;
  totalPrice: number;
  shippingCost: number;
  calculateShipping: (cep: string) => Promise<void>;
  selectedShipping: ShippingOption | null;
  setSelectedShipping: (option: ShippingOption | null) => void;
}

export interface ShippingOption {
  name: string;
  price: number;
  days: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOption | null>(null);

  const addItem = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setSelectedShipping(null);
    setShippingCost(0);
  };

  const calculateShipping = async (cep: string) => {
    // Simulated shipping calculation
    await new Promise((resolve) => setTimeout(resolve, 800));
    const cleanCep = cep.replace(/\D/g, "");
    if (cleanCep.length === 8) {
      // Different shipping based on region (simulated)
      const region = parseInt(cleanCep.substring(0, 1));
      if (region <= 2) {
        setShippingCost(15.9);
      } else if (region <= 5) {
        setShippingCost(22.9);
      } else {
        setShippingCost(29.9);
      }
    }
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        setIsOpen,
        totalItems,
        totalPrice,
        shippingCost,
        calculateShipping,
        selectedShipping,
        setSelectedShipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
