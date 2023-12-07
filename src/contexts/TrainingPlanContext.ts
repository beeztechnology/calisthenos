import { TrainingPlan } from "@/app/types/training-plan";
import { createContext } from "react";

export const TrainingPlanContext = createContext<TrainingPlan | undefined>(undefined)
