import { Equipment, ExerciseDescriptor, Modality, MuscleWorkZone } from "@/app/types/exercises";
import { Level } from "@/app/types/training-plan";

export const exercises: ExerciseDescriptor[] = [
  {
    name: {
      english: 'Wall Pushup',
      spanish: 'Flexión en pared',
    },
    steps: ['Realiza este ejercicio frente a una pared.', 'Coloca las manos en la pared a la altura de los hombros.', 'Mantén el cuerpo recto desde la cabeza hasta los pies.', 'Flexiona los codos para acercar el pecho a la pared.', 'Extiende los codos para volver a la posición inicial.'],
    level: Level.PRINCIPIANTE,
    muscleWorkZones: [MuscleWorkZone.BRAZO, MuscleWorkZone.ESPALDA],
    equipment: [Equipment.SIN_EQUIPO],
    modality: Modality.DINAMICO,
  },
  {
    name: {
      english: 'Push Up',
      spanish: 'Flexiones',
    },
    description: 'El push-up es, sin duda, el ejercicio de peso corporal más popular para fortalecer brazos, pecho y hombros. Con variaciones según la anchura de los brazos, la profundidad y la posición de las manos, se enfoca en diversos grupos musculares. Dada su facilidad de ejecución, efectividad y la capacidad de dirigirse a varios grupos musculares sin necesidad de equipo, te sugiero incorporarlos en tus entrenamientos, ya seas principiante o más experimentado.',
    steps: ['Colócate en posición de plancha con las manos apoyadas en el suelo a la altura de los hombros.', 'Mantén el cuerpo en línea recta desde la cabeza hasta los pies.', 'Desciende el cuerpo flexionando los codos hasta que el pecho casi toque el suelo.', 'Vuelve a la posición inicial extendiendo los codos completamente.', 'Repite el movimiento.'],
    level: Level.PRINCIPIANTE,
    muscleWorkZones: [
      MuscleWorkZone.BRAZO,
      MuscleWorkZone.PECHO,
      MuscleWorkZone.HOMBRO
    ],
    equipment: [Equipment.SIN_EQUIPO],
    modality: Modality.DINAMICO
  },
  {
    name: {
      english: 'Eccentric Chin Up',
      spanish: 'Dominadas excéntricas'
    },
    steps: ['Colócate en una barra con agarre supino, las palmas hacia tu rostro.', 'Levanta el cuerpo hacia la barra utilizando la fuerza de los brazos.', 'Desciende lentamente el cuerpo hacia abajo, resistiendo la gravedad.', 'Mantén el control del movimiento durante la fase descendente.', 'Repite el proceso para trabajar la resistencia y fuerza en los músculos implicados.'],
    level: Level.PRINCIPIANTE,
    muscleWorkZones: [
      MuscleWorkZone.BRAZO,
      MuscleWorkZone.ESPALDA
    ],
    equipment: [
      Equipment.BARRA_DOMINADAS
    ],
    modality: Modality.DINAMICO
  }
]