'use client'

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export const Skills = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se activará una sola vez
  });

    const skills = [
        { name: 'React.js', icon: '/img/react.png'},
        { name: 'JavaScript', icon: '/img/js.png'},
        { name: 'Next js', icon: '/img/next.png'},
        { name: 'Python', icon: '/img/py.png'},
        { name: 'Tailwind CSS', icon: '/img/ta.png'},
        { name: 'Java', icon: '/img/java.png'},
        { name: 'TypeScript', icon: '/img/type.png'},
      ];

  return (
    <>
        <motion.h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
           ref={ref}
           initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
           transition={{ duration: 1 }}
        >
        Habilidades Técnicas.
        </motion.h2>

        <motion.div  className='flex flex-wrap justify-center gap-9 my-4' ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
        transition={{ duration: 1 }}>
        {skills.map((skill, index) => (
          <div
            style={{ backgroundColor: '#151030' }}
            key={index}
            className='max-w-x p-5 rounded-md flex flex-col items-center justify-center transform transition-transform hover:scale-105'
          >
            <img src={skill.icon} alt={`${skill.name} icon`} className='w-24 h-20 mb-4 object-contain' />
            <p className='text-white text-lg font-semibold'>{skill.name}</p>
          </div>
        ))}
      </motion.div>

    </>
  )
}
