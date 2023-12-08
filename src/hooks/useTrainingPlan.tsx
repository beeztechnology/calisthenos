'use client';
import { useTrainingPlanStore } from "@/store/useTrainingPlanStore";
import { useCallback } from 'react';

function useTrainingPlan() {
  const { getCurrentTrainingPlan, setTrainingPlan, trainingPlans, setCurrent } = useTrainingPlanStore(({ getCurrentTrainingPlan, setTrainingPlan, trainingPlans, setCurrent }) => ({
    getCurrentTrainingPlan,
    setTrainingPlan,
    setCurrent,
    trainingPlans
  }))

  const getTrainingPlan = useCallback((slug: string) => {
    if (!slug?.length) return
    if (trainingPlans[slug]) {
      setCurrent(slug)
      return
    }
    fetch(`/api/plan/${slug}`)
      .then(res => res.json())
      .then((res) => {
        setTrainingPlan(res)
        return res
      })
  }, [setTrainingPlan, trainingPlans, setCurrent])

  return {
    trainingPlan: getCurrentTrainingPlan(),
    getTrainingPlan
  }
}

export default useTrainingPlan;