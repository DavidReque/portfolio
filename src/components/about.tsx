import { Skills } from "./Skills";
import CardSkill from "./cardSkill";

const About = () => {
  return (
    <section id='about' className='text-gray-300 font-light py-12 px-8 lg:px-0'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
          Overview
        </h2>
        <p className='text-base lg:text-lg leading-relaxed'>
          I'm a passionate web developer specializing in technologies like{' '}
          <span className='font-semibold text-blue-400'>React.js</span>,{' '}
          <span className='font-semibold text-blue-400'>Next.js</span>, and{' '}
          <span className='font-semibold text-blue-400'>TypeScript</span>. My expertise revolves around building modern and dynamic web applications, with a specific focus on crafting robust and efficient user interfaces.
        </p>

        <CardSkill/>

        <Skills/>
      </div>
    </section>
  );
};

export default About;
