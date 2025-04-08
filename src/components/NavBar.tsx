
import { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <Scale size={28} className="text-lawyer-gold" />
            <span className="font-serif text-xl font-bold text-lawyer-navy">
              CASTRO ADVOCACIA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-lawyer-navy hover:text-lawyer-gold transition-colors">Início</a>
            <a href="#about" className="text-lawyer-navy hover:text-lawyer-gold transition-colors">Sobre</a>
            <a href="#practice" className="text-lawyer-navy hover:text-lawyer-gold transition-colors">Áreas de Atuação</a>
            <a href="#contact" className="text-lawyer-navy hover:text-lawyer-gold transition-colors">Contato</a>
            <a href="tel:+5511999999999" className="bg-lawyer-navy hover:bg-lawyer-dark-blue text-white py-2 px-4 rounded transition-colors">
              (11) 99999-9999
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-lawyer-navy focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-lawyer-navy hover:text-lawyer-gold py-2 transition-colors" onClick={toggleMobileMenu}>Início</a>
            <a href="#about" className="text-lawyer-navy hover:text-lawyer-gold py-2 transition-colors" onClick={toggleMobileMenu}>Sobre</a>
            <a href="#practice" className="text-lawyer-navy hover:text-lawyer-gold py-2 transition-colors" onClick={toggleMobileMenu}>Áreas de Atuação</a>
            <a href="#contact" className="text-lawyer-navy hover:text-lawyer-gold py-2 transition-colors" onClick={toggleMobileMenu}>Contato</a>
            <a href="tel:+5511999999999" className="bg-lawyer-navy text-white py-2 px-4 rounded inline-block w-fit transition-colors">
              (11) 99999-9999
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
