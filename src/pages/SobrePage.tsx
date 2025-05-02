
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Clock, Briefcase, ThumbsUp, Target } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SobrePage = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Qualidade',
      description: 'Compromisso com a excelência em todos os serviços prestados.'
    },
    {
      icon: Users,
      title: 'Respeito',
      description: 'Tratamos cada cliente com atenção e cuidado individualizado.'
    },
    {
      icon: ThumbsUp,
      title: 'Confiança',
      description: 'Construímos relações duradouras baseadas na transparência e honestidade.'
    },
    {
      icon: Target,
      title: 'Eficiência',
      description: 'Buscamos sempre as melhores soluções com agilidade e precisão.'
    }
  ];

  const brands = [
    { name: "Daikin", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Daikin_logo.svg/2560px-Daikin_logo.svg.png" },
    { name: "Carrier", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Carrier_Corporation_logo.svg/2560px-Carrier_Corporation_logo.svg.png" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" },
    { name: "LG", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/2048px-LG_symbol.svg.png" },
    { name: "Midea", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Midea_logo.svg/1200px-Midea_logo.svg.png" },
    { name: "Electrolux", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Electrolux-Logo.svg/2560px-Electrolux-Logo.svg.png" },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-coolblue-50 py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a ARCON Ar Condicionado</h1>
            <p className="text-lg text-gray-700">
              Conheça nossa história, missão, valores e porque somos referência em serviços de ar condicionado.
            </p>
          </div>
        </div>
      </div>
      
      {/* History Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/uploads/image4.jpeg" 
                alt="Nossa solução de conforto térmico" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="inline-block bg-coolblue-100 text-coolblue-800 px-4 py-1 rounded-full text-sm font-medium mb-2">
                Nossa História
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Tradição e Inovação em Climatização</h2>
              <p className="text-gray-600">
                A ARCON Ar Condicionado nasceu em 2010 com o objetivo de oferecer serviços de qualidade em instalação e manutenção de ar condicionado. O que começou como uma pequena empresa familiar se transformou em uma referência no mercado de climatização.
              </p>
              <p className="text-gray-600">
                Ao longo dos anos, investimos constantemente em treinamento da nossa equipe, equipamentos modernos e processos eficientes, sempre mantendo como prioridade a satisfação total dos nossos clientes e a qualidade dos serviços prestados.
              </p>
              <p className="text-gray-600">
                Hoje, atendemos clientes residenciais e comerciais em toda a região, com um portfólio completo de serviços que abrangem desde a instalação até a manutenção preventiva e corretiva de equipamentos de ar condicionado.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-8 w-8 text-coolblue-600" />
                <h3 className="text-2xl font-bold">Nossa Missão</h3>
              </div>
              <p className="text-gray-600">
                Proporcionar conforto térmico e bem-estar aos nossos clientes, através de serviços de climatização de alta qualidade, executados por profissionais capacitados e comprometidos com a excelência, contribuindo para a melhoria da qualidade de vida e produtividade dos ambientes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="h-8 w-8 text-coolblue-600" />
                <h3 className="text-2xl font-bold">Nossa Visão</h3>
              </div>
              <p className="text-gray-600">
                Ser reconhecida como a empresa líder em soluções de climatização em nossa região, destacando-se pela inovação, qualidade técnica e atendimento personalizado, expandindo continuamente nossa atuação e contribuindo para um mercado mais profissional e responsável.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossos valores fundamentais guiam todas as nossas ações e decisões, moldando a maneira como fazemos negócios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-coolblue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                  <value.icon className="h-8 w-8 text-coolblue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Brands We Support */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Marcas que Atendemos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com as principais marcas do mercado, garantindo qualidade e eficiência em nossos serviços.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {brands.map((brand, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                    <div className="p-4">
                      <div className="bg-white rounded-lg shadow-md p-6 h-32 flex items-center justify-center">
                        <img 
                          src={brand.logo} 
                          alt={`Logo ${brand.name}`} 
                          className="max-h-20 max-w-full"
                        />
                      </div>
                      <p className="text-center mt-3 font-medium text-gray-700">{brand.name}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher a ARCON Ar Condicionado?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Temos orgulho de oferecer serviços que se destacam pela qualidade, confiabilidade e excelência técnica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Clock className="h-8 w-8 text-coolblue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Atendimento Rápido</h3>
              <p className="text-gray-600">
                Respondemos rapidamente às suas solicitações, com agendamentos flexíveis e cumprimento rigoroso dos prazos estabelecidos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Award className="h-8 w-8 text-coolblue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Garantia de Serviço</h3>
              <p className="text-gray-600">
                Todos os nossos serviços possuem garantia, demonstrando nossa confiança na qualidade do trabalho que realizamos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Users className="h-8 w-8 text-coolblue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Equipe Qualificada</h3>
              <p className="text-gray-600">
                Nossos técnicos passam por treinamentos constantes para se manterem atualizados com as melhores práticas e tecnologias.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-coolblue-600 text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Vamos Trabalhar Juntos?</h2>
            <p className="text-lg">
              Entre em contato conosco para conhecer mais sobre nossos serviços e como podemos ajudar a criar o ambiente perfeito para você.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button variant="secondary" asChild size="lg">
                <Link to="/contato">Entrar em Contato</Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10" asChild size="lg">
                <Link to="/servicos">Conhecer Serviços</Link>
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

export default SobrePage;
