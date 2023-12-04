import H1 from "@/app/components/Atom/H1"
import PlanificationContent from "@/app/components/PlanificationContent"
import React from 'react'
import { plan } from "./plan.db"

export default function SinEquipamiento() {
  const description = "¿Querés entrenar en casa? ¿Sin equipamiento (o con mínimo)? ¿Nunca antes entrenaste con tu propio peso corporal? En ese caso, estás en la sección adecuada. Aquí te proponemos el apartado teórico de la sección “Sin Equipamiento” con todo lo que deberías saber y aprender antes de empezar a entrenar en casa. Procurá dedicar el tiempo necesario (será poco, no te preocupes), porque una vez que incorpores estos conocimientos, podrás sacarle el máximo provecho no solo a esta planificación de entrenamiento, sino al resto de los contenidos en la Plataforma."

  return (
    <>
      <div className="flex flex-col gap-6">
        <p>{description}</p>
        <PlanificationContent courses={plan} />
      </div>
    </>
  )
}
