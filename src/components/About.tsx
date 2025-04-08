
import { Shield, Award, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

/**
 * About Component
 * 
 * Displays information about the law firm, including statistics,
 * description, and client testimonials with enhanced scroll effects
 */
const About = () => {
  // Statistics data to be displayed in cards
  const stats = [
    { id: 1, value: '10+', label: 'Anos de Experiência' },
    { id: 2, value: '600+', label: 'Casos de Sucesso' },
    { id: 3, value: '98%', label: 'Taxa de Satisfação' },
  ];

  // Client testimonials with enhanced text
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Silva',
      text: 'Atendimento excelente e confiável. Me senti acolhido do início ao fim.',
    },
    {
      id: 2,
      name: 'Roberta Mendes',
      text: 'Profissionalismo e dedicação. Dr. Edson é referência!',
    },
    {
      id: 3,
      name: 'André Oliveira',
      text: 'Consegui minha liberdade graças à atuação impecável do escritório.',
    },
    {
      id: 4,
      name: 'Fernanda Costa',
      text: 'Serviço jurídico de excelência. Recomendo a todos que precisam de suporte legal competente.',
    },
    {
      id: 5,
      name: 'Marcelo Souza',
      text: 'Comprometimento com o cliente e conhecimento técnico impressionante. Muito grato pela defesa.',
    }
  ];

  // Reference for the carousel API
  const carouselRef = useRef(null);

  // Effect to handle the focus zoom effect on visible testimonials
  useEffect(() => {
    const handleScroll = () => {
      // Only run if carousel is mounted
      if (!carouselRef.current) return;
      
      // Get all carousel items
      const items = document.querySelectorAll('.testimonial-item');
      if (!items.length) return;

      // Get the center point of the viewport
      const viewportCenter = window.innerWidth / 2;
      
      // Check each item's position relative to center
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distanceFromCenter = Math.abs(viewportCenter - itemCenter);
        
        // Calculate scale based on distance from center (max 1.1, min 0.95)
        const maxDistance = window.innerWidth / 2;
        const scale = 1 + 0.15 * (1 - Math.min(distanceFromCenter / maxDistance, 1));
        
        // Apply scale transform
        (item as HTMLElement).style.transform = `scale(${scale})`;
        
        // Also adjust opacity for better focus effect
        const opacity = 0.7 + 0.3 * (1 - Math.min(distanceFromCenter / maxDistance, 1));
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    // Add scroll event listener to carousel content
    const carouselContent = document.querySelector('.embla__container');
    if (carouselContent) {
      carouselContent.addEventListener('scroll', handleScroll);
      // Initial check
      setTimeout(handleScroll, 100);
    }

    // Clean up event listener
    return () => {
      const carouselContent = document.querySelector('.embla__container');
      if (carouselContent) {
        carouselContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <Shield size={32} className="inline-block text-lawyer-gold mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-lawyer-navy mb-4">Sobre Nós</h2>
          <div className="w-20 h-1 bg-lawyer-gold mx-auto"></div>
        </div>

        {/* About content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-serif font-bold text-lawyer-navy mb-4">Defesa Criminal de Excelência</h3>
            <p className="text-gray-700 mb-6">
              Com mais de 10 anos de experiência em Direito Criminal, o escritório de Dr. Edson Neres se destaca pela atuação em casos complexos e pelo compromisso inabalável com os direitos de seus clientes.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa equipe é formada por profissionais especializados nas diversas áreas do Direito Penal, preparados para oferecer soluções jurídicas personalizadas para cada caso.
            </p>
            <p className="text-gray-700 mb-6">
              Acreditamos que toda pessoa tem direito a uma defesa de qualidade, independentemente da gravidade da acusação. Nosso compromisso é com a justiça e com a proteção dos direitos fundamentais de nossos clientes.
            </p>
            
            {/* Credentials badge */}
            <div className="flex items-center space-x-2 mb-8">
              <Award className="h-5 w-5 text-lawyer-gold" />
              <span className="text-lawyer-navy font-medium">Membro da Ordem dos Advogados do Brasil</span>
            </div>
          </div>

          {/* Stats grid */}
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
        
        {/* Testimonials section */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="text-center mb-10">
            <Star size={32} className="inline-block text-lawyer-gold mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-lawyer-navy mb-4">O Que Nossos Clientes Dizem</h3>
            <div className="w-16 h-1 bg-lawyer-gold mx-auto"></div>
          </div>
          
          {/* Enhanced carousel with focus effect */}
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
            ref={carouselRef}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="md:basis-1/2 lg:basis-1/3 px-2 testimonial-item transition-all duration-300"
                >
                  <Card className="border border-gray-200 hover:border-lawyer-gold transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h4 className="font-medium text-lawyer-navy text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                      {/* Star rating */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-lawyer-gold fill-lawyer-gold" />
                        ))}
                      </div>
                      {/* Testimonial text */}
                      <p className="text-gray-700 italic text-lg font-serif">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigation arrows with better positioning */}
            <div className="flex justify-center mt-8 space-x-4">
              <CarouselPrevious className="static translate-y-0 -left-0 bg-white hover:bg-lawyer-light-gray border-lawyer-gold text-lawyer-navy" />
              <CarouselNext className="static translate-y-0 -right-0 bg-white hover:bg-lawyer-light-gray border-lawyer-gold text-lawyer-navy" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default About;
