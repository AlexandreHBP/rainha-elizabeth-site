import React from 'react'

const Controversies = () => {
  const controversies = [
    {
      icon: '🏛️',
      title: 'Crise da Família Real',
      description: 'Durante seu reinado, a Rainha enfrentou várias crises familiares, incluindo o divórcio de três de seus filhos e as acusações contra o Príncipe Andrew.',
      impact: 'Instabilidade familiar',
      year: '1990s-2020s'
    },
    {
      icon: '🌍',
      title: 'Colonialismo e Commonwealth',
      description: 'Durante seu reinado, 32 países se tornaram independentes. Críticos argumentam que ela poderia ter feito mais para abordar o legado colonial, incluindo exploração econômica e perda de culturas locais.',
      impact: 'Questões de justiça histórica',
      year: '1950s-presente'
    },
    {
      icon: '🇰🇪',
      title: 'Independência do Quênia',
      description: 'A independência do Quênia em 1963 foi marcada pela violenta rebelião Mau Mau, com repressão social e movimentos nacionalistas.',
      impact: 'Conflitos armados',
      year: '1963'
    },
    {
      icon: '🇿🇼',
      title: 'Independência do Zimbábue',
      description: 'Zimbábue obteve independência em 1980 após conflitos armados, liderado por Robert Mugabe e Joshua Nkomo.',
      impact: 'Violência política',
      year: '1980'
    },
    {
      icon: '💰',
      title: 'Transparência Financeira',
      description: 'A família real britânica tem sido criticada pela falta de transparência em suas finanças e pelo uso de fundos públicos para manutenção de propriedades.',
      impact: 'Falta de accountability',
      year: '1990s-presente'
    },
    {
      icon: '📰',
      title: 'Cobertura da Morte da Princesa Diana',
      description: 'A resposta da Rainha à morte da Princesa Diana em 1997 foi criticada como fria e inadequada, levando a uma rara mudança de protocolo real.',
      impact: 'Crise de imagem pública',
      year: '1997'
    },
    {
      icon: '🏠',
      title: 'Escândalo do Epstein',
      description: 'As conexões do Príncipe Andrew com Jeffrey Epstein trouxeram escândalo e danos à reputação da família real, com a Rainha sendo criticada por sua gestão da crise.',
      impact: 'Dano à reputação real',
      year: '2019-2022'
    },
    {
      icon: '🌡️',
      title: 'Mudanças Climáticas',
      description: 'Críticos argumentam que a Rainha poderia ter usado sua influência para pressionar por ações mais fortes contra as mudanças climáticas durante seu longo reinado.',
      impact: 'Oportunidade perdida',
      year: '1980s-2022'
    },
    {
      icon: '🇪🇺',
      title: 'Brexit',
      description: 'O Brexit trouxe divisão na sociedade britânica, com a Rainha tendo papel simbólico durante um dos momentos mais controversos de seu reinado.',
      impact: 'Divisão nacional',
      year: '2016'
    },
    {
      icon: '🏛️',
      title: 'Movimento Black Lives Matter',
      description: 'O BLM trouxe discussões sobre colonialismo e racismo, pressionando a monarquia a olhar para os erros do passado.',
      impact: 'Pressão por mudanças',
      year: '2020-presente'
    }
  ]

  const publicOpinion = [
    {
      text: "A Rainha Elizabeth II foi uma figura controversa que representou tanto a tradição quanto a resistência à mudança.",
      author: "Historiadores",
      role: "Análise histórica"
    },
    {
      text: "Seu reinado testemunhou a transformação da monarquia, mas também expôs suas vulnerabilidades e contradições.",
      author: "Analistas políticos",
      role: "Análise política"
    },
    {
      text: "A Rainha enfrentou desafios que nenhum monarca moderno havia enfrentado, nem sempre com sucesso.",
      author: "Especialistas em monarquia",
      role: "Estudo institucional"
    }
  ]

  return (
    <section id="controversies" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-royal-red">Controvérsias e Críticas</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
          Para uma visão completa e histórica, é importante reconhecer que o reinado da Rainha Elizabeth II, 
          como qualquer período histórico, teve seus desafios e controvérsias. Esta seção apresenta uma 
          perspectiva equilibrada dos aspectos mais controversos de seu reinado.
        </p>

        {/* Controversies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {controversies.map((controversy, index) => (
            <div key={index} className="card bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
              <div className="text-center">
                <div className="text-5xl mb-4">{controversy.icon}</div>
                <h3 className="text-2xl font-bold text-royal-red mb-3">{controversy.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{controversy.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-red-600 font-semibold">{controversy.impact}</span>
                  <span className="text-gray-500">{controversy.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Historical Context */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-royal-gold mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-royal-red">Contexto Histórico</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-royal-red">Complexidade do Período</h4>
              <p className="text-gray-700 leading-relaxed">
                O reinado de 70 anos da Rainha Elizabeth II atravessou períodos de mudança social dramática, 
                transformação política e evolução cultural. Nem todas as decisões e posições foram 
                universalmente aceitas ou bem-sucedidas.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-royal-red">Responsabilidade Institucional</h4>
              <p className="text-gray-700 leading-relaxed">
                Como chefe de estado, a Rainha tinha responsabilidades constitucionais limitadas, mas 
                sua influência moral e simbólica era significativa. As críticas frequentemente refletem 
                expectativas que podem ter sido irrealistas.
              </p>
            </div>
          </div>
        </div>

        {/* Public Opinion */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-royal-red">Perspectivas Críticas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publicOpinion.map((opinion, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "{opinion.text}"
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-royal-red">{opinion.author}</div>
                  <div className="text-sm text-gray-500">{opinion.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Balanced View Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-royal-red to-royal-gold rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6">Uma Visão Equilibrada</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              A história raramente é simples ou unidimensional. A Rainha Elizabeth II foi uma figura 
              complexa que liderou durante tempos extraordinariamente desafiadores. Suas realizações 
              foram significativas, mas também houve falhas e controvérsias que fazem parte de seu legado.
            </p>
            <div className="mt-8">
              <div className="text-6xl mb-4">⚖️</div>
              <p className="text-2xl font-semibold">
                "A verdade histórica requer honestidade sobre ambos os lados"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Controversies 