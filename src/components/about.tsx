'use client'

import { Skills } from "./Skills";
import CardSkill from "./cardSkill";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se activará una sola vez
  });

  return (
    <motion.section id='about' className='text-gray-300 font-light'
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
      transition={{ duration: 1 }}
    >
      <div className='max-w-4xl mx-auto'>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">About</p>
        <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
          Overview
        </h2>
        <p className='text-base lg:text-lg leading-relaxed'>
          I&apos;m a passionate web developer specializing in technologies like{' '}
          <span className='font-semibold text-blue-400'>React.js</span>,{' '}
          <span className='font-semibold text-blue-400'>Next.js</span>, and{' '}
          <span className='font-semibold text-blue-400'>TypeScript</span>. My expertise revolves around building modern and dynamic web applications, with a specific focus on crafting robust and efficient user interfaces.
        </p>

        <CardSkill/>

        <Skills/>
      </div>
    </motion.section>
  );
};

export default About;
