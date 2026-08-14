import { useState } from 'react';
import { UrgencyBar } from './components/UrgencyBar';
import { Hero } from './components/Hero';
import { Carousel } from './components/Carousel';
import { TargetAudience } from './components/TargetAudience';
import { Bonus } from './components/Bonus';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { UpsellModal } from './components/UpsellModal';
import { CHECKOUT_URLS } from './config/checkout';

export default function App() {
  // Estado do pop-up de oferta especial (Upsell para o Plano Completo por R$19,90)
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const scrollToPlans = () => {
    const plansEl = document.getElementById('planos');
    if (plansEl) {
      const topPos = plansEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, topPos - 10),
        behavior: 'smooth',
      });
    }
  };

  const handleSelectPlan = (planName: string) => {
    if (planName === 'Plano Básico') {
      // Ao clicar em Plano Básico, abre o pop-up de oferta do Plano Completo por R$19,90
      setIsUpsellOpen(true);
    } else {
      // Ao clicar em Plano Completo direto, redireciona para o checkout de R$27
      window.location.href = CHECKOUT_URLS.COMPLETE_27;
    }
  };

  // Usuário aceitou a oferta do Plano Completo por R$19,90 -> vai pro link de 19,90
  const handleAcceptUpsell = () => {
    setIsUpsellOpen(false);
    window.location.href = CHECKOUT_URLS.SPECIAL_19_90;
  };

  // Usuário recusou a oferta e preferiu continuar com o Plano Básico de R$10 -> vai pro link de 10
  const handleDeclineUpsell = () => {
    setIsUpsellOpen(false);
    window.location.href = CHECKOUT_URLS.BASIC_10;
  };

  return (
    <div className="min-h-screen bg-white text-[#1F2937] flex flex-col font-['Poppins',sans-serif] selection:bg-[#F5C518] selection:text-[#1F2937]">
      {/* Barra de urgência vermelha */}
      <UrgencyBar />

      {/* 1. Hero */}
      <Hero onScrollToPlans={scrollToPlans} />

      {/* 2. Carrossel de modelos */}
      <Carousel />

      {/* 3. Pra quem é esse material? */}
      <TargetAudience />

      {/* 4. Bônus */}
      <Bonus />

      {/* 5. Planos */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* 6. FAQ */}
      <FAQ />

      {/* 7. Rodapé */}
      <Footer />

      {/* Pop-up de oferta do Plano Completo por R$19,90 ao clicar em Plano Básico */}
      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onAcceptUpsell={handleAcceptUpsell}
        onDeclineUpsell={handleDeclineUpsell}
      />
    </div>
  );
}
