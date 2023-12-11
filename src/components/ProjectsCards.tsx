'use client'

import ModalProject from '@/Modal';
import { useDisclosure } from '@nextui-org/react';
import React, { useState } from 'react';

const ProjectsCards = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = useState('blur')
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

  const handleOpen = (index: number) => {
    setBackdrop('blur');
    setSelectedProjectIndex(index); // Almacena el índice del proyecto seleccionado
    onOpen();
  }

  const projects = [
    {
      title: 'Real Time Chat App',
      description: 'An interactive chat application leveraging Upstash Redis as the backend database, powered by TypeScript, Next.js, and React.js. Integrates seamless Google authentication for user access control. The responsive user interface, crafted using TailwindCSS, ensures a smooth experience across devices.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Upstash Redis'],
      imageUrl: '/img/chat.png',
      githubLink: 'https://github.com/DavidReque/conex-chat',
      site: 'https://conex-chat.vercel.app/login'
    },
    {
        title: 'Linktree clon',
        description: 'This is an application created with React and Firebase that functions similarly to Linktree. It allows you to create and share different social media links and also allows you to log in with Google.',
        technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'JavaScript'],
        imageUrl: '/img/link.png',
        githubLink: 'https://github.com/DavidReque/linktree',
        site: 'https://linktree-2c6e5.firebaseapp.com/'
      },
      {
        title: 'Movie app',
        description: 'Movie catalog project developed using TypeScript, Next.js, and Tailwind CSS, seamlessly integrating the TMDb API to access and display movie data.',
        technologies: ['React.js', 'Typescript', 'Tailwind CSS'],
        imageUrl: '/img/movie.png',
        githubLink: 'https://github.com/DavidReque/appmovie',
        site: 'https://appmovie-six.vercel.app/'
      },
      {
        title: 'E-commerce',
        description: 'This is an e-commerce project built using Next.js and styled with Tailwind CSS. The project features a fully functional e-commerce website with product listings, shopping cart, checkout process, and more.',
        technologies: ['React.js', 'Nextjs', 'Tailwind CSS', 'JavaScript'],
        imageUrl: '/img/comm.png',
        githubLink: 'https://github.com/DavidReque/store',
        site: 'https://store-two-rouge.vercel.app/'
      },
  ];

  return (
    <div className="my-10 lg:max-w-4xl lg:mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project, index) => (
      <div key={index} style={{ backgroundColor: '#151030' }} className="text-white rounded-lg overflow-hidden shadow-lg relative">
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
                className="px-2 py-1 bg-blue-500 text-white rounded-md text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>

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
