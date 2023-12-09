import { randomId } from "@/utils/random"
import { Level } from "../types/level";
import { Equipment, Modality, MuscleWorkZone } from "../types/exercises";

export class ExerciseDescriptor {
  private readonly _id: string = randomId();
  private readonly _name: Record<"english" | "spanish", string>;
  private readonly _instructions: string[];
  private readonly _level: Level;
  private readonly _workZones: MuscleWorkZone[];
  private readonly _equipment: Equipment[];
  private readonly _modality: Modality;

  constructor(
    englishName: string,
    spanishName: string,
    instructions: string[],
    level: Level,
    workZones: MuscleWorkZone[],
    equipment: Equipment[] = [],
    modality: Modality = Modality.DINAMICO
  ) {
    this._name = {
      english: englishName,
      spanish: spanishName,
    }
    this._instructions = instructions;
    this._level = level;
    this._workZones = workZones;
    this._equipment = equipment;
    this._modality = modality;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get instructions() {
    return this._instructions;
  }

  get level() {
    return this._level;
  }

  get muscleWorkZones() {
    return this._workZones;
  }

  get equipment() {
    return this._equipment;
  }

  get modality() {
    return this._modality;
  }
}