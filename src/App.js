import React from "react";
import Navbar from "./components/navbar/Navbar";
import Placard from "./components/placard/Placard";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
       <div className="max-w-screen-xl mx-auto px-16">
       <Navbar />
       <Placard />
       <Features />
       <Projects />
       <Resume />
       
       </div>
    </div>
  );
}

export default App;
