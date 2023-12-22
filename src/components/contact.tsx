'use client'

import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { motion } from "framer-motion";
import EarthCanvas from './canvas/EarthCanvas';
import { useInView } from 'react-intersection-observer';
import { slideIn } from '@/utils/motion';

export const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se activará una sola vez
  });

  return (
    <motion.section id='contact' className='mx-8 mt-20 bg-transparent'
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      transition={{ duration: 1 }}
    >
      <div className="lg:max-w-4xl lg:mx-auto">
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Contacto</p>
      <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
        Ponte en contacto
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div style={{ backgroundColor: '#151030' }} className="p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">Envíame un mensaje</h3>
            <form onSubmit={(e) => {
              e.preventDefault()
            }}>
              <div className="mb-4">
              <Input 
                key='primary'
                type='email' 
                color='primary'
                placeholder="Ingresa tu nombre"
                className="w-full"
                 />              </div>
              <div className="mb-4">
                <Input 
                key='primary'
                type='email' 
                color='primary'
                placeholder="Ingresa tu correo electrónico"
                className="w-full"
                 />
              </div>
              <div className="mb-4">
              <label htmlFor="message" className="block text-sm text-blue-500 mb-1">Mensaje</label>
              <Textarea
                variant="underlined"
                className="w-full"
                /> 
              </div>
              <Button type='submit' color="primary" variant="bordered">
                Enviar
              </Button>
            </form>
          </div>
          <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

