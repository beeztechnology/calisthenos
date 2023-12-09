import { ExerciseDescriptor } from "@/app/classes/ExerciseDescriptor.class";
import { Equipment as E, ExerciseDescriptorType, Modality as M, MuscleWorkZone as Z } from "@/app/types/exercises";
import { Optional, Recommended } from "@/app/types/global";
import { Level } from "@/app/types/level";
import { randomId } from "@/utils/random";

export const exercises: ExerciseDescriptorType[] = [
  new ExerciseDescriptor(
    'Wall Push-up',
    'Flexión en pared',
    ['Realiza este ejercicio frente a una pared.', 'Coloca las manos en la pared a la altura de los hombros.', 'Mantén el cuerpo recto desde la cabeza hasta los pies.', 'Flexiona los codos para acercar el pecho a la pared.', 'Extiende los codos para volver a la posición inicial.'],
    Level.PRINCIPIANTE,
    [
      Z.PECTORALES,
      Z.TRICEPS,
      Z.DELTOIDES,
      Z.CORE
    ]),
  {
    id: randomId(),
    name: {
      english: 'Push-ups',
      spanish: 'Flexiones',
    },
    instructions: ['Colócate en posición de plancha con las manos apoyadas en el suelo a la altura de los hombros.', 'Mantén el cuerpo en línea recta desde la cabeza hasta los pies.', 'Desciende el cuerpo flexionando los codos hasta que el pecho casi toque el suelo.', 'Vuelve a la posición inicial extendiendo los codos completamente.', 'Repite el movimiento.'],
    level: Level.PRINCIPIANTE,
    muscleWorkZones: [
      Z.PECTORALES,
      Z.DELTOIDES,
      Z.TRICEPS
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Eccentric Chin Up',
      spanish: 'Dominadas excéntricas'
    },
    instructions: ['Colócate en una barra con agarre supino, las palmas hacia tu rostro.', 'Levanta el cuerpo hacia la barra utilizando la fuerza de los brazos.', 'Desciende lentamente el cuerpo hacia abajo, resistiendo la gravedad.', 'Mantén el control del movimiento durante la fase descendente.', 'Repite el proceso para trabajar la resistencia y fuerza en los músculos implicados.'],
    level: Level.PRINCIPIANTE,
    muscleWorkZones: [
      Z.DORSALES,
      Z.BICEPS
    ],
    equipment: [
      E.BARRA_DOMINADAS
    ],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Negative Push-ups',
      spanish: 'Flexiones negativas'
    },
    instructions: ['Baja lentamente hacia el suelo manteniendo el cuerpo recto',
      'Apoya las manos ligeramente más anchas que los hombros',
      'Evita arquear la espalda, mantén el abdomen contraído',
      'Desciende hasta que el pecho casi toque el suelo',
      'Impulsa hacia arriba mediante la fuerza de los brazos',
      'Repite el movimiento controlado varias veces'],
    level: Level.PRINCIPIANTE,
    muscleWorkZones: [
      Z.PECTORALES,
      Z.TRICEPS,
      Z.DELTOIDES,
      Z.ABS,
      Z.ESPALDA_BAJA
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Brock Jump',
      spanish: 'Salto Brock',
    },
    instructions: [],
    level: Level.PRINCIPIANTE,
    muscleWorkZones: [
      Z.PECTORALES,
      Z.TRICEPS,
      Z.DELTOIDES,
      Z.ABS,
      Z.ESPALDA_BAJA
    ],
    equipment: [
      E.PELOTA
    ],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Isometric Push-ups',
      spanish: 'Flexiones isométricas'
    },
    instructions: ['Coloca tus manos en el suelo, alineadas con tus hombros',
      'Mantén tu cuerpo en posición recta desde la cabeza hasta los talones',
      'Contrae los músculos abdominales para estabilizar tu torso',
      'Desciende lentamente, flexionando los codos hasta un ángulo de 90 grados',
      'Mantén la posición durante el tiempo establecido sin moverte',
      'Asegúrate de mantener una respiración constante durante la flexión isométrica'],
    level: Level.PRINCIPIANTE,
    muscleWorkZones: [
      Z.PECTORALES,
      Z.TRICEPS,
      Z.DELTOIDES,
      Z.CORE
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Triceps Bench Dip',
      spanish: 'Fondos de tríceps en banco',
    },
    instructions: ['Coloca tus manos en un banco, separadas al ancho de los hombros',
      'Extiende las piernas frente a ti con los talones apoyados en el suelo',
      'Baja lentamente tu cuerpo flexionando los codos hasta que formes un ángulo de 90 grados',
      'Mantén la espalda cerca del banco durante el descenso',
      'Vuelve a la posición inicial extendiendo completamente los brazos',
      'Asegúrate de mantener una buena forma y controlar el movimiento en todo momento'],
    level: Level.PRINCIPIANTE,
    muscleWorkZones: [
      Z.TRICEPS,
      Z.DELTOIDES,
      Z.PECTORALES,
      Z.CORE
    ],
    equipment: [E.SOPORTE],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Cobra Triceps Extension',
      spanish: 'Extensión de tríceps cobra'
    },
    instructions: ['Acuéstate boca abajo en el suelo con las piernas extendidas',
      'Coloca las manos a la altura de los hombros, con los codos doblados y las palmas apoyadas en el suelo',
      'Eleva el torso del suelo, extendiendo completamente los brazos',
      'Mantén la posición durante un segundo para contraer los tríceps',
      'Desciende lentamente de vuelta al suelo, controlando el movimiento',
      'Asegúrate de mantener la mirada hacia adelante y el cuello alineado con la columna vertebral'],
    level: Level.PRINCIPIANTE,
    muscleWorkZones: [
      Z.TRICEPS,
      Z.DELTOIDES,
      Z.ESPALDA_BAJA
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Alligator Push-ups',
      spanish: 'Flexiones aligator'
    },
    instructions: ['Comienza en una posición de plancha con las manos colocadas más anchas que los hombros',
      'Baja el cuerpo hacia el suelo manteniendo el codo derecho extendido y doblando el codo izquierdo hacia atrás',
      'Mientras bajas, lleva la rodilla derecha hacia el codo derecho de manera lateral',
      'Alterna el movimiento, llevando la rodilla izquierda hacia el codo izquierdo en la siguiente repetición',
      'Asegúrate de mantener una línea recta desde la cabeza hasta los talones durante todo el movimiento',
      'Este ejercicio implica el trabajo de los pectorales, tríceps, deltoides y músculos del núcleo'],
    level: Level.PRINCIPIANTE,
    muscleWorkZones: [
      Z.PECTORALES,
      Z.TRICEPS,
      Z.DELTOIDES,
      Z.CORE
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Bicep Curl',
      spanish: 'Curl de bíceps'
    },
    instructions: ['Párate con los pies separados al ancho de los hombros',
      'Mantén los brazos extendidos a los lados del cuerpo',
      'Flexiona los codos llevando las manos hacia los hombros',
      'Concéntrate en contraer los músculos de los bíceps durante el movimiento',
      'Desciende lentamente a la posición inicial'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      Z.BICEPS
    ],
    equipment: [
      E.ANILLAS,
      E.TRX
    ],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Spiderman Push-ups',
      spanish: 'Flexiones Spiderman'
    },
    instructions: ['Colócate en posición de plancha con las manos más anchas que el ancho de los hombros.', 'Mientras bajas tu cuerpo hacia el suelo, levanta una pierna y acerca la rodilla hacia el codo del mismo lado.', 'Empuja hacia arriba hasta la posición inicial y repite en el otro lado.', 'Asegúrate de que tu cuerpo permanezca en línea recta durante todo el movimiento.'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      Z.PECTORALES,
      Z.DELTOIDES,
      Z.TRICEPS,
      Z.ABS,
      Z.PIERNA
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Feet Elevated Push-ups',
      spanish: 'Flexiones con los pies elevados'
    },
    instructions: ['Coloca los pies en una superficie elevada, como un banco o una caja.', 'Adopta una posición de plancha con las manos colocadas ligeramente más anchas que el ancho de los hombros.', 'Baja el cuerpo hacia el suelo manteniendo una línea recta desde la cabeza hasta los talones.', 'Empuja hacia arriba hasta la posición inicial.', 'Asegúrate de mantener la activación de los músculos centrales y evitar arquear la espalda.'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      Z.PECTORALES,
      Z.DELTOIDES,
      Z.TRICEPS
    ],
    equipment: [E.SOPORTE],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Jack Knife Push-ups',
      spanish: 'Flexiones Jack Knife'
    },
    instructions: ['Posición inicial en plancha alta', 'Levanta una pierna y acerca la rodilla hacia el codo', 'Realiza una flexión mientras llevas la rodilla hacia el codo', 'Vuelve a la posición inicial y alterna con la otra pierna'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      Z.PECTORALES,
      Z.DELTOIDES,
      Z.TRICEPS,
      Z.ABS
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Clap Push-up',
      spanish: 'Flexión con aplauso'
    },
    instructions: ['Posición inicial en plancha alta', 'Realiza una flexión explosiva', 'Aplauda en el aire durante la fase de elevación', 'Aterriza suavemente en posición de plancha'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Frog Stand',
      spanish: 'Posición de rana'
    },
    instructions: ['Colócate en posición de cuclillas con las manos en el suelo', 'Apoya las rodillas en los codos', 'Levanta los pies del suelo y equilibra el cuerpo en las manos', 'Mantén la posición durante el tiempo deseado'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.ESTATICO
  },
  {
    id: randomId(),
    name: {
      english: 'Knuckle Push-ups',
      spanish: 'Flexiones de nudillos'
    },
    instructions: ['Posición inicial en plancha alta con los nudillos apoyados en el suelo', 'Desciende el cuerpo manteniendo los nudillos en contacto con el suelo', 'Realiza la flexión manteniendo la alineación del cuerpo', 'Vuelve a la posición inicial manteniendo la forma'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Staggered Push-up',
      spanish: 'Flexión desplazada'
    },
    instructions: ['Posición inicial en plancha alta con las manos desplazadas', 'Una mano adelantada y la otra ligeramente hacia atrás', 'Realiza una flexión manteniendo la posición desplazada', 'Alterna las manos en cada repetición'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Side to Side Pushup',
      spanish: 'Flexiones de lado a lado'
    },
    instructions: ['Posición inicial en plancha alta', 'Realiza una flexión descendiendo el cuerpo hacia un lado', 'Regresa a la posición inicial', 'Alterna el lado hacia el cual te desplazas en cada repetición'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: '(Double) Thigh Tap Pushup',
      spanish: 'Flexiones con toque de palmas en los muslos'
    },
    instructions: ['Posición inicial en plancha alta', 'Realiza una flexión descendiendo el cuerpo hacia un lado', 'Toque doble con las palmas en los muslos', 'Regresa a la posición inicial', 'Alterna el lado hacia el cual te desplazas en cada repetición'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Lawnmower Extension',
      spanish: 'Extensión de cortacésped'
    },
    instructions: ['Párate con los pies separados a la altura de los hombros', 'Sujeta una pesa con una mano en posición baja frente a ti', 'Levanta la pesa hacia el costado del cuerpo', 'Extiende el brazo completamente durante el movimiento', 'Baja la pesa de manera controlada', 'Repite el movimiento para trabajar ambos lados'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [E.ANILLAS, E.TRX],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Archer Push-up',
      spanish: 'Flexión de arquero'
    },
    instructions: ['Colócate en posición de plancha con las manos más anchas de lo habitual', 'Dirige tu cuerpo hacia un lado, manteniendo un brazo extendido y el otro ligeramente flexionado', 'Desciende hacia el lado donde tienes el brazo flexionado', 'Mantén el codo del brazo extendido recto', 'Vuelve a la posición inicial y repite en el otro lado'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Dragon Walk',
      spanish: 'Paseo del Dragón'
    },
    instructions: ['Colócate en posición de plancha con las manos debajo de los hombros', 'Levanta la mano derecha y el pie izquierdo del suelo', 'Desplaza la mano derecha y el pie izquierdo hacia adelante, como si estuvieras dando un paso', 'Repite el movimiento con la mano izquierda y el pie derecho', 'Continúa alternando los pasos de manera fluida'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Power Push-up',
      spanish: 'Flexión Explosiva'
    },
    instructions: ['Coloca las manos en el suelo a la altura de los hombros', 'Mantén el cuerpo recto desde la cabeza hasta los talones', 'Desciende hacia el suelo flexionando los codos', 'Impulsa el cuerpo hacia arriba de manera explosiva', 'Aterriza suavemente y repite el movimiento'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Hindu Push-up',
      spanish: 'Flexiones hindús'
    },
    instructions: ['Inicia en posición de tabla.', 'Levanta las caderas hacia arriba formando una V invertida.', 'Lleva la cabeza hacia abajo y hacia adelante, doblando los codos.', 'Desplázate hacia arriba mientras estiras los brazos.', 'Vuelve a la posición inicial de tabla.'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Pike Push-up',
      spanish: 'Flexiones Pike'
    },
    instructions: ['Comienza en posición de tabla con las manos y los pies en el suelo.', 'Levanta las caderas hacia arriba formando una V invertida.', 'Baja la cabeza hacia el suelo manteniendo los codos extendidos.', 'Empuja hacia arriba llevando las caderas de nuevo a la posición inicial.', 'Repite el movimiento para completar la serie.'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Rotational Push Up',
      spanish: 'Flexiones rotativas'
    },
    instructions: ['Comienza en posición de tabla con las manos y los pies en el suelo.', 'Realiza un push-up descendiendo el cuerpo hacia el suelo.', 'Al ascender, gira el torso y levanta un brazo hacia el techo.', 'Mantén la posición girada durante un momento.', 'Regresa a la posición inicial y repite en el lado opuesto.'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Chest Slap Push Up',
      spanish: 'Flexión con palmada en el pecho'
    },
    instructions: ['Comienza en posición de tabla con las manos y los pies en el suelo.', 'Realiza una flexión descendiendo el cuerpo hacia el suelo.', 'Al ascender, levanta una mano y da una palmada en el pecho.', 'Mantén la posición y luego baja la mano al suelo.', 'Repite el movimiento alternando las manos con cada repetición.'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Push Up With Toe Tap',
      spanish: 'Empuje hacia arriba con toque de dedo del pie'
    },
    instructions: ['Colócate en posición de plancha con las manos apoyadas en el suelo a la altura de los hombros y las piernas estiradas hacia atrás', 'Asegúrate de que tu cuerpo forme una línea recta desde la cabeza hasta los talones', 'Baja el pecho hacia el suelo flexionando los codos, manteniendo los codos cerca del cuerpo', 'Empuja hacia arriba para volver a la posición inicial, extendiendo completamente los brazos', 'Una vez que estés arriba, levanta uno de tus pies ligeramente del suelo y toca con la punta del pie el tobillo contrario', 'Vuelve a bajar el pie al suelo y repite el movimiento con el otro pie'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Knee To Opposite Elbow Push Up',
      spanish: 'Flexión de rodilla hasta el codo opuesto'
    },
    instructions: ['Comienza en una posición de plancha alta con las manos separadas a la anchura de los hombros y los pies separados a la anchura de las caderas', 'Contráete el abdomen y mantén tu cuerpo en línea recta desde la cabeza hasta los pies', 'Dobla la rodilla derecha y acércala al codo izquierdo, mientras bajas el pecho hacia el suelo para hacer una flexión', 'Empuja hacia arriba hasta volver a la posición inicial y repite en el otro lado, llevando la rodilla izquierda hacia el codo derecho', 'Continúa alternando lados durante el número deseado de repeticiones'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Push Up With Cross Leg Kicks',
      spanish: 'Empuja hacia arriba con patadas cruzadas de pierna'
    },
    instructions: ['Colócate en posición de plancha alta con las manos separadas a la altura de los hombros', 'Mantén el cuerpo recto y contrae el abdomen', 'Baja el cuerpo flexionando los brazos hasta que los codos formen un ángulo de 90 grados', 'A medida que empujas el cuerpo hacia arriba, cruza una pierna por encima de la otra y extiende la pierna cruzada hacia un lado', 'Alterna las piernas en cada repetición, cruzando la otra pierna y extendiéndola hacia el lado opuesto', 'Continúa realizando las flexiones mientras alternas las patadas cruzadas de piernas'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Lateral Step Push Up',
      spanish: 'Flexión de brazos con paso lateral'
    },
    instructions: ['Colócate en posición de plancha con las manos separadas a la altura de los hombros', 'Da un paso hacia un lado con una mano y un pie, manteniendo el cuerpo recto', 'Baja el cuerpo hacia el suelo realizando una flexión de brazos', 'Empuja hacia arriba para volver a la posición inicial', 'Repite el movimiento del otro lado, dando un paso lateral con la otra mano y pie'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Uchi Mata Push Up',
      spanish: 'Flexiones Uchi Mata'
    },
    instructions: ['Coloca tus manos en el suelo a la altura de los hombros y tus pies juntos en posición de plancha', 'Levanta una pierna y flexiona la rodilla, llevando el muslo hacia tu pecho', 'Extiende la pierna hacia arriba y hacia afuera mientras empujas con fuerza a través de tus manos', 'Mantén la pierna levantada y recta mientras bajas el cuerpo hacia abajo doblando los codos', 'Empuja hacia arriba con los brazos para volver a la posición inicial', 'Repite el movimiento con la otra pierna'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Slider Pushup',
      spanish: 'Deslizador Flexiones'
    },
    instructions: ['Colócate en posición de plancha con las manos apoyadas en un slider.', 'Desliza una mano hacia afuera mientras mantienes el cuerpo recto.', 'Realiza una flexión con el brazo extendido.', 'Vuelve a la posición inicial deslizando la mano de regreso.', 'Repite el proceso con la otra mano.', 'Alterna entre las manos para completar las repeticiones deseadas.'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Explosive Full Body Push Up',
      spanish: 'Flexión explosiva de cuerpo completo'
    },
    instructions: ['Colócate en posición de plancha con las manos a la altura de los hombros.', 'Desciende rápidamente hacia abajo flexionando los codos.', 'Realiza un impulso explosivo hacia arriba, levantando las manos del suelo.', 'Asegúrate de mantener el cuerpo recto durante todo el movimiento.', 'Aterriza suavemente y repite el ejercicio para completar las repeticiones deseadas.'],
    level: Level.INTERMEDIO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Handstand Push Up on Rings',
      spanish: 'Flexión de Pino o en vertical en Anillas'
    },
    instructions: ['Cuelga anillas a una altura adecuada y asegúralas firmemente.', 'Colócate en posición invertida con las manos en el suelo y los pies apoyados en las anillas.', 'Flexiona los codos para bajar el cuerpo hacia las anillas.', 'Empuja hacia arriba para volver a la posición inicial.', 'Mantén el cuerpo alineado y los codos apuntando hacia afuera durante el movimiento.', 'Realiza el ejercicio controladamente para evitar balanceos innecesarios.', 'Completa las repeticiones deseadas.'],
    level: Level.AVANZADO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [E.ANILLAS],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Full Planche',
      spanish: 'Plancha Completa'
    },
    instructions: ['Inicia en posición de plancha con las manos apoyadas en el suelo y los dedos apuntando hacia adelante.', 'Levanta las piernas del suelo, manteniendo el cuerpo en posición horizontal.', 'Apoya el peso en las manos y extiende completamente los codos.', 'Mantén la posición el mayor tiempo posible.', 'Asegúrate de mantener el cuerpo alineado y los músculos contraídos.', 'Baja controladamente para volver a la posición inicial.', 'Practica regularmente para mejorar la resistencia y estabilidad.'],
    level: Level.AVANZADO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [Recommended(E.BARRA_PARALELAS), Recommended(E.MINI_PARALELAS)],
    modality: M.ESTATICO
  },
  {
    id: randomId(),
    name: {
      english: 'Pseudo Planche Push-up',
      spanish: 'Flexión Pseudo Plancha'
    },
    instructions: ['Comienza en posición de flexión con las manos colocadas más adelante de lo habitual.', 'Inclina el torso hacia adelante, llevando el peso hacia las manos y adelantando los hombros.', 'Desciende flexionando los codos mientras mantienes el cuerpo inclinado hacia adelante.', 'Empuja hacia arriba, manteniendo la posición de inclinación.', 'Asegúrate de mantener los codos cerca del cuerpo durante todo el movimiento.', 'Realiza el ejercicio controladamente para maximizar la activación de los músculos.', 'Completa las repeticiones deseadas.'],
    level: Level.AVANZADO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [Recommended(E.BARRA_PARALELAS), Recommended(E.MINI_PARALELAS)],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Planche Push-up',
      spanish: 'Flexión Plancha'
    },
    instructions: ['Comienza en posición de plancha con las manos colocadas más adelante de lo habitual.', 'Levanta las piernas del suelo, manteniendo el cuerpo en posición horizontal.', 'Desciende flexionando los codos mientras mantienes el cuerpo en posición de plancha.', 'Empuja hacia arriba, extendiendo completamente los codos.', 'Mantén el cuerpo alineado y los músculos contraídos durante todo el movimiento.', 'Realiza el ejercicio controladamente para maximizar la activación de los músculos.', 'Completa las repeticiones deseadas.'],
    level: Level.AVANZADO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [Recommended(E.BARRA_PARALELAS), Recommended(E.MINI_PARALELAS)],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'One Arm Chin Up',
      spanish: 'Dominada a una mano'
    },
    instructions: ['Busca una barra de dominadas sólida y bien sujeta.', 'Agarra la barra con una sola mano, con la palma hacia ti.', 'Asegúrate de que el brazo esté completamente extendido.', 'Levanta el cuerpo hacia arriba utilizando solo el brazo que sostiene la barra.', 'Mantén el cuerpo alineado y evita balanceos.', 'Desciende controladamente para volver a la posición inicial.', 'Realiza el ejercicio en ambas manos para un desarrollo equilibrado.'],
    level: Level.AVANZADO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [E.BARRA_DOMINADAS, Optional(E.BANDA_ELASTICA)],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Assisted One Arm Pushup',
      spanish: 'Flexión a una mano asistida'
    },
    instructions: ['Colócate en posición de flexión con las manos a la altura de los hombros.', 'Apoya una mano sobre una superficie elevada, como un bloque o banco.', 'Extiende la pierna del lado opuesto a la mano apoyada hacia atrás.', 'Desciende hacia abajo flexionando el codo de la mano libre.', 'Utiliza la pierna extendida para asistir en el movimiento.', 'Empuja hacia arriba, manteniendo el control con la pierna.', 'Alterna entre las manos para un desarrollo equitativo.', 'Realiza el ejercicio controladamente para maximizar la activación de los músculos.'],
    level: Level.AVANZADO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [E.HOME_ARTICLES],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'One Arm Pushup',
      spanish: 'Flexión a una mano'
    },
    instructions: ['Colócate en posición de flexión con las manos a la altura de los hombros.', 'Distribuye el peso hacia un lado y apoya una mano en la parte baja de la espalda.', 'Mantén el cuerpo recto y alineado durante todo el movimiento.', 'Desciende flexionando el codo de la mano libre hacia abajo.', 'Empuja hacia arriba, extendiendo completamente el codo.', 'Asegúrate de mantener la estabilidad y evitar balanceos.', 'Realiza el ejercicio en ambas manos para un desarrollo equilibrado.', 'Controla el movimiento para maximizar la activación muscular.'],
    level: Level.AVANZADO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Feet Elevated One Arm Push up',
      spanish: 'Flexión a una mano con pies elevados'
    },
    instructions: ['Coloca los pies en una superficie elevada, como un banco o una plataforma.', 'Adopta la posición de flexión con las manos a la altura de los hombros.', 'Distribuye el peso hacia un lado y apoya una mano en la parte baja de la espalda.', 'Mantén el cuerpo recto y alineado durante todo el movimiento.', 'Desciende flexionando el codo de la mano libre hacia abajo.', 'Utiliza la elevación de los pies para intensificar el ejercicio.', 'Empuja hacia arriba, extendiendo completamente el codo.', 'Asegúrate de mantener la estabilidad y evitar balanceos.', 'Realiza el ejercicio en ambas manos para un desarrollo equilibrado.', 'Controla el movimiento para maximizar la activación muscular.'],
    level: Level.AVANZADO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [E.SOPORTE],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'One Handed Clap Push Up',
      spanish: 'Flexión de Manos con Aplauso a una Sola Mano'
    },
    instructions: ['Adopta la posición de flexión con las manos a la altura de los hombros.', 'Apoya una mano en la parte baja de la espalda, distribuyendo el peso hacia un lado.', 'Desciende flexionando el codo de la mano libre hacia abajo.', 'Impulsa el cuerpo hacia arriba con suficiente fuerza para realizar un aplauso con la mano libre.', 'Asegúrate de mantener el cuerpo recto y alineado durante todo el movimiento.', 'Controla el descenso para prepararte para el siguiente aplauso.', 'Realiza el ejercicio en ambas manos para un desarrollo equilibrado.'],
    level: Level.AVANZADO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [],
    modality: M.DINAMICO
  },
  {
    id: randomId(),
    name: {
      english: 'Single Arm Elevated Push Up',
      spanish: 'Flexión de Brazo Único con Elevación'
    },
    instructions: ['Coloca una mano en una superficie elevada, como un bloque o banco.', 'Adopta la posición de flexión con la mano restante a la altura del hombro.', 'Mantén el cuerpo recto y alineado durante todo el movimiento.', 'Desciende flexionando el codo de la mano en el suelo.', 'Asegúrate de mantener la estabilidad y evitar balanceos.', 'Empuja hacia arriba, extendiendo completamente el codo.', 'Utiliza la elevación para intensificar el ejercicio.', 'Realiza el ejercicio en ambas manos para un desarrollo equilibrado.', 'Controla el movimiento para maximizar la activación muscular.'],
    level: Level.AVANZADO,
    muscleWorkZones: [
      // TODO
    ],
    equipment: [E.SOPORTE],
    modality: M.DINAMICO
  },
]