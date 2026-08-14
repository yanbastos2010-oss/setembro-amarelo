import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Church, 
  Stethoscope, 
  HeartHandshake, 
  Scissors 
} from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const audiences = [
    {
      id: 'audience-1',
      title: 'Professores e Escolas',
      icon: GraduationCap,
    },
    {
      id: 'audience-2',
      title: 'Empresas e RH',
      icon: Building2,
    },
    {
      id: 'audience-3',
      title: 'Igrejas',
      icon: Church,
    },
    {
      id: 'audience-4',
      title: 'Clínicas e Profissionais da Saúde',
      icon: Stethoscope,
    },
    {
      id: 'audience-5',
      title: 'Projetos Sociais',
      icon: HeartHandshake,
    },
    {
      id: 'audience-6',
      title: 'Papeleiras e Personalizadoras',
      icon: Scissors,
    },
  ];

  return (
    <section id="pra-quem-section" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Centralizado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 
            id="pra-quem-title"
            className="text-[#1F2937] font-[700] text-[26px] sm:text-[30px] md:text-[36px] leading-tight"
          >
            Pra quem é esse material?
          </h2>
        </div>

        {/* Grid: 2 colunas no mobile (3 fileiras de 2) e 3 colunas no desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#F5C518] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFF9DB] border border-[#F5C518]/30 flex items-center justify-center flex-shrink-0 text-[#1F2937]">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1F2937]" />
                </div>
                <h3 className="font-[600] text-xs sm:text-base md:text-lg text-[#1F2937] leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
