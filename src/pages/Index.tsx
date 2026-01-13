import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Collections />
        <FeaturedProducts />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
