import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Link from "next/link";

export interface TrainingPlanProps {
  title: string;
  description: string;
  link: string;
}

export default function TrainingPlan({ title, description, link }: TrainingPlanProps) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-bold">Plan de entrenamiento</p>
          <p className="text-small text-default-500">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          href={link}
          className="flex gap-2 items-center link"
        >
          <p>Comenzar</p>
          <i className="fa-solid fa-arrow-right" style={{ color: 'inherit' }}></i>
        </Link>
      </CardFooter>
    </Card>
  );
}
