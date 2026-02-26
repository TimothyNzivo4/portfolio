import React from 'react'

const groups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'Python'] },
  { title: 'Tools', items: ['Git', 'Docker', 'Figma'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {groups.map((g) => (
            <div key={g.title} className="skill-group">
              <strong>{g.title}</strong>
              <div className="skill-list">
                {g.items.map((s) => (
                  <span key={s} className="skill-badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
