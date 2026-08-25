'use client'

const skillGroups = [
  ['Backend', 'Ruby on Rails', 'Go kit', 'Echo', 'RESTful APIs', 'Microservices', 'System Design'],
  ['Data', 'PostgreSQL', 'Amazon Redshift', 'SQL', 'Redis'],
  ['Infrastructure', 'AWS', 'Docker', 'Sidekiq', 'Unix / Linux', 'Git'],
  ['Workflow', 'RSpec', 'Pub/Sub', 'AI-assisted engineering', 'Technical planning'],
]

const experience = [
  { company: 'Hubble Pte. Ltd.', role: 'Senior Backend Engineer', period: 'JAN 2021 — PRESENT', points: ['Design scalable microservices and APIs using Pub/Sub for loosely coupled communication.', 'Optimise complex SQL and Redis caching to support dashboards, reporting, and performance.', 'Own production investigations across application logic, databases, and distributed services.'] },
  { company: 'Deliveree On-Demand Logistics', role: 'Backend Developer', period: 'FEB 2019 — DEC 2020', points: ['Delivered end-to-end product features across Ruby on Rails backend and ReactJS frontend.', 'Investigated production bugs, integrated third-party APIs, and validated releases manually.'] },
  { company: '1PAC Vietnam', role: 'Web Developer', period: 'MAR 2017 — DEC 2019', points: ['Built responsive interfaces and reusable components for outsourced web projects.', 'Designed APIs for Punch and Wakuwaku Today while supporting Vue.js frontend delivery.'] },
]

const projects = [
  { name: 'Hubble Data', type: 'ANALYTICS DATA PIPELINE', description: 'Event-driven data processing from PostgreSQL through Kinesis and Lambda, into S3 and Redshift.', tech: 'Python · AWS Lambda · Kinesis · S3 · Redshift' },
  { name: 'Hubble Microservices', type: 'BACKEND PLATFORM', description: 'Reliable, maintainable APIs powering core workflows of a construction management platform.', tech: 'Ruby on Rails · PostgreSQL · Redis · Sidekiq' },
  { name: 'Deliveree Webapp', type: 'LOGISTICS PRODUCT', description: 'Full-stack product contributions for on-demand logistics, from backend services to customer-facing UI.', tech: 'Rails · ReactJS · Google APIs · Mapbox APIs' },
]

