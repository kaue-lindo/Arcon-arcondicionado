
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
      src: "/uploads/image1.jpeg", 
      alt: "Instalação de ar condicionado"
    },
    {
      src: "/uploads/image2.jpeg",
      alt: "Manutenção de equipamento"
    },
    {
      src: "/uploads/image3.jpeg",
      alt: "Planejamento e projeto"
    },
    {
      src: "/uploads/image4.jpeg",
      alt: "Conforto térmico em ambientes"
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
