import React from 'react'
import Image from 'next/image'

const unreal = "/serviceimages/unreal.jpg"
const comp = "/serviceimages/comp.jpg"
const fx = "/serviceimages/fx.jpg"
const ai = "/serviceimages/ai.png"
const cleanup = "/serviceimages/cleanup.jpg"
const chroma = "/serviceimages/chroma.png"
const roto = "/serviceimages/roto.png"
const track = "/serviceimages/track.jpg"
const screen = "/serviceimages/screen.png"

const ServicePage = () => {
  return (
    <div className='w-full flex justify-center padd1 bg-black'>
      <div className="services-wrapper">
        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="services-header">
              <h2 className="services-title">Services</h2>
              <div className="services-subtitle">
                Professional visual effects and post-production services
              </div>
            </div>

            {/* Services Grid */}
            <div className="services-grid">
              <div className="service-card">
                <div className="">
                  <Image src={unreal} alt='' width={1000} height={1000} ></Image>
                </div>
                <h3 className="service-title">Unreal Engine Visuals</h3>
                <p className="service-description">
                  Dark cinematic environment set with clean lighting, showing a 3D scene viewport aesthetic, calm, real-time rendering mood, minimal UI feel, high-quality visuals.
                </p>
              </div>
              <div className="service-card">
                <div className="">
                  <Image src={comp} alt='' width={1000} height={1000} ></Image>
                </div>
                <h3 className="service-title">Compositing</h3>
                <p className="service-description">
                  Split frame showing raw footage turning into a clean composite, soft light focus on the merge line, realistic, neat, natural integration feel.
                </p>
              </div>
              <div className="service-card">
                <div className="">
                  <Image src={fx} alt='' width={1000} height={1000} ></Image>
                </div>
                <h3 className="service-title">FX Simulation</h3>
                <p className="service-description">
                  Subtle cinematic sparks/particles or smoke movement frozen in a clean frame, realistic simulation feel, not too heavy, softly lit.
                </p>
              </div>
              <div className="service-card">
                <div className="">
                  <Image src={track} alt='' width={1000} height={1000} ></Image>
                </div>
                <h3 className="service-title">2D & 3D Tracking</h3>
                <p className="service-description">
                  Motion tracking points or 3D camera track overlay in a minimal, clean layout on a dark studio render background, realistic solve setup style.
                </p>
              </div>
              <div className="service-card">
                <div className="">
                  <Image src={roto} alt='' width={1000} height={1000} ></Image>
                </div>
                <h3 className="service-title">Rotoscoping</h3>
                <p className="service-description">
                  Subject outline/matte overlay on footage, clean edge detailing, slight soft rim light, neat professional roto look.
                </p>
              </div>
              <div className="service-card">
                <div className="">
                  <Image src={cleanup} alt='' width={1000} height={1000} ></Image>
                </div>
                <h3 className="service-title">Paint & Cleanup</h3>
                <p className="service-description">
                  Marked area being cleanly painted out on a dark frame, healing/patch style representation, minimal, honest cleanup metaphor.
                </p>
              </div>
              <div className="service-card">
                <div className="">
                  <Image src={screen} alt='' width={1000} height={1000} ></Image>
                </div>
                <h3 className="service-title">Screen Replacement</h3>
                <p className="service-description">
                  Phone/LED/laptop screen replaced with clean track overlay, soft light reflection integration, neat realistic placement.
                </p>
              </div>
              <div className="service-card">
                <div className="">
                  <Image src={chroma} alt='' width={1000} height={1000} ></Image>
                </div>
                <h3 className="service-title">Chroma/Keying</h3>
                <p className="service-description">
                  Green screen key edge isolated in a dark studio frame, slight spill control aesthetic, clean matte extraction feel, realistic not exaggerated.
                </p>
              </div>  
              <div className="service-card">
                <div className="">
                  <Image src={ai} alt='' width={1000} height={1000} ></Image>
                </div>
                <h3 className="service-title">AI Video</h3>
                <p className="service-description">
                  Minimal generative frame representing AI-assisted video creation — subtle futuristic media vibe, soft light beam or neural network lines, clean concept style.
                </p>
              </div>             
              
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServicePage
