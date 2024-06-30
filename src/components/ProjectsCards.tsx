'use client'

import ModalProject from '@/Modal';
import projectsData from '@/app/constants/projectData';
import { Project } from '@/app/types/types';
import { useDisclosure } from '@nextui-org/react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const ProjectsCards = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se activará una sola vez
  });

  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = useState('blur')
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

  const handleOpen = (index: number) => {
    setBackdrop('blur');
    setSelectedProjectIndex(index); // Almacena el índice del proyecto seleccionado
    onOpen();
  }

  const projects: Project[] = projectsData.slice(0, 4)

  return (
    <div className="my-10 lg:max-w-4xl lg:mx-auto">
  <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  ref={ref}
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
  transition={{ duration: 1 }}>
    {projects.map((project, index) => (
      <div key={index} style={{ backgroundColor: '#151030' }} className="text-white rounded-lg overflow-hidden shadow-lg relative bg-gradient-to-br from-blue-950 via-blue-950 border-blue-950" >
        <div onClick={() => handleOpen(index)}>
        <img src={project.imageUrl} alt={project.title} className="w-full h-44 object-cover object-center" />
        </div>
        <button>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-2 rounded-full transition duration-300">
          <img className='h-6 w-6' src="/img/git.png" alt="" 
 />
        </a>
        </button>
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gradient-to-br from-blue-500 via-blue-900 to-gray-900 border border-gray-800 text-white rounded-md text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </motion.div>

  <ModalProject 
    githubLink={projects[selectedProjectIndex].githubLink}
    imageUrl={projects[selectedProjectIndex].imageUrl}
    site={projects[selectedProjectIndex].site}
    technologies={projects[selectedProjectIndex].technologies}
    title={projects[selectedProjectIndex].title}
    description={projects[selectedProjectIndex].description}
    handleOpen={handleOpen}
    backdrop={backdrop}
    isOpen={isOpen}
    onClose={onClose}
  />
</div>
  );
};

export default ProjectsCards;
