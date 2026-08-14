import React from 'react';
import { Sparkles } from 'lucide-react';

export const Carousel: React.FC = () => {
  const modelImages = [
    {
      id: 'modelo-lembrancinhas',
      src: 'https://wsrv.nl/?url=https://i.ibb.co/fYTPhnYG/lembrancinhas.png&w=900&output=webp&q=80',
      fallbackSrc: 'https://i.ibb.co/fYTPhnYG/lembrancinhas.png',
      alt: 'Modelos de lembrancinhas Setembro Amarelo',
    },
    {
      id: 'modelo-caixinhas',
      src: 'https://wsrv.nl/?url=https://i.ibb.co/4RDJfgtx/caixinhas.png&w=900&output=webp&q=80',
      fallbackSrc: 'https://i.ibb.co/4RDJfgtx/caixinhas.png',
      alt: 'Modelos de caixinhas Setembro Amarelo',
    },
    {
      id: 'modelo-adesivos',
      src: 'https://wsrv.nl/?url=https://i.ibb.co/b5zvf3W8/adesivos.png&w=900&output=webp&q=80',
      fallbackSrc: 'https://i.ibb.co/b5zvf3W8/adesivos.png',
      alt: 'Modelos de adesivos Setembro Amarelo',
    },
    {
      id: 'modelo-bamboles',
      src: 'https://wsrv.nl/?url=https://i.ibb.co/Tx0tSxcS/bamboles.png&w=900&output=webp&q=80',
      fallbackSrc: 'https://i.ibb.co/Tx0tSxcS/bamboles.png',
      alt: 'Modelos de bambolês Setembro Amarelo',
    },
  ];

  return (
    <section id="modelos-section" className="py-14 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da seção centralizado */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 
            id="modelos-title"
            className="text-[#1F2937] font-[700] text-[26px] sm:text-[30px] md:text-[36px] leading-tight"
          >
            Veja alguns dos modelos que você vai receber
          </h2>
        </div>

        {/* Imagens uma embaixo da outra com cantos arredondados */}
        <div className="flex flex-col gap-6 sm:gap-8 items-center w-full">
          {modelImages.map((image, index) => (
            <div 
              key={image.id}
              id={`modelo-card-${index + 1}`}
              className="w-full flex justify-center bg-gray-50/50 rounded-2xl sm:rounded-3xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                width="768"
                height="432"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback se o proxy falhar
                  if (e.currentTarget.src !== image.fallbackSrc) {
                    e.currentTarget.src = image.fallbackSrc;
                  }
                }}
                className="w-full max-w-3xl h-auto object-contain rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 pointer-events-none select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Texto abaixo da última imagem */}
        <div className="text-center mt-8 sm:mt-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF9DB] border border-[#F5C518]/40 text-[#1F2937] font-[700] text-base sm:text-lg md:text-xl shadow-xs">
            <Sparkles className="w-5 h-5 text-[#F5C518] flex-shrink-0" />
            <span>E muitos outros modelos...</span>
          </div>
        </div>

      </div>
    </section>
  );
};
