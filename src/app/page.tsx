import React from 'react'

import Tech from '@/components/tech/tech'
import Header from '@/components/header/header'
import Projects from '@/components/projects/projects'
import Intro from '@/components/intro/intro'
import Contact from '@/components/contact/contact'

const Page = () => {
  return (
    <>
      <Header />
      <Intro />
      <Tech />
      <Projects />
      <Contact />
    </>
  )
}

export default Page