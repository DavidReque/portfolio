import ComputersCanvas from './canvas/ComputersCanvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen bg-cover bg-center bg-no-repeat mx-auto'>
      <div className='absolute inset-0 top-20 max-w-7xl mx-auto px-5 flex flex-row items-start gap-5'>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-blue-600' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-600 to-transparent' />
        </div>

        <div>
          <h1 className='font-black text-white lg:text-6xl sm:text-5xl xs:text-4xl text-3xl lg:leading-12 mt-2'>
            Hi, I'm <span className='text-blue-600'>David</span>
          </h1>
          <p className='text-gray-300 font-medium lg:text-xl sm:text-lg xs:text-base text-sm lg:leading-10 mt-2'>
  Building user-friendly <br className='sm:block hidden' />
  web interfaces
</p>

        </div>
      </div>

      <ComputersCanvas/>
    </section>
  );
};

export default Hero;
