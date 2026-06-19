'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Coffee, Zap, Target, Activity, Shield, Heart, TrendingUp, Clock, Smile, Brain, Sun, CheckCircle } from 'lucide-react'

const coffeeFacts = [
  'Coffee first. Decisions later.',
  'Great conversations are brewed, not started.',
  'Life begins after coffee.',
  'Behind every successful idea is probably a cup of coffee.',
  'The world runs on coffee. And coffee runs on passion.',
  'A bad day with good coffee is still a pretty good day.',
  'Somewhere, someone just made the perfect cup.',
  'Coffee is always a good idea. Always.',
  'You cannot buy happiness. But you can buy coffee. Same thing.',
  'First I drink the coffee. Then I do the things.',
  'Coffee: The original energy drink since 850 AD.',
  'The best stories begin with: Want to grab a coffee?',
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const links = [
    { label: 'Before The First Sip', href: '#before' },
    { label: 'What Is Coffee?', href: '#what' },
    { label: 'Around The World', href: '#world' },
    { label: 'Why Coffee?', href: '#why' },
    { label: 'Is It Good?', href: '#good' },
    { label: 'Is It Bad?', href: '#bad' },
    { label: 'Brew With Us', href: '#brew' },
    { label: 'Order Now', href: '#order' },
    { label: "Let's Connect", href: '#connect' },
  ]
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => { document.body.style.overflow = mobileOpen ? 'hidden' : '' }, [mobileOpen])
  const go = (href: string) => {
    setMobileOpen(false)
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 100)
  }
  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-[#3B2416]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3">
            <svg width="28" height="34" viewBox="0 0 28 34">
              <ellipse cx="14" cy="17" rx="9" ry="13" fill="#B08D57" fillOpacity="0.9"/>
              <path d="M14 5 Q10 11 14 17 Q18 23 14 29" stroke="#FAF8F5" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
            </svg>
            <div>
              <div className="font-playfair text-sm text-[#FAF8F5] leading-tight">Before The</div>
              <div className="font-playfair text-sm text-[#B08D57] leading-tight">First Sip</div>
            </div>
          </button>
          <nav className="hidden lg:flex items-center gap-6">
            {links.slice(0, 6).map(l => (
              <button key={l.href} onClick={() => go(l.href)} className="font-inter text-[11px] tracking-[0.2em] uppercase text-[#FAF8F5]/60 hover:text-[#B08D57] transition-colors">
                {l.label}
              </button>
            ))}
            <button onClick={() => go('#order')} className="font-inter text-[11px] tracking-[0.2em] uppercase px-4 py-2 border border-[#B08D57]/40 text-[#B08D57] hover:bg-[#B08D57] hover:text-[#FAF8F5] transition-all">
              Order Now
            </button>
          </nav>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-[#FAF8F5]">
            {mobileOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </motion.header>
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-[#2A1810]/98 backdrop-blur-md flex flex-col justify-center px-8">
          {links.map((l, i) => (
            <motion.button key={l.href} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
              onClick={() => go(l.href)} className="block w-full text-left py-3 font-playfair text-2xl text-[#E8D8C3]/70 hover:text-[#B08D57] transition-colors">
              {l.label}
            </motion.button>
          ))}
        </div>
      )}
    </>
  )
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=85" alt="Coffee" fill priority className="object-cover" sizes="100vw"/>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A1810]/75 via-[#2A1810]/55 to-[#2A1810]/90"/>
      </div>
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="font-inter text-[11px] tracking-[0.5em] uppercase text-[#B08D57] mb-10">Before The First Sip</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }} className="font-playfair text-5xl md:text-7xl lg:text-8xl text-[#FAF8F5] leading-[0.95] mb-8">
          Coffee is not a beverage.<br/><span className="italic text-[#B08D57]">It's a conversation.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.9 }} className="font-inter text-base md:text-lg text-[#FAF8F5]/55 max-w-xl mx-auto leading-relaxed">
          Exploring the stories, science, culture and obsession behind the world's favorite drink.
        </motion.p>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.8, duration: 0.8 }} className="w-16 h-px bg-[#B08D57] mx-auto mt-10"/>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#FAF8F5]/40">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-10 bg-gradient-to-b from-[#B08D57] to-transparent"/>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF8F5] to-transparent z-10"/>
    </section>
  )
}

function Quote({ quote, author, dark = false }: { quote: string; author?: string; dark?: boolean }) {
  return (
    <section className={`py-24 ${dark ? 'bg-[#3B2416]' : 'bg-[#E8D8C3]'}`}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-10 h-px bg-[#B08D57] mx-auto mb-10"/>
        <p className={`font-playfair italic text-2xl md:text-4xl leading-[1.4] ${dark ? 'text-[#E8D8C3]' : 'text-[#3B2416]'}`}>&ldquo;{quote}&rdquo;</p>
        {author && <p className="mt-8 font-inter text-xs tracking-[0.3em] uppercase text-[#B08D57]">— {author}</p>}
        <div className="w-10 h-px bg-[#B08D57] mx-auto mt-10"/>
      </motion.div>
    </section>
  )
}

function BeforeTheFirstSip() {
  return (
    <section id="before" className="py-24 md:py-36 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57] mb-5">The Forum</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#3B2416] mb-8">
            Before The <span className="italic text-[#B08D57]">First Sip</span>
          </motion.h2>
          {['Coffee does not need another website. It deserves a place where it is celebrated.',
            'This forum was created for one simple reason: to honor the world\'s most beloved beverage — not as a product, but as an experience.',
            'Every cup tells a story. Some celebrate victories. Some comfort heartbreaks. Some fuel ambitions. Some simply make an ordinary morning worth waking up for.',
            'This forum exists for those who believe coffee is more than caffeine.',
          ].map((p, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }} className="font-inter text-lg leading-relaxed text-[#3B2416]/70 mb-5">{p}</motion.p>
          ))}
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="font-playfair text-2xl text-[#B08D57] italic mt-4">It is ritual. Companionship. Curiosity. Comfort.</motion.p>
        </div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="relative">
          <div className="relative h-[500px] overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=85" alt="Coffee beans" fill className="object-cover" sizes="50vw"/>
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#B08D57]/20 -z-10"/>
        </motion.div>
      </div>
    </section>
  )
}

