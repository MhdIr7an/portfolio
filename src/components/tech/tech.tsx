import Link from 'next/link'
import React from 'react'

import './tech.scss'
import { DjangoIcon, DockerIcon, NextIcon, PostgresIcon, ReactIcon, ScssIcon, TailwindIcon, TypescriptIcon, DotNetIcon, FigmaIcon, ExpoIcon, GitIcon } from '../../../public/tech'

const Tech = () => {
  return (
    <section>
      <div className="sub_group" id='tech'>
          <h2 className="sub_head">Tools and Technologies</h2>
          <div className="underline" />
      </div>
      <div className="tech">
        <span>
          <Link className='react-icon' href='https://react.dev/'><ReactIcon /></Link>
          <Link className='next-icon' href='https://nextjs.org/'><NextIcon /></Link>
          <Link className='django-icon' href='https://www.djangoproject.com/'><DjangoIcon /></Link>
        </span>
        <span>
          <Link className='dotnet-icon' href='https://dotnet.microsoft.com/en-us/'><DotNetIcon /></Link>
          <Link href='https://www.figma.com/'><FigmaIcon /></Link>
          <Link href='https://expo.dev/'><ExpoIcon /></Link>
        </span>
        <span>
          <Link className='sass-icon' href='https://sass-lang.com/'><ScssIcon /></Link>
          <Link className='tailwind-icon' href='https://tailwindcss.com/'><TailwindIcon /></Link>
          <Link className='postgres-icon' href='https://www.postgresql.org/'><PostgresIcon /></Link>
        </span>
        <span>
          <Link className='git-icon' href='https://git-scm.com/'><GitIcon /></Link>
          <Link className='docker-icon' href='https://www.docker.com/'><DockerIcon /></Link>
          <Link className='ts-icon' href='https://www.typescriptlang.org/'><TypescriptIcon /></Link>
        </span>
      </div>
    </section>
  )
}

export default Tech