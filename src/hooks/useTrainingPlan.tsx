'use client';
import { useTrainingPlanStore } from "@/store/useTrainingPlanStore";
import { useCallback } from 'react';

function useTrainingPlan() {
  const { current, setTrainingPlan, trainingPlans, setCurrent } = useTrainingPlanStore(({ current, setTrainingPlan, trainingPlans, setCurrent }) => ({
    current,
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
    trainingPlan: trainingPlans[current],
    getTrainingPlan
  }
}

export default useTrainingPlan;