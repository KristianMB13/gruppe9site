
import { useEffect, useState } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';

const FinnPage = () => {
  // Set scroll position to top immediately, before any other effects
  useEffect(() => {
    // Force immediate scroll to top without smooth behavior
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('finn-project');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const projectImages = [
    {
      src: "https://readdy.ai/api/search-image?query=FINN.no%20website%20interface%20showing%20accessibility%20improvements%2C%20clean%20modern%20web%20design%20with%20enhanced%20contrast%20and%20clear%20navigation%2C%20real%20estate%20platform%20with%20improved%20user%20experience%2C%20light%20blue%20and%20white%20color%20scheme&width=800&height=600&seq=finn-interface&orientation=landscape",
      title: "Improved Interface",
      description: "Forbedret brukergrensesnitt med bedre tilgjengelighet"
    },
    {
      src: "https://readdy.ai/api/search-image?query=UX%20research%20and%20usability%20testing%20session%2C%20researchers%20analyzing%20FINN.no%20website%20accessibility%2C%20user%20testing%20with%20participants%2C%20modern%20office%20environment%20with%20computers%20and%20notes&width=800&height=600&seq=finn-testing&orientation=landscape",
      title: "User Testing",
      description: "Brukertesting og tilgjengelighetsevaluering"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Figma%20design%20prototypes%20for%20FINN.no%20map%20redesign%2C%20wireframes%20and%20high-fidelity%20mockups%2C%20UX%20design%20process%20with%20accessibility%20focus%2C%20clean%20interface%20design&width=800&height=600&seq=finn-prototypes&orientation=landscape",
      title: "Design Prototypes",
      description: "Figma-prototyper og wireframes"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Web%20accessibility%20analysis%20tools%20and%20WCAG%20compliance%20testing%2C%20automated%20testing%20interface%20showing%20accessibility%20improvements%2C%20professional%20web%20development%20environment&width=800&height=600&seq=finn-analysis&orientation=landscape",
      title: "Accessibility Analysis",
      description: "WCAG-evaluering og automatisert testing"
    }
  ];

  const developmentSteps = [
    {
      icon: 'ri-search-line',
      title: 'Analyse',
      description: 'Kartlegging av problemer via automatisert testing (AChecker, Wave), manuell WCAG-gjennomgang og brukertester.'
    },
    {
      icon: 'ri-draft-line',
      title: 'Skisser og wireframes',
      description: 'Vi tegnet opp forbedringsforslag med fokus på tydelig struktur, navigasjon og semantikk.'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Prototyping i Figma',
      description: 'Utvikling av low- og high-fidelity prototyper.'
    },
    {
      icon: 'ri-user-line',
      title: 'Brukertesting',
      description: 'Samme testpersoner som i første runde deltok igjen, slik at vi kunne måle forbedringer direkte.'
    }
  ];

  const uxPrinciples = [
    {
      icon: 'ri-eye-line',
      title: "Jakob's Law",
      description: "Gjenkjennelighet - brukere forventer at ting fungerer som de er vant til"
    },
    {
      icon: 'ri-cursor-line',
      title: "Fitts' Law",
      description: "Større klikkflater for bedre brukervennlighet og tilgjengelighet"
    },
    {
      icon: 'ri-time-line',
      title: "Hick's Law",
      description: "Færre valg for raskere beslutninger og mindre kognitiv belastning"
    },
    {
      icon: 'ri-star-line',
      title: "Von Restorff-effekten",
      description: "Fremheving av viktige elementer for bedre oppmerksomhet"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              FINN.no <span className="text-sky-300">Kart Redesign</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Forbedring av tilgjengelighet og brukervennlighet gjennom universell utforming
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg">
                  Evaluering og redesign av Norges største markedsplass
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-error-warning-line text-2xl text-red-600"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Utfordringen</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                FINN.no sitt kartverktøy hadde flere tilgjengelighetsbarrierer, inkludert manglende 
                overskriftsstruktur, svak kontrast, dårlig tabbordre og manglende etiketter i søkefelt.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-3xl shadow-xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-accessibility-line text-2xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold mb-6">Vår Løsning</h2>
              <p className="leading-relaxed text-lg">
                Systematisk forbedring av eksisterende løsning gjennom WCAG-evaluering, 
                brukertesting og implementering av universell utforming prinsipper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Story with Slideshow */}
      <section id="finn-project" className="py-16 bg-gradient-to-r from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Fra <span className="gradient-text">Analyse til Løsning</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Slideshow */}
              <div className="relative">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={projectImages[currentSlide].src}
                    alt={projectImages[currentSlide].title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{projectImages[currentSlide].title}</h3>
                    <p className="text-sm opacity-90">{projectImages[currentSlide].description}</p>
                  </div>
                </div>

                {/* Slide indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                        index === currentSlide 
                          ? 'bg-gradient-to-r from-sky-500 to-blue-500' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Prosjektbeskrivelse</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    I dette prosjektet evaluerte vi FINN.no sitt kartverktøy med fokus på universell 
                    utforming, tilgjengelighet og brukervennlighet. Gjennom både automatiserte tester, 
                    manuelle WCAG 2.1-evalueringer og brukertester fant vi flere barrierer.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    For å adressere utfordringene valgte vi å forbedre den eksisterende løsningen 
                    fremfor å bygge noe helt nytt. Resultatet var en betydelig økning i brukervennlighet.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-2xl p-6 border border-sky-500/20">
                  <div className="flex items-center mb-3">
                    <i className="ri-trophy-line text-2xl text-sky-600 mr-3"></i>
                    <h4 className="text-lg font-semibold text-gray-900">Målbare Resultater</h4>
                  </div>
                  <p className="text-gray-600">
                    SUS-score økte fra 45 (under akseptabelt nivå) til 77,5 - en betydelig forbedring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Utviklings<span className="gradient-text">prosess</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematisk tilnærming til tilgjengelighetsforbedringer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentSteps.map((step, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${step.icon} text-white text-2xl`}></i>
                </div>
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UX Principles */}
      <section className="py-16 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              UX-<span className="gradient-text">Prinsipper</span>
            </h2>
            <p className="text-xl text-gray-600">
              Anvendte designprinsipper for bedre brukeropplevelse
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uxPrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${principle.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Se Prosjektet i <span className="gradient-text">Aksjon</span>
            </h2>
            <p className="text-xl text-gray-600">
              Få en dypere forståelse av vårt arbeid og resultater
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/GqPU4g6jRlw"
                title="FINN.no Kart Redesign Project"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Key Improvements */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nøkkel<span className="gradient-text">forbedringer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-contrast-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedre Kontrast</h3>
              <p className="text-gray-600">
                Forbedret fargekontrast for bedre lesbarhet og tilgjengelighet
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-keyboard-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tabbordre</h3>
              <p className="text-gray-600">
                Logisk navigasjon med tastatur for bedre tilgjengelighet
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-text-spacing text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Semantisk Struktur</h3>
              <p className="text-gray-600">
                Korrekt overskriftsstruktur og etiketter for skjermlesere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interessert i vårt arbeid?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Se flere av våre prosjekter eller ta kontakt for samarbeid
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Tilbake til Portfolio
            </a>
            <a
              href="#"
              className="bg-sky-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-sky-300 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-line mr-2"></i>
              Kontakt Oss
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinnPage;
