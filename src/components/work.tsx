import React from 'react';

const Work = () => {
  return (
    <section id='work' className='text-gray-300 font-light mt-14'>
      <div className='max-w-4xl mx-auto'>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Work</p>
        <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
          Projects
        </h2>

        <p className='text-base lg:text-lg leading-relaxed'>
          Throughout my journey, I've showcased expertise in technologies like{' '}
          <span className='font-semibold text-blue-400'>React.js</span>,{' '}
          <span className='font-semibold text-blue-400'>Next.js</span>, and{' '}
          <span className='font-semibold text-blue-400'>TypeScript</span>. My projects range from dynamic web applications to interactive user interfaces, each representing unique challenges and innovation opportunities.
        </p>
      </div>
    </section>
  );
};

export default Work;
