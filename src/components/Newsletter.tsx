import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas novidades em breve.",
      });
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="py-20 md:py-28 gradient-newsletter">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Receba Novidades
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Inscreva-se para receber em primeira mão nossas promoções exclusivas, 
            lançamentos e dicas de beleza.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-background border-border rounded-full px-6 focus-visible:ring-primary"
              required
            />
            <Button type="submit" className="btn-primary h-12 px-8 rounded-full">
              Inscrever-se
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
