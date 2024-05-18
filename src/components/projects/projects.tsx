import React from 'react'

import './projects.scss'
import Project_section from '../ui/project_section/project_section'

import { jv, organise_event, payment, product, publish_paper, raise_issue, register_user, sales } from '../../../public/projects'

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

const erp_images = [
    { src: product, alt: 'Products' },
    { src: sales, alt: 'Sales' },
    { src: payment, alt: 'Payment' },
    { src: jv, alt: 'Journal Voucher' },
]

const cnbc_images = [
    { src: organise_event, alt: 'Organise Event' },
    { src: publish_paper, alt: 'Publish Paper' },
    { src: raise_issue, alt: 'Raise Issue' },
    { src: register_user, alt: 'Register User' },
]

const Projects = () => {
    return (
        <section>
            <div className="sub_group" id='projects'>
                <h2 className="sub_head">Projects</h2>
                <div className="underline_s" />
            </div>
            <div className="projects">
                <Project_section heading='ERP Software' descriptions={erp_desc} link='https://ledgerz-erp.onrender.com/' images={erp_images} />
                <Project_section heading='Community Based Nature Conservation' descriptions={cbnc_desc} link='https://cbnc.onrender.com/' images={cnbc_images} />
            </div>
        </section>
    )
}

export default Projects