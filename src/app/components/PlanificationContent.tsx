'use client'
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
import { IPlanificacion } from "../types/training-plan";
import H3 from "./Atom/H3";
import { PlanificationList } from "./PlanificationList/PlanificationList";
import { Level } from "../types/level";

interface PlanificationContentProps {
  planificacion?: IPlanificacion[];
}

export default function PlanificationContent({ planificacion = [] }: PlanificationContentProps) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  const getPrincipiantes = () => {
    return planificacion.filter((item) => {
      return item.level.slug === Level.PRINCIPIANTE.slug
    })
  }

  const getIntermedios = () => {
    return planificacion.filter((item) => {
      return item.level.slug === Level.INTERMEDIO.slug
    })
  }

  const getAvanzados = () => {
    return planificacion.filter((item) => {
      return item.level.slug === Level.AVANZADO.slug
    })
  }

  const getMuyAvanzados = () => {
    return planificacion.filter((item) => {
      return item.level.slug === Level.MUY_AVANZADO.slug
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
        <AccordionItem key={Level.PRINCIPIANTE.slug} aria-label={Level.PRINCIPIANTE.value} title={Level.PRINCIPIANTE.value}>
          <PlanificationList level={Level.PRINCIPIANTE.slug} list={getPrincipiantes()} label="Contenido para personas con un nivel principiantes" />
        </AccordionItem>
        <AccordionItem key={Level.INTERMEDIO.slug} aria-label={Level.INTERMEDIO.value} title={Level.INTERMEDIO.value}>
          <PlanificationList level={Level.INTERMEDIO.slug} list={getIntermedios()} label="Contenido para personas con un nivel intermedio" />
        </AccordionItem>
        <AccordionItem key={Level.AVANZADO.slug} aria-label={Level.AVANZADO.value} title={Level.AVANZADO.value}>
          <PlanificationList level={Level.AVANZADO.slug} list={getAvanzados()} label="Contenido para personas con un nivel avanzado" />
        </AccordionItem>
        <AccordionItem key={Level.MUY_AVANZADO.slug} aria-label={Level.MUY_AVANZADO.value} title={Level.MUY_AVANZADO.value}>
          <PlanificationList level={Level.MUY_AVANZADO.slug} list={getMuyAvanzados()} label="Contenido para personas con un nivel muy avanzado" />
        </AccordionItem>
      </Accordion>
    </>
  );
}