export function CvLanding() {
  return (
    <main>
      <div className="pointer-events-none fixed inset-0 grid-texture" aria-hidden="true" />
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10" aria-label="Primary navigation">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-foreground">DT<span className="text-accent">/</span>BE</a>
        <div className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex">
          <a className="transition-colors hover:text-accent" href="#experience">Experience</a>
          <a className="transition-colors hover:text-accent" href="#systems">Systems</a>
          <a className="transition-colors hover:text-accent" href="#contact">Contact</a>
        </div>
        <a href="mailto:bluediamond1702@gmail.com" className="border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-accent transition-colors hover:border-accent hover:bg-secondary">Let&apos;s talk ↗</a>
      </nav>

      <section id="top" className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-28 pt-20 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:pb-36 lg:pt-28">
        <div className="rise">
          <p className="eyebrow mb-7">// senior backend engineer · ho chi minh city</p>
          <h1 className="max-w-3xl text-balance text-6xl font-semibold leading-[.94] tracking-[-.07em] sm:text-8xl lg:text-[7.6rem]">Building the<br /><span className="text-accent">systems</span> behind<br />the product.</h1>
          <p className="mt-9 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">I&apos;m Dat Tang — a backend engineer with 9+ years of experience turning complex product requirements into reliable, scalable software.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#experience" className="bg-primary px-5 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5">View experience ↓</a>
            <a href="https://github.com/DiamondDat" target="_blank" rel="noreferrer" className="border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent">GitHub ↗</a>
          </div>
        </div>
        <div className="rise-delay flex items-end lg:justify-end">
          <div className="w-full max-w-md border border-border bg-card/80 p-5 font-mono text-xs text-muted-foreground backdrop-blur-sm">
            <div className="mb-8 flex items-center justify-between border-b border-border pb-4"><span className="text-accent">system.profile</span><span>v4.0.0</span></div>
            <div className="flex flex-col gap-4"><p><span className="text-accent">name</span> = <span className="text-foreground">&quot;Dat Tang&quot;</span></p><p><span className="text-accent">focus</span> = [<span className="text-foreground">&quot;APIs&quot;, &quot;data&quot;, &quot;distributed systems&quot;</span>]</p><p><span className="text-accent">experience</span> = <span className="text-foreground">9+ years</span></p><p><span className="text-accent">status</span> = <span className="text-accent">&quot;shipping reliable software&quot;</span></p></div>
            <div className="mt-10 flex items-center gap-2 border-t border-border pt-4 text-[10px]"><span className="size-2 bg-accent" /> Available for the right problem</div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-border bg-card/45" aria-label="Career summary"><div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3 lg:px-10"><div><p className="font-mono text-4xl text-accent">09<span className="text-lg">+</span></p><p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Years building</p></div><div><p className="font-mono text-4xl text-accent">03</p><p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Engineering teams</p></div><div><p className="font-mono text-4xl text-accent">∞</p><p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Curiosity for systems</p></div></div></section>

      <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32"><div className="mb-16 flex items-end justify-between gap-6"><div><p className="eyebrow mb-4">01 / track record</p><h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Experience that<br /><span className="text-accent">ships.</span></h2></div><p className="hidden max-w-xs text-right text-sm leading-6 text-muted-foreground sm:block">Ownership from architecture to production debugging — with a bias for practical solutions.</p></div><div className="flex flex-col">{experience.map((item, index) => <article key={item.company} className="grid gap-6 border-t border-border py-8 lg:grid-cols-[.8fr_1.3fr_.3fr]"><div><p className="font-mono text-sm text-foreground">0{index + 1} / {item.company}</p><p className="mt-2 text-sm text-accent">{item.role}</p></div><ul className="flex flex-col gap-3 text-sm leading-6 text-muted-foreground">{item.points.map((point) => <li key={point} className="flex gap-3"><span className="text-accent">—</span>{point}</li>)}</ul><p className="font-mono text-[10px] tracking-wide text-muted-foreground lg:text-right">{item.period}</p></article>)}</div></section>

      <section id="systems" className="relative border-y border-border bg-primary/15"><div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32"><div className="mb-14"><p className="eyebrow mb-4">02 / technical toolkit</p><h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl">The tools I use<br />to make <span className="text-accent">things work.</span></h2></div><div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{skillGroups.map(([title, ...skills]) => <div key={title} className="bg-background p-6"><p className="mb-8 font-mono text-xs text-accent">{title}</p><div className="flex flex-col gap-3 text-sm text-foreground">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section className="relative mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32"><div className="mb-14 flex items-end justify-between"><div><p className="eyebrow mb-4">03 / selected systems</p><h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Work in<br /><span className="text-accent">production.</span></h2></div><span className="font-mono text-xs text-muted-foreground">03 projects</span></div><div className="grid gap-5 lg:grid-cols-3">{projects.map((project, index) => <article key={project.name} className="flex min-h-72 flex-col justify-between border border-border bg-card p-6 transition-colors hover:border-accent"><div><div className="mb-12 flex items-center justify-between"><span className="font-mono text-xs text-accent">0{index + 1}</span><span className="font-mono text-[10px] tracking-widest text-muted-foreground">↗</span></div><p className="eyebrow text-[10px]">{project.type}</p><h3 className="mt-3 text-2xl font-medium tracking-tight">{project.name}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{project.description}</p></div><p className="mt-8 border-t border-border pt-4 font-mono text-[10px] leading-5 text-accent">{project.tech}</p></article>)}</div></section>

      <footer id="contact" className="relative border-t border-border bg-primary px-6 py-20 text-primary-foreground lg:px-10 lg:py-28"><div className="mx-auto max-w-6xl"><p className="eyebrow mb-6 text-primary-foreground/70">// next deployment</p><div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end"><h2 className="max-w-3xl text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl">Have a hard backend<br />problem? <span className="text-accent">Let&apos;s talk.</span></h2><div className="flex flex-col gap-3 font-mono text-xs"><a className="transition-opacity hover:opacity-70" href="mailto:bluediamond1702@gmail.com">bluediamond1702@gmail.com ↗</a><a className="transition-opacity hover:opacity-70" href="tel:+84778847998">(+84)778847998 ↗</a><a className="transition-opacity hover:opacity-70" href="https://github.com/DiamondDat" target="_blank" rel="noreferrer">github.com/DiamondDat ↗</a></div></div><div className="mt-24 flex justify-between border-t border-primary-foreground/20 pt-5 font-mono text-[10px] uppercase tracking-widest text-primary-foreground/60"><span>Dat Tang · CV 2026</span><span>Ho Chi Minh City, VN</span></div></div></footer>
    </main>
  )
}
