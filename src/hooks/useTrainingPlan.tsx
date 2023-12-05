'use client';
import { TrainingPlan } from "@/app/types"
import { useEffect, useState } from 'react'
import { trainingPlans } from "@/db/plan.db"

export default function useTrainingPlan(slug: string) {
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlan | undefined>(undefined)

  const getTrainingPlan = (list: TrainingPlan[], slug: string) => {
    return list.find(plan => plan.slug === slug)
  }

  useEffect(() => {
    setTrainingPlan(getTrainingPlan(trainingPlans, slug))
  }, [slug])

  return {
    trainingPlan,
    setTrainingPlan
  }
}
