'use client'

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: 'TypeScript', icon: '/img/type.png'},
    { name: 'JavaScript', icon: '/img/js.png'},
    { name: 'C++', icon: '/img/c.png'},
    { name: 'Python', icon: '/img/py.png'},
    { name: 'React.js', icon: '/img/react.png'},
    { name: 'Next js', icon: '/img/next.png'},
    { name: 'Node JS', icon: '/img/node.png'},
    { name: 'MySQL', icon: '/img/mysql.png'},
    { name: 'PostgreSQL', icon: '/img/post.png'},
    { name: 'Java', icon: '/img/java.png'},
    { name: 'FastAPI', icon: '/img/fastapi.png'},
    { name: 'React Native', icon: '/img/react.png'},
  ];

  return (
    <>
      <motion.h2 
        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-12"
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
        transition={{ duration: 1 }}
      >
        Habilidades Técnicas
      </motion.h2>

      <motion.div  
        className="flex flex-wrap justify-center gap-9 my-4"
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              w-40 p-5 rounded-xl 
              flex flex-col items-center justify-center 
              transform transition-all duration-300
              hover:scale-105 hover:shadow-lg
              bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900
              shadow-md border border-gray-800
            "
          >
            <img 
              src={skill.icon} 
              alt={`${skill.name} icon`} 
              className="w-20 h-20 mb-4 object-contain"
            />
            <p className="text-white text-lg font-semibold text-center">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </>
  )
}