import { Card } from "antd";
import Link from "next/link";

export interface TrainingPlanProps {
  title: string;
  short_description?: string;
  link: string;
}

export default function TrainingPlan({ title, short_description, link }: TrainingPlanProps) {
  return (
    <Link
      href={link}
      className="link p-2"
    >
      <Card title={(
        <>
          <div className="flex flex-col">
            <p className="text-md font-bold">Plan de entrenamiento</p>
            <p className="text-sm font-normal text-default-500">{title}</p>
          </div>
        </>
      )}
        extra={
          <i className="fa-solid fa-arrow-right" style={{ color: 'inherit' }}></i>
        }>
        <p>{short_description}</p>
      </Card>
    </Link>
  );
}
