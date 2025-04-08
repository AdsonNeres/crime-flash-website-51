
import { Shield, Award, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const stats = [
    { id: 1, value: '15+', label: 'Anos de Experiência' },
    { id: 2, value: '500+', label: 'Casos de Sucesso' },
    { id: 3, value: '98%', label: 'Taxa de Satisfação' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Silva',
      text: 'O Dr. Edson foi fundamental para a minha absolvição. Sua atuação profissional e estratégica fez toda a diferença no meu caso.',
      position: 'Cliente desde 2020',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 2,
      name: 'Roberta Mendes',
      text: 'Não tenho palavras para agradecer a dedicação e o comprometimento do Dr. Edson Neres com o meu caso. Um profissional excepcional!',
      position: 'Cliente desde 2019',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: 3,
      name: 'André Oliveira',
      text: 'Em um momento tão difícil, contar com o apoio jurídico e humano do Dr. Edson fez toda a diferença. Recomendo a todos.',
      position: 'Cliente desde 2022',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    }
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
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-serif font-bold text-lawyer-navy mb-4">Defesa Criminal de Excelência</h3>
            <p className="text-gray-700 mb-6">
              Com mais de 15 anos de experiência em Direito Criminal, o escritório de Dr. Edson Neres se destaca pela atuação em casos complexos e pelo compromisso inabalável com os direitos de seus clientes.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa equipe é formada por profissionais especializados nas diversas áreas do Direito Penal, preparados para oferecer soluções jurídicas personalizadas para cada caso.
            </p>
            <p className="text-gray-700 mb-6">
              Acreditamos que toda pessoa tem direito a uma defesa de qualidade, independentemente da gravidade da acusação. Nosso compromisso é com a justiça e com a proteção dos direitos fundamentais de nossos clientes.
            </p>
            
            <div className="flex items-center space-x-2 mb-8">
              <Award className="h-5 w-5 text-lawyer-gold" />
              <span className="text-lawyer-navy font-medium">Membro da Ordem dos Advogados do Brasil</span>
            </div>
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
        
        <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="text-center mb-10">
            <Star size={32} className="inline-block text-lawyer-gold mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-lawyer-navy mb-4">O Que Nossos Clientes Dizem</h3>
            <div className="w-16 h-1 bg-lawyer-gold mx-auto"></div>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border border-gray-200 hover:border-lawyer-gold transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12 border-2 border-lawyer-gold">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-lawyer-navy">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-lawyer-gold fill-lawyer-gold" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static mt-0 translate-y-0 -left-0" />
              <CarouselNext className="static mt-0 translate-y-0 -right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default About;
