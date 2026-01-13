import product1 from "@/assets/product-serum.jpg";
import product2 from "@/assets/product-cream.jpg";
import product3 from "@/assets/product-oil.jpg";
import product4 from "@/assets/product-lipstick.jpg";
import product5 from "@/assets/product-palette.jpg";
import product6 from "@/assets/product-blush.jpg";

export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  priceFormatted: string;
  image: string;
  images: string[];
  badge: string | null;
  badgeType: string | null;
  category: string;
  rating: number;
  reviews: number;
  ingredients?: string[];
  howToUse?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sérum Vitamina C",
    description: "Sérum iluminador com vitamina C e ácido hialurônico",
    longDescription: "Nosso Sérum Vitamina C é formulado com 15% de vitamina C pura estabilizada, combinada com ácido hialurônico de baixo peso molecular para máxima penetração. Ilumina a pele, reduz manchas e linhas finas, enquanto proporciona hidratação profunda. Perfeito para todos os tipos de pele.",
    price: 189.9,
    priceFormatted: "R$ 189,90",
    image: product1,
    images: [product1, product2, product3],
    badge: "Novo",
    badgeType: "new",
    category: "skincare",
    rating: 4.8,
    reviews: 124,
    ingredients: ["Vitamina C 15%", "Ácido Hialurônico", "Vitamina E", "Niacinamida", "Extrato de Aloe Vera"],
    howToUse: "Aplique 3-4 gotas no rosto limpo e seco, pela manhã. Massageie suavemente até absorção completa. Use protetor solar em seguida.",
  },
  {
    id: 2,
    name: "Creme Hidratante",
    description: "Hidratação profunda com ácido hialurônico e niacinamida",
    longDescription: "Creme hidratante de textura leve e absorção rápida, formulado com ácido hialurônico de múltiplos pesos moleculares e niacinamida 5%. Hidrata todas as camadas da pele, melhora a barreira cutânea e uniformiza o tom da pele.",
    price: 159.9,
    priceFormatted: "R$ 159,90",
    image: product2,
    images: [product2, product1, product3],
    badge: "Mais Vendido",
    badgeType: "bestseller",
    category: "skincare",
    rating: 4.9,
    reviews: 256,
    ingredients: ["Ácido Hialurônico", "Niacinamida 5%", "Ceramidas", "Esqualano", "Pantenol"],
    howToUse: "Aplique uma quantidade generosa no rosto e pescoço, manhã e noite, após o sérum. Massageie até completa absorção.",
  },
  {
    id: 3,
    name: "Óleo Facial Nutritivo",
    description: "Blend de óleos naturais para nutrição intensiva",
    longDescription: "Uma combinação exclusiva de óleos botânicos prensados a frio, incluindo rosa mosqueta, jojoba e argan. Este elixir nutre profundamente, restaura a luminosidade e fortalece a barreira da pele. Ideal para peles secas e maduras.",
    price: 129.9,
    priceFormatted: "R$ 129,90",
    image: product3,
    images: [product3, product1, product2],
    badge: null,
    badgeType: null,
    category: "skincare",
    rating: 4.7,
    reviews: 89,
    ingredients: ["Óleo de Rosa Mosqueta", "Óleo de Jojoba", "Óleo de Argan", "Vitamina E", "Óleo de Semente de Uva"],
    howToUse: "Aplique 2-3 gotas no rosto e pescoço, preferencialmente à noite, como último passo da rotina. Massageie com movimentos ascendentes.",
  },
  {
    id: 4,
    name: "Batom Velvet Rose",
    description: "Batom cremoso de longa duração cor rosa antigo",
    longDescription: "Batom de acabamento veludo com pigmentação intensa e duração de até 8 horas. Formulado com manteiga de karité e óleo de jojoba para manter os lábios hidratados. A cor Rosa Antigo é versátil e elegante para qualquer ocasião.",
    price: 79.9,
    priceFormatted: "R$ 79,90",
    image: product4,
    images: [product4, product5, product6],
    badge: "Exclusivo",
    badgeType: "exclusive",
    category: "makeup",
    rating: 4.6,
    reviews: 178,
    ingredients: ["Manteiga de Karité", "Óleo de Jojoba", "Vitamina E", "Cera de Abelha", "Pigmentos Minerais"],
    howToUse: "Aplique diretamente nos lábios, começando pelo centro e expandindo para os cantos. Para maior precisão, use um delineador labial antes.",
  },
  {
    id: 5,
    name: "Paleta Sunset Glow",
    description: "12 cores vibrantes para olhos com acabamento acetinado",
    longDescription: "Uma paleta de sombras com 12 cores cuidadosamente selecionadas em tons quentes de sunset. Inclui acabamentos matte, acetinado e shimmer. Alta pigmentação, blendabilidade excepcional e longa duração sem creasear.",
    price: 199.9,
    priceFormatted: "R$ 199,90",
    image: product5,
    images: [product5, product4, product6],
    badge: "Favorito",
    badgeType: "bestseller",
    category: "makeup",
    rating: 4.9,
    reviews: 312,
    ingredients: ["Talco", "Mica", "Óxidos de Ferro", "Dimeticona", "Vitamina E"],
    howToUse: "Use pincéis apropriados para cada acabamento. Aplique tons claros na pálpebra móvel, médios no côncavo e escuros no canto externo. Blend é a chave!",
  },
  {
    id: 6,
    name: "Blush Natural",
    description: "Blush em pó com pigmentação suave e natural",
    longDescription: "Blush em pó sedoso com pigmentos minerais que proporcionam um rubor natural e saudável. Acabamento luminoso que dura o dia todo. Disponível em tons que complementam todos os tons de pele.",
    price: 89.9,
    priceFormatted: "R$ 89,90",
    image: product6,
    images: [product6, product4, product5],
    badge: null,
    badgeType: null,
    category: "makeup",
    rating: 4.5,
    reviews: 95,
    ingredients: ["Mica", "Talco", "Sílica", "Óxidos de Ferro", "Vitamina E"],
    howToUse: "Sorria e aplique na maçã do rosto com movimentos circulares usando um pincel grande e macio. Esfume em direção às têmporas.",
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getSkincareProducts = () => products.filter((p) => p.category === "skincare");
export const getMakeupProducts = () => products.filter((p) => p.category === "makeup");
