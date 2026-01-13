import { motion } from "framer-motion";
import skincareImage from "@/assets/collection-skincare.jpg";
import makeupImage from "@/assets/collection-makeup.jpg";

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Skincare Premium",
      description: "Tratamentos faciais com ativos naturais para uma pele radiante e saudável",
      count: "+40 produtos",
      image: skincareImage,
    },
    {
      id: 2,
      title: "Maquiagem Artesanal",
      description: "Cores vibrantes e fórmulas suaves para realçar sua beleza única",
      count: "+25 produtos",
      image: makeupImage,
    },
  ];

  return (
    <section id="colecoes" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title mb-4 italic">Nossas Coleções</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Explore nossa seleção exclusiva de produtos de beleza
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-heading text-2xl md:text-3xl text-cream mb-2 italic">
                  {collection.title}
                </h3>
                <p className="text-cream/80 mb-3 text-sm md:text-base">{collection.description}</p>
                <span className="text-primary-foreground/90 text-sm font-medium">{collection.count}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
