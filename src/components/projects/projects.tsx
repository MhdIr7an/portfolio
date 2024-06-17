import React from 'react'

import './projects.scss'
import Project_section from '../ui/project_section/project_section'

import { cbnc_organise_event, cbnc_publish_paper, cbnc_raise_issue, cbnc_register_user, corinna_dashboard, corinna_demo, corinna_home, corinna_login, erp_jv, erp_payment, erp_product, erp_sales, gericht_aboutus, gericht_home, gericht_laurels, gericht_reservation, plura_agency, plura_create, plura_home, plura_web, } from '../../../public/projects'

const erp_desc = ['A web based ERP solution designed for businesses seeking seamless management of their operations. Manage Accounts, Product, Customers, Sales and much more with this application.',
    'Includes the capability to have pdf reports and invoices.',
    'Used Next.js with React for frontend and Django Rest Framework with PostgreSQL for backend.',
    'Containerized the project in multiple docker containers for frontend and backend managed using docker-compose.',
    'Was able to acquire in-depth knowledge about DOM Manipulation, API Routing, JSON and containerization.',
]

const cbnc_desc = ['A web app focused on creating awareness and a community that work towards the welfare of the nature.',
    'Used Docker to containerize the application and facilitate deployment.',
    'Used stripe payment gateway for payments.',
    'Included automated emails on user registration.',
    'Used Django and supabase for backed and html with css for frontend.'
    ]

const gericht_desc = ['A restaurant webpage that has the capability to let users make reservation.',
    'Fully Responsive Design.',
    'Email confirmation of reservation using cloudflare workers and resend.',
    'Used React with scss for frontend.',
    'C#.NET Core 8 with entity framework for backend.'
]

const corinna_desc = ['AI based Chatbot using either OpenAI or Gemini.',
    'Can be trained to act accordingly.',
    'Can be integrated with any website by copy-pasting a code snippet.',
    'Has a realtime mode switch that allows switching between bot and a representative.',
    'Used Nextjs with tailwindcss for frontend and prisma to communicate with the database.'
]

const plura_desc = ['Agency management system.',
    'An agency can have multiple sub accounts.',
    'In built drag and drop website builder for agencies.',
    'Stripe connection options for every agency, subaccounts and users.',
    'Used Nextjs, clerk Authentication, stripe connect and prisma.'
]

const erp_images = [
    { src: erp_product, alt: 'Products' },
    { src: erp_sales, alt: 'Sales' },
    { src: erp_payment, alt: 'Payment' },
    { src: erp_jv, alt: 'Journal Voucher' },
]

const cnbc_images = [
    { src: cbnc_organise_event, alt: 'Organise Event' },
    { src: cbnc_publish_paper, alt: 'Publish Paper' },
    { src: cbnc_raise_issue, alt: 'Raise Issue' },
    { src: cbnc_register_user, alt: 'Register User' },
]

const gericht_images = [
    { src: gericht_home, alt: 'Gericht Home' },
    { src: gericht_aboutus, alt: 'Gericht About Us' },
    { src: gericht_laurels, alt: 'Gericht Laurels' },
    { src: gericht_reservation, alt: 'Gericht Reservation' },
]

const corinna_images = [
    { src: corinna_home, alt: 'Corinna Home' },
    { src: corinna_login, alt: 'Corinna Login' },
    { src: corinna_dashboard, alt: 'Corinna Dashboard' },
    { src: corinna_demo, alt: 'Corinna Demo' },
]

const plura_images = [
    { src: plura_home, alt: 'Plura Home' },
    { src: plura_create, alt: 'Plura Create Agency' },
    { src: plura_agency, alt: 'Plura Agency' },
    { src: plura_web, alt: 'Plura Webpage' },
]

const Projects = () => {
    return (
        <section>
            <div className="sub_group" id='projects'>
                <h2 className="sub_head">Projects</h2>
                <div className="underline_s" />
            </div>
            <div className="projects">
                <Project_section heading='ERP Software' descriptions={erp_desc} link='https://erp-one-lovat.vercel.app/' images={erp_images} />
                <Project_section heading='Corinna AI' descriptions={corinna_desc} link='https://ai-chatbot-one-eosin.vercel.app/' images={corinna_images} />
                <Project_section heading='Gericht Restaurant' descriptions={gericht_desc} link='https://gericht-restau-ant.netlify.app/' images={gericht_images} />
                <Project_section heading='Plura' descriptions={plura_desc} link='https://plura-one.vercel.app/' images={plura_images} />
                <Project_section heading='Community Based Nature Conservation' descriptions={cbnc_desc} link='https://mhdirfan.pythonanywhere.com/' images={cnbc_images} />
            </div>
        </section>
    )
}

export default Projects