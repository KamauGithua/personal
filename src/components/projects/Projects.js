import React from 'react'
import Title from "../layouts/Title"
import {projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix} from "../../assets/index"

import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black' >
      <div className='flex justify-center items-center text-center'>
      <Title
       title="VISIT MY PORTFOLIO"
       desc="My Projects"
      />
      </div>
      <div className='grid grid-cols-3 gap-14'>
        <ProjectsCard
         title="Church Website"
         desc="Designed and developed a comprehensive church website using React.js and Bootstrap, featuring sections for worship, ministries, sermons, events, and online giving, to enhance community engagement and streamline church communications."
         src={projectOne}
        />
        <ProjectsCard
        title="UX-Optimized Portfolio Website"
        desc="Created a UX-optimized portfolio website to showcase my projects and skills, featuring intuitive navigation, responsive design, and fast loading times for an enhanced user experience."
        src={projectTwo}
         />
        <ProjectsCard
        title="SEO Optimization Tool"
        desc="Developed an SEO optimization tool that analyzes website performance and provides actionable recommendations to improve search engine rankings and drive organic traffic."
        src={projectThree} 
        />
        <ProjectsCard
        title="Water Delivery App"
        desc="Designed and developed a mobile app to optimize logistics and delivery operations, offering real-time tracking, route optimization, and seamless communication between drivers and dispatchers."
        src={projectFour}
        />
        <ProjectsCard
        title="IST Alumni App"
        desc="Developed the IST Alumni App to connect graduates, facilitate networking, and provide updates on events and opportunities, enhancing the alumni community experience through an intuitive and engaging platform."
        src={projectFive}
         />
        <ProjectsCard
        title="Financial Analysis Dashboard"
        desc="Created an interactive financial analysis dashboard using MERN stack, providing real-time insights and visualizations to help businesses make data-driven financial decisions."
        src={projectSix}
         />
      </div>
      </section>
  )
}

export default Projects



