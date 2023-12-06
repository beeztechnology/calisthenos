'use client';
import { TrainingPlan } from "@/app/types"
import { useEffect, useState } from 'react'

function useTrainingPlan() {
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlan | undefined>(undefined)
  const [slug, setSlug] = useState<string>('')

  useEffect(() => {
    console.log("object");
    if (!slug?.length) return
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

export default useTrainingPlan;