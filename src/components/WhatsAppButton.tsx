import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 animate-float"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
    </button>
  );
};

export default WhatsAppButton;
