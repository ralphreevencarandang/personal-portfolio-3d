import React from "react";
import Card from "../components/Card";
import { FaCode } from "react-icons/fa";
import { IoGitBranch } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { techStackIcon } from "../constant";

const Skills = () => {
  return (
    <section className=" max-container padding-x pt-10 " id="skills">
            <h1 className="text-4xl font-kanit text-blue-600 py-10 ">Skills</h1>

            <div className="place-content-center">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card icon={<FaCode size={25} className="text-blue-500"/>} title={'Frontend'} techStack={techStackIcon[0].frontend}/>
                        <Card icon={<IoGitBranch size={25} className="text-blue-500"  /> } title={'Backend'} techStack={techStackIcon[0].backend}/>
                        <Card icon={<FaTools size={25} className="text-blue-500"/> } title='Others' techStack={techStackIcon[0].tools}/>
                </div>
            </div>

    
          
      
    </section>
  );
};

export default Skills;
