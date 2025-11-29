import React from 'react'
import Image from 'next/image'
import pic from "../assets/pic.jpg"

const AboutPage = () => {
  return (
    <div className='skills-wrapper'>
      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className='flex justify-center text-4xl underline text-blue-400'>
            About Me
          </div>
          {/* Section Header */}

          {/* Main Content */}
          <div className="about-content">
            {/* Left Side - Image & Stats */}
            <div className="about-image-section">
              <div className="about-image-container">
                <div className="about-image-glow"></div>
                <div className="about-image">
                  <div className="image-placeholder">
                    <Image src={pic} height={500} alt='' className='rounded-full profile-image '></Image>
                  </div>
                </div>
              </div>
              <div href="#about" className='btn btn-secondary btn-inv2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                <span><a href='https://www.linkedin.com/in/kashish-gupta-vfx-artist-b7535a391/' target='blank' >Get In Touch</a></span>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="about-text-section">
              <div className="about-description">
                <p className="about-intro">
                  Hi there! I'm <span className="text-yellow-400">Kashish Gupta</span>, I’m a VFX Artist focusing on compositing, rotoscoping, cleanup, object removal, motion tracking, and screen replacement. I enjoy creating visuals that look natural, neat, and well-blended into the footage.
                </p>

                <p className="about-paragraph">

                  I work with Nuke, After Effects, Mocha Pro, Silhouette, Unreal Engine, Premiere Pro, DaVinci Resolve, and Photoshop. I use these tools based on what the shot needs, keeping the process simple, organised, and efficient.

                  I like paying attention to small details — clean edges, smooth blends, and realistic color matching. My approach is calm and clear, with the aim of making every shot feel consistent with the original scene, whether it’s for films, ads, or music videos.


                </p>

                <p className="about-paragraph">
                  Good communication and a steady workflow matter to me, so the project stays smooth from start to finish. My goal is to deliver clean, honest, and visually balanced results that support the story without drawing unnecessary attention.
                </p>
              </div>

              {/* Call to Action */}
              <div className="about-cta btn-inv">
                <a href="#contact" className="btn btn-secondary">
                  <span>Get In Touch</span>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
