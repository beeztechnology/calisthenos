import { IPlanificacion, ITrainPlan } from "../types/training-plan";

export class TrainPlan implements ITrainPlan  {
  private _title: string;
  private _slug: string;
  private _description: string;
  private _planificacion: IPlanificacion[];

  constructor(slug: string, title: string, description: string, planificacion: IPlanificacion[]) {
    this._slug = slug;
    this._title = title;
    this._description = description;
    this._planificacion = planificacion;
  }

  get title() {
    return this._title;
  }

  get slug() {
    return this._slug;
  }

  get description() {
    return this._description;
  }

  get planificacion() {
    return this._planificacion;
  }
}