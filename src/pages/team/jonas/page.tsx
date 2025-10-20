import { useEffect, useState } from 'react'
import Navbar from '../../../components/feature/Navbar'
import Footer from '../../../components/feature/Footer'

const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`

const JonasPage = () => {
  // Set scroll position to top immediately, before any other effects
  useEffect(() => {
    // Force immediate scroll to top without smooth behavior
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('jonas-profile')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const competencies = [
    { category: 'Front-End', skills: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Figma'] },
    { category: 'Back-End', skills: ['Python', 'Java'] },
    { category: 'Database', skills: ['MySQL'] },
    { category: 'Utviklerverktøy', skills: ['GitHub', 'Docker', 'Visual Studio', 'Visual Studio Code', 'Trello'] },
  ]

  const interests = [
    { icon: 'ri-computer-line', title: 'PC & Teknologi', description: 'Bygget min egen PC og systemforståelse' },
    { icon: 'ri-palette-line', title: 'Design', description: 'Kreativitet og brukervennlige løsninger' },
    { icon: 'ri-boxing-line', title: 'Kampsport', description: 'Aktiv innen kampsport og trening' },
    { icon: 'ri-football-line', title: 'Sport', description: 'Fotball og styrketrening' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={withBase('images/jonas.jpg')}
                    alt="Jonas Moen Pettersen"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-30"></div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Jonas Moen <span className="gradient-text">Pettersen</span>
                </h1>
                <p className="text-xl text-gray-600 mb-6">23 år gammel • Ski • IT og informasjonssystemer</p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <i className="ri-github-fill text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Kort om meg</h3>
                <p className="text-gray-600 leading-relaxed">
                  Student med variert kompetanse og kreativitet som styrke. Interessert i design, programmering og kunstig
                  intelligens. Trives med å finne løsninger som kombinerer praktiske behov og nye ideer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="jonas-profile" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Om <span className="gradient-text">Jonas</span>
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>
                  Jeg heter Jonas, er 23 år gammel og kommer fra Ski. Tidligere arbeidserfaringer har bidratt til å gi meg
                  gode samarbeidsevner, struktur i arbeidsprosesser og viktige sosiale ferdigheter. I tillegg har jeg bygget
                  min egen PC, noe som har gitt meg innsikt i både maskinvare og systemforståelse.
                </p>

                <p>
                  I gruppe arbeid bidrar jeg med variert kompetanse hvor kreativitet er en av mine styrker og jeg trives med å
                  finne løsninger som kombinerer praktiske behov og nye ideer.
                </p>

                <p>
                  Innen IT interesserer jeg meg spesielt for design, programmering og kunstig intelligens. Jeg liker å jobbe med
                  prosjekter der tekniske løsninger og brukervennlighet henger sammen, og er motivert av å samarbeide med andre
                  for å nå gode resultater.
                </p>

                <p>
                  På fritiden driver jeg med pc og er aktiv innen sport, særlig kampsport, fotball og styrketrening. Jeg setter pris
                  på sosiale aktiviteter og liker å holde en god balanse mellom studier, trening og fritid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Relevante <span className="gradient-text">Kompetanseområder IT</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((comp, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{comp.category}</h3>
                <div className="space-y-2">
                  {comp.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interesser & <span className="gradient-text">Hobbyer</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${interest.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{interest.title}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">La oss samarbeide!</h2>
          <p className="text-xl text-purple-100 mb-8">Interessert i å jobbe sammen eller lære mer om mine prosjekter?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-github-fill mr-2"></i>
              Se GitHub
            </a>
            <a
              href="#"
              className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-linkedin-fill mr-2"></i>
              Kontakt på LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default JonasPage
