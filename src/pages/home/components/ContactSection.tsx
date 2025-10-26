import { useEffect, useState } from 'react';

// Base-aware helper (added)
const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`

type Props = {
  orgName?: string;
  email?: string;
  phone?: string;       // E.164 preferred, e.g. "+47 95000000"
  addressLine?: string; // e.g. "Universitetet i Agder, Kristiansand"
  imageSrc?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  youtubeUrl?: string;
};

const ContactSection: React.FC<Props> = ({
  orgName = 'Gruppe 9',
  email = 'Jonasmp@uia.no',
  phone = '+47 95306110',
  addressLine = 'Universitetet i Agder, Kristiansand',
  imageSrc = '/images/gruppebilde.jpg',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedField, setCopiedField] = useState<null | 'email' | 'phone'>(null);

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

  const copy = async (text: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1600);
    } catch {
      // clipboard may be blocked; silently ignore
    }
  };

  // JSON-LD (includes basic postal address since we show location)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: orgName,
    url: typeof window !== 'undefined' ? window.location.origin : undefined,
    address: addressLine
      ? {
          '@type': 'PostalAddress',
          streetAddress: addressLine,
          addressCountry: 'NO',
        }
      : undefined,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: email || undefined,
        telephone: phone || undefined,
        areaServed: 'NO',
        availableLanguage: ['Norwegian', 'English', 'Spanish', 'Bosnian'],
      },
    ],
  };

  // Resolve image with base (added)
  const resolvedImageSrc = imageSrc?.startsWith('http') ? imageSrc : withBase(imageSrc);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kontakt <span className="gradient-text">Oss</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Ta kontakt direkte via e-post eller telefon – ingen skjema nødvendig.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: direct contact actions */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Slik når du oss</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <i className="ri-mail-line text-2xl text-blue-400"></i>
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">E-post</p>
                      <a
                        href={`mailto:${email}`}
                        className="text-white font-medium hover:underline break-all"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={`mailto:${email}`}
                      className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                    >
                      Send e-post
                    </a>
                    <button
                      type="button"
                      onClick={() => copy(email, 'email')}
                      className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-blue-100 text-sm hover:bg-white/20 transition"
                      aria-live="polite"
                    >
                      {copiedField === 'email' ? 'Kopiert!' : 'Kopier'}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <i className="ri-phone-line text-2xl text-emerald-400"></i>
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Telefon</p>
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="text-white font-medium hover:underline"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="px-3 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
                    >
                      Ring oss
                    </a>
                    <button
                      type="button"
                      onClick={() => copy(phone, 'phone')}
                      className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-blue-100 text-sm hover:bg-white/20 transition"
                      aria-live="polite"
                    >
                      {copiedField === 'phone' ? 'Kopiert!' : 'Kopier'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: image + location + language (phone card removed) */}
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
                {/* Lokasjon (kept) */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-map-pin-line text-2xl text-purple-400"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Lokasjon</h4>
                  <p className="text-blue-200">{addressLine}</p>
                </div>

                {/* Språk */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-chat-3-line text-2xl text-orange-400"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Språk</h4>
                  <p className="text-blue-200">Norsk, Engelsk, Spansk, Bosnisk</p>
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
