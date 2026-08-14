import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como recebo os materiais?',
      answer: 'Após a confirmação do pagamento, você recebe o acesso aos arquivos digitais.',
    },
    {
      question: 'O produto é físico?',
      answer: 'Não. Todo o material é 100% digital.',
    },
    {
      question: 'Posso imprimir em casa?',
      answer: 'Sim. Você pode imprimir em casa ou levar os arquivos até uma gráfica.',
    },
    {
      question: 'Preciso editar os modelos?',
      answer: 'Não. Os modelos já estão prontos para impressão.',
    },
    {
      question: 'Posso imprimir quantas vezes quiser?',
      answer: 'Sim. Você pode utilizar os arquivos sempre que precisar.',
    },
    {
      question: 'Os bônus estão incluídos no Plano Básico?',
      answer: 'Não. Os 3 bônus são exclusivos do Plano Completo.',
    },
    {
      question: 'Posso usar os modelos para produzir lembrancinhas para meus clientes?',
      answer: 'Sim. Papeleiras e personalizadoras podem utilizar os modelos para produzir lembrancinhas físicas para seus clientes.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 
            id="faq-title"
            className="text-[#1F2937] font-[700] text-[26px] sm:text-[30px] md:text-[36px] leading-tight"
          >
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index + 1}`}
                className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#F5C518]/60 transition-colors overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index + 1}`}
                >
                  <h3 className="text-[#1F2937] font-[600] text-base sm:text-lg leading-snug">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full bg-[#FFF9DB] flex items-center justify-center flex-shrink-0 text-[#1F2937] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#F5C518]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index + 1}`}
                    className="px-6 pb-6 pt-1 text-[#6B7280] font-[400] text-sm sm:text-base leading-relaxed border-t border-[#E5E7EB]/50"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
