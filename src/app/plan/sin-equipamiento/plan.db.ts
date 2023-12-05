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
          key: 'B',
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
          key: 'C',
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
          key: 'D',
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
          key: 'E',
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
    id: randomUUID(),
    level: 'Experto',
    routine: [],
  },
]