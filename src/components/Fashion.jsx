import React from 'react'

const Fashion = () => {
  const fashionElements = [
    {
      icon: '🎨',
      title: 'Cores Vibrantes',
      description: 'A Rainha era conhecida por usar roupas em cores vivas como rosa, azul, verde e amarelo, tornando-a facilmente reconhecível em eventos públicos.',
      impact: 'Reconhecibilidade'
    },
    {
      icon: '👗',
      title: 'Vestidos Acinturados',
      description: 'Seu guarda-roupa incluía vestidos acinturados e casacos longos em estilo clássico e atemporal, sempre coordenados com acessórios.',
      impact: 'Elegância clássica'
    },
    {
      icon: '👒',
      title: 'Chapéus Distintivos',
      description: 'Os chapéus eram uma parte essencial do seu visual, com uma coleção que combinava perfeitamente com suas roupas.',
      impact: 'Acessório icônico'
    },
    {
      icon: '👜',
      title: 'Luvas e Acessórios',
      description: 'Luvas de algodão ou náilon eram básicas, junto com sua bolsa preta icônica, usadas em eventos formais.',
      impact: 'Detalhes refinados'
    },
    {
      icon: '👠',
      title: 'Sapatos Confortáveis',
      description: 'Optava por sapatos pretos com saltos baixos, priorizando o conforto durante longos eventos públicos.',
      impact: 'Praticidade real'
    },
    {
      icon: '💬',
      title: 'Moda como Mensagem',
      description: 'Usava a moda não apenas para expressar estilo pessoal, mas como forma de comunicação e respeito pelas tradições.',
      impact: 'Comunicação visual'
    }
  ]

  const fashionQuotes = [
    {
      text: "A Rainha usava cores vibrantes para ser facilmente identificável em meio às multidões.",
      author: "Estilistas reais",
      role: "Análise de moda"
    },
    {
      text: "Seu estilo refletia não apenas preferências pessoais, mas também o respeito pelas tradições reais.",
      author: "Historiadores da moda",
      role: "Estudo cultural"
    },
    {
      text: "A Rainha transformou a moda real em uma ferramenta de comunicação e conexão com o público.",
      author: "Especialistas em imagem",
      role: "Análise de comunicação"
    }
  ]

  return (
    <section id="fashion" className="py-20 bg-gradient-to-br from-royal-gold to-royal-light-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white">Estilo de Vestimenta</h2>
        <p className="text-xl text-white text-center mb-16 max-w-4xl mx-auto">
          O estilo de vestimenta da Rainha Elizabeth II é reconhecido mundialmente e reflete não apenas 
          sua personalidade, mas também seu papel como monarca e sua habilidade de usar a moda como 
          ferramenta de comunicação.
        </p>

        {/* Fashion Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {fashionElements.map((element, index) => (
            <div key={index} className="card bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-5xl mb-4">{element.icon}</div>
                <h3 className="text-2xl font-bold text-royal-red mb-3">{element.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{element.description}</p>
                <div className="text-lg font-semibold text-royal-gold border-t border-gray-200 pt-4">
                  {element.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fashion Philosophy */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-royal-gold mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-royal-red">Filosofia da Moda Real</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-royal-red">Função e Forma</h4>
              <p className="text-gray-700 leading-relaxed">
                A Rainha sempre priorizou o conforto e a funcionalidade, escolhendo roupas que permitiam 
                longas horas de eventos públicos sem comprometer a elegância.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-royal-red">Tradição e Modernidade</h4>
              <p className="text-gray-700 leading-relaxed">
                Manteve um equilíbrio entre tradições reais e adaptações aos tempos modernos, 
                sempre respeitando a importância dos eventos que participava.
              </p>
            </div>
          </div>
        </div>

        {/* Fashion Quotes */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Perspectivas sobre o Estilo Real</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fashionQuotes.map((quote, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "{quote.text}"
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-royal-red">{quote.author}</div>
                  <div className="text-sm text-gray-500">{quote.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fashion Legacy */}
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <h3 className="text-3xl font-bold mb-6 text-white">Legado da Moda Real</h3>
            <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto">
              A Rainha Elizabeth II transformou a moda real em uma ferramenta de comunicação e conexão. 
              Suas escolhas de vestimenta refletiam respeito pelas tradições, praticidade para longos eventos, 
              e uma habilidade única de usar a moda para se conectar com o público de todas as idades.
            </p>
            <div className="mt-8">
              <div className="text-6xl mb-4">👑</div>
              <p className="text-2xl text-white font-semibold">
                "A moda real é sobre função, tradição e comunicação"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fashion 