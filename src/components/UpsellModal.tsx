import React from 'react';
import { X, Check, Gift } from 'lucide-react';
import { CHECKOUT_URLS } from '../config/checkout';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpsell?: () => void;
  onDeclineUpsell?: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({
  isOpen,
  onClose,
  onAcceptUpsell,
  onDeclineUpsell,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative animate-scaleUp text-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby="upsell-modal-title"
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-[#1F2937] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Headline Chamativa */}
        <h3 id="upsell-modal-title" className="text-xl sm:text-2xl font-[800] text-[#1F2937] leading-tight mb-2 pt-2">
          Espere! Leve o <span className="text-[#F5C518]">Plano Completo</span> com Desconto Especial!
        </h3>

        {/* Subheadline */}
        <p className="text-xs sm:text-sm text-[#6B7280] font-[400] leading-relaxed mb-4">
          Garanta todos os modelos + 3 bônus exclusivos e suporte por uma pequena diferença.
        </p>

        {/* Preço Centralizado */}
        <div className="bg-amber-50/40 rounded-xl p-3.5 border border-[#F5C518]/30 mb-4">
          <span className="text-xs text-[#6B7280] line-through block mb-0.5">De R$27 por apenas</span>
          <span className="text-4xl sm:text-5xl font-[800] text-[#F5C518] leading-none block">
            R$19,90
          </span>
          <span className="text-xs text-[#6B7280] mt-1 block">Pagamento único • Acesso vitalício</span>
        </div>

        {/* Benefícios Rápidos e Diretos */}
        <div className="space-y-2 text-left mb-5 bg-gray-50/80 rounded-xl p-3.5 border border-[#E5E7EB]">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1F2937]">
            <Check className="w-4 h-4 text-[#16A34A] flex-shrink-0" strokeWidth={3} />
            <span><strong>+200 Modelos</strong> Prontos para Imprimir</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1F2937]">
            <Gift className="w-4 h-4 text-[#F5C518] flex-shrink-0" />
            <span><strong>3 Bônus Exclusivos</strong> (Mini Palestra, Artes e Tags)</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1F2937]">
            <Check className="w-4 h-4 text-[#16A34A] flex-shrink-0" strokeWidth={3} />
            <span>Suporte Prioritário & Atualizações</span>
          </div>
        </div>

        {/* Botão Verde Principal */}
        <a
          href={CHECKOUT_URLS.SPECIAL_19_90}
          onClick={onAcceptUpsell}
          className="w-full py-4 px-4 bg-[#16A34A] hover:bg-[#15803d] active:scale-[0.98] text-white font-[700] text-sm sm:text-base rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg text-center border border-[#16A34A] mb-2.5 leading-tight uppercase tracking-wide block"
        >
          SIM, QUERO O PLANO COMPLETO!
        </a>

        {/* Card Visível para Recusar / Continuar com o Básico */}
        <a
          href={CHECKOUT_URLS.BASIC_10}
          onClick={onDeclineUpsell}
          className="w-full py-3 px-4 bg-gray-50/80 hover:bg-gray-100 active:scale-[0.98] text-[#4B5563] hover:text-[#1F2937] font-[500] text-xs sm:text-sm rounded-xl transition-all cursor-pointer border border-[#E5E7EB] hover:border-gray-300 text-center block"
        >
          Não, prefiro continuar com o Plano Básico
        </a>
      </div>
    </div>
  );
};
