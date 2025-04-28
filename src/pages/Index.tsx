
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HomeHero from '@/components/HomeHero';
import ServiceCard from '@/components/ServiceCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AirVent, Tool, Thermometer, RefreshCw, Users, Phone, ThumbsUp, WrenchIcon } from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: AirVent,
      title: 'Instalação',
      description: 'Instalação profissional de aparelhos de ar condicionado split e janela para residências e empresas.'
    },
    {
      icon: Tool,
      title: 'Manutenção Corretiva',
      description: 'Resolução rápida de problemas e defeitos em seu sistema de refrigeração.'
    },
    {
      icon: RefreshCw,
      title: 'Manutenção Preventiva',
      description: 'Serviços periódicos para evitar problemas futuros e garantir o melhor desempenho.'
    },
    {
      icon: WrenchIcon,
      title: 'Higienização',
      description: 'Limpeza completa que elimina fungos e bactérias, melhorando a qualidade do ar.'
    }
  ];

  const stats = [
    { value: '+500', label: 'Clientes Satisfeitos' },
    { value: '+1000', label: 'Instalações Realizadas' },
    { value: '+10', label: 'Anos de Experiência' },
    { value: '100%', label: 'Garantia de Serviço' },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <HomeHero />

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em climatização para sua residência ou empresa, com profissionais altamente qualificados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=668&h=668&q=80" 
                alt="Técnicos de ar condicionado" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Sobre a Frio Perfeito</h2>
              <p className="text-gray-600">
                Somos uma empresa especializada em soluções completas para ar condicionado. Com mais de 10 anos de mercado, oferecemos serviços de instalação, manutenção e higienização de equipamentos de ar condicionado para clientes residenciais e comerciais.
              </p>
              <p className="text-gray-600">
                Nosso compromisso é com a qualidade do serviço e satisfação total dos nossos clientes. Trabalhamos com uma equipe técnica altamente qualificada e utilizamos ferramentas e equipamentos modernos para garantir o melhor resultado.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-3">
                  <ThumbsUp className="text-coolblue-600 h-5 w-5" />
                  <span>Serviço de Qualidade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-coolblue-600 h-5 w-5" />
                  <span>Equipe Qualificada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Thermometer className="text-coolblue-600 h-5 w-5" />
                  <span>Tecnologia Moderna</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-coolblue-600 h-5 w-5" />
                  <span>Atendimento Rápido</span>
                </div>
              </div>
              
              <Button asChild variant="outline">
                <Link to="/sobre">Saiba Mais Sobre Nós</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-coolblue-600 text-white py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-coolblue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Entre em Contato Agora Mesmo</h2>
            <p className="text-lg text-gray-600">
              Solicite um orçamento sem compromisso e descubra como podemos ajudar você a ter o ambiente perfeito com nossos serviços de ar condicionado.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button asChild size="lg">
                <Link to="/contato">Solicitar Orçamento</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    />
                  </svg>
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Index;
