import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Asterisk, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { people, services } from './data'

gsap.registerPlugin(ScrollTrigger)

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Allo Society home"><img src={`${import.meta.env.BASE_URL}brand/allo-society-wordmark-allcaps.svg`} alt="Allo Society" /></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
      {open ? <X /> : <Menu />}
    </button>
    <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
      <a href="#services" onClick={() => setOpen(false)}>Services</a>
      <a href="#talent" onClick={() => setOpen(false)}>Talent</a>
      <a href="#process" onClick={() => setOpen(false)}>Process</a>
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight /></a>
    </nav>
  </header>
}

function Hero() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line span', { yPercent: 115, rotate: 3, duration: 1.1, stagger: .08, ease: 'power4.out' })
      gsap.to('.hero-word-people', { letterSpacing: '-.075em', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.to('.hero-orbit', { rotate: 65, yPercent: -25, scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 1 } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return <section className="hero" id="top" ref={ref}>
    <div className="hero-meta"><span>Talent, thoughtfully placed</span><span>Indonesia ↗ The world</span></div>
    <h1>
      <span className="hero-line"><span className="hero-word-people">PEOPLE</span></span>
      <span className="hero-line offset"><span>WORTH</span></span>
      <span className="hero-line"><span>WORKING WITH.</span></span>
    </h1>
    <div className="hero-orbit" aria-hidden="true"><span>RIGHT PEOPLE • RIGHT WORK • </span></div>
    <p className="hero-note">We find sharp, good people for ambitious teams. Human judgment included.</p>
    <a className="scroll-cue" href="#positioning"><ArrowDownRight /> SCROLL TO MEET THEM</a>
  </section>
}

function Positioning() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.positioning .line-a', { xPercent: -18 }, { xPercent: 5, scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 } })
      gsap.fromTo('.positioning .line-b', { xPercent: 14 }, { xPercent: -5, scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return <section className="positioning" id="positioning" ref={ref}>
    <p className="kicker">01 / THE POINT</p>
    <div className="position-lines" aria-label="You do not need more people. You need the right people.">
      <div className="line-a">YOU DON'T NEED <i>MORE</i> PEOPLE.</div>
      <div className="line-b">YOU NEED THE <i>RIGHT</i> PEOPLE.</div>
    </div>
  </section>
}

function ServiceSystem() {
  const [selected, setSelected] = useState(0)
  const active = services[selected]
  return <section className="services-section" id="services">
    <div className="section-head"><p className="kicker">02 / ONE SOCIETY, FOUR WAYS IN</p><p>Choose the shape of support you need.</p></div>
    <div className="service-stage">
      <div className="constellation" aria-label="Allo Society services">
        <div className="allo-core"><Asterisk /> <span>ALLO</span></div>
        {services.map((service, index) => <button key={service.name} className={`service-node node-${index} ${selected === index ? 'active' : ''}`} onMouseEnter={() => setSelected(index)} onFocus={() => setSelected(index)} onClick={() => setSelected(index)}>
          <span>{service.id}</span> ALLO {service.name.toUpperCase()}
        </button>)}
        <svg className="constellation-lines" viewBox="0 0 700 520" aria-hidden="true"><path d="M350 260 L120 95 M350 260 L585 100 M350 260 L110 430 M350 260 L590 420" /></svg>
      </div>
      <AnimatePresence mode="wait">
        <motion.article className="service-detail" key={active.name} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: .35 }}>
          <div className="service-number">ALLO / {active.id}</div>
          <h2>{active.name}</h2>
          <p>{active.line}</p>
          <ul>{active.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <a href="#contact">Explore this path <ArrowUpRight /></a>
        </motion.article>
      </AnimatePresence>
    </div>
  </section>
}

function Talent() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.person-card', { y: 180, rotate: i => [-7, 4, 9][i], stagger: .12, scrollTrigger: { trigger: ref.current, start: 'top 70%', end: 'center center', scrub: 1 } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return <section className="talent-section" id="talent" ref={ref}>
    <div className="talent-copy"><p className="kicker">03 / PEOPLE, NOT INVENTORY</p><h2>A shortlist should feel <em>short.</em></h2><p>We look for context, curiosity and the kind of competence people trust. Then we introduce only the people worth meeting.</p></div>
    <div className="people-stack">
      {people.map((person, index) => <article className={`person-card person-${index}`} key={person.name}>
        <img src={person.image} alt={`Portrait of ${person.name}, ${person.role.toLowerCase()}`} loading="lazy" />
        <div><strong>{person.name}</strong><span>{person.role}</span><small>{person.place} / AVAILABLE</small></div>
      </article>)}
      <div className="stamp" aria-hidden="true">GOOD PEOPLE<br />FOUND HERE</div>
    </div>
  </section>
}

const steps = ['DISCOVER', 'SCREEN', 'MATCH', 'INTERVIEW', 'HIRE']

function Process() {
  return <section className="process-section" id="process">
    <div className="section-head light"><p className="kicker">04 / HOW IT MOVES</p><p>Clear enough to follow. Careful enough to work.</p></div>
    <ol className="process-list">{steps.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong><i>{index === steps.length - 1 ? '●' : '↓'}</i></li>)}</ol>
    <p className="process-foot">INDONESIA <span>→</span> GLOBAL TALENT <span>→</span> YOUR TEAM</p>
  </section>
}

function Contact() {
  return <footer className="contact" id="contact">
    <p className="kicker">05 / SAY ALLO</p>
    <h2>BUILD<br /><span>YOUR</span><br />TEAM.</h2>
    <a className="contact-button" href="mailto:hello@allosociety.co">hello@allosociety.co <ArrowUpRight /></a>
    <div className="footer-line"><span>ALLO SOCIETY © 2026</span><span>PEOPLE WORTH WORKING WITH</span><a href="#top">BACK TO TOP ↑</a></div>
  </footer>
}

export function App() {
  const cursor = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce) {
      const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
      let frame = 0
      const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
      frame = requestAnimationFrame(raf)
      return () => { cancelAnimationFrame(frame); lenis.destroy() }
    }
  }, [])
  useEffect(() => {
    const move = (event: PointerEvent) => { if (cursor.current) gsap.to(cursor.current, { x: event.clientX, y: event.clientY, duration: .18 }) }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return <><div className="cursor" ref={cursor} aria-hidden="true" /><Header /><main><Hero /><Positioning /><ServiceSystem /><Talent /><Process /></main><Contact /></>
}
