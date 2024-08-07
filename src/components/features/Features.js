import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { FaPlane, FaChartLine, FaCode, FaMobileAlt, FaSearch, FaLaptopCode } from 'react-icons/fa';

const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px]'>
      <Title title="Features" desc="What I Do"/>
      <div className='grid grid-cols-3 gap-20'>
        <Card
          title="Aeronautical Engineering Expertise"
          desc="Leveraging my background in aeronautical engineering to solve complex technical challenges, I bring a meticulous approach to precision and innovation in every project"
          icon={<FaPlane/ >} 
        />
        <Card
        title="Financial Acumen"
        desc="Currently pursuing a Bachelor of Science in Finance, I apply my financial knowledge to make informed decisions, optimize budgets, and drive business growth" 
        icon={<FaChartLine/>}
        />
        <Card
        title="Full-Stack Development"
        desc="I am a skilled full-stack developer with experience in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I have successfully completed several projects, showcasing my ability to build robust and scalable web applications." 
        icon={<FaCode/>}
        />
         <Card 
        title="App and Mobile Development"
        desc="Skilled in app and mobile development, I create user-friendly, efficient, and scalable applications that meet diverse business needs and enhance user experiences."
        icon={<FaMobileAlt />}
        />
        <Card
        title="SEO Optimization"
        desc="Expert in SEO optimization, I improve website visibility and search engine rankings, driving organic traffic and increasing online engagement and conversions." 
        icon={<FaSearch />}
        />
        <Card
        title="UX Design and Website Hosting"
        desc="With a focus on UX design and website hosting, I deliver aesthetically pleasing, intuitive, and reliable websites that provide an exceptional user experience and seamless performance." 
        icon={<FaLaptopCode />}
        />
      </div>
      </section>
  )
}

export default Features

//my notes
// w-1/2 h-80 px-12 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black to-[#1e2024] transition-colors duration-100