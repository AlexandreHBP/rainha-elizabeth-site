import React from 'react'

const Timeline = () => {
  const timelineEvents = [
    {
      year: '1926',
      title: 'Nascimento',
      description: 'Elizabeth Alexandra Mary Windsor nasce em 21 de abril em Mayfair, Londres, filha do Duque e Duquesa de York.',
      icon: '👶'
    },
    {
      year: '1936',
      title: 'Torna-se Herdeira',
      description: 'Com a abdicação do tio Eduardo VIII para casar com Wallis Simpson, seu pai torna-se Rei George VI e ela a herdeira do trono.',
      icon: '👑'
    },
    {
      year: '1945',
      title: 'Serviço na Guerra',
      description: 'Juntou-se ao Serviço Territorial Auxiliar, treinando como motorista e mecânica durante a Segunda Guerra Mundial.',
      icon: '⚔️'
    },
    {
      year: '1947',
      title: 'Casamento Real',
      description: 'Casa-se com Philip Mountbatten, Duque de Edimburgo, em 20 de novembro na Abadia de Westminster.',
      icon: '💒'
    },
    {
      year: '1952',
      title: 'Ascensão ao Trono',
      description: 'Torna-se Rainha aos 25 anos após a morte de seu pai, Rei George VI, em 6 de fevereiro.',
      icon: '⚡'
    },
    {
      year: '1953',
      title: 'Coroação',
      description: 'É coroada Rainha Elizabeth II na Abadia de Westminster em 2 de junho, em uma das primeiras cerimônias televisionadas.',
      icon: '🎭'
    },
    {
      year: '1957-1980',
      title: 'Descolonização',
      description: 'Testemunhou a independência de 32 países, incluindo Gana (1957), Nigéria (1960), Quênia (1963) e Zimbábue (1980).',
      icon: '🌍'
    },
    {
      year: '1977',
      title: 'Jubileu de Prata',
      description: 'Celebra 25 anos de reinado com festividades em todo o Reino Unido. No contexto da Igreja Católica, o Jubileu de Prata refere-se à celebração de 25 anos de uma instituição ou evento significativo, sendo ocasião especial para renovação da fé, perdão e reconciliação. Em tradições de casamento, as Bodas de Prata celebram 25 anos de matrimônio.',
      icon: '🎉'
    },
    {
      year: '1992',
      title: 'Annus Horribilis',
      description: 'Ano difícil com divórcios dos filhos, incêndio no Castelo de Windsor e crise da família real.',
      icon: '🔥'
    },
    {
      year: '1997',
      title: 'Morte da Princesa Diana',
      description: 'A resposta da Rainha à morte de Diana foi criticada, levando a mudanças no protocolo real.',
      icon: '🕊️'
    },
    {
      year: '2002',
      title: 'Jubileu de Ouro',
      description: 'Marca 50 anos de reinado, tornando-se a segunda monarca britânica a alcançar este marco.',
      icon: '🥇'
    },
    {
      year: '2012',
      title: 'Jubileu de Diamante',
      description: 'Celebra 60 anos de reinado, coincidindo com os Jogos Olímpicos de Londres.',
      icon: '💎'
    },
    {
      year: '2016',
      title: 'Brexit',
      description: 'O Reino Unido vota pela saída da União Europeia, um dos momentos mais divisivos de seu reinado.',
      icon: '🇪🇺'
    },
    {
      year: '2020',
      title: 'Pandemia COVID-19',
      description: 'Faz discursos inspiradores durante a pandemia, demonstrando adaptabilidade da monarquia.',
      icon: '🦠'
    },
    {
      year: '2022',
      title: 'Jubileu de Platina',
      description: 'Torna-se a primeira monarca britânica a celebrar 70 anos de reinado.',
      icon: '🏆'
    },
    {
      year: '2022',
      title: 'Falecimento',
      description: 'Falece em 8 de setembro no Castelo de Balmoral, Escócia, aos 96 anos.',
      icon: '🕊️'
    }
  ]

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-royal-red">Linha do Tempo</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Uma jornada através dos momentos mais significativos da vida da Rainha Elizabeth II, 
          desde seu nascimento até seu legado duradouro.
        </p>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-royal-gold h-full hidden lg:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:space-x-8`}>
                
                 {/* Timeline Dot - Hidden on mobile */}
                 <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-royal-gold rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-royal-gold hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                      <span className="text-3xl">{event.icon}</span>
                      <h3 className="text-2xl font-bold text-royal-red">{event.title}</h3>
                    </div>
                    <div className="text-4xl font-bold text-royal-gold mb-3">{event.year}</div>
                    <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                  </div>
                </div>

                {/* Spacer for mobile */}
                <div className="md:hidden w-full h-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline 