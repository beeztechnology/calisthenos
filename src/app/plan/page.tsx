import React from 'react'
import H1 from "../components/Atom/H1"
import TrainingPlan from "../components/TrainingPlan"
import styles from './page.module.css';

interface Plan {
  title: string;
  description: string;
  link: string;
}

export default function PlanesDeEntrenamiento() {
  const planes: Plan[] = [
    {
      title: "Sin equipamiento",
      description: "¿Te gustaría hacer ejercicio en casa? ¿Sin necesidad de equipos o con lo mínimo indispensable? ¿Es la primera vez que te ejercitas utilizando el peso de tu propio cuerpo?",
      link: "sin-equipamiento"
    },
    {
      title:"Anillas",
      description:"El curso de entrenamiento más completo en español, diseñado para introducirte en el fascinante mundo de las anillas.",
      link:"anillas"
    },
    {
      title:"Barras",
      description:"¿Estás pensando en ejercitarte en las barras del parque que tienes a la vuelta de la esquina? ¿O quizás adquiriste unas barras propias y ya las tienes listas en tu hogar?",
      link:"barras"
    }
  ]

  return (
    <div className="max-w-5xl">
      <H1>Planes de entrenamiento</H1>
      <div className={styles['wrapper_cards']}>
        {planes.map(plan => (
          <TrainingPlan key={plan.title} {...plan} link={`/plan/${plan.link}` } />
        ))}
      </div>
    </div>
  )
}
