import React from 'react';

const ProjectsCards = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A fully functional e-commerce platform built with React.js and Next.js.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS'],
      imageUrl: '/images/project-ecommerce.jpg',
    },
    {
        title: 'E-commerce Platform',
        description: 'A fully functional e-commerce platform built with React.js and Next.js.',
        technologies: ['React.js', 'Next.js', 'Tailwind CSS'],
        imageUrl: '/images/project-ecommerce.jpg',
      },
      {
        title: 'E-commerce Platform',
        description: 'A fully functional e-commerce platform built with React.js and Next.js.',
        technologies: ['React.js', 'Next.js', 'Tailwind CSS'],
        imageUrl: '/images/project-ecommerce.jpg',
      },
  ];

  return (
    <div className="my-10 lg:max-w-4xl lg:mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} style={{backgroundColor: '#151030'}} className="text-white rounded-lg overflow-hidden shadow-lg">
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover object-center" />
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
    </div>
  );
};

export default ProjectsCards;
