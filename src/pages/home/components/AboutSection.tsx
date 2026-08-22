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
                Dette er en porteføljeside for Gruppe 9 sine studentprosjekter ved Universitetet i Agder.
                Siden samler arbeid fra studiet og viser hvordan vi har jobbet med praktiske problemstillinger, prototyper og frontend-presentasjon.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Prosjektene dekker blant annet brukeropplevelse, universell utforming, kartfunksjonalitet,
                sikkerhet og et bachelorprosjekt med AI-basert beslutningsstøtte for maritim drift.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-code-s-slash-line text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Frontend & UX</h3>
                  <p className="text-sm text-gray-600">React, TypeScript, Figma og brukerflyt</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-team-line text-2xl text-purple-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Samarbeid</h3>
                  <p className="text-sm text-gray-600">Planlegging, ansvar og felles leveranser</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-lightbulb-line text-2xl text-green-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Universell utforming</h3>
                  <p className="text-sm text-gray-600">Testing, WCAG og tilgjengelige grensesnitt</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-award-line text-2xl text-orange-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI i utvikling</h3>
                  <p className="text-sm text-gray-600">Agenter, RAG og AI-støttet arbeidsflyt</p>
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
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-600">Teammedlemmer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-600">Store prosjekter</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">UiA</div>
              <div className="text-gray-600">IT og informasjonssystemer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2026</div>
              <div className="text-gray-600">Bachelor fullført</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
