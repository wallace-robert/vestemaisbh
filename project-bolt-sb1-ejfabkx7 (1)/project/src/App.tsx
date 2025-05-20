import React from 'react';
import { Store, MessageCircle, Facebook, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Store className="h-10 w-10 text-primary" strokeWidth={1.5} />
            <span className="text-2xl font-semibold text-primary font-playfair">Veste Mais BH</span>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li><a href="#catalogo" className="hover:text-primary transition-colors">Catálogo</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero relative bg-cover bg-center py-24" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'}}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-playfair mb-8">Moda Atacadista com<br/>Preço de Fábrica</h1>
          <div className="inline-block bg-primary px-10 py-6 rounded-full transform -rotate-2 animate-pulse mb-8">
            <span className="block text-lg mb-1">Preço Único</span>
            <strong className="text-3xl md:text-4xl">R$ 19,90</strong>
          </div>
          <a href="https://wa.me/5531991032539?text=Oi!%20Vi%20o%20site%20de%20vocês%20e%20queria%20um%20orçamento%20rapidinho." 
             className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
            <span>Faça seu Orçamento</span>
            <MessageCircle className="h-6 w-6" />
          </a>
        </div>
      </section>

      <section id="catalogo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-playfair mb-4">Nosso Catálogo</h2>
          <p className="text-gray-600 text-center mb-12">Descubra nossas peças exclusivas por apenas R$ 19,90 cada</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="products-container">
            {/* Products will be loaded here via JavaScript */}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-playfair mb-12">Sobre a Veste Mais BH</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <p className="text-gray-600 mb-6">A Veste Mais BH é uma atacadista de roupas com preços diretos de fábrica. Oferecemos as últimas tendências da moda com qualidade e preço acessível para nossos clientes.</p>
              <p className="text-gray-600">Trabalhamos com uma ampla variedade de peças femininas para todos os estilos e ocasiões, sempre com o melhor custo-benefício do mercado.</p>
            </div>
            <div className="flex-1">
              <img src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                   alt="Veste Mais BH" 
                   className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-playfair mb-12">Visite Nossa Loja</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">Endereço</h3>
              <p className="text-gray-600">Rua Nylton Moreira Veloso, Número 13</p>
              <p className="text-gray-600">Bairro Camargos - BH/MG</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">Contato</h3>
              <p className="text-gray-600 mb-4">WhatsApp: (31) 99103-2539</p>
              <div className="flex justify-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="bg-primary p-2 rounded-full hover:bg-primary-dark transition-colors">
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                   className="bg-primary p-2 rounded-full hover:bg-primary-dark transition-colors">
                  <Facebook className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Store className="h-8 w-8" strokeWidth={1.5} />
              <span className="text-xl font-semibold font-playfair">Veste Mais BH</span>
            </div>
            <nav>
              <ul className="flex gap-6">
                <li><a href="#catalogo" className="hover:opacity-80 transition-opacity">Catálogo</a></li>
                <li><a href="#sobre" className="hover:opacity-80 transition-opacity">Sobre</a></li>
                <li><a href="#contato" className="hover:opacity-80 transition-opacity">Contato</a></li>
                <li><a href="/admin" className="hover:opacity-80 transition-opacity">Área Administrativa</a></li>
              </ul>
            </nav>
          </div>
          <div className="text-center text-sm opacity-70">
            <p>&copy; 2025 Veste Mais BH. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;