
import { useEffect, useState } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';

const IKStartPage = () => {
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

    const element = document.getElementById('ikstart-project');
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
    src: "/gruppe9site/images/ikstart/figma1.jpg",
    title: "Design Sketches",
    description: "Tidlige skisser og wireframes"
},


    {
      src: "https://readdy.ai/api/search-image?query=University%20students%20working%20together%20on%20mobile%20app%20project%2C%20collaborative%20teamwork%2C%20laptops%20and%20notebooks%20on%20table%2C%20focused%20discussion%2C%20modern%20study%20environment%2C%20group%20project%20development&width=800&height=600&seq=ikstart-team&orientation=landscape",
      title: "Teamwork",
      description: "Samarbeid og utvikling"
    },
    {
      src: "/gruppe9site/images/ikstart/figma3.png",
      title: "Final Prototype",
      description: "Ferdig Figma-prototype"
},

   {
    src: "/gruppe9site/images/ikstart/start-stadion.png",
    title: "Problem Identification",
    description: "Lange køer i kioskområdene"
},

  ];

  const developmentSteps = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Tankekart og idémyldring',
      description: 'Vi utforsket utfordringene og mulige løsninger gjennom workshops.'
    },
    {
      icon: 'ri-route-line',
      title: 'Navigasjonskart',
      description: 'Vi kartla strukturen i appen, inkludert sider som hjem, meny, bestilling og profil.'
    },
    {
      icon: 'ri-draft-line',
      title: 'Wireframes',
      description: 'Vi designet skisser av de viktigste skjermene for å sikre en enkel og brukervennlig reise.'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Figma-prototype',
      description: 'Til slutt utviklet vi en interaktiv prototype med Start sine gule og svarte profilfarger.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-yellow-400 to-black">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IK Start <span className="text-yellow-400">Digital Matapp</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              En innovativ løsning for å forbedre kampdagsopplevelsen på Sparebanken Sør Arena
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg">
                  Utviklet av studenter fra Universitetet i Agder
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
                Publikum opplevde lange køer i kioskområdene, spesielt i pausen, noe som skapte 
                frustrasjon og svekket opplevelsen på Sparebanken Sør Arena.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-xl p-8 text-black">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-2xl text-black"></i>
              </div>
              <h2 className="text-3xl font-bold mb-6">Vår Løsning</h2>
              <p className="leading-relaxed text-lg">
                En matapp som lar supportere forhåndsbestille mat og drikke, motta varsel når 
                bestillingen er klar, og hente maten uten å stå i kø.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Story with Slideshow */}
      <section id="ikstart-project" className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Fra <span className="gradient-text">Idé til Ferdig Produkt</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
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
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
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
                    I samarbeid med IK Start utviklet vi en løsning for å forbedre kampdagsopplevelsen 
                    på Sparebanken Sør Arena. Publikum opplevde lange køer i kioskområdene, spesielt 
                    i pausen, noe som skapte frustrasjon og svekket opplevelsen.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Vår løsning ble en matapp som lar supportere forhåndsbestille mat og drikke, 
                    motta varsel når bestillingen er klar, og hente maten uten å stå i kø.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-400/10 to-black/10 rounded-2xl p-6 border border-yellow-400/20">
                  <div className="flex items-center mb-3">
                    <i className="ri-trophy-line text-2xl text-yellow-600 mr-3"></i>
                    <h4 className="text-lg font-semibold text-gray-900">IK Start Partnership</h4>
                  </div>
                  <p className="text-gray-600">
                    Utviklet i tett samarbeid med IK Start for å løse reelle utfordringer på stadion.
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
              Arbeidet fulgte prinsippene for tjenestedesign og designtenkning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentSteps.map((step, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${step.icon} text-white text-2xl`}></i>
                </div>
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm mr-3">
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

      {/* Video Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
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
                src="https://www.youtube.com/embed/ma4pgFfeGYQ"
                title="IK Start Digital Matapp Project"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nøkkel<span className="gradient-text">funksjoner</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shopping-cart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Forhåndsbestilling</h3>
              <p className="text-gray-600">
                Bestill mat og drikke før kampen eller i pausen for å unngå køer
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-notification-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Varsling</h3>
              <p className="text-gray-600">
                Få beskjed når bestillingen din er klar for henting
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tidsbesparelse</h3>
              <p className="text-gray-600">
                Hent maten din uten å stå i kø og miss mindre av kampen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interessert i vårt arbeid?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
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
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300 whitespace-nowrap cursor-pointer"
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

export default IKStartPage;
