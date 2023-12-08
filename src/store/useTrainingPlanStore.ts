import { TrainingPlan } from "@/app/types/training-plan"
import { StateCreator, create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type TrainingPlanStore = {
  trainingPlans: Record<TrainingPlan['slug'], TrainingPlan>
  currentTrainingPlan: TrainingPlan['slug'] | null
  setTrainingPlan: (newPlan: TrainingPlan) => void
  setCurrent: (slug: TrainingPlanStore['currentTrainingPlan']) => void
  hasTrainingPlan: (slug: string) => boolean
  getCurrentTrainingPlan: () => TrainingPlan | null
}

const state: StateCreator<TrainingPlanStore, [["zustand/immer", []]]> = (set, get) => ({
  trainingPlans: {},
  currentTrainingPlan: null,
  setTrainingPlan: (newPlan) => set((state) => {
    state.trainingPlans[newPlan.slug] = newPlan;
    state.currentTrainingPlan = newPlan.slug
  }),
  setCurrent: (slug) => set((state) => {
    state.currentTrainingPlan = slug;
  }),
  hasTrainingPlan: (slug: string) => {
    return !!get().trainingPlans[slug]
  },
  getCurrentTrainingPlan: () => {
    const {trainingPlans, currentTrainingPlan} = get()
    if (currentTrainingPlan) {
      return trainingPlans[currentTrainingPlan]
    }
    return null
  }
})

export const useTrainingPlanStore = create<TrainingPlanStore, [["zustand/immer", []]]>(immer(state))