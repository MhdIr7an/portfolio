import React from 'react'

import './contact.scss'
import { LinkedIn, Github, Gmail, InstagramLg, InstagramSm, WhatsApp } from '../../../public/cube'
import Link from 'next/link'

const Contact = () => {
  return (
    <footer id='contact'>
        <h2>Contact</h2>
        <div className='underline' />
        <nav>
            <Link href="https://github.com/MhdIr7an"><Github /></Link>
            <Link href="mailto:mhdirfanshafi@gmail.com"><Gmail /></Link>
            <Link href="https://wa.me/+971501779114"><WhatsApp /></Link>
            <Link className='instagram-lg' href="https://www.instagram.com/mhd.ir7an?igshid=OGQ5ZDc2ODk2ZA=="><InstagramLg /></Link>
            <Link className='instagram-sm' href="https://www.instagram.com/mhd.ir7an?igshid=OGQ5ZDc2ODk2ZA=="><InstagramSm /></Link>
            <Link href="https://linkedin.com/in/mohamed-irfan-shafi"><LinkedIn /></Link>
        </nav>
        <p>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="55" height="45" x="0" y="0" viewBox="0 0 612 600">
                <g>
                    <path d="M256 512c-68.38 0-132.667-26.629-181.02-74.98C26.629 388.667 0 324.38 0 256S26.629 123.333 74.98 74.98C123.333 26.629 187.62 0 256 0s132.667 26.629 181.02 74.98C485.371 123.333 512 187.62 512 256s-26.629 132.667-74.98 181.02C388.667 485.371 324.38 512 256 512zm0-452C147.925 60 60 147.925 60 256s87.925 196 196 196 196-87.925 196-196S364.075 60 256 60z" fill="#ffffff" opacity="1" data-original="#000000" />
                    <path d="M260 396c-77.196 0-140-62.804-140-140s62.804-140 140-140c28.052 0 55.126 8.274 78.296 23.928 13.729 9.274 17.34 27.924 8.064 41.652s-27.924 17.341-41.652 8.064C291.495 180.719 276.035 176 260 176c-44.112 0-80 35.888-80 80s35.888 80 80 80c16.207 0 29.806-4.793 40.419-14.244a58.659 58.659 0 0 0 5.892-6.084c10.646-12.695 29.567-14.356 42.264-3.713 12.696 10.646 14.358 29.567 3.713 42.264a118.864 118.864 0 0 1-11.96 12.337C318.698 385.82 290.924 396 260 396z" fill="#ffffff" opacity="1" data-original="#000000" />
                </g>
            </svg> 
            2024 Mohamed Irfan Shafi
        </p>
    </footer>
  )
}

export default Contact