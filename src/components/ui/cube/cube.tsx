'use client'

import { useEffect, useState } from 'react';
import './cube.scss'

import { LinkedIn, Github, Gmail, Instagram, Profile, WhatsApp } from '../../../../public/cube'
import ProfilePic from '../../../../public/profile.png'
// import resume from '../../../../public/resume.pdf'
import Image from 'next/image';
import Link from 'next/link';

const AnimatedCube = () => {
  const [display, setDisplay] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth > 800) {
      setDisplay(true);
    }
  }, [])

  return (
    <>
    <aside className='cube-container'>
    {display &&
      <div className={`cube ${isDropdown ? 'hovered' : ''}`}
      onMouseEnter={() => setIsDropdown(true)}
      onMouseLeave={() => setIsDropdown(false)}>
        <div className="face front"><Profile /></div>
        <div className="face back"><WhatsApp /></div>
        <div className="face left"><Gmail /></div>
        <div className="face right"><Instagram /></div>
        <div className="face top"><Github /></div>
        <div className="face bottom"><LinkedIn /></div>
      </div>}
    </aside>
    <aside className={`cube-dropdown ${isDropdown ? 'hovered' : ''}`}
    onMouseEnter={() => setIsDropdown(true)}
    onMouseLeave={() => setIsDropdown(false)}>
      <div className='dropdown-content'>
        <div className='profile-pic'>
          <Image src={ProfilePic} alt="profile" />
        </div>
        <nav className='contact'>
            <Link href="https://github.com/MhdIr7an"><Github /></Link>
            <Link href="mailto:mhdirfanshafi@gmail.com"><Gmail /></Link>
            <Link href="https://wa.me/+971501779114"><WhatsApp /></Link>
            <Link href="https://www.instagram.com/mhd.ir7an?igshid=OGQ5ZDc2ODk2ZA=="><Instagram /></Link>
            <Link href="https://linkedin.com/in/mohamed-irfan-shafi"><LinkedIn /></Link>
        </nav>
        <Link href="/resume.pdf"><button>RESUME</button></Link>
      </div>
    </aside>
    </>
  );
};

export default AnimatedCube;