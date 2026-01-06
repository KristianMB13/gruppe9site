import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const ProsjektstatusPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const sections = [
    {
      number: '1',
      title: 'Hva konkret er det vi skal utvikle / gjøre?',
      content: 'Vi skal utvikle en løsning som presenterer maritime drifts- og sensordata på en måte som gir verdi for brukere (f.eks. operatører/teknisk personell). Prosjektet tar utgangspunkt i Knowits samarbeid med Telenor Maritime, der data fra skip og ferger samles inn og struktureres. Per nå vet vi at det handler om å lage et "dashboard"/grensesnitt, men nøyaktige funksjoner og tekniske valg må avklares i starten av semesteret når vi får mer innsikt i data og eksisterende løsning.'
    },
    {
      number: '2',
      title: 'Viktige kvalitetsaspekter i produktet (og hvorfor)',
      content: [
        {
          subtitle: 'Brukervennlighet og forståelighet (UX)',
          text: 'Løsningen må være enkel å bruke og lett å forstå. Brukeren skal raskt få oversikt over hva som skjer, uten å måtte tolke rådata selv.'
        },
        {
          subtitle: 'Pålitelighet og stabilitet',
          text: 'Produktet må oppleves som stabilt og forutsigbart. Hvis løsningen fungerer dårlig eller ujevnt, vil brukeren miste tillit til både systemet og dataene.'
        },
        {
          subtitle: 'Synliggjøring av datakvalitet',
          text: 'Dersom data er mangelfulle, forsinkede eller usikre, må dette komme tydelig frem. Det er viktig at brukeren ikke tar beslutninger basert på data som ikke er til å stole på.'
        },
        {
          subtitle: 'Grunnleggende sikkerhet',
          text: 'Selv om sikkerhet ikke er hovedfokus i prosjektet, bør løsningen håndtere data på en ansvarlig måte og ikke eksponere informasjon unødvendig.'
        }
      ],
      note: 'Disse kvalitetsaspektene er viktige fordi verdien i produktet ikke ligger i mengden data, men i hvor nyttig, forståelig og pålitelig løsningen oppleves for brukeren.'
    },
    {
      number: '3',
      title: 'Hvordan vet vi om ønsket kvalitet er oppnådd? (indikatorer)',
      content: [
        'Bruker-test/feedback: korte gjennomganger med Knowit (og evt. relevante personer) der vi spør: "gir dette mening?" og "finner du det du trenger?".',
        'Sjekklister for UI/UX: konsistens i layout, tydelige enheter/labels, lesbarhet, enkel navigasjon.',
        'UX-laws og universelt utformelt',
        'Teknisk sjekk: at prototypen kjører uten feil i vanlig bruk, og at de viktigste skjermene/visningene alltid fungerer.',
        'Kodevurdering og tester',
        'Datakvalitet-markering: at vi har en tydelig måte å vise "OK / usikkert / mangler" på data (dersom aktuelt i løsningen).'
      ]
    },
    {
      number: '4',
      title: 'Planer, backlogg, estimater og ressursbruk – hvordan få kontroll?',
      content: [
        'Backlogg: Oppgaver som må gjøres etter prioritering og status i Trello.',
        'Enkle estimater per oppgave i timer eller minutter',
        'Timeføring bruker vi google regneark.',
        'Målet er å ha både et "budsjett" (estimat) og et "regnskap" (reelle timer), slik at vi ser om vi ligger foran/bak, og kan justere tidlig.'
      ]
    },
    {
      number: '5',
      title: 'Hvordan kvalitetssikrer vi planen?',
      content: [
        'Siden planen tidlig er usikker (prosjektet er åpent og vi lærer underveis), vil vi kvalitetssikre planen ved å:',
        'Holde planen enkel og kortsiktig (1 uke av gangen)',
        'Oppdatere planen jevnlig basert på hva vi faktisk får gjort',
        'Ha synlige prioriteringer (hva er viktigst akkurat nå)',
        'Vi skal ha jevnlige møter med Knowit og Telenor Maritime der vi presenterer hva som har blitt gjort og veien videre.'
      ]
    },
    {
      number: '6',
      title: 'Hvordan kvalitetssikrer vi backloggen?',
      content: [
        'Oppgaver er små nok til å kunne fullføres innen kort tid',
        'Hver oppgave har en tydelig "done"-beskrivelse (hva betyr det at oppgaven er ferdig?)',
        'Vi prioriterer og rydder backloggen jevnlig (fjerne/endre oppgaver som ikke lenger er relevante)',
        'Har reviews for godkjenning før den flyttes til "ferdig". Gruppe medlemmene kommenterer at de har gått gjennom og godkjenner den slik at den kan bli flyttet over til godkjent.'
      ]
    },
    {
      number: '7',
      title: 'Hvordan bruker vi estimater og timeføring for kontroll?',
      content: [
        'Estimat brukes til å velge realistisk mengde arbeid for en uke.',
        'Timeføring brukes til å se om vi undervurderer oppgaver eller bruker tid på "feil ting".',
        'Hvis det er store avvik mellom estimat og faktisk tid, bruker vi det som læring og justerer estimatene våre videre.'
      ]
    },
    {
      number: '8',
      title: 'Hvordan kan vi si noe om at ressursene er utnyttet på en god måte?',
      content: [
        'Om vi fullfører prioriterte oppgaver jevnlig (fremdrift)',
        'Om timeføringen viser fordeling på nyttige aktiviteter (utvikling, design, research, møter)',
        'Om vi tidlig oppdager "tidstyver" (uklarhet, for store oppgaver, for mye venting) og gjør tiltak',
        'At alle i gruppen bidrar jevnt og har tydelige oppgaver',
        'Om arbeidsgiver er fornøyd'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Prosjektstatus <span className="gradient-text">(Knowit)</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vår gjennomgang av prosjektkvalitet, planlegging og gjennomføring
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Project Title */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Bachelorprosjekt - Code 9  (Knowit + Telenor Maritime)
            </h2>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Section Number and Title */}
                <div className="flex gap-6 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{section.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 pt-1">
                    {section.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="ml-18 space-y-4 text-gray-600 leading-relaxed">
                  {typeof section.content === 'string' ? (
                    <p>{section.content}</p>
                  ) : Array.isArray(section.content) && typeof section.content[0] === 'string' ? (
                    <ul className="space-y-3">
                      {(section.content as string[]).map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-purple-500 font-bold flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-5">
                      {section.content.map((item: any, i: number) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-purple-500 font-bold flex-shrink-0">•</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{item.subtitle}</h4>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.note && (
                    <div className="mt-6 pt-6 border-t border-gray-200 italic text-gray-600">
                      {section.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProsjektstatusPage;


