import React from 'react'
import ImageWithFallback from './ImageWithFallback'

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-royal-red via-royal-dark-red to-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Queen Elizabeth Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-royal-gold shadow-2xl">
              <ImageWithFallback
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Queen_Elizabeth_II_in_March_2020.jpg/800px-Queen_Elizabeth_II_in_March_2020.jpg"
                alt="Rainha Elizabeth II"
                className="w-full h-full object-cover"
                fallbackIcon="👑"
                fallbackBg="bg-royal-gold"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Rainha Elizabeth II
          </h1>
          
                     {/* Subtitle */}
           <p className="text-xl md:text-2xl mb-8 text-amber-200 max-w-4xl mx-auto leading-relaxed">
             "Declaro diante de vocês que toda a minha vida, seja longa ou curta, 
             será dedicada ao seu serviço e ao serviço de nossa grande família imperial."
           </p>
           
           {/* Additional Info */}
           <div className="text-lg text-amber-100 max-w-4xl mx-auto mb-8">
             <p className="mb-2">
               Nascida em Mayfair, Londres, em 21 de abril de 1926, Elizabeth Alexandra Mary Windsor 
               cresceu em um ambiente privilegiado com educação privada e tutores particulares.
             </p>
             <p>
               Durante a Segunda Guerra Mundial, juntou-se ao Serviço Territorial Auxiliar como 
               motorista e mecânica, demonstrando seu compromisso com o serviço público desde jovem.
             </p>
           </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-royal-gold mb-2">70</div>
              <div className="text-lg">Anos de Reinado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-royal-gold mb-2">96</div>
              <div className="text-lg">Anos de Vida</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-royal-gold mb-2">15</div>
              <div className="text-lg">Primeiros-Ministros</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="#timeline"
              className="btn-primary bg-royal-gold hover:bg-amber-600 text-lg px-8 py-4"
            >
              Explorar História
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-cream to-transparent"></div>
    </section>
  )
}

export default Hero 