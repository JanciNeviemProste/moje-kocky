import { useState } from 'react'
import './index.css'

const CAT_FACTS = [
  {
    id: 1,
    emoji: '😴',
    title: 'Majstri spánku',
    fact: 'Mačky spia 12–16 hodín denne. To je až dve tretiny ich života! Sú to skutočné majsterky odpočinku.',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
  },
  {
    id: 2,
    emoji: '👂',
    title: 'Úžasný sluch',
    fact: 'Mačky počujú zvuky až do frekvencie 65 000 Hz. Človek počuje maximálne 20 000 Hz. Ich uši sa dokážu otočiť o 180 stupňov!',
    color: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
  },
  {
    id: 3,
    emoji: '🐾',
    title: 'Tichí lovci',
    fact: 'Mačky chodia na špičkách prstov — sú tzv. digitigrádne zvieratá. To im umožňuje pohybovať sa takmer úplne ticho.',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    id: 4,
    emoji: '💬',
    title: 'Mraukanie len pre ľudí',
    fact: 'Dospelé mačky mraukajú takmer výlučne na ľudí, nie na iné mačky. Je to spôsob komunikácie, ktorý si vyvinuli práve pre nás!',
    color: 'from-cyan-500 to-teal-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
  },
  {
    id: 5,
    emoji: '🦴',
    title: 'Pružné telo',
    fact: 'Mačky majú 230 kostí — o 24 viac ako ľudia. Vďaka veľmi pohyblivej chrbtici sa dokážu otočiť vo vzduchu a pristáť na nohách.',
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    id: 6,
    emoji: '👁️',
    title: 'Nočné videnie',
    fact: 'Mačacie oči potrebujú na videnie šesťkrát menej svetla ako ľudské. Vo tme vidia výborne, hoci farby rozlišujú horšie než my.',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
]

const BREEDS = [
  { name: 'Perzská', emoji: '👑', trait: 'Pokojná a elegantná' },
  { name: 'Britská krátkosrstá', emoji: '🎩', trait: 'Vyrovnaná a priateľská' },
  { name: 'Maine Coon', emoji: '🦁', trait: 'Veľká a hravá' },
  { name: 'Siamská', emoji: '💎', trait: 'Hlučná a spoločenská' },
  { name: 'Bengálska', emoji: '🐆', trait: 'Aktívna a zvedavá' },
  { name: 'Ragdoll', emoji: '🧸', trait: 'Jemná a maznivá' },
]

function CatSvg() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="bodyGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f9a8d4" />
          <stop offset="100%" stopColor="#ec4899" />
        </radialGradient>
        <radialGradient id="faceGrad" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#fce7f3" />
          <stop offset="100%" stopColor="#fbcfe8" />
        </radialGradient>
      </defs>
      {/* Body */}
      <ellipse cx="100" cy="140" rx="55" ry="45" fill="url(#bodyGrad)" />
      {/* Head */}
      <circle cx="100" cy="82" r="42" fill="url(#faceGrad)" />
      {/* Ears */}
      <polygon points="65,50 55,18 85,45" fill="#ec4899" />
      <polygon points="135,50 145,18 115,45" fill="#ec4899" />
      <polygon points="67,48 60,26 82,45" fill="#fce7f3" />
      <polygon points="133,48 140,26 118,45" fill="#fce7f3" />
      {/* Eyes */}
      <ellipse cx="85" cy="78" rx="10" ry="12" fill="#1e293b" />
      <ellipse cx="115" cy="78" rx="10" ry="12" fill="#1e293b" />
      <circle cx="88" cy="75" r="3" fill="white" />
      <circle cx="118" cy="75" r="3" fill="white" />
      {/* Nose */}
      <ellipse cx="100" cy="93" rx="5" ry="4" fill="#f472b6" />
      {/* Mouth */}
      <path d="M95,97 Q100,103 105,97" stroke="#be185d" strokeWidth="1.5" fill="none" />
      {/* Whiskers */}
      <line x1="60" y1="90" x2="90" y2="93" stroke="#9ca3af" strokeWidth="1.5" />
      <line x1="60" y1="96" x2="90" y2="96" stroke="#9ca3af" strokeWidth="1.5" />
      <line x1="110" y1="93" x2="140" y2="90" stroke="#9ca3af" strokeWidth="1.5" />
      <line x1="110" y1="96" x2="140" y2="96" stroke="#9ca3af" strokeWidth="1.5" />
      {/* Tail */}
      <path d="M150,155 Q175,130 168,105 Q162,88 150,100" stroke="#ec4899" strokeWidth="12" fill="none" strokeLinecap="round" />
      {/* Paws */}
      <ellipse cx="75" cy="178" rx="18" ry="10" fill="#fbcfe8" />
      <ellipse cx="125" cy="178" rx="18" ry="10" fill="#fbcfe8" />
    </svg>
  )
}

