import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, CalendarDays, Check, Inbox, Menu, RefreshCw, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { supportAreas } from './data'

gsap.registerPlugin(ScrollTrigger)

const navigation = [
  { label: 'Home', href: '#top', target: 'top' },
  { label: 'Solutions', href: '#support', target: 'support' },
  { label: 'Services', href: '#services', target: 'services' },
  { label: 'Our Work', href: '#work', target: 'work' },
  { label: 'Resources', href: '#resources', target: 'resources' },
  { label: 'Pricing', href: '#pricing', target: 'pricing' },
  { label: 'About', href: '#about', target: 'about' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')
  useEffect(() => {
    const sections = navigation.map(item => document.getElementById(item.target)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, .15, .4] })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Allo Society home"><img src={`${import.meta.env.BASE_URL}brand/allo-society-wordmark-allcaps.svg`} alt="Allo Society" /></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
      {open ? <X /> : <Menu />}
    </button>
    <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
      {navigation.map(item => <a key={item.target} href={item.href} className={active === item.target ? 'active' : ''} aria-current={active === item.target ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label}</a>)}
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
    <div className="section-head"><p className="kicker">02 / ALLO SERVICES</p><p>Four clear ways to take recurring work off your desk.</p></div>
    <div className="service-intro">
      <h2>WHAT CAN AN<br /><em>ALLO ASSISTANT</em><br />HANDLE?</h2>
      <p>Dedicated virtual assistance shaped around the work already repeating in your business. Start with one area, then combine support as the role becomes clear.</p>
    </div>
    <div className="service-cards" id="services" aria-label="Allo Society virtual assistant services">
      {supportAreas.map((area, index) => <article key={area.name} className={`service-card ${selected === index ? 'active' : ''}`} onMouseEnter={() => setSelected(index)} onFocus={() => setSelected(index)}>
        <div className="service-card-top"><span>{area.id}</span><span>ALLO / SERVICE</span></div>
        <h3>{area.name}</h3>
        <p>{area.line}</p>
        <ul>{area.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        <a href={`${import.meta.env.BASE_URL}services/${area.slug}/`}>Explore {area.shortName.toLowerCase()} support <ArrowUpRight /></a>
      </article>)}
    </div>
    <AnimatePresence mode="wait">
      <motion.aside className="service-answer" key={active.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} aria-live="polite">
        <span>DIRECT ANSWER / {active.id}</span>
        <div><h3>What does {active.name.toLowerCase()} include?</h3><p>{active.answer}</p></div>
        <div><h3>Who is it for?</h3><p>{active.bestFor}</p></div>
      </motion.aside>
    </AnimatePresence>
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
  return <section className="talent-section" id="workday" ref={ref}>
    <div className="talent-copy"><p className="kicker">03 / A WORKDAY WITH BACKUP</p><h2>One assistant. Built around <em>your work.</em></h2><p>Your assistant learns the tools, routines, and details that keep your business moving. You keep the decisions. They keep the recurring work under control.</p></div>
    <div className="work-stack" aria-label="Examples of delegated work">
      <article className="work-card work-0"><Inbox /><small>08:15 / INBOX</small><h3>12 messages sorted</h3><p>Three replies drafted. Two follow-ups scheduled. Nothing urgent missed.</p><span><Check /> DONE BEFORE YOUR FIRST CALL</span></article>
      <article className="work-card work-1"><CalendarDays /><small>10:40 / CALENDAR</small><h3>Next week, organised</h3><p>Meetings confirmed, notes attached, and travel options ready to review.</p><span><Check /> READY WHEN YOU ARE</span></article>
      <article className="work-card work-2"><RefreshCw /><small>15:20 / OPERATIONS</small><h3>CRM kept current</h3><p>New leads entered, records cleaned, and outstanding actions flagged.</p><span><Check /> DETAILS UNDER CONTROL</span></article>
      <div className="stamp" aria-hidden="true">YOUR TIME<br />BACK TO YOU</div>
    </div>
  </section>
}

const workProjects = [
  {
    name: 'Meta Pacific',
    discipline: 'BRAND DIRECTION + WEB',
    status: 'DELIVERED',
    role: 'Brand direction and website strategy',
    summary: 'Two connected workstreams brought a broad creative-technology offer into a clearer public presence.',
    proof: '2 connected workstreams',
    challenge: 'A broad creative-technology offer needed a clearer public presence and a stronger path from capability to enquiry.',
    work: [
      'Built distinct brand-direction routes, logo systems, campaign applications, and landing-page concepts using the brand’s real photography and service context.',
      'Structured and shipped the public website across services, work, resources, pricing, and contact paths, including responsive behavior, search foundations, analytics, lead routing, and production QA.',
    ],
    results: ['2 connected workstreams under one case study', '37 website pages covered by the recorded local SEO validation'],
    image: `${import.meta.env.BASE_URL}work/meta-pacific.webp`,
    alt: 'Meta Pacific brand direction and website application',
    fit: 'contain',
  },
  {
    name: 'Blue Tick Ice',
    discipline: 'OPERATIONS + SYSTEMS',
    status: 'ONGOING',
    role: 'Operations lead across six departments',
    summary: 'Team training and a reporting pipeline replaced manual weekly reporting with a system built for faster action.',
    proof: 'Weekly reporting: 4 hours to under 5 minutes',
    challenge: 'Six departments needed shared operating practices and reliable reporting at a factory without standardised systems.',
    work: ['Trained the team to full production capacity before touching software.', 'Built a reporting pipeline that replaced manual weekly reporting and made issues visible sooner.'],
    results: ['Machine utilisation: 74% to 83%', 'Weekly executive reporting: 4 hours to under 5 minutes', '6 recurring premium accounts, 0 missed deliveries'],
  },
  {
    name: 'Digimune Indonesia',
    discipline: 'MARKETING + BRAND',
    status: 'ONGOING',
    role: 'Multi-brand marketing management',
    summary: 'Three brands within one engagement received distinct visual directions, voices, and content calendars.',
    proof: '3 distinct brands, one coordinated engagement',
    challenge: 'Cafero, XBooster, and 77 needed distinct calendars and voices without blurring together or being presented as separate client engagements.',
    work: ['Built separate visual directions, brand voices, and content calendars for each Luna Project brand.', 'Kept the three systems coordinated under one engagement without flattening them into one generic feed.'],
    results: ['3 distinct brand voices running in parallel', 'Ongoing multi-brand marketing for the Bali launches'],
    image: `${import.meta.env.BASE_URL}work/digimune-77.jpeg`,
    alt: '77 campaign artwork from the Digimune Indonesia engagement',
    fit: 'cover',
  },
  {
    name: 'Soracha',
    discipline: 'BRAND + MARKETING',
    status: 'DELIVERED',
    role: 'Brand identity and photography direction',
    summary: 'A new food-and-beverage brand received the identity, photography direction, and social system needed to launch.',
    proof: 'Identity and campaign applications',
    challenge: 'The brand started without name recognition, a visual identity, an online presence, or a large production budget.',
    work: ['Mapped what the business actually needed before locking the visual direction.', 'Built the identity system, directed the launch photography, and created a social system the team could continue using.'],
    results: ['Service-ready brand foundation', 'Identity, photography direction, and campaign applications', 'Launched as Soracha, Matcha Slow Bar'],
    image: `${import.meta.env.BASE_URL}work/soracha.jpeg`,
    alt: 'Soracha campaign photography and brand application',
    fit: 'cover',
  },
]

function OurWork() {
  const [selected, setSelected] = useState(0)
  const [projectOpen, setProjectOpen] = useState(false)
  const closeProjectRef = useRef<HTMLButtonElement>(null)
  const active = workProjects[selected]
  const focusSelectedProject = () => requestAnimationFrame(() => document.querySelector<HTMLButtonElement>('.work-browser > button.active')?.focus())
  useEffect(() => {
    if (!projectOpen) return
    const previousOverflow = document.body.style.overflow
    const keepFocusInside = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setProjectOpen(false); focusSelectedProject() }
      if (event.key === 'Tab') { event.preventDefault(); closeProjectRef.current?.focus() }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', keepFocusInside)
    closeProjectRef.current?.focus()
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', keepFocusInside) }
  }, [projectOpen])
  const closeProject = () => {
    setProjectOpen(false)
    focusSelectedProject()
  }
  return <section className="work-section" id="work">
    <div className="section-head"><p className="kicker">04 / OUR WORK</p><p>Real work / Open every project</p></div>
    <div className="work-intro"><h2>Work,<br /><em>in context.</em></h2><div><p>Selected work by the team behind Allo Society. Open any project for the role, scope, and recorded result without leaving this site.</p><span>PROJECT INDEX / 01—04</span></div></div>
    <div className="work-showcase">
      <div className="work-stage" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div className="work-visual" key={active.name} initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: .45 }}>
            {active.image
              ? <img className={`work-image ${active.fit === 'contain' ? 'contain' : ''}`} src={active.image} alt={active.alt} />
              : <div className="operations-visual"><span>BLUE TICK ICE / WEEKLY REPORTING</span><div><small>BEFORE</small><strong>4 hrs</strong></div><i>→</i><div><small>AFTER</small><strong>&lt; 5 min</strong></div><p>RECORDED EXECUTIVE REPORTING TIME</p></div>}
            <div className="work-caption"><span>0{selected + 1} / 04</span><span>{active.name}</span></div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="work-browser" role="list" aria-label="Selected Allo Society work">
        {workProjects.map((project, index) => <button key={project.name} className={selected === index ? 'active' : ''} onMouseEnter={() => setSelected(index)} onFocus={() => setSelected(index)} onClick={() => setSelected(index)} aria-pressed={selected === index}>
          <span className="work-index">0{index + 1}</span>
          <span className="work-entry"><small>{project.discipline} / {project.status}</small><strong>{project.name}</strong><em>{project.role}</em></span>
          <span className="work-arrow">↗</span>
        </button>)}
        <AnimatePresence mode="wait"><motion.article className="work-detail" key={active.name} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}>
          <p>{active.summary}</p><strong>{active.proof}</strong><button className="work-open" onClick={() => setProjectOpen(true)}>Open the project <ArrowUpRight /></button>
        </motion.article></AnimatePresence>
      </div>
    </div>
    <AnimatePresence>
      {projectOpen && <motion.div className="project-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={closeProject}>
        <motion.article className="project-case" role="dialog" aria-modal="true" aria-labelledby="project-case-title" initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ duration: .55, ease: [.76, 0, .24, 1] }} onMouseDown={event => event.stopPropagation()}>
          <span className="project-case-number" aria-hidden="true">0{selected + 1}</span>
          <div className="project-case-head"><span>ALLO SOCIETY / PROJECT 0{selected + 1}</span><button ref={closeProjectRef} onClick={closeProject} aria-label="Close project"><X /> CLOSE</button></div>
          <div className="project-case-title"><div><span>{active.discipline} / {active.status}</span><h2 id="project-case-title">{active.name}</h2><p>{active.role}</p></div><strong>{active.proof}</strong></div>
          <div className="project-case-body">
            <section><span>01 / THE SITUATION</span><p>{active.challenge}</p></section>
            <section><span>02 / THE WORK</span>{active.work.map(item => <p key={item}>{item}</p>)}</section>
            <section className="project-results"><span>03 / RECORDED RESULTS</span><ul>{active.results.map(result => <li key={result}>{result}</li>)}</ul></section>
          </div>
        </motion.article>
      </motion.div>}
    </AnimatePresence>
  </section>
}

