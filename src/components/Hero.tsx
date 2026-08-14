import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onScrollToPlans: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToPlans }) => {
  return (
    <section id="hero-section" className="relative pt-10 pb-14 md:pt-16 md:pb-20 overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Headline principal com Setembro Amarelo em destaque amarelo */}
        <h1 
          id="hero-headline"
          className="text-[#1F2937] font-[800] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] leading-[1.1] tracking-tight mb-5 max-w-3xl"
        >
          +200 Modelos de Lembrancinhas para o <span className="text-[#F5C518]">Setembro Amarelo</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[#6B7280] font-[400] text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
          Tenha mais de 200 modelos prontos para imprimir, recortar e montar, sem perder tempo criando lembrancinhas do zero.
        </p>

        {/* Mockup estático da Hero - sem efeitos, sem clique, com carregamento otimizado */}
        <div className="w-full max-w-3xl mb-8 flex items-center justify-center min-h-[260px] sm:min-h-[380px] md:min-h-[460px]">
          <img
            id="hero-mockup-image"
            src="https://wsrv.nl/?url=https://i.ibb.co/CykXfpz/463d9631-2872-4891-b337-98822463463d.png&w=900&output=webp&q=80"
            alt="Mockup do Material +200 Lembrancinhas Setembro Amarelo"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="768"
            height="500"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback direto para o link original do ImgBB se o CDN de otimização falhar
              const fallback = 'https://i.ibb.co/CykXfpz/463d9631-2872-4891-b337-98822463463d.png';
              if (e.currentTarget.src !== fallback) {
                e.currentTarget.src = fallback;
              }
            }}
            className="w-full h-auto max-h-[500px] object-contain rounded-2xl pointer-events-none select-none"
            draggable={false}
          />
        </div>

        {/* Botão verde QUERO AGORA! */}
        <div className="w-full sm:w-auto">
          <button
            id="hero-cta-button"
            onClick={onScrollToPlans}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 sm:py-5 bg-[#16A34A] hover:bg-[#15803d] active:scale-[0.98] text-white font-[700] text-lg sm:text-xl rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#16A34A]"
          >
            <span>QUERO AGORA!</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
