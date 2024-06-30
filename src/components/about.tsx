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
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Sobre mi</p>
        <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
          Resumen
        </h2>
        <p className='text-base lg:text-lg leading-relaxed'>
        Como estudiante de Ingeniería en Computación, estoy constantemente explorando nuevas tecnologías y aplicando mis conocimientos teóricos en proyectos prácticos. Soy un desarrollador web fullstack apasionado, especializado en tecnologías como{' '}
  <span className='font-semibold text-blue-400'>React js</span>,{' '}
  <span className='font-semibold text-blue-400'>Node js</span>, {' '}
  <span className='font-semibold text-blue-400'>Express js</span>, y{' '}
  <span className='font-semibold text-blue-400'>Next js</span>. Mi experiencia abarca tanto el desarrollo frontend, creando interfaces de usuario robustas y eficientes, como el backend, construyendo APIs y gestionando bases de datos para ofrecer soluciones web completas.
</p>
        <CardSkill/>

        <Skills/>
      </div>
    </motion.section>
  );
};

export default About;