const steps = ['TELL US', 'SHAPE THE ROLE', 'MEET YOUR ASSISTANT', 'SET UP THE WORK', 'KEEP MOVING']

function Process() {
  return <section className="process-section" id="process">
    <div className="section-head light"><p className="kicker">05 / HOW IT STARTS</p><p>A managed setup, without the freelancer search.</p></div>
    <ol className="process-list">{steps.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong><i>{index === steps.length - 1 ? '●' : '↓'}</i></li>)}</ol>
    <p className="process-foot">BALI <span>→</span> YOUR ASSISTANT <span>→</span> YOUR TIME BACK</p>
  </section>
}

const resources = [
  { title: 'Delegation audit', meta: '05 MIN', description: 'A quick way to spot the repeatable work that should leave your desk first.' },
  { title: 'First-week brief', meta: 'TEMPLATE', description: 'The practical context, access, and priorities your assistant needs before day one.' },
  { title: 'Inbox handoff', meta: 'GUIDE', description: 'A simple structure for triage, draft replies, escalation, and daily follow-up.' },
]

function Resources() {
  const [selected, setSelected] = useState(0)
  const active = resources[selected]
  return <section className="resources-section" id="resources">
    <div className="section-head"><p className="kicker">06 / RESOURCES</p><p>Useful before you delegate.</p></div>
    <div className="resource-layout">
      <div className="resource-intro"><h2>Start with<br /><em>clarity.</em></h2><p>Good support begins with a clear handoff. These short resources help you decide what to delegate and how to set it up.</p></div>
      <div className="resource-browser">
        <div className="resource-list" role="list" aria-label="Allo Society resources">
          {resources.map((resource, index) => <button key={resource.title} className={selected === index ? 'active' : ''} onClick={() => setSelected(index)} onMouseEnter={() => setSelected(index)} aria-pressed={selected === index}>
            <span>0{index + 1}</span><strong>{resource.title}</strong><small>{resource.meta}</small>
          </button>)}
        </div>
        <AnimatePresence mode="wait">
          <motion.div className="resource-detail" key={active.title} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
            <span>ALLO / FIELD NOTE</span><h3>{active.title}</h3><p>{active.description}</p><a href="#contact">Request this resource <ArrowUpRight /></a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>
}

