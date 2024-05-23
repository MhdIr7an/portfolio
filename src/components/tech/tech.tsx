import Link from 'next/link'
import React from 'react'

import './tech.scss'
import { DjangoIcon, DockerIcon, GitIcon, NextIcon, NodeIcon, OdooIcon, PostgresIcon, PythonIcon, ReactIcon, ScssIcon, TailwindIcon, TypescriptIcon } from '../../../public/tech'

const Tech = () => {
  return (
    <section>
      <div className="sub_group" id='tech'>
          <h2 className="sub_head">Tools and Technologies</h2>
          <div className="underline" />
      </div>
      <div className="tech">
        {/* <div className='line' /> */}
        <span>
          <Link className='react-icon' href='https://react.dev/'><ReactIcon /></Link>
          <Link className='next-icon' href='https://nextjs.org/'><NextIcon /></Link>
          <Link className='django-icon' href='https://www.djangoproject.com/'><DjangoIcon /></Link>
        </span>
        <span>
          <Link className='odoo-icon' href='https://www.odoo.com'><OdooIcon /></Link>
          <Link className='sass-icon' href='https://sass-lang.com/'><ScssIcon /></Link>
          <Link className='tailwind-icon' href='https://tailwindcss.com/'><TailwindIcon /></Link>
        </span>
        <span>
          <Link className='postgres-icon' href='https://www.postgresql.org/'><PostgresIcon /></Link>
          <Link className='node-icon' href='https://nodejs.org/en'><NodeIcon /></Link>
          <Link className='git-icon' href='https://git-scm.com/'><GitIcon /></Link>
        </span>
        <span>
          <Link className='docker-icon' href='https://www.docker.com/'><DockerIcon /></Link>
          <Link className='py-icon' href='https://www.python.org/'><PythonIcon /></Link>
          <Link className='ts-icon' href='https://www.typescriptlang.org/'><TypescriptIcon /></Link>
        </span>
        {/* <div className='line' /> */}
      </div>
    </section>
  )
}

export default Tech