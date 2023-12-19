'use client'
import TrainingPlan from "@/app/components/TrainingPlan";
import { ITrainPlan } from "@/app/types/training-plan";
import { useEffect, useState } from "react";
import styles from './page.module.css';

interface Plan {
  title: string;
  description: string;
  link: string;
}

export default function PlanesDeEntrenamiento() {
  const [trainingPlans, setTrainingPlans] = useState<ITrainPlan[]>([])

  const init = async () => {
    const response = await fetch('/api/v2/plans')
    setTrainingPlans(await response.json())
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div className="max-w-5xl">
      <div className={styles['wrapper_cards']}>
        {trainingPlans.map(plan => (
          <TrainingPlan key={plan.title} {...plan} link={`/plan/${plan.slug}`} />
        ))}
      </div>
    </div>
  )
}
