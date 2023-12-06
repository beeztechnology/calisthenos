'use client';
import { TrainingPlan } from "@/app/types";
import { useCallback, useState } from 'react';

function useTrainingPlan() {
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlan | undefined>(undefined)

  const updateTrainingPlan = useCallback((slug: string) => {
    console.log("useTrainingPlan");
    if (!slug?.length) return
    fetch(`/api/plan/${slug}`)
      .then(async (response) => {
        setTrainingPlan(await response.json())
      })
  }, [])

  return {
    trainingPlan,
    updateTrainingPlan
  }
}

export default useTrainingPlan;