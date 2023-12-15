import type { ITrainPlan } from "@/app/types/training-plan";
import { randomId } from "@/utils/random";
import { SIN_EQUIPAMIENTO } from "./constants.db";
import { Level } from "@/app/types/level";
import { Tempo } from "@/app/types/tempo";
import { AUTODEFINIDO, MAXIMO } from "@/app/types/utilities";

const sinEquipamiento: ITrainPlan = {
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
            descanso: {
              range: [300],
              isTime: true
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
          },
          {
            id: randomId(),
            series: {
              range: [3, 5]
            },
            descanso: {
              range: [240],
              isTime: true
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
          },
          {
            id: randomId(),
            series: {
              range: [2, 4],
            },
            descanso: {
              range: [180],
              isTime: true
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
          },
          {
            id: randomId(),
            series: {
              range: [2, 4]
            },
            descanso: {
              range: [120],
              isTime: true
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
          },
          {
            id: randomId(),
            series: {
              range: [3, 5]
            },
            descanso: {
              range: [90],
              isTime: true
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
          }
        ],
        [
          {
            id: randomId(),
            series: { range: [3, 5] },
            descanso: {
              range: [300],
              isTime: true
            },
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
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            descanso: { range: [180], isTime: true },
            ejercicios: [
              {
                name: 'Aducción de Copenhague',
                intensidad: 'Full',
                repes: { range: [4, 8], cadaLado: true },
                tempo: '30X1'
              }
            ],
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            descanso: { range: [180], isTime: true },
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
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            descanso: {
              range: [120],
              isTime: true
            },
            ejercicios: [
              {
                name: 'Paseo Lateral',
                intensidad: 'Sentadilla',
                repes: { range: [10, 20], cadaLado: true },
                tempo: 'Controlado'
              }
            ],
          },
          {
            id: randomId(),
            series: { range: [1, 3] },
            descanso: {
              range: [120],
              isTime: true
            },
            ejercicios: [
              {
                name: 'Elevaciones de Tibia',
                intensidad: 'Déficit',
                repes: { range: [15, 30] },
                tempo: '40X1'
              }
            ],
          }
        ],
        [
          {
            id: randomId(),
            series: { range: [2, 4] },
            descanso: { range: [300], isTime: true },
            description: 'Durante este mes realizaremos Muscle Ups dos veces por semana, aumentando la frecuencia y así poder progresar más rápido en el ejercicio por excelencia dentro del mundo de la Calistenia.',
            ejercicios: [
              {
                name: 'Muscle up',
                repes: { range: [2, 4] },
                tempo: Tempo.RAPIDO
              }
            ],
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            descanso: { range: [240], isTime: true },
            ejercicios: [
              {
                name: 'Flexiones',
                intensidad: 'Handstand',
                repes: { range: [3, 8] },
                tempo: "30X1"
              },
              {
                name: 'Front Lever',
                intensidad: 'Elevaciones',
                repes: { range: [3, 5] },
                tempo: Tempo.CONTROLADO
              }
            ]
          },
          {
            id: randomId(),
            series: { range: [3, 5] },
            descanso: { range: [180], isTime: true },
            ejercicios: [
              {
                name: 'Fondos arqueros',
                intensidad: 'Paralelas',
                repes: { range: [3, 5] },
                tempo: "30X1"
              },
              {
                name: 'Dominadas',
                intensidad: 'Toalla',
                repes: { range: [5, 10] },
                tempo: "30X1"
              }
            ]
          },
          {
            id: randomId(),
            series: { range: [3, 5] },
            descanso: { range: [120], isTime: true },
            ejercicios: [
              {
                name: 'Face Pull',
                repes: { range: [10, 20] },
                tempo: "30X2"
              }
            ]
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            descanso: { range: [120], isTime: true },
            ejercicios: [
              {
                name: 'Flexiones Diamante',
                repes: { range: [10, 20] },
                tempo: "30X0"
              },
              {
                name: 'Cuelgue supino',
                intensidad: '90°',
                repes: { range: [10, 30], isTime: true },
                tempo: Tempo.ISOMETRICO
              },
            ]
          },
        ],
        [
          {
            id: randomId(),
            series: { range: [3, 5] },
            descanso: { range: [180], isTime: true },
            ejercicios: [
              {
                name: 'Sentadilla Camarón',
                intensidad: 'Libre / Asistida',
                repes: { range: [5, 10] },
                tempo: "30X0"
              },
              // TODO
            ]
          },
          // TODO
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
            descanso: AUTODEFINIDO,
            ejercicios: [
              {
                name: 'Dominadas Pronas',
                intensidad: 'Piramidal',
                repes: {
                  piramide: [2, 4, 6, 8, 6, 4, 2]
                }
              }
            ],
          },
          {
            id: randomId(),
            series: { amrap: 15 },
            descanso: AUTODEFINIDO,
            ejercicios: [
              {
                name: 'Muscle Up',
                repes: { range: [3, 6] }
              }
            ],
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            descanso: AUTODEFINIDO,
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
          },
          {
            id: randomId(),
            series: { range: [3, 5] },
            descanso: AUTODEFINIDO,
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
          },
          {
            id: randomId(),
            series: { range: [3, 5] },
            descanso: AUTODEFINIDO,
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
          }
        ],
        [],
        [
          {
            id: randomId(),
            series: { emom: 10 },
            descanso: AUTODEFINIDO,
            ejercicios: [
              {
                name: 'Burpees',
                repes: {
                  range: [8]
                }
              }
            ],
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            descanso: AUTODEFINIDO,
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
          },
          {
            id: randomId(),
            series: { range: [3, 5] },
            descanso: AUTODEFINIDO,
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
          },
          {
            id: randomId(),
            series: { range: [3, 5] },
            descanso: AUTODEFINIDO,
            ejercicios: [
              {
                name: 'Face pull',
                repes: { range: [10, 20] }
              }
            ],
          },
          {
            id: randomId(),
            series: { range: [2, 4] },
            descanso: AUTODEFINIDO,
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
          }
        ]
      ],
    },
  ]
}
export const trainingPlans: ITrainPlan[] = [
  sinEquipamiento
]