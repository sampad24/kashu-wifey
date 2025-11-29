import React from 'react'
import Image from 'next/image'
import Nuke from "@/public/logos/nuke.png"
import After from "@/public/logos/after.png"
import Mocha from "@/public/logos/mocha.png"
import silhoute from "@/public/logos/silhoute.png"
import Unreal from "@/public/logos/Unreal.png"
import Premier from "@/public/logos/adopepremier.png"
import Davinci from "@/public/logos/davinci.png"
import Photo from "@/public/logos/photo.png"
import Houdini from "@/public/logos/houdini.png"
import Maya from "@/public/logos/maya.jpeg"

const SkillPage = () => {
  return (
    <div className='flex justify-center w-full skills-wrapper'>

    <div className="skills-wrapper w-7xl">
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="skills-header">
            <h2 className="skills-title">Skills & Tools</h2>
          </div>

          <div className="skills-grid">
            {/* Skills Category */}
            <div className="skill-category">
              <div className="category-header">
                <h3 className="category-title">Skills</h3>
              </div>

              <div className="skill-card">
                <ul className="skill-list">
                  <li className="skill-item">
                    
                    <span>Compositing</span>
                  </li>
                  <li className="skill-item">
                    
                    <span>Rotoscoping</span>
                  </li>
                  <li className="skill-item">
                    
                    <span>Paint Cleanup</span>
                  </li>
                  <li className="skill-item">
                    
                    <span>Screen Replacement</span>
                  </li>
                  <li className="skill-item">
                    
                    <span>Chroma Remove</span>
                  </li>
                  <li className="skill-item">
                    
                    <span>2D & 3D Tracking</span>
                  </li>
                  <li className="skill-item">
                    
                    <span>Motion Tracking</span>
                  </li>
                  <li className="skill-item">
                    
                    <span>FX</span>
                  </li>
                  <li className="skill-item">
                    
                    <span>3D Modeling</span>
                  </li>
                  <li className="skill-item">
                    
                    <span>Light Color & Finishing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tools Category */}
            <div className="skill-category">
              <div className="category-header">
                <h3 className="category-title">Tools</h3>
              </div>

              <div className="skill-card">
                <ul className="skill-list">
                  <li className="skill-item">
                    <div className="skill-icon">
                      <Image src={Nuke} alt='' width={100} height={100} ></Image>
                    </div>
                    <span>Nuke</span>
                  </li>
                  <li className="skill-item">
                    <div className="skill-icon">
                      <Image src={After} alt='' width={100} height={100} ></Image>
                    </div>
                    <span>After Effects</span>
                  </li>
                  <li className="skill-item">
                    <div className="skill-icon">
                      <Image src={Mocha} alt='' width={100} height={100} ></Image>
                    </div>
                    <span>Mocha Pro</span>
                  </li>
                  <li className="skill-item">
                    <div className="skill-icon">
                      <Image src={silhoute} alt='' width={100} height={100} ></Image>
                    </div>
                    <span>Silhouette</span>
                  </li>
                  <li className="skill-item">
                    <div className="skill-icon">
                      <Image src={Unreal} alt='' width={100} height={100} ></Image>
                    </div>
                    <span>Unreal Engine</span>
                  </li>
                  <li className="skill-item">
                    <div className="skill-icon">
                      <Image src={Premier} alt='' width={100} height={100} ></Image>
                    </div>
                    <span>Premiere Pro</span>
                  </li>
                  <li className="skill-item">
                    <div className="skill-icon">
                     <Image src={Davinci} alt='' width={100} height={100} ></Image>
                    </div>
                    <span>DaVinci Resolve</span>
                  </li>
                  <li className="skill-item">
                    <div className="skill-icon">
                      <Image src={Photo} alt='' width={100} height={100} ></Image>
                    </div>
                    <span>Photoshop</span>
                  </li>
                  <li className="skill-item">
                    <div className="skill-icon">
                      <Image src={Houdini} alt='' width={100} height={100} ></Image>
                    </div>
                    <span>Houdini</span>
                  </li>
                  <li className="skill-item">
                    <div className="skill-icon">
                      <Image src={Maya} alt='' width={100} height={100} ></Image>
                    </div>
                    <span>Maya 3D</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default SkillPage
