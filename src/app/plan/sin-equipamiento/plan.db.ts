import type { Planificacion } from "@/app/types";
import { randomUUID } from "crypto";

export const plan: Planificacion[] = [
  {
    month: 1,
    link: '',
    id: randomUUID(),
    level: 'Principiante',
    routine: []
  },
  {
    month: 2,
    link: '',
    id: randomUUID(),
    level: 'Principiante',
    routine: []
  },
  {
    month: 3,
    link: '',
    id: randomUUID(),
    level: 'Principiante',
    routine: []
  },
  {
    month: 4,
    link: '',
    id: randomUUID(),
    level: 'Intermedio',
    routine: []
  },
  {
    month: 5,
    link: '',
    id: randomUUID(),
    level: 'Intermedio',
    routine: []
  },
  {
    month: 6,
    link: '',
    id: randomUUID(),
    level: 'Intermedio',
    routine: []
  },
  {
    month: 7,
    link: '',
    id: randomUUID(),
    level: 'Avanzado',
    routine: []
  },
  {
    month: 8,
    link: '',
    id: randomUUID(),
    level: 'Avanzado',
    routine: []
  },
  {
    month: 9,
    link: '',
    id: randomUUID(),
    level: 'Avanzado',
    routine: []
  },
  {
    month: 10,
    link: '',
    id: randomUUID(),
    level: 'Experto',
    routine: []
  },
  {
    month: 11,
    link: '',
    id: randomUUID(),
    level: 'Experto',
    routine: [
      [
        {
          key: 'A',
          series: {
            min: 2,
            max: 4
          },
          ejercicios: [
            {
              name: 'Muscle up',
              repes: {
                min: 2,
                max: 4
              },
              tempo: 'Rápido'
            }
          ],
          descanso: {
            minutes: 5
          }
        },
        {
          key: 'B',
          series: {
            min: 3,
            max: 5
          },
          ejercicios: [
            {
              name: 'Dominadas',
              intensidad: '"Perfectas"',
              repes: {
                min: 3,
                max: 5
              },
              tempo: 'Controlado'
            },
            {
              name: 'Flexiones de brazo',
              intensidad: 'Aplauso',
              repes: {
                min: 4,
                max: 8
              },
              tempo: 'Explosivo'
            }
          ],
          descanso: {
            minutes: 4
          }
        },
        {
          key: 'C',
          series: {
            min: 2,
            max: 4
          },
          ejercicios: [
            {
              name: 'Remos invertidos',
              repes: {
                min: 15,
                max: 30
              },
              tempo: "20X1"
            },
            {
              name: 'Flexiones de brazo',
              intensidad: 'Una mano',
              repes: {
                min: 3,
                max: 6,
                cadaLado: true
              },
              tempo: "30X1"
            }
          ],
          descanso: {
            minutes: 3
          }
        },
        {
          key: 'D',
          series: {
            min: 2,
            max: 4
          },
          ejercicios: [
            {
              name: 'Aperturas T + I',
              repes: {
                min: 8,
                max: 15
              },
              tempo: "30X1"
            }
          ],
          descanso: {
            minutes: 2
          }
        },
        {
          key: 'E',
          series: {
            min: 3,
            max: 5
          },
          ejercicios: [
            {
              name: 'L-sit',
              intensidad: 'Elevado',
              repes: {
                min: {
                  seconds: 10
                },
                max: {
                  seconds: 30
                }
              },
              tempo: 'Isométrico'
            },
            {
              name: 'Cuelgues',
              intensidad: 'Una mano',
              repes: {
                min: {
                  seconds: 10
                },
                max: {
                  seconds: 30
                }
              },
              tempo: 'Isométrico'
            }
          ],
          descanso: {
            minutes: 1,
            seconds: 30
          }
        }
      ]
    ]
  },
  {
    month: 12,
    link: '',
    id: randomUUID(),
    level: 'Experto',
    routine: [],
  },
]