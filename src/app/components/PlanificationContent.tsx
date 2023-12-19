'use client'
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, CollapseProps } from "antd";
import { Level } from "../types/level";
import { IPlanificacion } from "../types/training-plan";
import H3 from "./Atom/H3";
import { PlanificationList } from "./PlanificationList/PlanificationList";

interface PlanificationContentProps {
  planificacion?: IPlanificacion[];
}

export default function PlanificationContent({ planificacion: list = [] }: PlanificationContentProps) {
  const getListFiltered = (slug: string) => {
    return list.filter((item) => {
      return item.level.slug === slug
    })
  }

  const items: CollapseProps['items'] = Object.values(Level).map(lvl => ({
      key: lvl.slug,
      label: <p className="select-none">{lvl.value}</p>,
      children: <PlanificationList level={lvl.slug} list={getListFiltered(lvl.slug)} />,
  }))

  return (
    <>
      <H3>Contenido de la planificación</H3>
      <Collapse
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        size="large"
        accordion
        ghost
        defaultActiveKey={['1']}
        items={items}
      />
    </>
  );
}
