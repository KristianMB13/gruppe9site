import { useEffect, useState } from 'react';

const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`

type Props = {
  orgName?: string;
  addressLine?: string;
  imageSrc?: string;
  githubUrl?: string;
};

const ContactSection: React.FC<Props> = ({
  orgName = 'Gruppe 9',
  addressLine = 'Universitetet i Agder, Kristiansand',
  imageSrc = '/images/gruppebilde.jpg',
  githubUrl = 'https://github.com/KristianMB13/gruppe9site',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: orgName,
    url: typeof window !== 'undefined' ? window.location.origin : undefined,
    about: 'Student projects and portfolio work from IT and Information Systems at the University of Agder',
  };

  const resolvedImageSrc = imageSrc?.startsWith('http') ? imageSrc : withBase(imageSrc);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kontakt og <span className="gradient-text">profiler</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Dette er et student- og porteføljeprosjekt. Bruk repoet eller medlemssidene for mer kontekst om arbeidet.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: project links */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Prosjektlenker</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <i className="ri-github-fill text-2xl text-blue-400"></i>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-blue-200">GitHub</p>
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:underline break-all"
                      >
                        KristianMB13/gruppe9site
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <i className="ri-team-line text-2xl text-emerald-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Medlemssider</p>
                    <button
                      type="button"
                      onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-white font-medium hover:underline cursor-pointer"
                    >
                      Se profiler og individuelle lenker
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-center"
                >
                  Åpne GitHub-repo
                </a>
                <button
                  type="button"
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-blue-100 text-sm font-semibold hover:bg-white/20 transition"
                >
                  Se teamet
                </button>
              </div>
            </div>

            {/* Right: image + project context */}
            <div className="space-y-8">
              <div className="relative">
                <img
                  src={resolvedImageSrc}
                  alt={`${orgName} team`}
                  className="rounded-2xl shadow-2xl object-cover w-full h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-map-pin-line text-2xl text-purple-400"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Lokasjon</h4>
                  <p className="text-blue-200">{addressLine}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-folder-line text-2xl text-orange-400"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Kontekst</h4>
                  <p className="text-blue-200">Studentprosjekt og portefølje</p>
                </div>
              </div>
            </div>
          </div>

          {/* JSON-LD (SEO) */}
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
