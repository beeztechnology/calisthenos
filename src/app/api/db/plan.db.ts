import type { TrainingPlan } from "@/app/types";
import { randomBytes } from "crypto";
import { SIN_EQUIPAMIENTO } from "./constants.db";

const randomId = () => {
  return randomBytes(20).toString('hex');
}

const sinEquipamiento: TrainingPlan = {
  slug: SIN_EQUIPAMIENTO,
  title: 'Sin equipamiento',
  description: '¿Querés entrenar en casa? ¿Sin equipamiento (o con mínimo)? ¿Nunca antes entrenaste con tu propio peso corporal? En ese caso, estás en la sección adecuada. Aquí te proponemos el apartado teórico de la sección “Sin Equipamiento” con todo lo que deberías saber y aprender antes de empezar a entrenar en casa. Procurá dedicar el tiempo necesario (será poco, no te preocupes), porque una vez que incorpores estos conocimientos, podrás sacarle el máximo provecho no solo a esta planificación de entrenamiento, sino al resto de los contenidos en la Plataforma.',
  planificacion: [
    {
      month: 1,
      link: '',
      id: randomId(),
      level: 'Principiante',
      routine: []
    },
    {
      month: 2,
      link: '',
      id: randomId(),
      level: 'Principiante',
      routine: []
    },
    {
      month: 3,
      link: '',
      id: randomId(),
      level: 'Principiante',
      routine: []
    },
    {
      month: 4,
      link: '',
      id: randomId(),
      level: 'Intermedio',
      routine: []
    },
    {
      month: 5,
      link: '',
      id: randomId(),
      level: 'Intermedio',
      routine: []
    },
    {
      month: 6,
      link: '',
      id: randomId(),
      level: 'Intermedio',
      routine: []
    },
    {
      month: 7,
      link: '',
      id: randomId(),
      level: 'Avanzado',
      routine: []
    },
    {
      month: 8,
      link: '',
      id: randomId(),
      level: 'Avanzado',
      routine: []
    },
    {
      month: 9,
      link: '',
      id: randomId(),
      level: 'Avanzado',
      routine: []
    },
    {
      month: 10,
      link: '',
      id: randomId(),
      level: 'Experto',
      routine: []
    },
    {
      month: 11,
      link: '',
      id: randomId(),
      level: 'Experto',
      routine: [
        [
          {
            id: randomId(),
            series: {
              range: [2, 4]
            },
            ejercicios: [
              {
                name: 'Muscle up',
                repes: {
                  range: [2, 4]
                },
                tempo: 'Rápido'
              }
            ],
            descanso: {
              fixed: 300,
              isTime: true
            }
          },
          {
            id: randomId(),
            series: {
              range: [3, 5]
            },
            ejercicios: [
              {
                name: 'Dominadas',
                intensidad: '"Perfectas"',
                repes: {
                  range: [3, 5]
                },
                tempo: 'Controlado'
              },
              {
                name: 'Flexiones de brazo',
                intensidad: 'Aplauso',
                repes: {
                  range: [4, 8]
                },
                tempo: 'Explosivo'
              }
            ],
            descanso: {
              fixed: 240,
              isTime: true
            }
          },
          {
            id: randomId(),
            series: {
              range: [2, 4],
            },
            ejercicios: [
              {
                name: 'Remos invertidos',
                repes: {
                  range: [15, 30]
                },
                tempo: "20X1"
              },
              {
                name: 'Flexiones de brazo',
                intensidad: 'Una mano',
                repes: {
                  range: [3, 6],
                  cadaLado: true
                },
                tempo: "30X1"
              }
            ],
            descanso: {
              fixed: 180,
              isTime: true
            }
          },
          {
            id: randomId(),
            series: {
              range: [2, 4]
            },
            ejercicios: [
              {
                name: 'Aperturas T + I',
                repes: {
                  range: [8, 15]
                },
                tempo: "30X1"
              }
            ],
            descanso: {
              fixed: 120,
              isTime: true
            }
          },
          {
            id: randomId(),
            series: {
              range: [3, 5]
            },
            ejercicios: [
              {
                name: 'L-sit',
                intensidad: 'Elevado',
                repes: {
                  range: [10, 30],
                  isTime: true
                },
                tempo: 'Isométrico'
              },
              {
                name: 'Cuelgues',
                intensidad: 'Una mano',
                repes: {
                  range: [10, 30],
                  isTime: true
                },
                tempo: 'Isométrico'
              }
            ],
            descanso: {
              fixed: 90,
              isTime: true
            }
          }
        ]
      ]
    },
    {
      month: 12,
      link: '',
      id: randomId(),
      level: 'Experto',
      routine: [],
    },
  ]
}
export const trainingPlans: TrainingPlan[] = [
  sinEquipamiento
]