
import { twMerge } from "tailwind-merge";
import ToolUsed from "./ToolUsed";
import { motion } from "motion/react";
export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={twMerge(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3  ",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    TechStack
}) => {
    
  return (
    <motion.div
        initial={{
          opacity: 0,
      
        }}
        whileInView={{
          opacity:1,
        }}
        transition={{
          duration: 1.5,
          ease:"circInOut"
        
        }}
        viewport={{ once: true }}
      className={twMerge(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-base-200 dark:shadow-none",
        className
      )}>
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div
          className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div
          className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>

        <div className="flex gap-2 flex-wrap mt-3">
            {TechStack?.map((item, index)=>
              <ToolUsed key={index} label={item}/>
            )}
        </div>
      </div>
    </motion.div>
  );
};
