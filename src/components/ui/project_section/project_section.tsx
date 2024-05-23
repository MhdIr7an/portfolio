import React from 'react'
import ProjectCarousel from '../project_carousel/project_carousel'

import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type ImageProps = {
    src: StaticImport,
    alt: string
}

type Props = {
    heading: string,
    descriptions: Array<string>,
    link: string,
    images: Array<ImageProps>
}

const Project_section = ({heading, descriptions, link, images}: Props) => {
  return (
    <article className='project_section'>
        <article>
            <Link href={link}><h2>{heading}</h2></Link>
            <ul>    
                {descriptions.map((description, index) => <li key={heading + index}>🔹 {description}</li>)}
            </ul>
        </article>
        <ProjectCarousel images={images} />
    </article>
  )
}

export default Project_section