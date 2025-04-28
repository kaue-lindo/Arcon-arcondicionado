
import React from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Snowflake className="h-8 w-8 text-arcon-blue" />
              <div className="flex flex-col">
                <span className="font-bold text-xl">ARCON</span>
                <span className="text-sm">Ar Condicionado</span>
              </div>
            </div>
            <p className="text-gray-300">
              Soluções completas em instalação e manutenção de ar condicionado com qualidade, eficiência e preço justo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Mapa do Site</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-coolblue-300">Home</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-coolblue-300">Serviços</Link></li>
              <li><Link to="/sobre" className="text-gray-300 hover:text-coolblue-300">Sobre Nós</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-coolblue-300">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Serviços</h3>
            <ul className="space-y-2">
              <li><Link to="/servicos" className="text-gray-300 hover:text-coolblue-300">Instalação</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-coolblue-300">Manutenção Preventiva</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-coolblue-300">Manutenção Corretiva</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-coolblue-300">Higienização</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-coolblue-400 mt-0.5" />
                <span>(11) 98150-9063</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-coolblue-400 mt-0.5" />
                <a href="mailto:arcon-arcondicionado@hotmail.com" className="hover:text-coolblue-300">
                  arcon-arcondicionado@hotmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-coolblue-400 mt-0.5" />
                <span>São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ARCON. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
