import { TrainingPlan } from "@/app/types/training-plan"
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type TrainingPlanStore = {
  trainingPlans: Record<TrainingPlan['slug'], TrainingPlan>
  current: TrainingPlan['slug']
  setTrainingPlan: (newPlan: TrainingPlan) => void
  setCurrent: (slug: TrainingPlan['slug']) => void
  hasTrainingPlan: (slug: string) => boolean
}

export const useTrainingPlanStore = create<TrainingPlanStore, [["zustand/immer", never]]>(immer((set, get) => ({
  trainingPlans: {},
  current: '',
  setTrainingPlan: (newPlan) => set((state) => {
    state.trainingPlans[newPlan.slug] = newPlan;
    state.current = newPlan.slug
  }),
  setCurrent: (slug) => set((state) => {
    state.current = slug;
  }),
  hasTrainingPlan: (slug: string) => {
    return !!get().trainingPlans[slug]
  }
})))