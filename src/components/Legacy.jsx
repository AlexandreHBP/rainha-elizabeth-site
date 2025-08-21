import React from 'react'

const Legacy = () => {
  const legacyAreas = [
    {
      icon: '🏛️',
      title: 'Monarquia Moderna',
      description: 'Transformou a monarquia britânica para o século XXI, mantendo tradições enquanto abraçava mudanças sociais.',
      impact: 'Adaptação e modernização'
    },
    {
      icon: '🌐',
      title: 'Diplomacia Global',
      description: 'Estabeleceu relações diplomáticas duradouras e promoveu a cooperação internacional através da Commonwealth.',
      impact: '53 nações unidas'
    },
    {
      icon: '💝',
      title: 'Serviço Público',
      description: 'Definiu o padrão para o serviço público real, dedicando sua vida ao bem-estar do povo britânico.',
      impact: '70 anos de dedicação'
    },
    {
      icon: '🎭',
      title: 'Cultura e Tradição',
      description: 'Preservou e promoveu a rica herança cultural britânica, incluindo cerimônias reais e tradições históricas.',
      impact: 'Herança preservada'
    },
    {
      icon: '🤝',
      title: 'Unidade Nacional',
      description: 'Serviu como símbolo de unidade durante tempos de crise e mudança, oferecendo estabilidade e continuidade.',
      impact: 'Estabilidade nacional'
    },
    {
      icon: '📚',
      title: 'Educação e Caridade',
      description: 'Apoiou centenas de organizações educacionais e de caridade, impactando milhões de vidas.',
      impact: 'Milhões de vidas tocadas'
    },
    {
      icon: '🐕',
      title: 'Paixão pelos Animais',
      description: 'Era conhecida por seu amor pelos cães, especialmente os Corgis, que se tornaram símbolos da monarquia.',
      impact: 'Conexão emocional'
    },
    {
      icon: '📺',
      title: 'Mídia e Comunicação',
      description: 'Pioneira em usar televisão e mídias sociais para se conectar com o público, modernizando a imagem da monarquia.',
      impact: 'Acesso público'
    },
    {
      icon: '🏰',
      title: 'Commonwealth',
      description: 'Promoveu ativamente a Commonwealth, fazendo visitas oficiais e fortalecendo laços diplomáticos e culturais.',
      impact: 'Cooperação internacional'
    }
  ]

  const quotes = [
    {
      text: "A Rainha Elizabeth II foi a rocha sobre a qual a Grã-Bretanha foi construída.",
      author: "Boris Johnson",
      role: "Ex-Primeiro Ministro"
    },
    {
      text: "Ela personificou o que significa ser britânico.",
      author: "Tony Blair",
      role: "Ex-Primeiro Ministro"
    },
    {
      text: "Sua majestade foi uma constante em nossas vidas.",
      author: "David Cameron",
      role: "Ex-Primeiro Ministro"
    }
  ]

  return (
    <section id="legacy" className="py-20 bg-gradient-to-br from-navy to-royal-red text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white">Legado Duradouro</h2>
        <p className="text-xl text-amber-200 text-center mb-16 max-w-3xl mx-auto">
          O impacto da Rainha Elizabeth II transcende seu reinado, deixando um legado 
          que continuará a inspirar gerações futuras.
        </p>

        {/* Platinum Jubilee Image */}
        <div className="mb-16 text-center">
          <div className="max-w-4xl mx-auto">
                         <img 
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Queen_Elizabeth_II_Platinum_Jubilee_2022.jpg/800px-Queen_Elizabeth_II_Platinum_Jubilee_2022.jpg"
               alt="Rainha Elizabeth II - Jubileu de Platina 2022"
               className="w-full h-96 object-cover rounded-2xl shadow-2xl border-4 border-royal-gold"
               onError={(e) => {
                 e.target.style.display = 'none';
                 e.target.nextSibling.style.display = 'flex';
               }}
             />
            <div className="w-full h-96 bg-gradient-to-br from-royal-gold to-royal-red flex items-center justify-center text-8xl text-white rounded-2xl shadow-2xl border-4 border-royal-gold" style={{display: 'none'}}>
              🏆👑
            </div>
            <p className="text-lg text-amber-200 mt-4 italic">
              Rainha Elizabeth II durante seu Jubileu de Platina - 70 anos de reinado (2022)
            </p>
          </div>
        </div>

        {/* Legacy Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {legacyAreas.map((area, index) => (
            <div key={index} className="card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-royal-gold">{area.title}</h3>
                <p className="text-amber-100 mb-4 leading-relaxed">{area.description}</p>
                <div className="text-lg font-semibold text-royal-gold border-t border-white/20 pt-4">
                  {area.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Numbers */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-royal-gold">Números do Impacto</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-royal-gold mb-2">70+</div>
              <div className="text-amber-100">Anos de Serviço</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-royal-gold mb-2">600+</div>
              <div className="text-amber-100">Organizações</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-royal-gold mb-2">100+</div>
              <div className="text-amber-100">Países Visitados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-royal-gold mb-2">15</div>
              <div className="text-amber-100">Primeiros-Ministros</div>
            </div>
          </div>
        </div>

        {/* Quotes from Leaders */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-royal-gold">Palavras de Líderes Mundiais</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <blockquote className="text-lg italic text-amber-100 mb-4">
                  "{quote.text}"
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-royal-gold">{quote.author}</div>
                  <div className="text-sm text-amber-200">{quote.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-6 text-royal-gold">Uma Era Termina, Um Legado Continua</h3>
            <p className="text-xl text-amber-100 leading-relaxed max-w-4xl mx-auto">
              A Rainha Elizabeth II não apenas reinou sobre uma nação, mas inspirou o mundo. 
              Seu compromisso inabalável com o dever, sua compaixão pelo povo e sua capacidade 
              de se adaptar aos tempos modernos estabeleceram um padrão que continuará a guiar 
              a monarquia britânica e inspirar líderes em todo o mundo.
            </p>
            <div className="mt-8">
              <div className="text-6xl mb-4">👑</div>
              <p className="text-2xl text-royal-gold font-semibold">
                "Longa vida à Rainha"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Legacy 