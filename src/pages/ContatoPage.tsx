
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const ContatoPage = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-coolblue-50 py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-lg text-gray-700">
              Estamos prontos para atender suas necessidades. Entre em contato conosco para tirar dúvidas, solicitar um orçamento ou agendar um serviço.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-coolblue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5">
                <Phone className="h-8 w-8 text-coolblue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Telefone</h3>
              <p className="text-gray-600 mb-2">(11) 99999-9999</p>
              <p className="text-gray-600">(11) 1234-5678</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-coolblue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5">
                <Mail className="h-8 w-8 text-coolblue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <p className="text-gray-600 mb-2">contato@frioperfeito.com.br</p>
              <p className="text-gray-600">suporte@frioperfeito.com.br</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-coolblue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5">
                <MapPin className="h-8 w-8 text-coolblue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Endereço</h3>
              <p className="text-gray-600 mb-2">Av. Paulista, 1000</p>
              <p className="text-gray-600">São Paulo - SP, 01310-100</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Envie sua Mensagem</h2>
              <p className="text-gray-600 mb-6">
                Preencha o formulário abaixo para entrar em contato conosco. Retornaremos o mais breve possível.
              </p>
              
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Informações Adicionais</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-coolblue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Horário de Atendimento</h3>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-600">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="h-6 w-6 text-coolblue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                      <p className="text-gray-600 mb-3">
                        Atendimento rápido pelo WhatsApp. Clique no botão abaixo para iniciar uma conversa.
                      </p>
                      <a 
                        href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Frio%20Perfeito." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#25D366] text-white px-4 py-2 rounded-md hover:bg-[#1da851] transition-colors"
                      >
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
                        Conversar pelo WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Nossa Localização</h3>
                  <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976521680652!2d-46.655293026073624!3d-23.561677861524245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1708539186157!5m2!1spt-BR!2sbr" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default ContatoPage;
