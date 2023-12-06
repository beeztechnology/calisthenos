import { TrainingPlan } from "@/app/types";
import { createContext } from "react";

export const TrainingPlanContext = createContext<TrainingPlan | undefined>(undefined)
