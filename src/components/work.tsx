import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import ProjectsCards from './ProjectsCards';

const Work = () => {
  return (
    <section id='work' className='text-gray-300 font-light mt-32'>
      <div className='max-w-4xl mx-auto'>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Work</p>
        <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
          Projects
        </h2>

        <p className='text-base lg:text-lg leading-relaxed'>
          Throughout my journey, I&apos;ve showcased expertise in technologies like{' '}
          <span className='font-semibold text-blue-400'>React.js</span>,{' '}
          <span className='font-semibold text-blue-400'>Next.js</span>, and{' '}
          <span className='font-semibold text-blue-400'>TypeScript</span>. My projects range from dynamic web applications to interactive user interfaces, each representing unique challenges and innovation opportunities.
        </p>

        <div className='text-center my-5'>
        <Link href='/projects'>
        <Button color="primary" variant="bordered">
          View all my projects
       </Button>
        </Link>
        </div>
      </div>

      <ProjectsCards/>
    </section>
  );
};

export default Work;
