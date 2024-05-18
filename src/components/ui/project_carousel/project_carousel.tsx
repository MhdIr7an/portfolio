'use client'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { useEffect } from 'react'

import './project_carousel.scss'

type ImageProps = {
  src: StaticImport,
  alt: string
}

type ProjectCarouselProps = {
  images: Array<ImageProps>
}

const ProjectCarousel = ({ images }: ProjectCarouselProps) => {

  useEffect(() => {
    // Select all elements with the 'pic' class
    const pics = document.querySelectorAll('.pic');

    // Function to handle mouseover event
    const handleMouseOver = () => {
      pics.forEach(p => {
        (p as HTMLElement).style.animationPlayState = 'paused';
      });
    };

    // Function to handle mouseout event
    const handleMouseOut = () => {
      pics.forEach(p => {
        (p as HTMLElement).style.animationPlayState = 'running';
      });
    };

    // Add event listeners to each pic element
    pics.forEach(pic => {
      pic.addEventListener('mouseover', handleMouseOver);
      pic.addEventListener('mouseout', handleMouseOut);
    });

    // Cleanup: remove event listeners when component unmounts
    return () => {
      pics.forEach(pic => {
        pic.removeEventListener('mouseover', handleMouseOver);
        pic.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <aside className="carousel">
        {images.map((image, index) => <Image src={image.src} alt={image.alt} className='pic' key={image.alt + index} />)}
    </aside>
  )
}

export default ProjectCarousel