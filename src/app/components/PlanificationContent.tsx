'use client'
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
import { IPlanificacion } from "../types/training-plan";
import H3 from "./Atom/H3";
import { PlanificationList } from "./PlanificationList";
import { Level } from "../types/level";

interface PlanificationContentProps {
  planificacion?: IPlanificacion[];
}

export default function PlanificationContent({ planificacion = [] }: PlanificationContentProps) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  const getPrincipiantes = () => {
    return planificacion.filter((item) => {
      return item.level === Level.PRINCIPIANTE
    })
  }

  const getIntermedios = () => {
    return planificacion.filter((item) => {
      return item.level === Level.INTERMEDIO
    })
  }

  const getAvanzados = () => {
    return planificacion.filter((item) => {
      return item.level === Level.AVANZADO
    })
  }

  const getExpertos = () => {
    return planificacion.filter((item) => {
      return item.level === Level.MUY_AVANZADO
    })
  }

  return (
    <>
      <H3>Contenido de la planificación</H3>
      <Accordion variant="bordered"
        selectedKeys={selectedKeys}
        // @ts-expect-error
        onSelectionChange={setSelectedKeys}
      >
        <AccordionItem key={Level.PRINCIPIANTE} aria-label={Level.PRINCIPIANTE} title={Level.PRINCIPIANTE}>
          <PlanificationList list={getPrincipiantes()} label="Contenido para personas con un nivel principiantes" />
        </AccordionItem>
        <AccordionItem key={Level.INTERMEDIO} aria-label={Level.INTERMEDIO} title={Level.INTERMEDIO}>
          <PlanificationList list={getIntermedios()} label="Contenido para personas con un nivel intermedio" />
        </AccordionItem>
        <AccordionItem key={Level.AVANZADO} aria-label={Level.AVANZADO} title={Level.AVANZADO}>
          <PlanificationList list={getAvanzados()} label="Contenido para personas con un nivel avanzado" />
        </AccordionItem>
        <AccordionItem key={Level.MUY_AVANZADO} aria-label={Level.MUY_AVANZADO} title={Level.MUY_AVANZADO}>
          <PlanificationList list={getExpertos()} label="Contenido para personas con un nivel experto" />
        </AccordionItem>
      </Accordion>
    </>
  );
}