const supportLevels = [
  { hours: '10', label: 'Focused', copy: 'A precise starting point for a defined list of recurring tasks.' },
  { hours: '20', label: 'Steady', copy: 'Reliable weekly coverage across admin, follow-up, and coordination.' },
  { hours: '40', label: 'Dedicated', copy: 'Full working-week support for a business with consistent operational needs.' },
]

function Pricing() {
  const [selected, setSelected] = useState(1)
  const active = supportLevels[selected]
  return <section className="pricing-section" id="pricing">
    <div className="section-head light"><p className="kicker">07 / PRICING</p><p>Choose the rhythm, then shape the role.</p></div>
    <div className="pricing-layout">
      <div><span className="pricing-eyebrow">HOURS / WEEK</span><div className="hours-selector" role="group" aria-label="Weekly support hours">
        {supportLevels.map((level, index) => <button key={level.hours} className={selected === index ? 'active' : ''} onClick={() => setSelected(index)} aria-pressed={selected === index}>{level.hours}</button>)}
      </div></div>
      <AnimatePresence mode="wait"><motion.article className="pricing-copy" key={active.hours} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
        <span>{active.label} support</span><h2>{active.hours}<small> hrs</small></h2><p>{active.copy}</p><a href="#contact">Request a tailored estimate <ArrowUpRight /></a>
      </motion.article></AnimatePresence>
    </div>
  </section>
}

function About() {
  return <section className="about-section" id="about">
    <div className="section-head"><p className="kicker">08 / ABOUT ALLO</p><p>Bali based. Internationally minded.</p></div>
    <div className="about-statement"><span>Born in Bali.</span><strong>Built for busy teams</strong><em>everywhere.</em></div>
    <div className="about-foot"><p>Allo Society gives founders and small teams dedicated virtual support without turning delegation into another job.</p><a href="#contact">Say Allo <ArrowUpRight /></a></div>
  </section>
}

function Contact() {
  return <footer className="contact" id="contact">
    <p className="kicker">09 / SAY ALLO</p>
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
  return <><div className="cursor" ref={cursor} aria-hidden="true" /><Header /><main><Hero /><Positioning /><ServiceSystem /><Delegation /><OurWork /><Process /><Resources /><Pricing /><About /></main><Contact /></>
}
