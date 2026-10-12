import React from 'react';
import logo from '../Images/KPS_logo.jpg';

const businesses = [
  {
    number: '01',
    category: 'LOGISTICS & OPERATIONS',
    title: 'LPG bulk transport',
    description:
      'A dedicated platform for LPG bulk transport operators to manage business and keep owners and drivers connected.',
    points: ['Owner account management', 'Driver accounts', 'Transport operations'],
    link: 'https://lpg-bulk.kpstechnology.in/',
    linkLabel: 'Visit LPG platform',
    icon: 'truck',
    featured: true,
  },
  {
    number: '02',
    category: 'VEHICLE INTELLIGENCE',
    title: 'Vehicle tracking',
    description:
      'Helping heavy-vehicle operators stay informed with tracking solutions and anti-fuel-theft technology.',
    points: ['Heavy vehicle tracking', 'Anti-fuel-theft solutions', 'Tracking technology dealership'],
    link: 'https://tracking.technoton.co.in/',
    linkLabel: 'Explore tracking',
    icon: 'radar',
  },
  {
    number: '03',
    category: 'INDIA ↔ JAPAN TRADE',
    title: 'Import & export',
    description:
      'Building trade connections between India and Japan through carefully sourced products and materials.',
    points: ['Fresh vegetables', 'Spices', 'Scrap metals'],
    link: 'mailto:Saravanan.k@kpstechnology.in?subject=India%E2%80%93Japan%20trade%20enquiry',
    linkLabel: 'Discuss a partnership',
    icon: 'globe',
  },
  {
    number: '04',
    category: 'SOFTWARE DEVELOPMENT',
    title: 'Software solutions',
    description:
      'We build practical digital solutions that help businesses work smarter, serve customers, and grow.',
    points: ['Website development', 'Billing software', 'Mobile platforms'],
    link: 'mailto:Saravanan.k@kpstechnology.in?subject=Software%20project%20enquiry',
    linkLabel: 'Discuss a software project',
    icon: 'support',
  },
];

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BusinessIcon({ name }) {
  if (name === 'truck') {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
        <path d="M5 13h24v21H5zM29 21h8l7 8v5H29z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M34 22v7h9M13 37a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm22 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (name === 'radar') {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="m24 24 12-12M24 7v4m17 13h-4M7 24h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === 'support') {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
        <path d="M8 25v-3a16 16 0 0 1 32 0v3M8 25h5a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-2a4 4 0 0 1-4-4v-9Zm32 0h-5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h2a4 4 0 0 0 4-4v-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 38c-2 2-5 3-9 3h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="21" cy="41" r="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6.5 24h35M24 6c5 5 7.5 11 7.5 18S29 37 24 42m0-36c-5 5-7.5 11-7.5 18S19 37 24 42M9 14h30M9 34h30" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function RouteIllustration() {
  return (
    <div className="hero-visual" aria-label="KPS Technology business network">
      <div className="visual-topline">
        <span className="live-dot" />
        CONNECTING WHAT MOVES YOU
        <span className="visual-index">KPS / 01</span>
      </div>
      <div className="route-map" aria-hidden="true">
        <div className="map-orbit orbit-one" />
        <div className="map-orbit orbit-two" />
        <div className="route-line" />
        <span className="map-point point-india" />
        <span className="map-point point-japan" />
        <span className="map-label label-india">INDIA</span>
        <span className="map-label label-japan">JAPAN</span>
        <span className="map-coordinate coordinate-one">13.08° N</span>
        <span className="map-coordinate coordinate-two">35.68° N</span>
      </div>
      <div className="visual-caption">
        <span>Local expertise.</span>
        <span className="caption-divider" />
        <span>Connected ambition.</span>
      </div>
      <div className="floating-card float-card-top">
        <span className="float-icon"><BusinessIcon name="radar" /></span>
        <span><b>Stay in control</b><small>Vehicle intelligence</small></span>
        <span className="float-check">↗</span>
      </div>
      <div className="floating-card float-card-bottom">
        <span className="float-icon trade-icon"><BusinessIcon name="globe" /></span>
        <span><b>Trade across borders</b><small>India ↔ Japan</small></span>
      </div>
      <div className="visual-corner-mark">K</div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="KPS Technology home">
        <img src={logo} alt="" />
        <span className="brand-name">KPS <strong>Technology</strong></span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#businesses">Our businesses</a>
        <a href="#about">About us</a>
      </nav>
      <a className="header-contact" href="mailto:Saravanan.k@kpstechnology.in">
        Get in touch <ArrowIcon diagonal />
      </a>
    </header>
  );
}

function BusinessCard({ business }) {
  return (
    <article className={`business-card${business.featured ? ' business-card-featured' : ''}`}>
      <div className="card-heading">
        <span className="business-number">{business.number}</span>
        <span className="business-icon"><BusinessIcon name={business.icon} /></span>
      </div>
      <p className="eyebrow card-category">{business.category}</p>
      <h3>{business.title}</h3>
      <p className="card-description">{business.description}</p>
      <ul className="business-points">
        {business.points.map((point) => <li key={point}>{point}</li>)}
      </ul>
      <a className="card-link" href={business.link} {...(business.link.startsWith('https:') ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {business.linkLabel}<ArrowIcon />
      </a>
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />A diverse business. One clear direction.</p>
            <h1>Moving business <span>forward.</span></h1>
            <p className="hero-description">
              From the road to international markets, KPS Technology brings
              practical ideas and reliable partnerships together.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#businesses">Discover what we do <ArrowIcon /></a>
              <a className="text-link" href="mailto:Saravanan.k@kpstechnology.in">Talk to our team <ArrowIcon diagonal /></a>
            </div>
            <div className="hero-note">
              <span className="note-mark">K</span>
              <span>Independent thinking.<br /><strong>Long-term relationships.</strong></span>
            </div>
          </div>
          <RouteIllustration />
          <a className="scroll-cue" href="#businesses"><span />SCROLL TO EXPLORE</a>
        </section>

        <section className="businesses section-wrap" id="businesses">
          <div className="section-intro">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" />What we do</p>
              <h2>Four businesses.<br /><span>One trusted partner.</span></h2>
            </div>
            <p className="section-description">
              We work across logistics, vehicle technology, software support,
              and international trade—bringing focus and care to every connection.
            </p>
          </div>
          <div className="business-grid">
            {businesses.map((business) => <BusinessCard key={business.number} business={business} />)}
          </div>
        </section>

        <section className="about-band" id="about">
          <div className="about-inner">
            <div className="about-stamp"><img src={logo} alt="KPS Technology" /></div>
            <div className="about-copy">
              <p className="eyebrow"><span className="eyebrow-line" />Built on relationships</p>
              <h2>Grounded in experience.<br /><span>Open to what’s next.</span></h2>
              <p>
                KPS Technology is an India-based company with a hands-on approach
                and a global outlook. We bring together dependable service,
                useful technology, and thoughtful trade partnerships.
              </p>
            </div>
            <div className="about-aside">
              <span className="aside-rule" />
              <p>GOOD BUSINESS<br />MOVES PEOPLE<br /><strong>FORWARD.</strong></p>
              <span className="aside-index">KPS TECHNOLOGY&nbsp; / &nbsp;INDIA</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" />Let’s start a conversation</p>
              <h2>Have a project<br />in mind?</h2>
              <p className="contact-copy">We’d be glad to hear from you. Tell us what you’re working on.</p>
            </div>
            <a className="contact-email" href="mailto:Saravanan.k@kpstechnology.in">
              <span>Saravanan.k@kpstechnology.in</span>
              <span className="email-arrow"><ArrowIcon diagonal /></span>
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="footer-brand" href="#home">KPS <strong>Technology</strong></a>
        <span>© {new Date().getFullYear()} KPS Technology. All rights reserved.</span>
        <a href="mailto:Saravanan.k@kpstechnology.in">Get in touch <ArrowIcon diagonal /></a>
      </footer>
    </>
  );
}

export default App;
