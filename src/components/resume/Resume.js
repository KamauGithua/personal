import React, { useState } from 'react'
import Title from '../layouts/Title'
// import ResumeCard from './ResumeCard'
import Education from './Education';
import Achievement from './Achievement';
import Experience from './Experience';
import Skills from './Skills';

const Resume = () => {
    const [educationData, setEducationData]= useState(true);
    const [skillData, setSkillData]= useState(false);
    const [experienceData, setExperienceData]= useState(false);
    const [achievementData, setAchievementData]= useState(false);
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
          <li onClick={()=> 
           setEducationData(true) &
           setSkillData(false) &
           setAchievementData(false) &
           setExperienceData(false)

          } className={`${educationData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}
          >Education</li>

          <li onClick={()=> 
           setEducationData(false) &
           setSkillData(true) &
           setAchievementData(false) &
           setExperienceData(false)}
           className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Professional Skills</li>
          <li onClick={()=> 
           setEducationData(false) &
           setSkillData(false) &
           setAchievementData(false) &
           setExperienceData(true)} 
           className={`${experienceData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}
           >Experience</li>
          <li onClick={()=> 
           setEducationData(false) &
           setSkillData(false) &
           setAchievementData(true) &
           setExperienceData(false)}
           className={`${achievementData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}
           >Achievements</li>
        </ul>
      </div>
      {
        educationData && <Education />
      }
      {
        skillData && <Skills />
      }
      {
        achievementData && <Achievement />
      }
      {
        experienceData && <Experience />
      }
      
      {/* <Education /> */}
      {/* <Skills /> */}
      {/* <Achievement /> */}
      {/* <Experience /> */}


    </section>
  );
}

export default Resume


