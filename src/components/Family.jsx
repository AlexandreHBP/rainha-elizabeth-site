import React from 'react'

const Family = () => {
  const familyMembers = [
    {
      name: 'Rei George VI',
      title: 'Pai',
      relation: 'Pai',
      years: '1895-1952',
      description: 'Rei que liderou o Reino Unido durante a Segunda Guerra Mundial. Figura de apoio e proteção para Elizabeth.',
      icon: '👨‍🦳'
    },
    {
      name: 'Rainha Elizabeth',
      title: 'Rainha Mãe',
      relation: 'Mãe',
      years: '1900-2002',
      description: 'Mãe de Elizabeth, foi uma influência forte e encorajadora durante toda sua vida.',
      icon: '👸'
    },
    {
      name: 'Princesa Margaret',
      title: 'Irmã',
      relation: 'Irmã',
      years: '1930-2002',
      description: 'Irmã próxima durante a infância, conhecida como "princesa rebelde" por seu estilo de vida menos restrito.',
      icon: '👯‍♀️'
    },
    {
      name: 'Príncipe Philip',
      title: 'Duque de Edimburgo',
      relation: 'Marido',
      years: '1921-2021',
      description: 'Companheiro de 73 anos, serviu como consorte real e apoiou a Rainha em todos os aspectos de seu reinado.',
      icon: '💑'
    },
    {
      name: 'Rei Charles III',
      title: 'Rei do Reino Unido',
      relation: 'Filho Primogênito',
      years: '1948-presente',
      description: 'Sucessor ao trono, serviu como Príncipe de Gales por 64 anos. Teve uma relação complicada com a mãe.',
      icon: '👑'
    },
    {
      name: 'Princesa Anne',
      title: 'Princesa Real',
      relation: 'Filha',
      years: '1950-presente',
      description: 'Conhecida por seu trabalho incansável com organizações de caridade e seu papel ativo na família real.',
      icon: '👸'
    },
    {
      name: 'Príncipe Andrew',
      title: 'Duque de York',
      relation: 'Filho',
      years: '1960-presente',
      description: 'Serviu na Marinha Real, mas enfrentou controvérsias, incluindo conexões com Jeffrey Epstein.',
      icon: '🤴'
    },
    {
      name: 'Príncipe Edward',
      title: 'Conde de Wessex',
      relation: 'Filho Mais Novo',
      years: '1964-presente',
      description: 'Dedicou-se ao teatro e às artes, mantendo um perfil mais discreto na família real.',
      icon: '🎭'
    },
    {
      name: 'Príncipe William',
      title: 'Príncipe de Gales',
      relation: 'Neto',
      years: '1982-presente',
      description: 'Herdeiro aparente ao trono, continua o legado de serviço público de sua avó.',
      icon: '👨‍🦱'
    },
    {
      name: 'Meghan Markle',
      title: 'Duquesa de Sussex',
      relation: 'Nora',
      years: '1981-presente',
      description: 'Primeira mulher negra na família real moderna, trouxe discussões sobre racismo e diversidade.',
      icon: '👩🏽'
    }
  ]

  const familyFacts = [
    'A Rainha teve 4 filhos, 8 netos e 12 bisnetos',
    'A família real britânica é uma das mais antigas do mundo',
    'Todos os filhos da Rainha serviram nas forças armadas',
    'A Rainha era conhecida por sua devoção à família',
    'A Princesa Margaret foi considerada a "princesa rebelde" por seu estilo de vida menos restrito',
    'A relação com Charles foi complicada, especialmente durante seu casamento com Diana',
    'Meghan Markle trouxe discussões sobre racismo e diversidade para a família real',
    'A rigidez nas relações familiares causou afastamentos na família real britânica'
  ]

  return (
    <section id="family" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-royal-red">A Família Real</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          A Rainha Elizabeth II não apenas liderou uma nação, mas também uma família 
          que continua seu legado de serviço e dedicação ao povo britânico.
        </p>

                 {/* Royal Family Portrait */}
         <div className="mb-16 text-center">
           <div className="max-w-4xl mx-auto">
                                                       <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Queen_Elizabeth_II_and_Prince_Philip_2017.jpg/800px-Queen_Elizabeth_II_and_Prince_Philip_2017.jpg"
                 alt="Família Real Britânica - Rainha Elizabeth II e Príncipe Philip"
                 className="w-full h-96 object-cover rounded-2xl shadow-2xl border-4 border-royal-gold"
               />
                           <p className="text-lg text-gray-600 mt-4 italic">
                Rainha Elizabeth II e Príncipe Philip, Duque de Edimburgo (2017)
              </p>
           </div>
         </div>

        {/* Family Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {familyMembers.map((member, index) => (
            <div key={index} className="card bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-2xl font-bold text-royal-red mb-2">{member.name}</h3>
                <p className="text-lg text-royal-gold font-semibold mb-2">{member.title}</p>
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <span className="bg-royal-red text-white px-3 py-1 rounded-full text-sm font-medium">
                    {member.relation}
                  </span>
                  <span className="text-gray-500 text-sm">{member.years}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Family Facts Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-royal-gold">
          <h3 className="text-3xl font-bold text-center mb-8 text-royal-red">Fatos da Família Real</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {familyFacts.map((fact, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-royal-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-lg">{fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote about Family */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl italic text-royal-red max-w-4xl mx-auto leading-relaxed">
            "A família não é uma coisa importante. É tudo."
          </blockquote>
          <p className="text-lg text-royal-gold mt-4 font-semibold">— Rainha Elizabeth II</p>
        </div>
      </div>
    </section>
  )
}

export default Family 