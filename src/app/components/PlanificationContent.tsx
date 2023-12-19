'use client'
import { Collapse, CollapseProps } from "antd";
import { Level } from "../types/level";
import { IPlanificacion } from "../types/training-plan";
import H3 from "./Atom/H3";
import { PlanificationList } from "./PlanificationList/PlanificationList";

interface PlanificationContentProps {
  planificacion?: IPlanificacion[];
}

export default function PlanificationContent({ planificacion = [] }: PlanificationContentProps) {
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

  const items: CollapseProps['items'] = [
    {
      key: Level.PRINCIPIANTE.slug,
      label: Level.PRINCIPIANTE.value,
      children: <PlanificationList level={Level.PRINCIPIANTE.slug} list={getPrincipiantes()} />,
    },
    {
      key: Level.INTERMEDIO.slug,
      label: Level.INTERMEDIO.value,
      children: <PlanificationList level={Level.INTERMEDIO.slug} list={getIntermedios()} />,
    },
    {
      key: Level.AVANZADO.slug,
      label: Level.AVANZADO.value,
      children: <PlanificationList level={Level.AVANZADO.slug} list={getAvanzados()} />,
    },
    {
      key: Level.MUY_AVANZADO.slug,
      label: Level.MUY_AVANZADO.value,
      children: <PlanificationList level={Level.MUY_AVANZADO.slug} list={getMuyAvanzados()} />,
    },
  ];

  return (
    <>
      <H3>Contenido de la planificación</H3>
      <Collapse size="large" accordion defaultActiveKey={['1']} items={items} />
    </>
  );
}
