'use client'
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
import H2 from "./Atom/H2";
import { PlanificationList } from "./PlanificationList";
import { Level, Planificacion } from "../types/training-plan";

interface PlanificationContentProps {
  planificacion?: Planificacion[];
}

export default function PlanificationContent({ planificacion = [] }: PlanificationContentProps) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  const PRINCIPIANTE: Level = "Principiante"
  const INTERMEDIO: Level = "Intermedio"
  const AVANZADO: Level = "Avanzado"
  const EXPERTO: Level = "Experto"

  const getPrincipiantes = () => {
    return planificacion.filter((item) => {
      return item.level === PRINCIPIANTE
    })
  }

  const getIntermedios = () => {
    return planificacion.filter((item) => {
      return item.level === INTERMEDIO
    })
  }

  const getAvanzados = () => {
    return planificacion.filter((item) => {
      return item.level === AVANZADO
    })
  }

  const getExpertos = () => {
    return planificacion.filter((item) => {
      return item.level === EXPERTO
    })
  }

  return (
    <>
      <H2>Contenido de la planificación</H2>
      <Accordion variant="bordered"
        selectedKeys={selectedKeys}
        // @ts-expect-error
        onSelectionChange={setSelectedKeys}
      >
        <AccordionItem key={PRINCIPIANTE} aria-label={PRINCIPIANTE} title={PRINCIPIANTE}>
          <PlanificationList list={getPrincipiantes()} label="Contenido para personas con un nivel principiantes" />
        </AccordionItem>
        <AccordionItem key={INTERMEDIO} aria-label={INTERMEDIO} title={INTERMEDIO}>
          <PlanificationList list={getIntermedios()} label="Contenido para personas con un nivel intermedio" />
        </AccordionItem>
        <AccordionItem key={AVANZADO} aria-label={AVANZADO} title={AVANZADO}>
          <PlanificationList list={getAvanzados()} label="Contenido para personas con un nivel avanzado" />
        </AccordionItem>
        <AccordionItem key={EXPERTO} aria-label={EXPERTO} title={EXPERTO}>
          <PlanificationList list={getExpertos()} label="Contenido para personas con un nivel experto" />
        </AccordionItem>
      </Accordion>
    </>
  );
}