function FactCard({ fact, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <article
      className={`rounded-2xl border ${fact.border} ${fact.bg} p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg`}
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setFlipped(!flipped)}
      aria-label={`Fakt ${index + 1}: ${fact.title}`}
    >
      <div className="text-4xl mb-3">{fact.emoji}</div>
      <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${fact.color} bg-clip-text text-transparent`}>
        {fact.title}
      </h3>
      <p className={`text-sm text-gray-600 transition-all duration-300 ${flipped ? 'opacity-100' : 'opacity-70'}`}>
        {fact.fact}
      </p>
      <p className="text-xs text-gray-400 mt-3">
        {flipped ? '▲ zavrieť' : '▼ prečítať viac'}
      </p>
    </article>
  )
}

function BreedBadge({ breed }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <span className="text-3xl">{breed.emoji}</span>
      <div>
        <p className="font-semibold text-gray-800 text-sm">{breed.name}</p>
        <p className="text-xs text-gray-500">{breed.trait}</p>
      </div>
    </div>
  )
}

export default function App() {
  const [likeCount, setLikeCount] = useState(0)
  const [liked, setLiked] = useState(false)

  function handleLike() {
    if (!liked) {
      setLikeCount((c) => c + 1)
      setLiked(true)
    } else {
      setLikeCount((c) => c - 1)
      setLiked(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐱</span>
            <span className="font-bold text-pink-600 text-lg">MojeMačky.sk</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-600" aria-label="Hlavná navigácia">
            <a href="#fakty" className="hover:text-pink-600 transition-colors">Fakty</a>
            <a href="#rasy" className="hover:text-pink-600 transition-colors">Rasy</a>
            <a href="#galeria" className="hover:text-pink-600 transition-colors">Galéria</a>
          </nav>
          <button
            onClick={handleLike}
            aria-label={liked ? 'Zrušiť like' : 'Dať like stránke'}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              liked
                ? 'bg-pink-500 text-white shadow-md shadow-pink-200'
                : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
            }`}
          >
            {liked ? '❤️' : '🤍'} {likeCount > 0 && likeCount}
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 py-16 text-center" aria-labelledby="hero-heading">
          <div className="w-48 h-48 mx-auto mb-8 drop-shadow-xl">
            <CatSvg />
          </div>
          <h1 id="hero-heading" className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-tight">
            Roztomilá stránka<br className="hidden sm:block" /> o mačkách
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
            Objavte fascinujúci svet mačiek — ich zvyky, fakty a tajomstvá.
            Všetko, čo ste o mačkách nevedeli! 🐾
          </p>
          <a
            href="#fakty"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-pink-200 hover:scale-105 transition-all"
          >
            Objaviť fakty ✨
          </a>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-12" aria-label="Štatistiky o mačkách">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: '600M+', label: 'mačiek na svete' },
              { value: '40+', label: 'plemien mačiek' },
              { value: '12–16h', label: 'spánku denne' },
              { value: '65kHz', label: 'rozsah sluchu' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold">{stat.value}</p>
                <p className="text-pink-100 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Facts */}
        <section id="fakty" className="max-w-5xl mx-auto px-4 py-16" aria-labelledby="fakty-heading">
          <h2 id="fakty-heading" className="text-3xl font-extrabold text-center mb-3 text-gray-800">
            Zaujímavé fakty 🧠
          </h2>
          <p className="text-center text-gray-500 mb-10">Kliknite na kartu pre viac informácií</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAT_FACTS.map((fact, i) => (
              <FactCard key={fact.id} fact={fact} index={i} />
            ))}
          </div>
        </section>

        {/* Breeds */}
        <section id="rasy" className="bg-white py-16" aria-labelledby="rasy-heading">
          <div className="max-w-5xl mx-auto px-4">
            <h2 id="rasy-heading" className="text-3xl font-extrabold text-center mb-3 text-gray-800">
              Populárne rasy 🐈
            </h2>
            <p className="text-center text-gray-500 mb-10">Každá mačka je jedinečná</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BREEDS.map((breed) => (
                <BreedBadge key={breed.name} breed={breed} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery with CSS patterns */}
        <section id="galeria" className="max-w-5xl mx-auto px-4 py-16" aria-labelledby="galeria-heading">
          <h2 id="galeria-heading" className="text-3xl font-extrabold text-center mb-3 text-gray-800">
            Mačacia galéria 🖼️
          </h2>
          <p className="text-center text-gray-500 mb-10">Každá farba, každý charakter</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { bg: 'from-orange-300 to-amber-500', emoji: '🟠', name: 'Zrzavá mačka', desc: 'Playful & bold' },
              { bg: 'from-gray-300 to-slate-500', emoji: '⬜', name: 'Sivá mačka', desc: 'Cool & mysterious' },
              { bg: 'from-yellow-200 to-amber-300', emoji: '🟡', name: 'Žltá mačka', desc: 'Sunny & warm' },
              { bg: 'from-slate-700 to-gray-900', emoji: '⬛', name: 'Čierna mačka', desc: 'Elegant & magical' },
              { bg: 'from-amber-100 to-orange-200', emoji: '🤍', name: 'Bielka mačka', desc: 'Pure & graceful' },
              { bg: 'from-amber-300 to-yellow-500', emoji: '🐯', name: 'Tygrovaná', desc: 'Wild at heart' },
            ].map((item) => (
              <div
                key={item.name}
                className={`rounded-2xl bg-gradient-to-br ${item.bg} aspect-square flex flex-col items-center justify-center gap-2 shadow-md hover:scale-105 transition-transform cursor-pointer`}
                role="img"
                aria-label={item.name}
              >
                <span className="text-5xl">{item.emoji}</span>
                <span className="text-white font-bold text-sm drop-shadow">{item.name}</span>
                <span className="text-white/70 text-xs">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Fun quote */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 py-16" aria-label="Citát">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <p className="text-5xl mb-6">💬</p>
            <blockquote className="text-2xl font-light italic leading-relaxed">
              "V každej mačke je kúsok tygra a v každom tigrovi je kúsok mačky."
            </blockquote>
            <p className="mt-4 text-indigo-200 text-sm">— Starý mačací citát</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <p className="text-2xl mb-3">🐱</p>
        <p>© 2024 MojeMačky.sk — Vyrobené s ❤️ pre milovníkov mačiek</p>
        <p className="mt-2 text-gray-600 text-xs">Všetky fakty sú vedecky overené</p>
      </footer>
    </div>
  )
}
