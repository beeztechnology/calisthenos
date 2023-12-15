import { randomId } from "@/utils/random";
import { Level } from "../types/level";
import { IPlanificacion, Routine } from "../types/training-plan";

export class Planificacion implements IPlanificacion {
  private _id: string;
  private _month: number;
  private _link: string;
  private _level: Level;
  private _routine: Routine[];

  constructor(month: number, link: string, level: Level, routine: Routine[]) {
    this._id = randomId();
    this._month = month;
    this._link = link;
    this._level = level;
    this._routine = routine;
  }

  get id() {
    return this._id;
  }

  get month() {
    return this._month;
  }

  get link() {
    return this._link;
  }

  get level() {
    return this._level;
  }

  get routine() {
    return this._routine;
  }
}