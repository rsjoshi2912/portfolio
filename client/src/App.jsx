import { useEffect, useRef, useState } from 'react'
import {
  certifications,
  education,
  experience,
  meta,
  skills,
} from './data/portfolio'
import Contact from './components/Contact/Contact'
import { Arrow, Icon, Spark } from './components/Icons'
import JourneyGuide, { useGentleReveal } from './components/JourneyGuide'

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`
const links = [
  ['about', 'The story'],
  ['work', 'Selected work'],
  ['experience', 'The journey'],
]

function Navigation() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggle = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -55% 0px' },
    )
    document
      .querySelectorAll('main > section[id]')
      .forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#home"
        aria-label="Ravi Joshi, back to top"
        onClick={() => setOpen(false)}
      >
        ravi<span className="wordmark-dot">.</span>
        <span className="wordmark-caption">ENGINEER & BUILDER</span>
      </a>
      <button
        ref={toggle}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close' : 'Menu'}
        <Icon name={open ? 'close' : 'plus'} />
      </button>
      <nav
        id="main-nav"
        className={open ? 'navigation is-open' : 'navigation'}
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false)
            toggle.current?.focus()
          }
        }}
      >
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? 'location' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <Arrow diagonal />
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" /> ENGINEERING WITH A HUMAN TOUCH
        </div>
        <h1>
          <span className="headline-line">Thoughtful code.</span>
          <span className="serif">Real-world</span>
          <br />
          <span className="hero-impact">
            impact.
            <svg viewBox="0 0 340 18" fill="none" aria-hidden="true">
              <path
                d="M4 12C84 2 193 2 330 7M28 16C123 7 214 8 300 11"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <Spark className="hero-asterisk" />
        </h1>
        <p className="hero-intro">Hey, I’m Ravi.</p>
        <p className="hero-description">
          A full-stack engineer who turns complicated problems into things that
          just work. Thoughtful experiences, useful platforms, and care in the
          details.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">
            Explore my work <Arrow />
          </a>
          <a
            className="text-link"
            href={asset('resume.pdf')}
            download="Ravi_Joshi_Resume.pdf"
          >
            Grab my résumé <Arrow direction="down" />
          </a>
        </div>
        <div className="hero-location">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M19 10c0 6-7 11-7 11S5 16 5 10a7 7 0 0 1 14 0Z" />
          </svg>{' '}
          Bengaluru, India <span className="small-dot" /> Building for people,
          everywhere
        </div>
      </div>
      <div className="portrait-composition">
        <div className="portrait-orbit" aria-hidden="true" />
        <span className="handwritten portrait-note">
          the human behind the code
          <svg viewBox="0 0 65 58" fill="none" aria-hidden="true">
            <path
              d="M6 5c36-7 53 15 38 37M35 33l8 12 13-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <figure className="portrait-card">
          <div className="portrait-photo">
            <img
              src={asset('profile.jpg')}
              alt="Ravi Joshi smiling"
              width="832"
              height="1248"
              fetchPriority="high"
            />
          </div>
          <figcaption>
            <span className="handwritten">Ravi Joshi</span>
            <span className="portrait-caption">
              Engineer. Builder. Always curious.
            </span>
            <span className="portrait-mobile-detail">
              Adobe Certified Expert
              <br />
              Based in Bengaluru, India
            </span>
          </figcaption>
        </figure>
        <div className="adobe-sticker">
          <Spark className="sticker-star" />
          <strong>3× Adobe</strong>
          <span>CERTIFIED</span>
        </div>
        {meta.available && (
          <div className="availability">
            <span className="status-dot" /> Open to good conversations
          </div>
        )}
        <Icon name="plus" className="portrait-plus" />
      </div>
      <div className="hero-bottom">
        <span>GOOD PEOPLE. INTERESTING PROBLEMS. MEANINGFUL WORK.</span>
        <a href="#about" aria-label="Start the story">
          A little of the story <Arrow direction="down" />
        </a>
      </div>
    </section>
  )
}

function Companies() {
  const stops = [
    ['2019', 'Mindtree'],
    ['2021', 'Accenture'],
    ['2023', 'Visa'],
    ['2024 — NOW', 'Hashout'],
  ]
  return (
    <div className="companies">
      <div className="wrap career-stops">
        <p>
          A journey built
          <br />
          <strong>in good company.</strong>
        </p>
        <ol>
          {stops.map(([year, name]) => (
            <li key={name}>
              <span className="career-year">{year}</span>
              <strong>{name}</strong>
              <span className="career-stop-dot" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

const projects = [
  {
    id: 'publishing',
    number: '01',
    category: 'CONTENT PLATFORMS',
    title: 'Less friction. More publishing.',
    description:
      'Helping authoring teams move from complex content workflows to a smoother path from first draft to published.',
    tags: ['AEM Guides', 'Java', 'DITA'],
    label: 'AEM Guides publishing platform',
    summary:
      'At Hashout Technologies, I lead development of a structured authoring and publishing solution built around AEM Guides.',
    details: [
      'Built a custom translation connector to automate content export, vendor handoff, and re-import.',
      'Configured folder profiles, DITA-OT pipelines, and PDF / JSON output presets.',
      'Developed AEM components, Sling Models, and review and publishing workflows.',
    ],
  },
  {
    id: 'platform',
    number: '02',
    category: 'FULL-STACK ENGINEERING',
    title: 'Connecting the moving parts.',
    description:
      'Bringing CRM data, search, APIs, and identity together so the people using them don’t have to think about it.',
    tags: ['Spring Boot', 'React', 'Azure'],
    label: 'Enterprise CRM & platform enablement',
    summary:
      'At Hashout Technologies, I worked across the stack to support a Salesforce to Oracle Fusion migration and the services around it.',
    details: [
      'Refactored a Spring Boot application powering more than 20 REST APIs.',
      'Built a Python ingestion service connecting Oracle Fusion data to Azure Cognitive Search.',
      'Replaced legacy SAML middleware with Okta OIDC and integrated a React SPA with AEM.',
    ],
  },
  {
    id: 'intranet',
    number: '03',
    category: 'FRONTEND MODERNIZATION',
    title: 'Making the everyday easier.',
    description:
      'Reworking an enterprise intranet to make daily tools clearer, faster, and easier to maintain.',
    tags: ['React', 'Java', 'Enterprise UX'],
    label: 'Visa enterprise intranet',
    summary:
      'As a Senior Software Engineer at Visa, I contributed to the platform employees used for day-to-day work.',
    details: [
      'Migrated large AngularJS modules to React to improve performance and maintainability.',
      'Enhanced announcements, leave management, timesheets, and registration features.',
      'Tuned search relevance and partnered with product, design, and platform teams to resolve priority issues.',
    ],
  },
]

function ProjectArtwork({ type }) {
  if (type === 'publishing')
    return (
      <div className="project-art art-publishing" aria-hidden="true">
        <div className="art-grid" />
        <div className="publishing-window">
          <div className="window-top">
            <span className="window-dots">● ● ●</span>
            <span>the publishing room</span>
            <Arrow diagonal />
          </div>
          <div className="publishing-body">
            <div className="mini-sidebar">
              <span className="mini-logo">a.</span>
              <i />
              <i />
              <i />
            </div>
            <div className="mini-content">
              <span className="mini-overline">FROM IDEA TO EVERYWHERE</span>
              <strong>
                Good content.
                <br />A clear path.
              </strong>
              <div className="mini-lines">
                <i />
                <i />
              </div>
              <div className="workflow">
                <span>Write</span>
                <Arrow />
                <span>Translate</span>
                <Arrow />
                <span>
                  Publish <Icon name="check" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="art-note handwritten">a little less complexity</div>
      </div>
    )
  if (type === 'platform')
    return (
      <div className="project-art art-platform" aria-hidden="true">
        <div className="art-grid" />
        <div className="connection-diagram">
          <div className="diagram-node node-top">
            CRM <Arrow diagonal />
          </div>
          <div className="diagram-line line-top" />
          <div className="diagram-node node-left">Search</div>
          <div className="diagram-line line-left" />
          <div className="diagram-core">
            all together<span>one connected platform</span>
          </div>
          <div className="diagram-line line-right" />
          <div className="diagram-node node-right">Identity</div>
          <div className="diagram-line line-bottom" />
          <div className="diagram-node node-bottom">
            20+ APIs <Arrow diagonal />
          </div>
        </div>
        <span className="art-bottom-label">
          COMPLEX BEHIND THE SCENES. SIMPLE UP FRONT.
        </span>
      </div>
    )
  return (
    <div className="project-art art-intranet" aria-hidden="true">
      <div className="art-grid" />
      <div className="intranet-window">
        <div className="intranet-top">
          <b>hello, work.</b>
          <span>●</span>
        </div>
        <div className="intranet-content">
          <span className="mini-overline">A FRESH START</span>
          <strong>
            A good day
            <br />
            starts here.
          </strong>
          <div className="intranet-search">
            <Icon name="search" />
            <span>Find what you need</span>
            <Arrow />
          </div>
          <div className="intranet-tiles">
            <div>
              <Icon name="sun" />
              My day
            </div>
            <div>
              <Icon name="document" />
              My team
            </div>
            <div>
              <Arrow diagonal />
              My tools
            </div>
          </div>
        </div>
      </div>
      <span className="intranet-badge">Made for the everyday.</span>
    </div>
  )
}

function ProjectDialog({ project, close }) {
  const ref = useRef(null)
  useEffect(() => {
    const dialog = ref.current
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-title"
      onClose={close}
      onClick={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      <div className="dialog-body">
        <button
          className="dialog-close"
          onClick={close}
          aria-label="Close project details"
          autoFocus
        >
          <Icon name="close" />
        </button>
        <span className="eyebrow">SELECTED WORK / {project.number}</span>
        <h2 id="project-title">{project.label}</h2>
        <p>{project.summary}</p>
        <h3>My part in the picture</h3>
        <ul>
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="project-note">
          The artwork is a conceptual illustration of the work. Enterprise
          source code and client screens are private.
        </p>
        <a className="text-link" href="#contact" onClick={close}>
          Let’s talk about a similar challenge <Arrow />
        </a>
      </div>
    </dialog>
  )
}

function Work() {
  const [selected, setSelected] = useState(null)
  const opener = useRef(null)
  const openProject = (project, event) => {
    opener.current = event.currentTarget
    setSelected(project)
  }
  const closeProject = () => {
    setSelected(null)
    requestAnimationFrame(() => opener.current?.focus({ preventScroll: true }))
  }
  return (
    <section className="work-section wrap section-space" id="work">
      <div className="section-heading">
        <div>
          <div className="eyebrow">03 / THINGS I’VE HELPED BUILD</div>
          <h2>
            Good problems.
            <br />
            <span className="serif">Thoughtful solutions.</span>
          </h2>
        </div>
        <p>
          A few pieces of the bigger picture.
          <br />
          Built with teams, care, and plenty of curiosity.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <button
              className="project-art-button"
              onClick={(event) => openProject(project, event)}
              aria-label={`Explore ${project.label}`}
            >
              <ProjectArtwork type={project.id} />
              <span className="project-open">
                <Arrow diagonal />
              </span>
            </button>
            <div className="project-copy">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>/{project.number}</span>
              </div>
              <h3>
                <button onClick={(event) => openProject(project, event)}>
                  {project.title}
                </button>
              </h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button
                className="text-link project-detail-link"
                onClick={(event) => openProject(project, event)}
              >
                Explore the story <Arrow diagonal />
              </button>
            </div>
          </article>
        ))}
      </div>
      {selected && <ProjectDialog project={selected} close={closeProject} />}
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about-section">
      <div className="wrap about-grid">
        <div className="about-heading">
          <div className="eyebrow">02 / A LITTLE CONTEXT</div>
          <h2>
            Serious about the craft.
            <br />
            <span className="serif">Human about the rest.</span>
          </h2>
          <div
            className="thinking-path"
            aria-label="My approach: understand, build, keep improving"
          >
            <svg viewBox="0 0 380 120" fill="none" aria-hidden="true">
              <path
                d="M18 60C70 5 115 112 184 56S303 12 359 61"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeDasharray="3 5"
              />
              <circle cx="20" cy="58" r="5" />
              <circle cx="188" cy="52" r="5" />
              <circle cx="359" cy="61" r="5" />
            </svg>
            <div>
              <span>Understand.</span>
              <span>Build.</span>
              <span>Keep improving.</span>
            </div>
            <p className="handwritten">The process is part of the craft.</p>
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            I like making complicated things feel simple.
          </p>
          <p>
            Over the past 7+ years, that’s taken me from consumer websites to
            enterprise content platforms, from the interface you click to the
            systems quietly doing the heavy lifting.
          </p>
          <p>
            My home turf is Adobe Experience Manager, React, and Java. But the
            part I care about most is connecting the dots: understanding what
            people need, asking good questions, and building something the whole
            team can be proud of.
          </p>
          <p>
            These days, I’m a Senior Software Engineer at{' '}
            <strong>Hashout Technologies</strong>, working on content platforms
            and the services that bring them together.
          </p>
          <div className="about-stats">
            <div>
              <strong>
                7<span>+</span>
              </strong>
              <span>years of building</span>
            </div>
            <div>
              <strong>
                10<span>+</span>
              </strong>
              <span>enterprise projects</span>
            </div>
            <div>
              <strong>
                3<span>×</span>
              </strong>
              <span>Adobe certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const toolkit = [
  {
    number: '01',
    title: 'The experience',
    description: 'Interfaces that feel clear, responsive, and considered.',
    tags: ['React', 'TypeScript', 'Vue.js', 'Accessibility'],
  },
  {
    number: '02',
    title: 'The engine',
    description: 'Dependable services and the connections between them.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Python'],
  },
  {
    number: '03',
    title: 'The content',
    description: 'Giving good content a better way to reach people.',
    tags: ['AEM Sites & Assets', 'AEM Guides', 'Headless CMS'],
  },
  {
    number: '04',
    title: 'The foundation',
    description: 'The infrastructure that keeps everything moving.',
    tags: ['Azure', 'GCP', 'CI/CD', 'Docker'],
  },
]

function Toolkit() {
  return (
    <section className="toolkit-section wrap section-space" id="skills">
      <div className="section-heading">
        <div>
          <div className="eyebrow">05 / TOOLS OF THE CRAFT</div>
          <h2>
            Different tools.
            <br />
            <span className="serif">One connected picture.</span>
          </h2>
        </div>
        <p>
          From the first interaction to the last API call,
          <br />I like understanding how it all fits together.
        </p>
      </div>
      <div className="toolkit-grid">
        {toolkit.map((item) => (
          <article className="toolkit-card" key={item.number}>
            <span className="toolkit-number">/{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <details className="full-toolkit">
        <summary>
          The full toolbox <Icon name="plus" />
        </summary>
        <div className="full-toolkit-grid">
          {skills.map((group) => (
            <div key={group.name}>
              <h3>{group.name}</h3>
              <p>{group.tags.map((tag) => tag.label).join(' · ')}</p>
            </div>
          ))}
        </div>
      </details>
    </section>
  )
}

const roleNotes = [
  'Connecting content, cloud, and the full stack. Leading AEM Guides publishing and enterprise platform work.',
  'Helping everyday work feel easier through a more useful, modern enterprise intranet.',
  'Leading AEM delivery across healthcare and travel, with a focus on reusable components and better authoring.',
  'Where it all started: multi-brand websites, content migrations, search, and e-commerce experiences.',
]

function Journey() {
  return (
    <section id="experience" className="journey-section wrap section-space">
      <div className="journey-intro">
        <div className="eyebrow">04 / THE JOURNEY SO FAR</div>
        <h2>
          Every chapter,
          <br />
          <span className="serif">something learned.</span>
        </h2>
        <p>
          Different teams. Different challenges.
          <br />
          The same curiosity.
        </p>
        <a
          className="text-link"
          href={asset('resume.pdf')}
          download="Ravi_Joshi_Resume.pdf"
        >
          The full story, on paper <Arrow direction="down" />
        </a>
      </div>
      <div className="timeline">
        {experience.map((job, i) => (
          <details className="timeline-item" key={job.company}>
            <summary>
              <span className="timeline-marker" />
              <span className="timeline-summary">
                <span className="timeline-period">
                  {job.period}
                  {i === 0 && <span className="current-tag">NOW</span>}
                </span>
                <strong>{job.company}</strong>
                <span className="timeline-role">{job.role}</span>
                <span className="timeline-note">{roleNotes[i]}</span>
              </span>
              <Icon name="plus" className="timeline-toggle" />
            </summary>
            <div className="timeline-details">
              {job.projects.map((project) => (
                <div key={project.name}>
                  <h3>{project.name}</h3>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

function Credentials() {
  return (
    <section
      className="credentials-section wrap"
      aria-label="Certifications and education"
    >
      <div className="credential-card">
        <span className="credential-mark" aria-hidden="true">
          A
        </span>
        <div>
          <span className="eyebrow">ALWAYS LEARNING</span>
          <h3>Adobe Certified Expert</h3>
          <p>
            {certifications.featured.name} · {certifications.featured.issued}
          </p>
          <a
            className="text-link"
            href={certifications.featured.verifyUrl}
            target="_blank"
            rel="noreferrer"
          >
            View credential <Arrow diagonal />
          </a>
        </div>
      </div>
      <div className="education-card">
        <span className="eyebrow">WHERE THE FOUNDATIONS BEGAN</span>
        <h3>B.Tech, Computer Science</h3>
        <p>{education.university}</p>
        <span className="education-year">Class of 2018</span>
      </div>
      <details className="other-credentials">
        <summary>
          A few more milestones <Icon name="plus" />
        </summary>
        <div className="other-credentials-grid">
          {certifications.others.map((cert) => (
            <div key={cert.name}>
              <strong>{cert.name}</strong>
              <span>
                {cert.tier} · {cert.issued}
              </span>
            </div>
          ))}
        </div>
      </details>
    </section>
  )
}

function Footer() {
  return (
    <footer className="wrap footer">
      <a className="wordmark" href="#home" aria-label="Back to top">
        ravi<span className="wordmark-dot">.</span>
      </a>
      <p>
        Made with thought, care, and a little curiosity.
        <br />
        <span>© {new Date().getFullYear()} Ravi Joshi</span>
      </p>
      <a className="text-link" href="#home">
        Back to the top <Arrow direction="up" />
      </a>
    </footer>
  )
}

export default function App() {
  useGentleReveal()
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Companies />
        <About />
        <Work />
        <Journey />
        <Toolkit />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <JourneyGuide />
    </>
  )
}
