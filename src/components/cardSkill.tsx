import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const CardSkill = () => {
  return (
    <div className="my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {/* Card 1 */}
  <Card className="py-4 flex justify-center items-center">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
      <h4 className="font-bold text-large text-center">Frontend developer</h4>
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
      <h4 className="font-bold text-large text-center">Web developer</h4>
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
      <h4 className="font-bold text-large text-center">UI/UX Designer</h4>
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
  </Card></div>
  );
};

export default CardSkill;
