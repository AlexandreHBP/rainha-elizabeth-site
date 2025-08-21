import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-royal-gold rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">👑</span>
              </div>
              <span className="text-xl font-bold">Elizabeth II</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Um tributo à Rainha Elizabeth II, cuja vida de serviço e dedicação 
              continuará a inspirar gerações futuras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-royal-red">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-royal-gold transition-colors">Início</a></li>
              <li><a href="#timeline" className="text-gray-300 hover:text-royal-gold transition-colors">Linha do Tempo</a></li>
              <li><a href="#achievements" className="text-gray-300 hover:text-royal-gold transition-colors">Conquistas</a></li>
              <li><a href="#family" className="text-gray-300 hover:text-royal-gold transition-colors">Família</a></li>
              <li><a href="#legacy" className="text-gray-300 hover:text-royal-gold transition-colors">Legado</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-royal-red">Informações</h3>
            <div className="space-y-2 text-gray-300">
              <p>🏛️ Reino Unido</p>
              <p>👑 Monarquia Constitucional</p>
              <p>📅 1926 - 2022</p>
              <p>🌍 Commonwealth</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              "Que Deus abençoe a Rainha e que Deus abençoe a todos nós."
            </p>
            <div className="text-6xl mb-4">👑</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Tribute to Queen Elizabeth II. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            Desenvolvido com ❤️ usando React e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 