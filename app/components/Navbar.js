"use client"

// import React, { useState, useEffect } from 'react'

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem('theme') === 'dark'
//     }
//     return false
//   })

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [darkMode])

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode)
//     if (!darkMode) {
//       document.documentElement.classList.add('dark')
//       localStorage.setItem('theme', 'dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//       localStorage.setItem('theme', 'light')
//     }
//   }

//   return (
//     <div>
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-10 transition-colors duration-300">
//         <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-end h-16">
//             <div className="flex space-x-10 items-center">
//               <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Home</a>
//               <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About</a>
//               <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Skills</a>
//               <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Projects</a>
//               <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import Image from 'next/image';
import img1 from "../assets/logo.png"
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-ful' >
      <nav className="navbar w-full ">
        <div className="nav-container">

          <div className="nav-logo ">
            <Image src={img1} alt="Logo" className="logo-img" width={30} height={30}></Image>
          </div>
          <div>Kashish Gupta (VFX Artist)</div>
          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <li><Link href="/" className="nav-link " onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</Link></li>
            <li><Link href="/service" className="nav-link" onClick={() => setMenuOpen(false)}>Service</Link></li>
            <li><Link href="/showreel" className="nav-link" onClick={() => setMenuOpen(false)}>Showreel</Link></li>
            <li><Link href="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
          <button className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav >
    </div >
  )
};

export default Navbar
