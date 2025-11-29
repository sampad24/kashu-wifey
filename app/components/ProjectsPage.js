"use client"

import React, { useState, useEffect, useRef } from 'react'

const ProjectsPage = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/videos')
        const data = await response.json()
        setVideos(data.videos)
      } catch (error) {
        console.error('Error fetching videos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  const VideoPlayer = ({ video }) => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(0.2)
    const [showControls, setShowControls] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const controlsTimeoutRef = useRef(null)

    useEffect(() => {
      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement)
      }

      const preventContextMenu = (e) => {
        if (isFullscreen) {
          e.preventDefault()
        }
      }

      document.addEventListener('fullscreenchange', handleFullscreenChange)
      document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.addEventListener('mozfullscreenchange', handleFullscreenChange)
      document.addEventListener('MSFullscreenChange', handleFullscreenChange)
      document.addEventListener('contextmenu', preventContextMenu)

      return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange)
        document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
        document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
        document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
        document.removeEventListener('contextmenu', preventContextMenu)
      }
    }, [isFullscreen])

    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause()
        } else {
          videoRef.current.play()
        }
        setIsPlaying(!isPlaying)
      }
      showControlsTemporarily()
    }

    const handleVolumeChange = (e) => {
      const newVolume = parseFloat(e.target.value)
      setVolume(newVolume)
      if (videoRef.current) {
        videoRef.current.volume = newVolume
        videoRef.current.muted = newVolume === 0
      }
      showControlsTemporarily()
    }

    const showControlsTemporarily = () => {
      setShowControls(true)
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 3000) // Hide after 3 seconds
    }

    const enterFullscreen = () => {
      if (videoRef.current) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen()
        } else if (videoRef.current.webkitRequestFullscreen) {
          videoRef.current.webkitRequestFullscreen()
        } else if (videoRef.current.msRequestFullscreen) {
          videoRef.current.msRequestFullscreen()
        }
      }
      showControlsTemporarily()
    }

    return (
      <div className=''>

        <div className="relative">
          <video
            ref={videoRef}
            className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
            preload="metadata"
            poster={`/thumbnails/${video.replace(/\.[^/.]+$/, ".jpg")}`}
            onContextMenu={(e) => e.preventDefault()}
            onClick={togglePlay}
            muted={volume === 0}
            controlsList="nodownload"
          >
            <source src={`/videos/${video}`} type={`video/${video.split('.').pop()}`} />
            Your browser does not support the video tag.
          </video>
          <div className={`absolute bottom-2 right-2  flex flex-col items-center gap-2 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-1">
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                orient="vertical"
              />
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex justify-center text-font ">{video.replace(/\.[^/.]+$/, "")}</h1>
        {!isFullscreen && (
          <div className='flex justify-center w-full '>
            <button
              onClick={enterFullscreen}
              className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded cursor-pointer padd1"
            >
              View Full Screen
            </button>
          </div>
        )}
      </div>
    )
  }
  return (
    <div className='project  padd1 skills-wrapper'>
      {/* Projects Section */}
      <section id="projects" className="py-20  flex justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white fade-in-up project-head"><p className='text-6xl '>My Showreels</p></h2>

          {loading ? (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading videos...</p>
            </div>
          ) : videos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
              {videos.map((video, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-700 padd1 rounded-lg shadow-md hover-lift fade-in-up">
                  <VideoPlayer video={video} />

                </div>

              ))}

            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">No videos found. Add video files to the public/videos folder to see them here!</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Supported formats: MP4, WebM, OGG, AVI, MOV</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
