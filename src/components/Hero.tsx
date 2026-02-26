import React from 'react'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        <h1>Your Name</h1>
        <p className="tagline">Full-stack developer building accessible web apps</p>
        <div className="hero-ctas">
          <button onClick={() => scrollTo('projects')}>View My Work</button>
          <button onClick={() => scrollTo('contact')}>Contact Me</button>
        </div>
      </div>
    </section>
  )
}
