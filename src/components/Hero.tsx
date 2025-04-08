
import { Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-lawyer-navy overflow-hidden">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjMuNSAzIDEuNGwuMS4yIDQgNmMuOCAxLjIuNyAyLjgtLjMgMy45bC0uMi4yLTQgNC0yLjgtMi44IDQuMS00LjEtNC4xLTYuMmMtLjItLjQtLjYtLjYtMS0uNkg5Yy0uNCAwLS44LjItMSAuNmwtLjEuMi00IDYgNCA0IDEuOS0xLjkgMi44IDIuOC0yLjMgMi4zLS41LjVjLS41LjUtMS4yLjgtMS45LjhIOWMtLjcgMC0xLjQtLjMtMS45LS44bC0uMi0uMi00LTRjLTEtMS0xLjItMi41LS41LTMuN2wuMS0uMiA0LTZjLjgtMS4zIDIuMi0yIDMuNy0yaDI2eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDQiLz48cGF0aCBkPSJNMzYgMGMxLjIgMCAyLjMuNSAzIDEuNGwuMS4yIDQgNmMuOCAxLjIuNyAyLjgtLjMgMy45bC0uMi4yLTQgNC0yLjgtMi44IDQuMS00LjEtNC4xLTYuMmMtLjItLjQtLjYtLjYtMS0uNkg5Yy0uNCAwLS44LjItMSAuNmwtLjEuMi00IDYgNCA0IDEuOS0xLjkgMi44IDIuOC0yLjMgMi4zLS41LjVjLS41LjUtMS4yLjgtMS45LjhIOWMtLjcgMC0xLjQtLjMtMS45LS44bC0uMi0uMi00LTRjLTEtMS0xLjItMi41LS41LTMuN2wuMS0uMiA0LTZDNy42LjcgOSAwIDEwLjUgMEgzNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <div className="inline-block p-3 bg-lawyer-gold/20 rounded-full mb-6 animate-fade-in">
              <Gavel size={32} className="text-lawyer-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Advocacia Criminal <span className="text-lawyer-gold">Especializada</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Defendendo seus direitos com excelência e dedicação. Mais de 15 anos de experiência em defesa criminal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button 
                size="lg" 
                className="bg-lawyer-gold hover:bg-lawyer-gold/90 text-lawyer-navy font-medium w-full sm:w-auto"
              >
                Agende uma Consulta
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-full h-[400px] md:h-[500px] bg-lawyer-dark-blue/50 rounded-lg shadow-2xl overflow-hidden hover-scale">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-lawyer-navy/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-white font-serif text-2xl font-bold">Dr. Edson Neres</h3>
                <p className="text-gray-300">Advogado Criminalista</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
