import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // placeholder: form handling can be added later
    alert('Message submitted — implement backend or mailto handler')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2>Contact</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Message
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}
