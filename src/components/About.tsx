
import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  const stats = [
    { id: 1, value: '15+', label: 'Anos de Experiência' },
    { id: 2, value: '500+', label: 'Casos de Sucesso' },
    { id: 3, value: '98%', label: 'Taxa de Satisfação' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Shield size={32} className="inline-block text-lawyer-gold mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-lawyer-navy mb-4">Sobre Nós</h2>
          <div className="w-20 h-1 bg-lawyer-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif font-bold text-lawyer-navy mb-4">Defesa Criminal de Excelência</h3>
            <p className="text-gray-700 mb-6">
              Com mais de 15 anos de experiência em Direito Criminal, o escritório Castro Advocacia se destaca pela atuação em casos complexos e pelo compromisso inabalável com os direitos de seus clientes.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa equipe é formada por profissionais especializados nas diversas áreas do Direito Penal, preparados para oferecer soluções jurídicas personalizadas para cada caso.
            </p>
            <p className="text-gray-700">
              Acreditamos que toda pessoa tem direito a uma defesa de qualidade, independentemente da gravidade da acusação. Nosso compromisso é com a justiça e com a proteção dos direitos fundamentais de nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.id} 
                className={cn(
                  "bg-lawyer-light-gray rounded-lg p-8 text-center transform hover:shadow-lg transition-all duration-300 hover-scale",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <p className="text-4xl font-bold text-lawyer-gold mb-2">{stat.value}</p>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
