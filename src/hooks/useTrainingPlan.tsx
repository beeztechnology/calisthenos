'use client';
import { TrainingPlan } from "@/app/types"
import { useEffect, useState } from 'react'

export default function useTrainingPlan(_slug: string) {
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlan | undefined>(undefined)
  const [slug, setSlug] = useState(_slug)

  useEffect(() => {
    fetch(`/api/plan/${slug}`)
      .then(async (response) => {
        setTrainingPlan(await response.json())
      })
  }, [slug])

  return {
    trainingPlan,
    updateTrainingPlan: setSlug
  }
}
