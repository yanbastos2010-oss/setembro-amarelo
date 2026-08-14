import React from 'react';
import { Check, X, Gift } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const basicItems = [
    { text: '+200 Modelos de Lembrancinhas para o Setembro Amarelo', included: true },
    { text: 'Acesso digital e vitalício', included: true },
    { text: 'Garantia de 7 dias', included: true },
    { text: 'Bônus Exclusivos', included: false },
  ];

  const completeItems = [
    { text: '+200 Modelos de Lembrancinhas para o Setembro Amarelo', isBonus: false },
    { text: 'Acesso digital e vitalício', isBonus: false },
    { text: 'Garantia de 7 dias', isBonus: false },
    { text: 'Suporte Prioritário', isBonus: false },
    { text: 'Bônus: Roteiro de Abordagem e Mini Palestra', isBonus: true },
    { text: 'Bônus: Kit com 30 Artes para Redes Sociais', isBonus: true },
    { text: 'Bônus: Pack com 100 Tags e Etiquetas', isBonus: true },
  ];

  return (
    <section id="planos" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Centralizado */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 
            id="planos-title"
            className="text-[#1F2937] font-[700] text-[26px] sm:text-[30px] md:text-[36px] leading-tight"
          >
            Escolha seu plano
          </h2>
        </div>

        {/* Layout padrão: 1 coluna no celular (um abaixo do outro) e 2 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Plano Básico */}
          <div 
            id="card-plano-basico"
            className="bg-white rounded-2xl border border-[#E5E7EB] p-8 sm:p-9 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Nome, Preço e Pagamento único Centralizados */}
              <div className="text-center mb-8">
                <h3 className="text-[#1F2937] font-[700] text-2xl mb-3">
                  Plano Básico
                </h3>
                <div className="mb-1">
                  <span className="text-[#1F2937] font-[800] text-4xl sm:text-5xl">
                    R$10
                  </span>
                </div>
                <p className="text-[#6B7280] font-[400] text-sm">
                  Pagamento único.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {basicItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {item.included ? (
                      <Check 
                        className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" 
                        strokeWidth={3.5}
                      />
                    ) : (
                      <X 
                        className="w-5 h-5 text-[#DC2626] flex-shrink-0 mt-0.5" 
                        strokeWidth={3.5}
                      />
                    )}
                    <span className="text-[#1F2937] font-[400] text-sm sm:text-base leading-snug">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              id="btn-plano-basico"
              onClick={() => onSelectPlan('Plano Básico')}
              className="w-full py-4 px-6 bg-white hover:bg-[#FFF9DB] active:scale-[0.98] text-[#1F2937] border-2 border-[#F5C518] font-[700] text-base rounded-xl transition-all cursor-pointer shadow-xs hover:shadow text-center"
            >
              QUERO O PLANO BÁSICO
            </button>
          </div>

          {/* Plano Completo */}
          <div 
            id="card-plano-completo"
            className="bg-white rounded-2xl border-2 border-[#F5C518] p-8 sm:p-9 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between relative mt-4 md:mt-0"
          >
            {/* Selo MAIS ESCOLHIDO */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#F5C518] text-[#1F2937] font-[700] text-xs uppercase tracking-wider shadow-sm border border-[#eab308] whitespace-nowrap">
              MAIS ESCOLHIDO
            </div>

            <div>
              {/* Nome, Preço e Pagamento único Centralizados */}
              <div className="text-center mb-8">
                <h3 className="text-[#1F2937] font-[700] text-2xl mb-3">
                  Plano Completo
                </h3>
                <div className="mb-1">
                  <span className="text-[#F5C518] font-[800] text-5xl sm:text-6xl">
                    R$27
                  </span>
                </div>
                <p className="text-[#6B7280] font-[400] text-sm">
                  Pagamento único.
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {completeItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {item.isBonus ? (
                      <Gift 
                        className="w-5 h-5 text-[#F5C518] flex-shrink-0 mt-0.5" 
                      />
                    ) : (
                      <Check 
                        className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" 
                        strokeWidth={3.5}
                      />
                    )}
                    <span className={`text-[#1F2937] text-sm sm:text-base leading-snug ${item.isBonus ? 'font-[600] text-[#1F2937]' : 'font-[400]'}`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              id="btn-plano-completo"
              onClick={() => onSelectPlan('Plano Completo')}
              className="w-full py-4 px-6 bg-[#16A34A] hover:bg-[#15803d] active:scale-[0.98] text-white font-[700] text-base rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg text-center border border-[#16A34A]"
            >
              QUERO O PLANO COMPLETO
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
