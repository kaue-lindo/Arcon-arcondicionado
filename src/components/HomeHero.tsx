
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomeHero = () => {
  const images = [
    {
      src: "/lovable-uploads/308521c0-a283-4a3c-a4f5-8aede1369ce0.png", 
      alt: "Controle de ar condicionado"
    },
    {
      src: "/lovable-uploads/b4444fab-fbc9-4afc-b85e-56c06c1a9f2e.png",
      alt: "Instalação de ar condicionado"
    },
    {
      src: "/lovable-uploads/d39d049a-faf0-4f20-b29d-c4c8b2f7f412.png",
      alt: "Manutenção de equipamento"
    },
    {
      src: "/lovable-uploads/6b5a9c5d-560e-4293-ba7f-51dad600ba34.png",
      alt: "Limpeza de ar condicionado"
    }
  ];

  return (
    <div className="hero-gradient">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
              Serviços de Ar Condicionado com Qualidade
            </h1>
            <p className="text-xl text-gray-600">
              Instalação, manutenção e limpeza realizados por profissionais qualificados para garantir sua tranquilidade e conforto.
            </p>
            
            <ul className="space-y-3">
              {[
                'Equipe técnica especializada',
                'Atendimento rápido e eficiente',
                'Garantia nos serviços prestados',
                'Melhores preços do mercado'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-coolblue-600 h-5 w-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg">
                <Link to="/contato">Solicitar Orçamento</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/servicos">Nossos Serviços</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in">
            <Carousel className="w-full max-w-lg">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-xl">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "/placeholder.svg";
                          target.alt = "Imagem não disponível";
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
