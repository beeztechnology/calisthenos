import Table, { ColumnsType } from "antd/es/table"
import React, { ReactElement } from 'react'
import { ExerciseDescriptor } from "../types/exercises";

type ExerciseDescriptorRow = {
  name: string;
  steps: ReactElement,
  muscleWorkZones: ReactElement,
} & Pick<ExerciseDescriptor, 'level' | 'equipment' | 'modality' | 'description'>

interface ExerciseDescriptorTableProps {
  exercises: ExerciseDescriptor[]
}

export default function ExerciseDescriptorTable({ exercises }: ExerciseDescriptorTableProps) {
  const columns: ColumnsType<ExerciseDescriptorRow> = [
    {
      title: "NAME",
      dataIndex: "name",
    },
    {
      title: "NIVEL",
      dataIndex: "level",
    },
    {
      title: "ZONAS DE TRABAJO",
      dataIndex: "muscleWorkZones",
    },
    {
      title: "EQUIPAMIENTO",
      dataIndex: "equipment",
    },
    {
      title: "EXPLICACIÓN",
      dataIndex: "steps",
    },
    {
      title: "DESCRIPCIÓN",
      dataIndex: "description",
    },
    {
      title: "MODALIDAD",
      dataIndex: "modality",
    },
  ]
  const data: ExerciseDescriptorRow[] = []
  return (
    <div className="overflow-x-auto">
      <Table columns={columns} dataSource={data} bordered pagination={false} />
    </div>
  )
}
