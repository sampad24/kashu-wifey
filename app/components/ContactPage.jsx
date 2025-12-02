"use client"

import React, { useState } from 'react'
import axios from 'axios'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      number,
      email,
      message,
    };

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await axios.post("/api/contact", formData);
      setSubmitMessage('Message sent successfully!')
      setName('')
      setNumber('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('Error:', error)
      setSubmitMessage('An error occurred. Please try again.')
      if (error.response && error.response.data && error.response.data.msg) {
        setSubmitMessage(error.response.data.msg.join(", "));
      } else {
        setSubmitMessage("Failed to submit form. Please try again.");
      }
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
                Let&apos;s work together on your next project
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
