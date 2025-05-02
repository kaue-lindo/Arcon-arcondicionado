
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  AirVent, WrenchIcon, RefreshCw, Thermometer, 
  Fan, ActivitySquare, CheckCircle
} from 'lucide-react';

const ServicosPage = () => {
  const services = [
    {
      icon: AirVent,
      title: 'Instalação de Ar Condicionado',
      description: 'Realizamos instalação profissional de equipamentos de ar condicionado split, janela e multi-split para ambientes residenciais, comerciais e industriais.',
      features: [
        'Instalação de todos os tipos de ar condicionado',
        'Adequação de infraestrutura elétrica',
        'Instalação de drenos e tubulações',
        'Testes de funcionamento e calibração'
      ],
      image: "/lovable-uploads/b4444fab-fbc9-4afc-b85e-56c06c1a9f2e.png"
    },
    {
      icon: WrenchIcon,
      title: 'Manutenção Corretiva',
      description: 'Serviço especializado de diagnóstico e reparo de falhas em equipamentos de ar condicionado com atendimento rápido e eficiente.',
      features: [
        'Reparo de vazamentos de gás',
        'Diagnóstico eletrônico de falhas',
        'Substituição de componentes danificados',
        'Correção de problemas elétricos'
      ],
      image: "/lovable-uploads/6b5a9c5d-560e-4293-ba7f-51dad600ba34.png"
    },
    {
      icon: RefreshCw,
      title: 'Manutenção Preventiva',
      description: 'Serviço periódico que prolonga a vida útil do seu equipamento, previne problemas futuros e mantém o desempenho ideal.',
      features: [
        'Limpeza de filtros e componentes internos',
        'Verificação de carga de gás',
        'Limpeza do sistema de drenagem',
        'Verificação do sistema elétrico'
      ],
      image: "/lovable-uploads/d39d049a-faf0-4f20-b29d-c4c8b2f7f412.png"
    },
    {
      icon: WrenchIcon,
      title: 'Higienização',
      description: 'Limpeza profunda que elimina fungos, bactérias e ácaros, melhorando significativamente a qualidade do ar interno.',
      features: [
        'Aplicação de produtos bactericidas',
        'Limpeza completa de evaporadores',
        'Limpeza de filtros',
        'Eliminação de odores indesejados'
      ],
      image: "/lovable-uploads/308521c0-a283-4a3c-a4f5-8aede1369ce0.png"
    },
    {
      icon: Fan,
      title: 'Instalação de Ventilação',
      description: 'Instalação de sistemas de ventilação e exaustão para diversos ambientes, garantindo circulação adequada do ar.',
      features: [
        'Instalação de exaustores',
        'Sistemas de ventilação industrial',
        'Ventilação para cozinhas comerciais',
        'Projetos customizados'
      ]
    },
    {
      icon: ActivitySquare,
      title: 'Consultoria em Climatização',
      description: 'Consultoria especializada para projetos de climatização, incluindo análise do ambiente e dimensionamento de equipamentos.',
      features: [
        'Dimensionamento de equipamentos',
        'Avaliação técnica de ambientes',
        'Projetos de eficiência energética',
        'Recomendações personalizadas'
      ]
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-coolblue-50 py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-lg text-gray-700 mb-8">
              Conheça nossa linha completa de serviços para ar condicionado, projetados para atender todas as suas necessidades de climatização com qualidade e eficiência.
            </p>
            <Button asChild size="lg">
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-coolblue-50 p-4 rounded-full mr-6 flex items-center justify-center w-16 h-16">
                    <service.icon className="h-8 w-8 text-coolblue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    {service.image && (
                      <div className="mb-4">
                        <img 
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    
                    <h4 className="font-medium text-gray-800 mb-2">Inclui:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="text-coolblue-600 h-5 w-5 mt-0.5 shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher Nossos Serviços?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em climatização com foco na satisfação do cliente e qualidade do serviço.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-coolblue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-coolblue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualidade Garantida</h3>
              <p className="text-gray-600">
                Garantimos a excelência em todos os serviços prestados, utilizando equipamentos modernos e técnicas avançadas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-coolblue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-coolblue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Profissionais Qualificados</h3>
              <p className="text-gray-600">
                Nossa equipe técnica é formada por profissionais certificados e com vasta experiência no mercado.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-coolblue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <WrenchIcon className="h-8 w-8 text-coolblue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Atendimento Rápido</h3>
              <p className="text-gray-600">
                Priorizamos o atendimento ágil e eficiente, respeitando o tempo dos nossos clientes e suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-coolblue-600 text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Precisa de Algum dos Nossos Serviços?</h2>
            <p className="text-lg">
              Entre em contato conosco agora mesmo e solicite um orçamento sem compromisso para o serviço que você precisa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button variant="secondary" asChild size="lg">
                <Link to="/contato">Solicitar Orçamento</Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/20" asChild size="lg">
                <a href="https://wa.me/5511981509063" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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

export default ServicosPage;
