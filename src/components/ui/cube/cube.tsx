'use client'

import { Suspense, useState } from 'react';
import './cube.scss'

import { LinkedIn, Github, Gmail, InstagramLg, Profile, WhatsApp, InstagramSm } from '../../../../public/cube'
import ProfilePic from '../../../../public/profile.png'
import DropDown from '../../../../public/dropdown.svg'
import Image from 'next/image';
import Link from 'next/link';
import Loader from '@/components/loader';

const AnimatedCube = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isHeaderDropdown, setIsHeaderDropdown] = useState(false);

  const header_dropdown = () => {
    setIsHeaderDropdown(!isHeaderDropdown);
  }

  return (
    <>
    <aside className='cube-container'>
      <div className={`cube ${isDropdown ? 'active' : ''}`}
      onMouseEnter={() => setIsDropdown(true)}
      onMouseLeave={() => setIsDropdown(false)}>
        <div className="face front"><Profile /></div>
        <div className="face back"><WhatsApp /></div>
        <div className="face left"><Gmail /></div>
        <div className="face right"><InstagramLg /></div>
        <div className="face top"><Github /></div>
        <div className="face bottom"><LinkedIn /></div>
      </div>
    </aside>
    <aside className={`cube-dropdown ${isDropdown ? 'active' : ''}`}
    onMouseEnter={() => setIsDropdown(true)}
    onMouseLeave={() => setIsDropdown(false)}>
      <div className='dropdown-content'>
        <div className='profile-pic'>
          <Suspense fallback={<Loader />}>
            <Image src={ProfilePic} alt="profile" />
          </Suspense>
        </div>
        <nav className='contact'>
            <Link href="https://github.com/MhdIr7an"><Github /></Link>
            <Link href="mailto:mhdirfanshafi@gmail.com"><Gmail /></Link>
            <Link href="https://wa.me/+971501779114"><WhatsApp /></Link>
            <Link href="https://www.instagram.com/mhd.ir7an?igshid=OGQ5ZDc2ODk2ZA=="><InstagramLg /></Link>
            <Link href="https://linkedin.com/in/mohamed-irfan-shafi"><LinkedIn /></Link>
        </nav>
        <Link href="https://drive.google.com/file/d/1D1bfiQXivia0Sae5d19HqwA4TCP5YkuE/view?usp=drive_link" target='_blank'><button>RESUME</button></Link>
      </div>
    </aside>
    <aside className='header_dropdown'>
      <div onClick={header_dropdown}><DropDown /></div>
      <div className={`dropdown-content ${isHeaderDropdown? 'active': ''}`}>
        <div className='profile-pic'>
          <Suspense fallback={<Loader />}>
            <Image src={ProfilePic} alt="profile" />
          </Suspense>
        </div>
        <nav className='contact'>
            <Link href="https://github.com/MhdIr7an"><Github /></Link>
            <Link href="mailto:mhdirfanshafi@gmail.com"><Gmail /></Link>
            <Link href="https://wa.me/+971501779114"><WhatsApp /></Link>
            <Link className='instagram-sm' href="https://www.instagram.com/mhd.ir7an?igshid=OGQ5ZDc2ODk2ZA=="><InstagramSm /></Link>
            <Link href="https://linkedin.com/in/mohamed-irfan-shafi"><LinkedIn /></Link>
        </nav>
        <Link href="https://drive.google.com/file/d/1D1bfiQXivia0Sae5d19HqwA4TCP5YkuE/view?usp=drive_link" target='_blank'><button>RESUME</button></Link>
      </div>
    </aside>
    </>
  );
};

export default AnimatedCube;