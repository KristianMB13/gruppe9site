import { useEffect, useState } from 'react'

const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Om <span className="gradient-text">Code 9</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Vi er fire dedikerte IT-studenter ved Universitetet i Agder som brenner for å skape innovative teknologiske løsninger.
                Vår gruppe kombinerer kreativitet med teknisk ekspertise for å levere prosjekter som gjør en reell forskjell.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Med bakgrunn innen frontend-utvikling, backend-arkitektur, fullstack-utvikling og testing, dekker vi hele spekteret
                av moderne programvareutvikling. Vi fokuserer på brukeropplevelse, skalerbarhet og kvalitet i alt vi gjør.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-code-s-slash-line text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Moderne Teknologi</h3>
                  <p className="text-sm text-gray-600">React, TypeScript, Node.js og mer</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-team-line text-2xl text-purple-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Teamarbeid</h3>
                  <p className="text-sm text-gray-600">Agile metodikk og samarbeid</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-lightbulb-line text-2xl text-green-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Innovasjon</h3>
                  <p className="text-sm text-gray-600">Kreative løsninger på komplekse problemer</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-award-line text-2xl text-orange-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kvalitet</h3>
                  <p className="text-sm text-gray-600">Høye standarder og beste praksis</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={withBase('images/Guttasmiler.jpg')}
                  alt="Gruppe 9 Team"
                  className="rounded-2xl shadow-2xl object-cover w-full h-96"
                  style={{ objectPosition: '30% 60%' }} // shift image right -> focus more on left, slightly lower
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full opacity-50 animate-float-delayed"></div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-600">Teammedlemmer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">3</div>
              <div className="text-gray-600">Store prosjekter</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">110%</div>
              <div className="text-gray-600">Dedikasjon</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-gray-600">Kreativitet</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
