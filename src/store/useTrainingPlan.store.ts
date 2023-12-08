import { TrainingPlan } from "@/app/types/training-plan"
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type TrainingPlanStore = {
  trainingPlans: Record<TrainingPlan['slug'], TrainingPlan>
  current: TrainingPlan['slug']
  setTrainingPlan: (newPlan: TrainingPlan) => void
  setCurrent: (slug: TrainingPlan['slug']) => void
}

export const useTrainingPlanStore = create<TrainingPlanStore, [["zustand/immer", never]]>(immer((set) => ({
  trainingPlans: {},
  current: '',
  setTrainingPlan: (newPlan) => set((state) => {
    state.trainingPlans[newPlan.slug] = newPlan;
    state.current = newPlan.slug
  }),
  setCurrent: (slug) => set((state) => {
    state.current = slug;
  })
})))