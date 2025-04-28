
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
      src: "https://images.unsplash.com/photo-1642091470771-c8180711a56c?ixlib=rb-4.0.3&auto=format&fit=crop&w=668&h=668&q=80",
      alt: "Instalação de ar condicionado"
    },
    {
      src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=668&h=668&q=80",
      alt: "Manutenção de equipamento"
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=668&h=668&q=80",
      alt: "Planejamento e projeto"
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
                  <CheckCircle className="text-coolblue-600 h-5 w-5" />
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
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
