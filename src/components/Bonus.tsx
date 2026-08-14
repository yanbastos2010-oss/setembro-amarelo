import React from 'react';

export const Bonus: React.FC = () => {
  const bonuses = [
    {
      id: 'bonus-1',
      tag: 'BÔNUS 1',
      title: 'Roteiro de Abordagem e Mini Palestra',
      description:
        'Roteiros prontos e pontos-chave para conduzir conversas acolhedoras, rodas de diálogo e palestras rápidas sem complicação.',
    },
    {
      id: 'bonus-2',
      tag: 'BÔNUS 2',
      title: 'Kit com 30 Artes para Redes Sociais',
      description:
        'Posts e stories prontos para divulgar suas ações de Setembro Amarelo.',
    },
    {
      id: 'bonus-3',
      tag: 'BÔNUS 3',
      title: 'Pack com 100 Tags e Etiquetas',
      description:
        'Tags, mini cartões e etiquetas prontas para complementar suas lembrancinhas.',
    },
  ];

  return (
    <section id="bonus-section" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Centralizado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 
            id="bonus-title"
            className="text-[#1F2937] font-[700] text-[26px] sm:text-[30px] md:text-[36px] leading-tight"
          >
            🎁 E você ainda recebe 3 bônus exclusivos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              id={bonus.id}
              className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#F5C518] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Tag do Bônus */}
              <div className="mb-4">
                <div className="inline-block px-3 py-1 rounded-full bg-[#FFF9DB] border border-[#F5C518]/40 text-[#1F2937] font-[700] text-xs">
                  {bonus.tag}
                </div>
              </div>

              {/* Informações do Bônus */}
              <div className="flex flex-col flex-1">
                {/* Nome do Bônus */}
                <h3 className="font-[700] text-lg sm:text-xl text-[#1F2937] mb-2 leading-snug">
                  {bonus.title}
                </h3>

                {/* Descrição */}
                <p className="font-[400] text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
