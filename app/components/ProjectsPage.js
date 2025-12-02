"use client"
import React, { useState, useEffect } from 'react'
import Video from 'next-video';
const ProjectsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const videos = [
    { title: 'AI Bollywood Song', file: 'AI Bollywood Song.mp4'},
    { title: 'AI Cartoon Video', file: 'AI Cartoon Video.mp4'},
    { title: 'AI God Video', file: 'AI God Video.mp4'},
    { title: 'Compositing', file: 'Compositing.mp4'},
    { title: 'Paint & Cleanup', file: 'Paint & Cleanup.mp4'},
    { title: 'Rotoscoping', file: 'Rotoscoping.mp4', },
    { title: 'UE Environment', file: 'UE Enviroment.mp4' },
    { title: 'VFX Showreel', file: 'VFX Showreel.mp4'}
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const openModal = (video) => {
    setSelectedVideo(video)
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  return (
    <div className='project '>

    <div className="min-h-screen bg-gradient-to-br  text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="relative z-10 p-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <h1 className="services-title ">
              My Showreels
            </h1>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(video)}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={`/thumbnails/${video.file.replace('.mp4', '.jpg')}`}
                  alt={video.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.src = '/thumbnails/default.jpg' }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l8-5-8-5z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl flex justify-center h-10 items-center font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {video.title}
                </h3>
            
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className='flex justify-center w-full'>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h2>
                    
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Video Player */}
              <div className="p-6">
                <video
                  src={`/videos/${selectedVideo.file}`}
                  controls
                  className="w-full rounded-xl shadow-lg"
                  autoPlay
                  poster={`/thumbnails/${selectedVideo.file.replace('.mp4', '.jpg')}`}
                  onContextMenu={(e) => e.preventDefault()}
                  controlsList='nodownload'
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default ProjectsPage
