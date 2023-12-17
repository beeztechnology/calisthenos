import { Repeticion } from "../types/reps";
import { Tempo } from "../types/tempo";
import { IExercise } from "../types/training-plan";
import { Serializable } from "./Serialize.interface";

export class Exercise implements IExercise, Serializable<IExercise> {
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
  serialize(): IExercise {
    return {
      name: this.name,
      repes: this.repes,
      description: this.description,
      intensidad: this.intensidad,
      tempo: this.tempo,
    }
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