import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaReact, FaFacebookF } from 'react-icons/fa';
import { SiTailwindcss, SiLaravel, SiJavascript, SiReact } from "react-icons/si";

const LeftPlacard = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "Aircraft Maintenance Technician.", "Financial Consultant."],
    loop: true,
    delaySpeed: 10,
    deleteSpeed: 10,
  });
  return (
    <div className='w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-6'>
          <h4 className='text-lg font-normal'>Welcome To My World</h4>
          <h1 className='text-6xl font-bold text-white'>Hi, I'm {" "} <br /> <span className='text-designColor capitalize'>Kamau Githua</span></h1>
          <h2 className='text-4xl font-bold text-white'>
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className='text-white'> I am a versatile professional with a background in aeronautical engineering, finance, and full stack development.
            Currently pursuing a Bachelor of Science in Finance at the Cooperative University of Kenya, I have completed several MERN stack projects
            and have experience working in various roles within the aviation sector.
          </p>
        </div>
        <div>
          <div className='flex justify-between'>
            <div>
              <h2 className='text-base uppercase font-titleFont mb-4'>
                Find me in
              </h2>
              <div className='flex gap-4'>
                <span className='placardIcon'>
                  <FaFacebookF />
                </span>
                <span className='placardIcon'>
                  <FaTwitter />
                </span>
                <span className='placardIcon'>
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
            <div>
              <h2 className='text-base uppercase font-titleFont mb-4'>
                Best Skill On
              </h2>
              <div className='flex gap-4'>
              <span className='placardIcon'>
                  <FaReact />
                </span>
                <span className='placardIcon'>
                  <SiTailwindcss />
                </span>
                <span className='placardIcon'>
                  <SiLaravel />
                </span>
                <span className='placardIcon'>
                  <SiJavascript />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LeftPlacard