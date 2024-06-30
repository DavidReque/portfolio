'use client'

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const CardSkill = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se activará una sola vez
  });

  return (
    <motion.div className="my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
      transition={{ duration: 1 }}
    >
  {/* Card 1 */}
  <Card className="py-4 flex justify-center items-center">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
      <h4 className="font-bold text-large text-center">Full Stack developer</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2 flex justify-center">
      <div className="flex justify-center items-center w-full h-full">
        <img
          alt="Card background"
          className="object-cover w-16 h-16 rounded-none"
          src="/img/dev.png"
        />
      </div>
    </CardBody>
  </Card>

  <Card className="py-4 flex justify-center items-center">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
      <h4 className="font-bold text-large text-center">Desarrollador web</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2 flex justify-center">
      <div className="flex justify-center items-center w-full h-full">
        <img
          alt="Card background"
          className="object-cover w-16 h-16 rounded-none"
          src="/img/web.png"
        />
      </div>
    </CardBody>
  </Card>
  
  <Card className="py-4 flex justify-center items-center">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
      <h4 className="font-bold text-large text-center">Diseñador UI/UX</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2 flex justify-center">
      <div className="flex justify-center items-center w-full h-full">
        <img
          alt="Card background"
          className="object-cover w-16 h-16 rounded-none"
          src="/img/des.png"
        />
      </div>
    </CardBody>
  </Card></motion.div>
  );
};

export default CardSkill;
