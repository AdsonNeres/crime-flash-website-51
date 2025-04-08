
import { FileText, Briefcase, Shield, Scale, Book, Archive } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      id: 1,
      title: 'Crimes Contra a Pessoa',
      description: 'Defesa especializada em casos de homicídio, lesão corporal e outras acusações graves contra a pessoa.',
      icon: <Shield className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      id: 2,
      title: 'Crimes Contra o Patrimônio',
      description: 'Atuação em casos de roubo, furto, estelionato e outros crimes contra o patrimônio, com estratégias eficazes de defesa.',
      icon: <Briefcase className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      title: 'Crimes de Tráfico',
      description: 'Defesa em casos de tráfico de drogas, com abordagem personalizada para cada situação específica.',
      icon: <FileText className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 4,
      title: 'Crimes Financeiros',
      description: 'Especialização em defesa de acusações de crimes financeiros, lavagem de dinheiro e crimes contra o sistema financeiro.',
      icon: <Scale className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 5,
      title: 'Crimes Cibernéticos',
      description: 'Atuação moderna em casos de crimes cibernéticos e invasões digitais, área em constante evolução no Direito Penal.',
      icon: <Book className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 6,
      title: 'Habeas Corpus',
      description: 'Impetração de habeas corpus e outros instrumentos para garantir a liberdade e os direitos fundamentais dos clientes.',
      icon: <Archive className="h-12 w-12 text-lawyer-gold" />,
      image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
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
            oferecendo defesa especializada e estratégica para cada tipo de caso.
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
