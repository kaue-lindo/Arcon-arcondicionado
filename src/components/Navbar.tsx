
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Snowflake className="h-8 w-8 text-arcon-blue" />
            <span className="font-bold text-xl text-arcon-dark">ARCON</span>
            <span className="text-arcon-dark text-sm">Ar Condicionado</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-arcon-blue transition-colors font-medium">Home</Link>
            <Link to="/servicos" className="text-gray-700 hover:text-arcon-blue transition-colors font-medium">Serviços</Link>
            <Link to="/sobre" className="text-gray-700 hover:text-arcon-blue transition-colors font-medium">Sobre Nós</Link>
            <Link to="/contato" className="text-gray-700 hover:text-arcon-blue transition-colors font-medium">Contato</Link>
            <Button variant="default" asChild className="ml-4 bg-arcon-blue hover:bg-arcon-blue/90">
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-arcon-blue focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-arcon-blue px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/servicos" 
                className="text-gray-700 hover:text-arcon-blue px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/sobre" 
                className="text-gray-700 hover:text-arcon-blue px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/contato" 
                className="text-gray-700 hover:text-arcon-blue px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <Button variant="default" asChild className="mt-2 w-full bg-arcon-blue hover:bg-arcon-blue/90">
                <Link to="/contato" onClick={() => setIsOpen(false)}>Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
