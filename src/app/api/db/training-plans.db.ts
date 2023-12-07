import { Level, type TrainingPlan } from "@/app/types/training-plan";
import { randomId } from "@/utils/random";
import { SIN_EQUIPAMIENTO } from "./constants.db";

const sinEquipamiento: TrainingPlan = {
  slug: SIN_EQUIPAMIENTO,
  title: 'Sin equipamiento',
  description: '¿Querés entrenar en casa? ¿Sin equipamiento (o con mínimo)? ¿Nunca antes entrenaste con tu propio peso corporal? En ese caso, estás en la sección adecuada. Aquí te proponemos el apartado teórico de la sección “Sin Equipamiento” con todo lo que deberías saber y aprender antes de empezar a entrenar en casa. Procurá dedicar el tiempo necesario (será poco, no te preocupes), porque una vez que incorpores estos conocimientos, podrás sacarle el máximo provecho no solo a esta planificación de entrenamiento, sino al resto de los contenidos en la Plataforma.',
  planificacion: [
    {
      month: 1,
      link: '',
      id: randomId(),
      level: Level.PRINCIPIANTE,
      routine: []
    },
    {
      month: 2,
      link: '',
      id: randomId(),
      level: Level.PRINCIPIANTE,
      routine: []
    },
    {
      month: 3,
      link: '',
      id: randomId(),
      level: Level.PRINCIPIANTE,
      routine: []
    },
    {
      month: 4,
      link: '',
      id: randomId(),
      level: Level.INTERMEDIO,
      routine: []
    },
    {
      month: 5,
      link: '',
      id: randomId(),
      level: Level.INTERMEDIO,
      routine: []
    },
    {
      month: 6,
      link: '',
      id: randomId(),
      level: Level.INTERMEDIO,
      routine: []
    },
    {
      month: 7,
      link: '',
      id: randomId(),
      level: Level.AVANZADO,
      routine: []
    },
    {
      month: 8,
      link: '',
      id: randomId(),
      level: Level.AVANZADO,
      routine: []
    },
    {
      month: 9,
      link: '',
      id: randomId(),
      level: Level.AVANZADO,
      routine: []
    },
    {
      month: 10,
      link: '',
      id: randomId(),
      level: Level.EXPERTO,
      routine: []
    },
    {
      month: 11,
      link: '',
      id: randomId(),
      level: Level.EXPERTO,
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
        ],
        [
          {
            id: randomId(),
            series: { range: [3, 5] },
            ejercicios: [
              {
                name: 'Sentadilla a una pierna + Cosaca',
                repes: { range: [3, 6], cadaLado: true },
                tempo: '30X1'
              },
              {
                name: 'Curl Nórdico',
                intensidad: 'Excéntricas',
                repes: { range: [5, 10] },
                tempo: {
                  range: [3, 8],
                  isTime: true
                }
              },
            ],
            descanso: {
              fixed: 300,
              isTime: true
            }
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            ejercicios: [
              {
                name: 'Aducción de Copenhague',
                intensidad: 'Full',
                repes: { range: [4, 8], cadaLado: true },
                tempo: '30X1'
              }
            ],
            descanso: { fixed: 180, isTime: true }
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            ejercicios: [
              {
                name: 'Sentadillas Gironda',
                intensidad: 'Asistidas',
                repes: { range: [6, 12] },
                tempo: '30X1'
              },
              {
                name: 'Elevación Glúteos a una pierna',
                intensidad: 'Elevado',
                repes: { range: [10, 20] },
                tempo: '30X1'
              }
            ],
            descanso: { fixed: 180, isTime: true }
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            ejercicios: [
              {
                name: 'Paseo Lateral',
                intensidad: 'Sentadilla',
                repes: { range: [10, 20], cadaLado: true },
                tempo: 'Controlado'
              }
            ],
            descanso: {
              fixed: 120,
              isTime: true
            }
          },
          {
            id: randomId(),
            series: { range: [1, 3] },
            ejercicios: [
              {
                name: 'Elevaciones de Tibia',
                intensidad: 'Déficit',
                repes: { range: [15, 30] },
                tempo: '40X1'
              }
            ],
            descanso: {
              fixed: 120,
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
      level: Level.EXPERTO,
      routine: [],
    },
  ]
}
export const trainingPlans: TrainingPlan[] = [
  sinEquipamiento
]