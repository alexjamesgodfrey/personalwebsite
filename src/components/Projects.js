import React from 'react'
import Project from './Project'
import Header from './Header'
import studyflow from '../images/studyflow.png'
import sierra from '../images/sierra.png'

export default function Projects() {
    const projects = [
        {
            year: 2022,
            image: studyflow,
            title: 'STUDYFLOW.AI',
            subtitle: 'AUTOMATED WORKFLOW FOR STUDENTS',
            url: 'https://studyflow.ai',
            role: 'ALL',
            stack: 'POSTGRESEXPRESSREACTNODE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque ex, facilisis a ligula id, pellentesque fringilla sapien.'.toUpperCase()
        },
        {
            year: 2021,
            image: sierra,
            title: 'SIERRAAPICELLA.COM',
            subtitle: 'MARKETPLACE FOR LOCAL ARTIST',
            url: 'https://sierraapicella.com',
            role: 'ALL',
            stack: 'POSTGRESEXPRESSREACTNODE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque ex, facilisis a ligula id, pellentesque fringilla sapien.'.toUpperCase()
        }
    ]
  return (
      <div>
          <Header />
        <h3 style={{ marginTop: '20px'}}>PRJCTS</h3>
        <div className="d-flex flex-wrap justify-content-center">
            {projects.map((p, i) => {
                return (
                    <Project 
                        year={p.year}
                        image={p.image}
                        title={p.title}
                        subtitle={p.subtitle}
                        url={p.url}
                        description={p.description}
                        role={p.role}
                        stack={p.stack}
                        key={i}
                    />
                )
            })}
            </div>
      </div>
    
  )
}
