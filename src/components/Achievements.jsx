import React from 'react'

const Achievements = () => {
  const achievements = [
    {
      icon: '🌍',
      title: 'Líder Global',
      description: 'Chefiou a Commonwealth de 53 nações, promovendo cooperação internacional e desenvolvimento.',
      stats: '53 países'
    },
    {
      icon: '🤝',
      title: 'Diplomata Excepcional',
      description: 'Realizou mais de 100 visitas de estado e encontrou com líderes mundiais de 5 continentes.',
      stats: '100+ visitas'
    },
    {
      icon: '📚',
      title: 'Educação e Cultura',
      description: 'Patrocinou mais de 600 organizações e instituições educacionais e culturais.',
      stats: '600+ organizações'
    },
    {
      icon: '🏥',
      title: 'Serviço Comunitário',
      description: 'Apoiou inúmeras causas de caridade, saúde e bem-estar social.',
      stats: 'Incontáveis vidas'
    },
    {
      icon: '⚖️',
      title: 'Estabilidade Política',
      description: 'Manteve estabilidade constitucional durante décadas de mudanças políticas e sociais.',
      stats: '70 anos'
    },
    {
      icon: '🎯',
      title: 'Adaptação Moderna',
      description: 'Guiou a monarquia através da era digital e mudanças sociais do século XXI.',
      stats: 'Era digital'
    }
  ]

  const records = [
    {
      title: 'Reinado Mais Longo',
      value: '70 anos e 214 dias',
      description: 'Monarca britânica com o reinado mais longo da história'
    },
    {
      title: 'Monarca Mais Idosa',
      value: '96 anos',
      description: 'Monarca britânica que viveu mais tempo'
    },
    {
      title: 'Jubileu de Platina',
      value: 'Primeira',
      description: 'Primeira monarca britânica a celebrar 70 anos de reinado'
    },
    {
      title: 'Visitas Internacionais',
      value: '100+ países',
      description: 'Monarca mais viajada da história britânica'
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-royal-red to-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white">Conquistas e Realizações</h2>
        <p className="text-xl text-amber-200 text-center mb-16 max-w-3xl mx-auto">
          Durante seus 70 anos de reinado, a Rainha Elizabeth II estabeleceu recordes 
          e deixou um legado de serviço e dedicação incomparáveis.
        </p>

        {/* Main Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-royal-gold">{achievement.title}</h3>
                <p className="text-amber-100 mb-4 leading-relaxed">{achievement.description}</p>
                <div className="text-xl font-bold text-royal-gold">{achievement.stats}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Records Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-center mb-8 text-royal-gold">Recordes Históricos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {records.map((record, index) => (
              <div key={index} className="text-center">
                <div className="bg-royal-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">🏆</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{record.title}</h4>
                <div className="text-2xl font-bold text-royal-gold mb-2">{record.value}</div>
                <p className="text-sm text-amber-100">{record.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl italic text-amber-200 max-w-4xl mx-auto leading-relaxed">
            "O trabalho é o preço que pagamos pelo amor. É o trabalho que nos dá a vida, 
            e é o amor que nos dá a razão para viver."
          </blockquote>
          <p className="text-lg text-amber-100 mt-4">— Rainha Elizabeth II</p>
        </div>
      </div>
    </section>
  )
}

export default Achievements 