
import { FileText, Briefcase, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      id: 1,
      title: 'Crimes Contra a Pessoa',
      description: 'Defesa especializada em casos de homicídio, lesão corporal e outras acusações graves contra a pessoa.',
      icon: <Shield className="h-12 w-12 text-lawyer-gold" />,
    },
    {
      id: 2,
      title: 'Crimes Contra o Patrimônio',
      description: 'Atuação em casos de roubo, furto, estelionato e outros crimes contra o patrimônio, com estratégias eficazes de defesa.',
      icon: <Briefcase className="h-12 w-12 text-lawyer-gold" />,
    },
    {
      id: 3,
      title: 'Crimes de Tráfico',
      description: 'Defesa em casos de tráfico de drogas, com abordagem personalizada para cada situação específica.',
      icon: <FileText className="h-12 w-12 text-lawyer-gold" />,
    },
    {
      id: 4,
      title: 'Crimes Financeiros',
      description: 'Especialização em defesa de acusações de crimes financeiros, lavagem de dinheiro e crimes contra o sistema financeiro.',
      icon: <Briefcase className="h-12 w-12 text-lawyer-gold" />,
    },
    {
      id: 5,
      title: 'Crimes Cibernéticos',
      description: 'Atuação moderna em casos de crimes cibernéticos e invasões digitais, área em constante evolução no Direito Penal.',
      icon: <Shield className="h-12 w-12 text-lawyer-gold" />,
    },
    {
      id: 6,
      title: 'Habeas Corpus',
      description: 'Impetração de habeas corpus e outros instrumentos para garantir a liberdade e os direitos fundamentais dos clientes.',
      icon: <FileText className="h-12 w-12 text-lawyer-gold" />,
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
                "bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover-scale",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${0.1 * (index % 3)}s` }}
            >
              <div className="mb-6">{area.icon}</div>
              <h3 className="text-xl font-bold font-serif text-lawyer-navy mb-4">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
