
import { FileText, Briefcase, Shield, Scale, Gavel, Clock, FileSearch, FileCheck, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      id: 1,
      title: 'Prisões em Flagrante',
      description: 'Ao realizar prisões em flagrante, asseguramos conduções respeitosas até a delegacia, preservando os direitos do detido. Comprometemo-nos a evitar abusos, garantindo um processo justo e transparente.',
      icon: <Shield className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      id: 2,
      title: 'Habeas Corpus',
      description: 'O habeas corpus deve ser conduzido por um profissional experiente e técnico para aumentar as chances de concessão do benefício. Nossa advocacia possui ampla experiência na impetração destes pedidos.',
      icon: <Gavel className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      title: 'Acompanhamento em Delegacias',
      description: 'Evitaremos conduções injustas e excessivas às delegacias de polícia. Estaremos ao seu lado para assegurar o pleno respeito aos seus direitos durante todo o processo investigativo.',
      icon: <FileSearch className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 4,
      title: 'Audiência de Custódia',
      description: 'A audiência de custódia é a oportunidade de ser ouvido pelo juiz, que avalia as possíveis irregularidades na prisão e decide se a pessoa pode aguardar o processo em liberdade.',
      icon: <Users className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      id: 5,
      title: 'Execução Penal',
      description: 'Realizamos o acompanhamento da execução da pena, solicitando benefícios como progressão de regime, livramento condicional, detração, remição da pena, indulto e comutação, saída temporária, autorização de visitas e outros.',
      icon: <FileCheck className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 6,
      title: 'Revogação e Relaxamento de Prisão',
      description: 'Elaboramos os requerimentos para pedidos de revogação e relaxamento da prisão preventiva com base em argumentos técnicos e jurisprudenciais sólidos.',
      icon: <Scale className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 7,
      title: 'Liberdade Provisória',
      description: 'Formulamos o requerimento de liberdade provisória para possibilitar que o cliente responda ao processo em liberdade, com argumentação técnica e fundamentada.',
      icon: <Briefcase className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      id: 8,
      title: 'ANPP',
      description: 'Oferecemos acompanhamento integral e elaboração do acordo de não persecução penal, garantindo suporte ao cliente em todas as etapas desse processo.',
      icon: <FileText className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 9,
      title: 'Maria da Penha',
      description: 'Atuamos na defesa em casos relacionados à Lei Maria da Penha, proporcionando orientação jurídica especializada e representação legal para as partes envolvidas.',
      icon: <Clock className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
  ];

  return (
    <section id="practice" className="py-20 bg-lawyer-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Briefcase size={32} className="inline-block text-lawyer-gold mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-lawyer-navy mb-4">Áreas de Atuação</h2>
          <div className="w-20 h-1 bg-lawyer-gold mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Nossa advocacia criminal cobre as principais áreas do Direito Penal, 
            oferecendo defesa especializada e estratégica em cada etapa do processo judicial.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, index) => (
            <div 
              key={area.id} 
              className={cn(
                "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover-scale",
                "animate-fade-in opacity-0"
              )}
              style={{ animationDelay: `${0.15 * (index % 3)}s` }}
              data-scroll-reveal="true"
            >
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <div className="absolute inset-0 bg-lawyer-navy/20"></div>
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-lawyer-navy/90 to-transparent">
                  <h3 className="text-xl font-bold font-serif text-white">{area.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">{area.icon}</div>
                <p className="text-gray-700">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
