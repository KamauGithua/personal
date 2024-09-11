import React from "react";
import Navbar from "./components/navbar/Navbar";
import Placard from "./components/placard/Placard";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
       <Navbar />
       <div className="max-w-screen-xl mx-auto px-16">
       <Placard />
       <Features />
       <Projects />
       <Resume />
       <Testimonial />
       
       </div>
    </div>
  );
}

export default App;
