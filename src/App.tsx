import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Asterisk, CalendarDays, Check, Inbox, Menu, RefreshCw, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { supportAreas } from './data'

gsap.registerPlugin(ScrollTrigger)

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Allo Society home"><img src={`${import.meta.env.BASE_URL}brand/allo-society-wordmark-allcaps.svg`} alt="Allo Society" /></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
      {open ? <X /> : <Menu />}
    </button>
    <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
      <a href="#support" onClick={() => setOpen(false)}>Support</a>
      <a href="#tasks" onClick={() => setOpen(false)}>What we handle</a>
      <a href="#process" onClick={() => setOpen(false)}>Process</a>
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Find an assistant <ArrowUpRight /></a>
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
    <div className="hero-meta"><span>Dedicated virtual assistance</span><span>Bali ↗ Your workday</span></div>
    <h1>
      <span className="hero-line"><span className="hero-word-people">YOUR TIME</span></span>
      <span className="hero-line offset"><span>BELONGS</span></span>
      <span className="hero-line"><span>ELSEWHERE.</span></span>
    </h1>
    <div className="hero-orbit" aria-hidden="true"><span>RIGHT SUPPORT • RIGHT TIME • </span></div>
    <p className="hero-note">A dedicated Allo Assistant handles the recurring work, so you can stay focused on the decisions only you can make.</p>
    <a className="scroll-cue" href="#positioning"><ArrowDownRight /> SEE WHAT TO HAND OFF</a>
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
    <div className="position-lines" aria-label="Your inbox should not be your second job. Hand off what keeps repeating.">
      <div className="line-a">YOUR INBOX IS NOT YOUR <i>SECOND JOB.</i></div>
      <div className="line-b">HAND OFF WHAT KEEPS <i>REPEATING.</i></div>
    </div>
  </section>
}

function ServiceSystem() {
  const [selected, setSelected] = useState(0)
  const active = supportAreas[selected]
  return <section className="services-section" id="support">
    <div className="section-head"><p className="kicker">02 / WHAT YOUR ASSISTANT CAN OWN</p><p>Start with the work already taking up your week.</p></div>
    <div className="service-stage">
      <div className="constellation" aria-label="Virtual assistant support areas">
        <div className="allo-core"><Asterisk /> <span>YOUR VA</span></div>
        {supportAreas.map((area, index) => <button key={area.name} className={`service-node node-${index} ${selected === index ? 'active' : ''}`} onMouseEnter={() => setSelected(index)} onFocus={() => setSelected(index)} onClick={() => setSelected(index)}>
          <span>{area.id}</span> {area.name.toUpperCase()}
        </button>)}
        <svg className="constellation-lines" viewBox="0 0 700 520" aria-hidden="true"><path d="M350 260 L120 95 M350 260 L585 100 M350 260 L110 430 M350 260 L590 420" /></svg>
      </div>
      <AnimatePresence mode="wait">
        <motion.article className="service-detail" key={active.name} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: .35 }}>
          <div className="service-number">YOUR ASSISTANT / {active.id}</div>
          <h2>{active.name}</h2>
          <p>{active.line}</p>
          <ul>{active.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <a href="#contact">Hand this off <ArrowUpRight /></a>
        </motion.article>
      </AnimatePresence>
    </div>
  </section>
}

function Delegation() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-card', { y: 180, rotate: i => [-7, 4, 9][i], stagger: .12, scrollTrigger: { trigger: ref.current, start: 'top 70%', end: 'center center', scrub: 1 } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return <section className="talent-section" id="tasks" ref={ref}>
    <div className="talent-copy"><p className="kicker">03 / A WORKDAY WITH BACKUP</p><h2>One assistant. Built around <em>your work.</em></h2><p>Your assistant learns the tools, routines, and details that keep your business moving. You keep the decisions. They keep the recurring work under control.</p></div>
    <div className="work-stack" aria-label="Examples of delegated work">
      <article className="work-card work-0"><Inbox /><small>08:15 / INBOX</small><h3>12 messages sorted</h3><p>Three replies drafted. Two follow-ups scheduled. Nothing urgent missed.</p><span><Check /> DONE BEFORE YOUR FIRST CALL</span></article>
      <article className="work-card work-1"><CalendarDays /><small>10:40 / CALENDAR</small><h3>Next week, organised</h3><p>Meetings confirmed, notes attached, and travel options ready to review.</p><span><Check /> READY WHEN YOU ARE</span></article>
      <article className="work-card work-2"><RefreshCw /><small>15:20 / OPERATIONS</small><h3>CRM kept current</h3><p>New leads entered, records cleaned, and outstanding actions flagged.</p><span><Check /> DETAILS UNDER CONTROL</span></article>
      <div className="stamp" aria-hidden="true">YOUR TIME<br />BACK TO YOU</div>
    </div>
  </section>
}

const steps = ['TELL US', 'SHAPE THE ROLE', 'MEET YOUR ASSISTANT', 'SET UP THE WORK', 'KEEP MOVING']

function Process() {
  return <section className="process-section" id="process">
    <div className="section-head light"><p className="kicker">04 / HOW IT STARTS</p><p>A managed setup, without the freelancer search.</p></div>
    <ol className="process-list">{steps.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong><i>{index === steps.length - 1 ? '●' : '↓'}</i></li>)}</ol>
    <p className="process-foot">BALI <span>→</span> YOUR ASSISTANT <span>→</span> YOUR TIME BACK</p>
  </section>
}

function Contact() {
  return <footer className="contact" id="contact">
    <p className="kicker">05 / SAY ALLO</p>
    <h2>FIND<br /><span>YOUR</span><br />ASSISTANT.</h2>
    <a className="contact-button" href="mailto:hello@allosociety.co">hello@allosociety.co <ArrowUpRight /></a>
    <div className="footer-line"><span>ALLO SOCIETY © 2026</span><span>VIRTUAL SUPPORT FROM BALI</span><a href="#top">BACK TO TOP ↑</a></div>
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
  return <><div className="cursor" ref={cursor} aria-hidden="true" /><Header /><main><Hero /><Positioning /><ServiceSystem /><Delegation /><Process /></main><Contact /></>
}
