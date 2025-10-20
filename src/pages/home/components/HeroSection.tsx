
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(124, 58, 237, 0.8) 0%, rgba(37, 99, 235, 0.8) 100%), url('https://readdy.ai/api/search-image?query=Modern%20tech%20workspace%20with%20multiple%20monitors%20displaying%20code%20and%20data%20visualizations%2C%20clean%20minimalist%20office%20environment%20with%20natural%20lighting%2C%20professional%20software%20development%20atmosphere%2C%20contemporary%20design%20elements%2C%20soft%20purple%20and%20blue%20color%20scheme%2C%20left%20side%20should%20be%20darker%20for%20text%20overlay%2C%20right%20side%20lighter%20for%20video%20content&width=1920&height=1080&seq=hero-bg-split-purple&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left side - Text content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Code 9
              <span className="block text-3xl md:text-4xl font-normal text-purple-200 mt-2">
                Fire IT-studenter med lidenskap for teknologi
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Vi utvikler smarte løsninger med fokus på design, brukervennlighet og teknologi
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer whitespace-nowrap"
              >
                Se prosjekter
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>
              
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Lær mer om oss
                <i className="ri-arrow-down-line ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
              </button>
            </div>
          </div>

          {/* Right side - YouTube Video */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm p-4">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/9vYDOG9cJsU?start=23&autoplay=0&mute=1"
                  title="Gruppe 9 Project Showcase"
                  className="w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned at the very bottom of the viewport */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll ned</span>
          <i className="ri-arrow-down-line text-2xl"></i>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
