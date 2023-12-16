import { ITrainPlan } from "@/app/types/training-plan"
import { Draft } from "immer"
import { StateCreator, create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type TrainingPlanStore = {
  trainingPlans: Record<ITrainPlan['slug'], ITrainPlan>
  currentTrainingPlan: ITrainPlan['slug'] | null
  setTrainingPlan: (newPlan: Draft<ITrainPlan>) => void
  setCurrent: (slug: Draft<TrainingPlanStore['currentTrainingPlan']>) => void
  hasTrainingPlan: (slug: Draft<string>) => boolean
  getCurrentTrainingPlan: () => ITrainPlan | null
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
  hasTrainingPlan: (slug) => {
    return !!get().trainingPlans[slug]
  },
  getCurrentTrainingPlan: () => {
    const { trainingPlans, currentTrainingPlan } = get()
    if (currentTrainingPlan) {
      return trainingPlans[currentTrainingPlan]
    }
    return null
  }
})

export const useTrainingPlanStore = create<TrainingPlanStore, [["zustand/immer", []]]>(immer(state))