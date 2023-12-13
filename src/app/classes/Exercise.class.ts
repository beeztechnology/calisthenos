import { Repeticion } from "../types/reps";
import { Tempo } from "../types/tempo";
import { IExercise } from "../types/training-plan";

export class Exercise implements IExercise {
  private _name: string;
  private _repes: Repeticion;
  private _intensidad?: string | undefined;
  private _tempo?: Tempo | undefined;
  private _description?: string | undefined;

  constructor(name: string, repes: Repeticion, intensidad?: string, tempo?: Tempo, description?: string) {
    this._name = name;
    this._repes = repes;
    this._description = description;
    this._intensidad = intensidad;
    this._tempo = tempo;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get intensidad() {
    return this._intensidad;
  }

  get repes() {
    return this._repes;
  }

  get tempo() {
    return this._tempo;
  }
}