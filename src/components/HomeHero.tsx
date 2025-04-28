
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const HomeHero = () => {
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
            <img 
              src="https://images.unsplash.com/photo-1642091470771-c8180711a56c?ixlib=rb-4.0.3&auto=format&fit=crop&w=668&h=668&q=80" 
              alt="Técnico instalando ar condicionado" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
