import React from 'react'
import Title from '../layouts/Title'
// import ResumeCard from './ResumeCard'
import Education from './Education';
import Achievement from './Achievement';
import Experience from './Experience';
// import Skills from './Skills';

const Resume = () => {
  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black' >
      <div className='flex justify-center items-center text-center'>
        <Title
          title="3+ YEARS OF EXPERIENCE"
          desc="My Resume"
        />
      </div>
      <div>
        <ul className='w-full grid grid-cols-4'>
          <li className='resumeLi'>Education</li>
          <li className='resumeLi'>Professional Skills</li>
          <li className='resumeLi'>Experience</li>
          <li className='resumeLi'>Achievements</li>
        </ul>
      </div>
      <Education />
      {/* <Skills /> */}
      {/* <Achievement /> */}
      {/* <Experience /> */}


    </section>
  );
}

export default Resume


// {/* <div>
// <div className='py-12 font-titleFont'>
//   <p className='text-sm text-designColor tracking-[4px]'>1998 - 2010</p>
//   <h2 className='text-4xl font-bold'>Education Quality</h2>
// </div>
// <div className='w-1/2 h-[1000px] border-l-[6px] mt-14  border-l-black border-opacity-30 flex flex-col gap-10'>
//   <ResumeCard
//     title="Bachelor of Science in Finance"
//     subTitle="The Cooperative University of Kenya"
//     result="In Progress"
//     desc="Currently pursuing coursework in financial analysis, investment strategies, and economic principles. Developing skills in financial modeling, risk management, and strategic planning."
//   />
//   <ResumeCard
//     title="Diploma in Software Engineering"
//     subTitle="Institute of Software Engineering"
//     result="Merit"
//     desc="Learned software development methodologies, coding languages, and application development. Worked on various projects utilizing modern technologies and frameworks."
//   />
//   <ResumeCard
//     title="Diploma in Aeronautical Engineering (Airframes & Engines)"
//     subTitle="East African School of Aviation"
//     result="Distinction"
//     desc="Specialized in the maintenance, repair, and overhaul of aircraft airframes and engines. Gained hands-on experience with various aircraft systems and components."
//   />
// </div>
// </div> */}