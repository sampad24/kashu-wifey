"use client"
import React, { useState, useEffect } from 'react'
import img1 from "../assets/logo.png"
import Image from 'next/image'
import VideoPlayer from "../api/VideoPlayer.jsx"

const HomePage = () => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const roles = [
      'Visual Effects Artist',
      'Compositing Artist',
      'Rotoscope & Paint Prep Artist',
      'Ai - Assisted VFX Support'
    ]

    let currentRole = 0
    let currentChar = 0
    let isDeleting = false

    const typeRole = () => {
      const current = roles[currentRole]

      if (isDeleting) {
        setDisplayText(current.substring(0, currentChar - 1))
        currentChar--
      } else {
        setDisplayText(current.substring(0, currentChar + 1))
        currentChar++
      }

      let typeSpeed = isDeleting ? 50 : 100

      if (!isDeleting && currentChar === current.length) {
        isDeleting = true
        typeSpeed = 2000
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false
        currentRole = (currentRole + 1) % roles.length
        typeSpeed = 300
      }

      setTimeout(typeRole, typeSpeed)
    }

    // Start typing effect after a delay
    setTimeout(typeRole, 1000)

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])
  return (
    <div className=''>
      <VideoPlayer className=""></VideoPlayer>
      <section id="home" className="hero  ">
        <div className="hero-content ">
          <div className="hero-text  rounded-4xl  ">
            <h1 className="hero-title">
              Hi, I'm
              <span className='flex justify-center xl:justify-between '><span className="text-amber-300">Kashish Gupta</span></span>

            </h1>
            <p className="hero-subtitle">
              <span className="typing-text">{displayText}</span>
              <span className="cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
            </p>
            <p className="hero-description">
              I work on compositing, rotoscoping and paint cleanup, with a focus on natural and neat visual results.
            </p>
            <div className="hero-actions">
              <a href=""
                className="btn btn-secondary" target="_blank">
                <span>Resume</span>
                <i className="fa-solid fa-up-right-from-square"></i>
                <i className="fa-solid fa-file-lines"></i>
                <i className="fa-solid fa-paperclip"></i>
                <i className="fas fa-download"></i>
              </a>
              <a href="" className="btn btn-secondary" title="visit my nexus card?">
                <span>View My Work</span>
                <i className="fas fa-id-card"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
