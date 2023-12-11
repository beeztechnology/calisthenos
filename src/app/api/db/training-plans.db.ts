import type { TrainingPlan } from "@/app/types/training-plan";
import { randomId } from "@/utils/random";
import { SIN_EQUIPAMIENTO } from "./constants.db";
import { Level } from "@/app/types/level";
import { Tempo } from "@/app/types/tempo";
import { AUTODEFINIDO, MAXIMO } from "@/app/types/utilities";

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
                tempo: Tempo.RAPIDO
              }
            ],
            descanso: {
              range: [300],
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
              range: [240],
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
              range: [180],
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
              range: [120],
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
              range: [90],
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
              range: [300],
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
            descanso: { range: [180], isTime: true }
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
            descanso: { range: [180], isTime: true }
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
              range: [120],
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
              range: [120],
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
      routine: [
        [
          {
            id: randomId(),
            series: { range: [1] },
            ejercicios: [
              {
                name: 'Dominadas Pronas',
                intensidad: 'Piramidal',
                repes: {
                  piramide: [2, 4, 6, 8, 6, 4, 2]
                }
              }
            ],
            descanso: AUTODEFINIDO
          },
          {
            id: randomId(),
            series: { amrap: 15 },
            ejercicios: [
              {
                name: 'Muscle Up',
                repes: { range: [3, 6] }
              }
            ],
            descanso: AUTODEFINIDO
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            ejercicios: [
              {
                name: 'Dominadas Comando',
                repes: { range: [4, 8], cadaLado: true }
              },
              {
                name: 'Fondos',
                repes: { range: [10, 20] }
              }
            ],
            descanso: AUTODEFINIDO
          },
          {
            id: randomId(),
            series: { range: [3, 5] },
            ejercicios: [
              {
                name: 'Remos en L',
                repes: { range: [6, 12] }
              },
              {
                name: 'Flexiones de Brazos',
                intensidad: 'Déficit',
                repes: { range: [8, 15] }
              }
            ],
            descanso: AUTODEFINIDO
          },
          {
            id: randomId(),
            series: { range: [3, 5] },
            ejercicios: [
              {
                name: 'Pies a barra',
                repes: { range: [6, 12] }
              },
              {
                name: 'Flexiones Diamante',
                repes: MAXIMO
              }
            ],
            descanso: AUTODEFINIDO
          }
        ],
        [],
        [
          {
            id: randomId(),
            series: { emom: 10 },
            ejercicios: [
              {
                name: 'Burpees',
                repes: {
                  range: [8]
                }
              }
            ],
            descanso: AUTODEFINIDO
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            ejercicios: [
              {
                name: 'Flexiones Handstand',
                intensidad: 'Pared',
                repes: { range: [5, 10] }
              },
              {
                name: 'Dominadas',
                intensidad: '2 Toallas',
                repes: { range: [5, 15] }
              }
            ],
            descanso: AUTODEFINIDO
          },
          {
            id: randomId(),
            series: { range: [3, 5] },
            ejercicios: [
              {
                name: 'Fondos rusos',
                repes: { range: [3, 6] },
                intensidad: 'Paralelas'
              },
              {
                name: 'Remos Arqueros',
                repes: { range: [8, 15], cadaLado: true }
              }
            ],
            descanso: AUTODEFINIDO
          },
          {
            id: randomId(),
            series: { range: [3, 5] },
            ejercicios: [
              {
                name: 'Face pull',
                repes: { range: [10, 20] }
              }
            ],
            descanso: AUTODEFINIDO
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            ejercicios: [
              {
                name: 'Plancha avanzada',
                repes: { range: [10, 30], isTime: true }
              },
              {
                name: 'Hollow Body Hold',
                repes: { range: [10, 30], isTime: true }
              }
            ],
            descanso: AUTODEFINIDO
          }
        ]
      ],
    },
  ]
}
export const trainingPlans: TrainingPlan[] = [
  sinEquipamiento
]