
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Mensagem enviada",
      description: "Entraremos em contato o mais breve possível.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-lawyer-gold" />,
      title: 'Telefone',
      content: '(11) 99999-9999',
    },
    {
      icon: <Mail className="h-5 w-5 text-lawyer-gold" />,
      title: 'Email',
      content: 'contato@castroadvocacia.com.br',
    },
    {
      icon: <MapPin className="h-5 w-5 text-lawyer-gold" />,
      title: 'Endereço',
      content: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Mail size={32} className="inline-block text-lawyer-gold mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-lawyer-navy mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-lawyer-gold mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Estamos prontos para ajudar em seu caso. Entre em contato para agendar uma consulta confidencial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif font-bold text-lawyer-navy mb-6">Envie-nos uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lawyer-gold focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lawyer-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lawyer-gold focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lawyer-gold focus:border-transparent"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-lawyer-navy hover:bg-lawyer-dark-blue text-white"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-serif font-bold text-lawyer-navy mb-6">Informações de Contato</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-lawyer-light-gray p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lawyer-navy">{item.title}</h4>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md h-[300px] hover-scale">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976869483845!2d-46.655387!3d-23.564333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1708276543017!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
