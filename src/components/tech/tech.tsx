import ReactIcon from '../../../public/react.svg'
import NextIcon from '../../../public/next.svg'
import DjangoIcon from '../../../public/django.svg'
import OdooIcon from '../../../public/odoo.svg'
import ScssIcon from '../../../public/scss.svg'
import TailwindIcon from '../../../public/tailwind.svg'
import PostgresIcon from '../../../public/postgres.svg'
import NodeIcon from '../../../public/node.svg'
import GitIcon from '../../../public/git.svg'
import DockerIcon from '../../../public/docker.svg'
import PythonIcon from '../../../public/python.svg'
import TypescriptIcon from '../../../public/typescript.svg'
import Link from 'next/link'
import React from 'react'

import './tech.scss'

const Tech = () => {
  return (
    <section>
      <div className="sub_group" id='tech'>
          <h2 className="sub_head">Tools and Technologies</h2>
          <div className="underline" />
      </div>
      <div className="tech">
          <Link href='https://react.dev/'><ReactIcon /></Link>
          <Link href='https://nextjs.org/'><NextIcon /></Link>
          <Link href='https://www.djangoproject.com/'><DjangoIcon /></Link>
          <Link href='https://www.odoo.com'><OdooIcon /></Link>
          <Link href='https://sass-lang.com/'><ScssIcon /></Link>
          <Link href='https://tailwindcss.com/'><TailwindIcon /></Link>
          <Link href='https://www.postgresql.org/'><PostgresIcon /></Link>
          <Link href='https://nodejs.org/en'><NodeIcon /></Link>
          <Link href='https://git-scm.com/'><GitIcon /></Link>
          <Link href='https://www.docker.com/'><DockerIcon /></Link>
          <Link href='https://www.python.org/'><PythonIcon /></Link>
          <Link href='https://www.typescriptlang.org/'><TypescriptIcon /></Link>
      </div>
    </section>
  )
}

export default Tech