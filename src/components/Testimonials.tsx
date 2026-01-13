import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "O sérum de vitamina C transformou minha pele! Em poucas semanas notei uma diferença incrível na luminosidade.",
      name: "Ana Carolina",
      info: "Cliente desde 2022",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      quote: "A paleta Sunset Glow é simplesmente perfeita. As cores são super pigmentadas e duram o dia todo!",
      name: "Beatriz Santos",
      info: "Cliente desde 2021",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      quote: "A entrega foi super rápida e o atendimento excepcional. O creme hidratante é maravilhoso!",
      name: "Fernanda Lima",
      info: "Cliente desde 2023",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title mb-4 italic">O Que Nossas Clientes Dizem</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card p-6 md:p-8 rounded-2xl shadow-card"
            >
              <div className="text-primary text-5xl font-heading leading-none mb-4">"</div>
              <p className="text-foreground italic mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-heading text-primary font-medium">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.info}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
