import { useEffect, useState } from 'react'

const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('projects')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'IK Start – Køfri kioskopplevelse',
      category: 'Mobile App & UX Design',
      description:
        'Revolusjonerende løsning for køfri handel som forbedrer kundeopplevelsen og effektiviserer driften for IK Start.',
      image: withBase('images/IkStartappbilde.jpg'),
      tags: ['React Native', 'Payment Integration', 'UX Design', 'Real-time'],
      color: 'from-blue-500 to-cyan-500',
      route: '/projects/ikstart',
    },
    {
      title: 'Kartverket – Webapp med kart og sikker innlogging',
      category: 'Web Application & Security',
      description:
        'Avansert kartapplikasjon med robust sikkerhet og brukerautentisering for Kartverket sine tjenester.',
      image: withBase('images/kartverketlogooo.jpg'),
      tags: ['React', 'Maps API', 'Authentication', 'Security'],
      color: 'from-green-500 to-emerald-500',
      route: '/projects/kartverket',
    },
    {
      title: 'FINN.no – Forbedret kart og universell utforming',
      category: 'Accessibility & User Experience',
      description:
        'Omfattende forbedringer av kartfunksjonalitet og tilgjengelighet for å gjøre FINN.no mer inkluderende for alle brukere.',
      image: withBase('images/Finnprojectside.jpg'),
      tags: ['Accessibility', 'Maps', 'Universal Design', 'Frontend'],
      color: 'from-orange-500 to-red-500',
      route: '/projects/finn',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Våre <span className="gradient-text">Prosjekter</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utforsk våre innovative løsninger som kombinerer teknisk ekspertise med kreativ problemløsning
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onClick={() => {
                  if ((window as any).REACT_APP_NAVIGATE && project.route !== '#') {
                    (window as any).REACT_APP_NAVIGATE(project.route)
                  }
                }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                  ></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="group/btn w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                    Se detaljer
                    <i className="ri-arrow-right-line ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                  </button>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Har du et prosjekt i tankene?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Vi er alltid interessert i nye utfordringer og muligheter for samarbeid. La oss diskutere hvordan vi kan
                hjelpe deg med ditt neste prosjekt.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
              >
                Kontakt oss
                <i className="ri-mail-line ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