const timelineData = [
  { era: 'c. 850 AD', title: 'The Legend of Kaldi', desc: 'In the highlands of Ethiopia, a goat herder named Kaldi noticed his goats dancing with unusual energy after eating red berries. He brought them to a monastery — the monk who brewed them stayed awake through evening prayers for the first time. This chance discovery would change the world.', img: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=600&q=80' },
  { era: 'c. 1000 AD', title: 'Ethiopian Origins', desc: 'The Kaffa region of Ethiopia is widely recognized as the birthplace of coffee. The Oromo people were among the first to recognize the energizing effects of the native coffee plant.', img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80' },
  { era: 'c. 1100 AD', title: 'The First Coffee Drinkers', desc: 'Islamic scholars discovered that coffee kept them alert during long hours of prayer. Sufi mystics used it as a vehicle for nighttime devotional practices. Coffee found its first spiritual identity.', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80' },
  { era: 'c. 1450 AD', title: 'Arrival in Yemen', desc: 'Coffee was cultivated in Yemen around the port of Mocha. The world\'s first formalized coffee culture began with rituals and ceremonies built around drinking together.', img: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=600&q=80' },
  { era: 'c. 1500 AD', title: 'The First Coffee Houses', desc: 'Qahveh khaneh — coffee houses — emerged across the Middle East. Called Schools of the Wise, they became centres of intellectual exchange, music and debate. The blueprint for every cafe that followed.', img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80' },
  { era: '1600-1700 AD', title: 'European Expansion', desc: 'Coffee arrived in Europe and ignited a cultural revolution. Coffee houses opened across London, Paris and Vienna. Entire economies were shaped over a cup.', img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80' },
  { era: 'Today', title: 'A Global Language', desc: 'From third-wave specialty roasters in Melbourne to filter coffee in Chennai, from espresso bars in Milan to cold brew in New York — coffee has become the universal language of humanity. Over 2.5 billion cups consumed every day.', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80' },
]

function WhatIsCoffee() {
  return (
    <section id="what" className="py-24 md:py-36 bg-[#3B2416] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57]/70 mb-4">A History in Seven Chapters</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5]">What Is <span className="italic text-[#B08D57]">Coffee?</span></motion.h2>
          <div className="w-10 h-px bg-[#B08D57] mx-auto mt-8"/>
        </div>
        <div className="space-y-16">
          {timelineData.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
                <p className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57]/70 mb-2">{item.era}</p>
                <h3 className="font-playfair text-2xl text-[#FAF8F5] mb-3">{item.title}</h3>
                <div className="w-8 h-px bg-[#B08D57] mb-4"/>
                <p className="font-inter text-sm leading-relaxed text-[#E8D8C3]/65">{item.desc}</p>
              </div>
              <div className={`relative h-56 overflow-hidden ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <Image src={item.img} alt={item.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw"/>
                <div className="absolute inset-0 bg-[#3B2416]/30"/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const regions = [
  { country: 'Ethiopia', flag: '🇪🇹', title: 'Ethiopian Coffee Ceremony', teaser: 'Where it all began.', story: 'The Ethiopian coffee ceremony is one of the most beautiful rituals on earth. Green beans are roasted over open flame, ground by hand, brewed in a clay jebena. Three rounds are served — each more meaningful than the last. To be invited is to be welcomed into a family.', notes: ['Floral', 'Berry', 'Jasmine'], img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80' },
  { country: 'Italy', flag: '🇮🇹', title: 'Italian Espresso Culture', teaser: 'A way of life, not a drink.', story: 'In Italy, espresso is architecture. The bar counter is sacred. You stand. You drink in three sips. You honour it. Italian espresso culture gave the world the cafe as a third place — where civilization quietly happens one tiny cup at a time.', notes: ['Dark Chocolate', 'Caramel', 'Walnut'], img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=700&q=80' },
  { country: 'Turkey', flag: '🇹🇷', title: 'Turkish Coffee Tradition', teaser: 'Brewed in copper. Sipped in silence.', story: 'Turkish coffee is prepared in a cezve over low heat. The grounds settle at the bottom and someone might read your future in them. In Turkey, a cup of coffee commands forty years of remembrance. That is not metaphor. That is instruction.', notes: ['Intense', 'Earthy', 'Cardamom'], img: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=700&q=80' },
  { country: 'France', flag: '🇫🇷', title: 'French Cafe Culture', teaser: 'Philosophy served in a small cup.', story: 'The French cafe is not a coffee shop. It is a parliament. Sartre wrote at Cafe de Flore. Hemingway found his sentences at Closerie des Lilas. Their contribution to coffee is not a brewing method. It is a philosophy of slowness.', notes: ['Roasted', 'Bittersweet', 'Smooth'], img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=700&q=80' },
  { country: 'India', flag: '🇮🇳', title: 'South Indian Filter Coffee', teaser: 'Poured from a height. Sipped from a davara.', story: 'South Indian filter coffee is a daily devotion. Brewed in a stainless steel filter, mixed with hot milk, poured dramatically between a tumbler and a davara. Mornings in Tamil Nadu do not begin. They are inaugurated.', notes: ['Chicory', 'Creamy', 'Mild Sweet'], img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80' },
  { country: 'Global', flag: '🌍', title: 'Third Wave Movement', teaser: 'When coffee became an art form.', story: 'The third wave is a reckoning. Roasters began asking where the bean was from, who grew it, how it was processed. Coffee was re-examined as craft. It gave coffee back its complexity and demanded we pay attention.', notes: ['Single Origin', 'Terroir', 'Light Roast'], img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=700&q=80' },
]

function CoffeeAroundTheWorld() {
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <section id="world" className="py-24 md:py-36 bg-[#E8D8C3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57] mb-4">A Coffee Atlas</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#3B2416]">Coffee Around <span className="italic text-[#B08D57]">The World</span></motion.h2>
          <div className="w-10 h-px bg-[#B08D57] mx-auto mt-8 mb-6"/>
          <p className="font-inter text-lg leading-relaxed text-[#3B2416]/75 max-w-xl mx-auto">Six cultures. Six rituals. One universal language. Hover to discover each story.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative h-80 overflow-hidden cursor-pointer group" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
              <Image src={r.img} alt={r.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="33vw"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1810]/90 via-[#2A1810]/40 to-[#2A1810]/20"/>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{r.flag}</span>
                  <span className="font-inter text-xs tracking-[0.3em] uppercase text-[#B08D57]">{r.country}</span>
                </div>
                <h3 className="font-playfair text-xl text-[#FAF8F5] mb-1">{r.title}</h3>
                <p className="font-inter text-sm text-[#E8D8C3]/60 italic mb-3">{r.teaser}</p>
                {hovered === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="border-t border-[#B08D57]/20 pt-3 overflow-hidden">
                    <p className="font-inter text-xs text-[#E8D8C3]/70 leading-relaxed line-clamp-3 mb-2">{r.story}</p>
                    <div className="flex flex-wrap gap-1">
                      {r.notes.map(n => <span key={n} className="font-inter text-[9px] tracking-wider uppercase text-[#B08D57] border border-[#B08D57]/30 px-2 py-0.5">{n}</span>)}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const reasons = [
  { title: 'It Sharpens Your Focus', desc: 'Caffeine blocks adenosine — the compound that makes you feel tired. The result is sharper attention and faster thinking.' },
  { title: 'It Fuels Creativity', desc: 'The mild stimulation of caffeine opens cognitive pathways. Many of history\'s great works were conceived over a cup.' },
  { title: 'It Builds Community', desc: 'Coffee houses gave the world its intellectual infrastructure. From Ottoman cafes to Silicon Valley — coffee is where ideas are negotiated.' },
  { title: 'It Drives Productivity', desc: 'The most studied ergogenic substance in the world. Used by surgeons, athletes, and writers facing blank pages.' },
  { title: 'It Sparks Happiness', desc: 'Coffee stimulates dopamine release. The ritual of preparing it is itself a meditative act. The smell alone activates pleasure centres.' },
  { title: 'It Honours Ritual', desc: 'Grinding beans, heating water, watching it brew — a daily ceremony. One of the few left in modern life.' },
]

function WhyCoffee() {
  return (
    <section id="why" className="py-24 md:py-36 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57] mb-4">The Case For Coffee</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#3B2416]">Why <span className="italic text-[#B08D57]">Coffee?</span></motion.h2>
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center py-16 mb-16 border-y border-[#B08D57]/15">
          <p className="font-playfair text-4xl md:text-6xl text-[#3B2416] leading-tight max-w-4xl mx-auto">"If brewed right, it makes you <span className="italic text-[#B08D57]">damn happy.</span>"</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#D4C0A6] mb-16">
          {reasons.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="group p-7 border-r border-b border-[#D4C0A6] hover:bg-[#3B2416] transition-colors duration-500 cursor-default">
              <div className="w-6 h-px bg-[#B08D57] mb-5 group-hover:w-10 transition-all duration-300"/>
              <h3 className="font-playfair text-lg text-[#3B2416] group-hover:text-[#FAF8F5] mb-3 transition-colors duration-300">{r.title}</h3>
              <p className="font-inter text-sm text-[#3B2416]/60 group-hover:text-[#E8D8C3]/60 leading-relaxed transition-colors duration-300">{r.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { val: '400mg', label: 'Daily Caffeine', desc: 'Average daily caffeine intake of a regular coffee drinker — roughly 3-4 cups.' },
            { val: '2.5B+', label: 'Cups Per Day', desc: 'Cups consumed globally every single day. A universal ritual shared across 70+ countries.' },
            { val: '70+', label: 'Producing Nations', desc: 'Countries that cultivate coffee — from Ethiopia and Colombia to Vietnam and Indonesia.' },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative p-8 border border-[#B08D57]/20 hover:border-[#B08D57]/50 transition-all duration-500">
              <div className="absolute top-0 left-0 w-6 h-px bg-[#B08D57]"/><div className="absolute top-0 left-0 w-px h-6 bg-[#B08D57]"/>
              <div className="absolute bottom-0 right-0 w-6 h-px bg-[#B08D57]"/><div className="absolute bottom-0 right-0 w-px h-6 bg-[#B08D57]"/>
              <p className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57] mb-4">{s.label}</p>
              <p className="font-playfair text-5xl text-[#3B2416] mb-3">{s.val}</p>
              <p className="font-inter text-sm text-[#3B2416]/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <p className="font-playfair italic text-2xl text-[#3B2416]/70">"Science may never come up with a better office communication system than the coffee break."</p>
          <footer className="mt-4 font-inter text-xs tracking-[0.3em] uppercase text-[#B08D57]">— Earl Wilson</footer>
        </motion.blockquote>
      </div>
    </section>
  )
}

const provenBenefits = [
  { icon: Zap, title: 'Enhanced Alertness', desc: 'Caffeine blocks adenosine receptors, reducing fatigue and increasing neuronal activity — making you more awake and present.' },
  { icon: Target, title: 'Sharper Concentration', desc: 'Multiple studies show moderate caffeine improves attention span, reaction time, and working memory.' },
  { icon: Activity, title: 'Athletic Performance', desc: 'One of the most well-researched ergogenic aids in sports science — improves endurance and reduces perceived exertion.' },
  { icon: Shield, title: 'Rich in Antioxidants', desc: 'One of the largest sources of antioxidants in the Western diet. Chlorogenic acids help combat oxidative stress.' },
  { icon: Heart, title: 'Cardiovascular Notes', desc: 'Moderate consumption has been associated with lower risk of stroke in large observational studies.' },
  { icon: TrendingUp, title: 'Metabolic Support', desc: 'Caffeine increases metabolic rate and has been associated with reduced risk of type 2 diabetes.' },
]

const exploredBenefits = [
  { icon: Clock, title: 'Longevity', desc: 'Several large cohort studies observed associations between regular coffee and lower all-cause mortality.' },
  { icon: Smile, title: 'Mood Enhancement', desc: 'Caffeine stimulates dopamine and serotonin. Some research suggests coffee drinkers have lower rates of depression.' },
  { icon: Brain, title: 'Cognitive Protection', desc: 'Emerging research explores links between habitual coffee consumption and reduced risk of Parkinsons and Alzheimers.' },
  { icon: Sun, title: 'Healthy Aging', desc: 'The anti-inflammatory properties of coffees polyphenols are being studied for age-related cellular protection.' },
]

function IsCoffeeGood() {
  return (
    <section id="good" className="py-24 md:py-36 bg-[#E8D8C3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57] mb-4">The Science Section</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#3B2416]">Is Coffee <span className="italic text-[#B08D57]">Good?</span></motion.h2>
          <div className="w-10 h-px bg-[#B08D57] mx-auto mt-8 mb-6"/>
          <p className="font-inter text-lg text-[#3B2416]/75 max-w-xl mx-auto">The short answer: yes. The longer answer requires a cup and a conversation.</p>
        </div>
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#3B2416]/20"/>
            <h3 className="font-inter text-xs tracking-[0.3em] uppercase text-[#3B2416]/50">Scientifically Supported Benefits</h3>
            <div className="flex-1 h-px bg-[#3B2416]/10"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {provenBenefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-7 bg-[#3B2416] hover:bg-[#5C3D2E] transition-all duration-500">
                <div className="flex items-center justify-center w-10 h-10 mb-5 bg-[#B08D57]/20 rounded-sm">
                  <b.icon className="w-5 h-5 text-[#B08D57]" strokeWidth={1.5}/>
                </div>
                <h4 className="font-playfair text-xl text-[#FAF8F5] mb-3">{b.title}</h4>
                <p className="font-inter text-sm text-[#E8D8C3]/70 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#3B2416]/20"/>
            <h3 className="font-inter text-xs tracking-[0.3em] uppercase text-[#3B2416]/50">Claims Still Being Explored</h3>
            <div className="flex-1 h-px bg-[#3B2416]/10"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {exploredBenefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-7 bg-[#FAF8F5] border border-[#D4C0A6] hover:border-[#B08D57]/50 transition-all duration-500">
                <div className="flex items-center justify-center w-10 h-10 mb-5 bg-[#E8D8C3] rounded-sm">
                  <b.icon className="w-5 h-5 text-[#3B2416]" strokeWidth={1.5}/>
                </div>
                <h4 className="font-playfair text-xl text-[#3B2416] mb-3">{b.title}</h4>
                <p className="font-inter text-sm text-[#3B2416]/65 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-[#B08D57]/20 p-8 text-center max-w-2xl mx-auto bg-[#FAF8F5]/50">
          <div className="w-8 h-px bg-[#B08D57] mx-auto mb-6"/>
          <p className="font-playfair italic text-xl text-[#3B2416]/75">"Coffee is wonderful, but like all good things, moderation matters."</p>
          <div className="w-8 h-px bg-[#B08D57] mx-auto mt-6"/>
        </motion.div>
      </div>
    </section>
  )
}

function IsCoffeeBad() {
  return (
    <section id="bad" className="py-24 md:py-36 bg-[#3B2416] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57]/70 mb-4">The Honest Section</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] mb-8">
          Is Coffee <span className="italic text-[#B08D57]">Bad?</span>
        </motion.h2>
        <div className="w-10 h-px bg-[#B08D57] mx-auto mb-10"/>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-playfair italic text-3xl md:text-5xl text-[#FAF8F5] mb-14">
          "How dare <span className="text-[#B08D57]">you</span> say that?"
        </motion.p>
        <div className="space-y-6 mb-16">
          {[
            'But now that we are discussing it — let us be fair.',
            'A tipsy mind after a few drinks can be delightful on certain evenings.',
            'Yet a mind full of beans has started far more businesses, written far more books, solved far more problems, and sparked far more conversations.',
            'Coffee may keep you awake longer than you intended. But it has kept humanity curious, productive and connected for ten centuries.',
          ].map((p, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="font-inter text-lg leading-relaxed text-[#E8D8C3]/70">{p}</motion.p>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center mb-12">
          <motion.div animate={{ rotate: [0, -8, 8, -5, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
            <svg width="100" height="130" viewBox="0 0 100 130">
              <ellipse cx="50" cy="65" rx="35" ry="50" fill="#5C3D2E"/>
              <path d="M50 20 Q35 42 50 65 Q65 88 50 110" stroke="#B08D57" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
          <p className="font-inter text-lg text-[#E8D8C3]/60">Like every good thing — moderation matters.</p>
          <p className="font-inter text-lg text-[#E8D8C3]/60">But between a hangover and an espresso?</p>
          <p className="font-playfair italic text-2xl md:text-3xl text-[#B08D57]">We will let the beans defend themselves.</p>
        </motion.div>
      </div>
    </section>
  )
}

const stories = [
  { cat: 'Morning Rituals', title: 'The Morning Ritual', excerpt: 'Before any decision was made. Before any word was spoken. Before the day began to demand anything — there was the coffee.', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80', tag: 'Ritual' },
  { cat: 'Ambition', title: 'The Meeting That Changed Everything', excerpt: 'Two people, one cafe, a napkin full of terrible ideas. The business that eventually worked began with a double espresso and a plan that should have failed.', img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80', tag: 'Ambition' },
  { cat: 'Solitude', title: 'Rainy Evenings and Quiet Pages', excerpt: 'On certain evenings, the best company in the world is a good book, a warm mug, and the sound of rain that refuses to stop.', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80', tag: 'Solitude' },
  { cat: 'Connection', title: 'Two Strangers, One Table', excerpt: 'She had a deadline. He had a broken laptop. They shared the only power outlet in the cafe. That was three years and countless conversations ago.', img: 'https://images.unsplash.com/photo-1516486392848-8b67ef89f929?auto=format&fit=crop&w=600&q=80', tag: 'Connection' },
  { cat: 'Memory', title: 'The Last Cup', excerpt: 'On her last day at the office, she made coffee exactly the way he had taught her. Two sugars. No milk. And a patience the rest of the world had never understood.', img: 'https://images.unsplash.com/photo-1499961985091-fd08cf6def1a?auto=format&fit=crop&w=600&q=80', tag: 'Memory' },
]

function BrewWithUs() {
  return (
    <section id="brew" className="py-24 md:py-36 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57] mb-4">Community Stories</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#3B2416]">Brew <span className="italic text-[#B08D57]">With Us</span></motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-inter text-lg leading-relaxed text-[#3B2416]/70">
            You are about to read the stories that countless cups of coffee have quietly witnessed. Some joyful. Some heartbreaking. Every one worthwhile because it was shared over a cup.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-block border-y border-[#B08D57]/20 py-6 px-10">
            <p className="font-playfair italic text-2xl text-[#3B2416] mb-1">So pull up a chair.</p>
            <p className="font-playfair text-2xl text-[#3B2416]/70">The coffee is ready.</p>
            <p className="font-playfair text-2xl text-[#B08D57] italic mt-1">The stories are waiting.</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stories.map((s, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1810]/90 via-[#2A1810]/40 to-transparent"/>
                <div className="absolute top-5 left-5">
                  <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#B08D57] border border-[#B08D57]/50 px-3 py-1 bg-[#3B2416]/30">{s.tag}</span>
                </div>
              </div>
              <div className="p-6 bg-[#3B2416]">
                <p className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57]/60 mb-2">{s.cat}</p>
                <h3 className="font-playfair text-xl text-[#FAF8F5] mb-3">{s.title}</h3>
                <p className="font-inter text-sm text-[#E8D8C3]/60 leading-relaxed line-clamp-3">{s.excerpt}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-6 h-px bg-[#B08D57]/40 group-hover:w-10 group-hover:bg-[#B08D57] transition-all duration-300"/>
                  <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-[#B08D57]/50 group-hover:text-[#B08D57] transition-colors">Read Story</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

const ourPicks = [
  { name: 'Ethiopian Yirgacheffe', origin: 'Yirgacheffe, Ethiopia', roast: 'Light Roast', notes: ['Wild Berry', 'Jasmine', 'Stone Fruit'], brew: 'Pour-Over', remark: 'Tastes like rainy afternoons and unfinished novels.', img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=500&q=80' },
  { name: 'Colombian Huila', origin: 'Huila, Colombia', roast: 'Medium Roast', notes: ['Brown Sugar', 'Green Apple', 'Chocolate'], brew: 'French Press', remark: 'Perfect for mornings that need ambition.', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80' },
  { name: 'Kenyan AA', origin: 'Nyeri, Kenya', roast: 'Medium-Dark Roast', notes: ['Blackcurrant', 'Grapefruit', 'Dark Cherry'], brew: 'AeroPress', remark: 'The kind of coffee that makes you stare out of windows.', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80' },
  { name: 'Jamaican Blue Mountain', origin: 'Blue Mountains, Jamaica', roast: 'Light-Medium Roast', notes: ['Mild Sweet', 'Nutty', 'Clean Finish'], brew: 'Filter / Drip', remark: 'For evenings that refuse to end.', img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=500&q=80' },
]

const communityPicks = [
  { name: 'Monsoon Malabar', by: 'Priya R.', city: 'Mumbai, India', reason: 'It tastes like home during the monsoons. Nothing else comes close.' },
  { name: 'Blue Tokai Vienna Blend', by: 'Rohan M.', city: 'Bengaluru, India', reason: 'First coffee that made me stop and actually taste what I was drinking.' },
  { name: 'Stumptown Hair Bender', by: 'Sarah K.', city: 'New York, USA', reason: 'Changed my entire relationship with espresso. Before and after.' },
  { name: 'Intelligentsia Black Cat', by: 'Aisha T.', city: 'London, UK', reason: 'The only espresso that kept my mind quiet. Paradoxically.' },
  { name: 'Panama Geisha', by: 'Yuki N.', city: 'Tokyo, Japan', reason: 'I wept. I am not exaggerating. I genuinely wept at the complexity.' },
]

function OrderNow() {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', city: '', brand: '', why: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setShowForm(false); setSubmitted(false); setForm({ name: '', city: '', brand: '', why: '' }) }, 3000)
  }
  return (
    <section id="order" className="py-24 md:py-36 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57] mb-4">The List</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#3B2416] mb-8">Order <span className="italic text-[#B08D57]">Now</span></motion.h2>
          <p className="font-inter text-lg text-[#3B2416]/70 mb-2">Here are all the coffees we love. Not sponsored. Not paid promotions.</p>
          <p className="font-playfair italic text-xl text-[#B08D57]">You may love them. You may disagree. That is the beauty of coffee.</p>
        </div>
        <div className="mb-24">
          <div className="flex items-center gap-6 mb-10">
            <div>
              <p className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57]">Curated Selection</p>
              <h3 className="font-playfair text-3xl text-[#3B2416] mt-1">Our <span className="italic text-[#B08D57]">Picks</span></h3>
            </div>
            <div className="flex-1 h-px bg-[#D4C0A6]"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ourPicks.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="group overflow-hidden bg-[#FAF8F5] border border-[#D4C0A6] hover:border-[#B08D57]/40 transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="relative h-52 overflow-hidden">
                  <Image src={p.img} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B2416]/60 to-transparent"/>
                  <div className="absolute bottom-4 left-5">
                    <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#FAF8F5]/80 border border-[#FAF8F5]/30 px-3 py-1 bg-[#3B2416]/30">{p.roast}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57] mb-1">{p.origin}</p>
                  <h4 className="font-playfair text-xl text-[#3B2416] mb-1">{p.name}</h4>
                  <div className="w-8 h-px bg-[#B08D57] my-4"/>
                  <div className="flex flex-wrap gap-2 mb-4">{p.notes.map(n => <span key={n} className="font-inter text-[10px] tracking-wider uppercase text-[#3B2416]/60 bg-[#E8D8C3] px-2 py-1">{n}</span>)}</div>
                  <div className="flex items-center gap-2 mb-5">
                    <Coffee className="w-3.5 h-3.5 text-[#B08D57]" strokeWidth={1.5}/>
                    <span className="font-inter text-xs text-[#3B2416]/60">{p.brew}</span>
                  </div>
                  <p className="font-playfair italic text-sm text-[#3B2416]/75 leading-relaxed border-l-2 border-[#B08D57] pl-4">"{p.remark}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <div className="bg-[#3B2416] p-8 md:p-12 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57]/70 mb-3">From The Community</p>
                <h3 className="font-playfair text-3xl text-[#FAF8F5]">The Ones <span className="italic text-[#B08D57]">You Chose</span></h3>
                <div className="w-8 h-px bg-[#B08D57] mt-5 mb-5"/>
                <p className="font-inter text-sm text-[#E8D8C3]/60 leading-relaxed">Recommended by real people — no algorithm, no sponsored placement, just honest enthusiasm.</p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[{ val: '1,247', label: 'Recommendations' }, { val: '32', label: 'Countries' }, { val: '19K+', label: 'Cups Discussed' }].map((c, i) => (
                  <div key={i} className="text-center">
                    <p className="font-playfair text-3xl text-[#FAF8F5] mb-1">{c.val}</p>
                    <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#B08D57]/60">{c.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border border-[#D4C0A6]">
            {communityPicks.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-5 p-5 border-b border-[#D4C0A6] hover:border-[#B08D57]/30 transition-all">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-[#B08D57]/30 text-[#B08D57] font-inter text-xs">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h4 className="font-playfair text-lg text-[#3B2416] mb-1">{p.name}</h4>
                  <p className="font-inter text-xs text-[#3B2416]/50 mb-2">By <span className="text-[#B08D57]">{p.by}</span> — {p.city}</p>
                  <p className="font-inter text-sm text-[#3B2416]/65 italic">"{p.reason}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center py-16 border border-[#B08D57]/20">
          <p className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57] mb-4">Have a recommendation?</p>
          <h3 className="font-playfair text-3xl text-[#3B2416] mb-4">Tell us what is in <span className="italic text-[#B08D57]">your cup.</span></h3>
          <p className="font-inter text-[#3B2416]/60 mb-10 max-w-md mx-auto">Every great coffee list is incomplete. Help us make this one better.</p>
          <button onClick={() => setShowForm(true)} className="font-inter text-sm tracking-[0.2em] uppercase px-10 py-4 bg-[#3B2416] text-[#FAF8F5] hover:bg-[#2A1810] transition-all duration-300">Let Me Suggest</button>
        </motion.div>
        {showForm && (
          <div className="fixed inset-0 z-50 bg-[#2A1810]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#FAF8F5] w-full max-w-xl p-8 md:p-10 relative">
              <button onClick={() => setShowForm(false)} className="absolute top-5 right-5 text-[#3B2416]/40 hover:text-[#3B2416]"><X className="w-5 h-5"/></button>
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-10 h-10 text-[#B08D57] mx-auto mb-5" strokeWidth={1}/>
                  <h3 className="font-playfair text-2xl text-[#3B2416] mb-3">Beautifully done.</h3>
                  <p className="font-inter text-sm text-[#3B2416]/60">Your recommendation has been received.</p>
                </div>
              ) : (
                <>
                  <p className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57] mb-2">Community</p>
                  <h3 className="font-playfair text-2xl text-[#3B2416] mb-6">Share Your Cup</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[{ label: 'Your Name', key: 'name', ph: 'First name is enough' }, { label: 'Your City', key: 'city', ph: 'Where are you brewing?' }, { label: 'Coffee Brand / Name', key: 'brand', ph: 'What are we trying?' }, { label: 'Why Should We Try It?', key: 'why', ph: 'One honest sentence is enough.' }].map(f => (
                      <div key={f.key}>
                        <label className="font-inter text-xs tracking-[0.25em] uppercase text-[#3B2416]/50 mb-2 block">{f.label}</label>
                        <input placeholder={f.ph} value={(form as any)[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} required className="w-full bg-transparent border-b border-[#3B2416]/20 py-3 font-inter text-base text-[#3B2416] placeholder:text-[#3B2416]/30 focus:outline-none focus:border-[#B08D57] transition-colors"/>
                      </div>
                    ))}
                    <button type="submit" className="w-full font-inter text-sm tracking-[0.2em] uppercase py-4 bg-[#3B2416] text-[#FAF8F5] hover:bg-[#2A1810] transition-all duration-300">Share My Cup</button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

function LetsConnect() {
  const [form, setForm] = useState({ name: '', email: '', city: '', coffee: '', story: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }
  return (
    <section id="connect" className="py-24 md:py-36 bg-[#3B2416] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57]/70 mb-5">The Best Part</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] mb-8">
            Lets Connect<br/><span className="italic text-[#B08D57]">Over Coffee</span>
          </motion.h2>
          <div className="w-10 h-px bg-[#B08D57] mb-10"/>
          <p className="font-playfair italic text-2xl text-[#E8D8C3] leading-relaxed mb-4">"If you are a bigger enthusiast than I am, we need to talk."</p>
          <p className="font-playfair italic text-xl text-[#B08D57] mb-8">"And if you are not — we seriously need to talk."</p>
          <p className="font-inter text-base text-[#E8D8C3]/60 leading-relaxed">This is not a contact form. This is an invitation to a conversation. Tell us your name, your city, and most importantly — your coffee story.</p>
          <div className="mt-14 p-6 border-l-2 border-[#B08D57]/40">
            <p className="font-playfair italic text-[#E8D8C3]/50 text-sm">"Every great conversation starts before the first sip."</p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
          <div className="bg-[#FAF8F5] p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 w-8 h-px bg-[#B08D57]"/><div className="absolute top-0 left-0 w-px h-8 bg-[#B08D57]"/>
            <div className="absolute bottom-0 right-0 w-8 h-px bg-[#B08D57]"/><div className="absolute bottom-0 right-0 w-px h-8 bg-[#B08D57]"/>
            <p className="font-inter text-xs tracking-[0.35em] uppercase text-[#B08D57] mb-2">Start The Conversation</p>
            <h3 className="font-playfair text-2xl text-[#3B2416] mb-8">Tell us your story.</h3>
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-10 h-10 text-[#B08D57] mx-auto mb-5" strokeWidth={1}/>
                <h3 className="font-playfair text-2xl text-[#3B2416] mb-3">The kettle is on.</h3>
                <p className="font-inter text-sm text-[#3B2416]/60 max-w-xs mx-auto">Thank you, {form.name.split(' ')[0]}. We will be in touch soon — probably over a second cup.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {[
                  { label: 'Your Name', key: 'name', type: 'text', ph: 'How should we call you?', req: true },
                  { label: 'Email Address', key: 'email', type: 'email', ph: 'your@email.com', req: true },
                  { label: 'Your City', key: 'city', type: 'text', ph: 'Where do you brew?', req: true },
                  { label: 'Favourite Coffee', key: 'coffee', type: 'text', ph: 'The one you always come back to', req: false },
                ].map(f => (
                  <div key={f.key} className="group relative">
                    <label className="font-inter text-xs tracking-[0.25em] uppercase text-[#3B2416]/50 mb-2 block">{f.label}</label>
                    <input type={f.type} placeholder={f.ph} value={(form as any)[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} required={f.req} className="w-full bg-transparent border-b border-[#3B2416]/20 py-3 font-inter text-base text-[#3B2416] placeholder:text-[#3B2416]/30 focus:outline-none focus:border-[#B08D57] transition-colors"/>
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[#B08D57] group-focus-within:w-full transition-all duration-500"/>
                  </div>
                ))}
                <div className="group relative">
                  <label className="font-inter text-xs tracking-[0.25em] uppercase text-[#3B2416]/50 mb-2 block">Your Coffee Story</label>
                  <textarea placeholder="Tell us about a coffee moment that stayed with you..." value={form.story} onChange={e => setForm({ ...form, story: e.target.value })} required rows={4} className="w-full bg-transparent border-b border-[#3B2416]/20 py-3 font-inter text-base text-[#3B2416] placeholder:text-[#3B2416]/30 focus:outline-none focus:border-[#B08D57] transition-colors resize-none"/>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#B08D57] group-focus-within:w-full transition-all duration-500"/>
                </div>
                <button type="submit" className="font-inter text-sm tracking-[0.2em] uppercase h-14 w-full px-10 bg-[#3B2416] text-[#FAF8F5] hover:bg-[#2A1810] transition-all duration-300 mt-4">Start The Conversation</button>
              </form>
            )}
          </div>
          <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#B08D57]/15 -z-10"/>
        </motion.div>
      </div>
    </section>
  )
}

function FloatingBeans() {
  const [mounted, setMounted] = useState(false)
  const [activeFact, setActiveFact] = useState<{ id: number; text: string } | null>(null)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null
  const beans = [
    { id: 1, x: 5, y: 20, size: 24, dur: 9, delay: 0 },
    { id: 2, x: 92, y: 15, size: 18, dur: 11, delay: 2 },
    { id: 3, x: 88, y: 60, size: 22, dur: 8, delay: 4 },
    { id: 4, x: 4, y: 65, size: 16, dur: 10, delay: 1 },
    { id: 5, x: 93, y: 80, size: 20, dur: 12, delay: 3 },
  ]
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      {beans.map(b => (
        <div key={b.id} className="absolute pointer-events-auto" style={{ left: `${b.x}%`, top: `${b.y}%` }}>
          <motion.button animate={{ y: [0, -12, -6, -16, 0] }} transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
            className="relative text-[#3B2416] cursor-pointer opacity-[0.12] hover:opacity-30 transition-opacity focus-visible:outline-none"
            onClick={() => {
              const fact = coffeeFacts[Math.floor(Math.random() * coffeeFacts.length)]
              setActiveFact({ id: b.id, text: fact })
              setTimeout(() => setActiveFact(null), 3500)
            }} aria-label="Click for a coffee fact">
            <svg width={b.size} height={b.size * 1.3} viewBox="0 0 24 32" fill="currentColor">
              <ellipse cx="12" cy="16" rx="8" ry="12"/>
              <path d="M12 5 Q8 11 12 16 Q16 21 12 27" stroke="#FAF8F5" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            </svg>
          </motion.button>
          {activeFact?.id === b.id && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-44 z-50 pointer-events-none">
              <div className="bg-[#3B2416] px-3 py-2 text-center shadow-xl">
                <p className="font-playfair italic text-[11px] text-[#E8D8C3] leading-relaxed">"{activeFact.text}"</p>
              </div>
              <div className="w-2 h-2 bg-[#3B2416] rotate-45 mx-auto -mt-1"/>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

function Footer() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <footer ref={ref} className="relative bg-[#2A1810] overflow-hidden py-24 md:py-36 text-center">
      <div aria-hidden className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #B08D57 1px, transparent 1px)', backgroundSize: '32px 32px' }}/>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 opacity-20" style={{ background: 'radial-gradient(ellipse at 50% 100%, #B08D57 0%, transparent 70%)' }}/>
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <motion.div initial={{ scale: 0, rotate: -180 }} animate={inView ? { scale: 1, rotate: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center mb-10">
            <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
              <ellipse cx="18" cy="22" rx="12" ry="18" fill="#B08D57" fillOpacity="0.4"/>
              <path d="M18 6 Q12 14 18 22 Q24 30 18 38" stroke="#B08D57" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} className="font-inter text-xs tracking-[0.4em] uppercase text-[#B08D57]/50 mb-8">You have reached the bottom</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="font-playfair text-4xl md:text-6xl text-[#FAF8F5] leading-tight mb-4">
            Time to put the<br/><span className="text-[#B08D57] italic">kettle on.</span> ☕
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 0.8 }} className="w-12 h-px bg-[#B08D57] mx-auto my-10"/>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1 }} className="font-playfair italic text-lg text-[#E8D8C3]/50 mb-12">Made for people who understand that coffee is never just coffee.</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.2 }} className="font-inter text-xs tracking-[0.3em] uppercase text-[#B08D57]/40">Every great conversation starts before the first sip.</motion.p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.5 }} className="mt-16 pt-8 border-t border-[#B08D57]/10">
          <p className="font-inter text-[10px] tracking-widest uppercase text-[#FAF8F5]/15">{new Date().getFullYear()} Before The First Sip. A celebration, not a company.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <FloatingBeans/>
      <Navbar/>
      <Hero/>
      <Quote quote="I have measured out my life with coffee spoons." author="T. S. Eliot"/>
      <BeforeTheFirstSip/>
      <WhatIsCoffee/>
      <CoffeeAroundTheWorld/>
      <Quote quote="Coffee should be black as hell, strong as death and sweet as love." author="Turkish Proverb" dark/>
      <WhyCoffee/>
      <IsCoffeeGood/>
      <IsCoffeeBad/>
      <Quote quote="Even bad coffee is better than no coffee at all." author="David Lynch"/>
      <BrewWithUs/>
      <Quote quote="A cup of coffee shared with a friend is happiness tasted and time well spent."/>
      <OrderNow/>
      <LetsConnect/>
      <Footer/>
    </main>
  )
}
