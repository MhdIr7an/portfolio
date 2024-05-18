import React from 'react'

import './header.scss'
import Link from 'next/link'

import Cube from '../ui/cube/cube'

const Header = () => {
  return (
    <header>
        <ul>
          <li><Link href='#intro'>Intro</Link></li>
          <li><Link href='#tech'>Tech</Link></li>
          <li><Link href='#projects'>Projects</Link></li>
          <li><Link href='#contact'>Contact</Link></li>
        </ul>
        <Cube />
    </header>
  )
}

export default Header