"use client"

import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage('Message sent successfully!')
        setFormData({ name: '', number: '', email: '', message: '' })
      } else {
        setSubmitMessage('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='contact-wrapper  w-full flex justify-center  '>

      <div className="contact-wrapper rounded-4xl w-7xl">
        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-header">
              <h2 className="contact-title">Contact Me</h2>
              <div className="contact-subtitle">
                Let's work together on your next project
              </div>
            </div>

            <div className="contact-content">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="number" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-submit-btn"
                >
                  <span className="btn-text">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <i className="fas fa-paper-plane btn-icon"></i>
                </button>
              </form>

              {submitMessage && (
                <div className={`contact-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
                  <i className={`fas ${submitMessage.includes('successfully') ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                  {submitMessage}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactPage
