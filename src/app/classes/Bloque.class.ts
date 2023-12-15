import { randomId } from "@/utils/random";
import { Descanso } from "../types/descanso";
import { IBloque, IExercise, ISerie } from "../types/training-plan";
import { AUTODEFINIDO } from "../types/utilities";

export class Bloque implements IBloque {
  private _id: string;
  private _series: ISerie;
  private _ejercicios: IExercise[];
  private _descanso: Descanso;
  private _description?: string | undefined;
  private _restExercises?: Descanso | undefined;

  constructor(series: ISerie, ejercicios: IExercise[], descanso: Descanso = AUTODEFINIDO, description?: string, restExercises?: Descanso) {
    this._id = randomId();
    this._series = series;
    this._ejercicios = ejercicios;
    this._descanso = descanso;
    this._description = description;
    this._restExercises = restExercises;
  }

  get id() {
    return this._id;
  }

  get series() {
    return this._series;
  }

  get ejercicios() {
    return this._ejercicios;
  }

  get descanso() {
    return this._descanso;
  }

  get description() {
    return this._description;
  }

  get restExercises() {
    return this._restExercises;
  }
}