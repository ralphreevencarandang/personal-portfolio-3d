import React from "react";
import Card from "../components/Card";
import { FaCode } from "react-icons/fa";
import { IoGitBranch } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { techStackIcon } from "../constant";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <section className=" max-container padding-x pt-10 " id="skills">
            <h1 className="text-4xl font-kanit text-blue-600 py-10 ">Skills</h1>
            <div className="place-content-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <motion.div
                        initial={{  opacity: 0 }}
                        whileInView={{opacity:1,}}
                        transition={{ duration: 1, ease:"easeIn"}}
                        >
                              <Card icon={<FaCode size={25} className="text-blue-500"/>} title={'Frontend'} techStack={techStackIcon[0].frontend}/>
                        </motion.div>

                        <motion.div
                          initial={{  opacity: 0 }}
                        whileInView={{opacity:1,}}
                        transition={{ duration: 1.5, ease:"easeIn"}}>
                          <Card icon={<IoGitBranch size={25} className="text-blue-500"  /> } title={'Backend'} techStack={techStackIcon[0].backend}/>
                        </motion.div>

                        <motion.div
                        initial={{  opacity: 0}}
                        whileInView={{opacity:1,}}
                        transition={{ duration: 2, ease:"easeIn"}}>
                          <Card icon={<FaTools size={25} className="text-blue-500"/> } title='Others' techStack={techStackIcon[0].tools}/>
                        </motion.div>
                </div>
            </div>

    
          
      
    </section>
  );
};

export default Skills;
