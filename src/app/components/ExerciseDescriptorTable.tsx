import Table, { ColumnsType } from "antd/es/table";
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { EquipmentType, ExerciseDescriptor, MuscleWorkZoneType } from "../types/exercises";
import { Empty, Rate, Space, Tag } from "antd";
import { Level } from "../types/training-plan";

type ExerciseDescriptorRow = {
  key: string;
  name: string;
  muscleWorkZones: ReactElement,
  equipment: ReactElement,
  level: ReactElement,
} & Pick<ExerciseDescriptor, 'modality'>

interface ExerciseDescriptorTableProps {
  exercises: ExerciseDescriptor[]
}

export default function ExerciseDescriptorTable({ exercises }: ExerciseDescriptorTableProps) {
  const [data, setData] = useState<ExerciseDescriptorRow[]>([])

  const columns: ColumnsType<ExerciseDescriptorRow> = [
    {
      title: "NAME",
      dataIndex: "name",
    },
    {
      title: "NIVEL",
      dataIndex: "level",
      align: 'center'
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
      title: "MODALIDAD",
      dataIndex: "modality",
      align: 'center'
    },
  ]

  const getRate = (level: Level) => {
    switch (level) {
      case Level.PRINCIPIANTE:
        return 1;
      case Level.INTERMEDIO:
        return 2;
      case Level.AVANZADO:
        return 3;
      default:
        return 4;
    }
  }

  const renderLevel = useCallback((level: Level) => {
    return <div className="flex flex-col gap-2">
      <em>{level}</em>
      <Rate count={4} value={getRate(level)} disabled className="flex" />
    </div>
  }, [])

  const renderWorkZones = (workZone: MuscleWorkZoneType[]) => {
    return <Space size={[0, 'small']} wrap>
      {workZone.sort().map((zone, index) => (
        <Tag key={`${index}`}>{zone}</Tag>
      ))}
    </Space>
  }

  const renderEquipment = (equipments: EquipmentType[]) => {
    return <ul className="list-disc pl-2">
      {equipments.map((equipment, index) => (
        <li key={`${index}`}>{equipment}</li>
      ))}
      {equipments.length === 0
        ? <Empty description="Sin equipamiento"></Empty>
        : <></>}
    </ul>
  }

  const renderName = (name: ExerciseDescriptor['name']) => {
    let newName = `${name.english}`;
    if (name.spanish) {
      newName += ` (${name.spanish})`;
    }
    return newName
  }

  const init = useCallback(() => {
    const newData: ExerciseDescriptorRow[] = []
    for (let i = 0; i < exercises.length; i++) {
      const exercise = exercises[i];
      const newExercise: ExerciseDescriptorRow = {
        key: exercise.id,
        name: renderName(exercise.name),
        muscleWorkZones: renderWorkZones(exercise.muscleWorkZones),
        equipment: renderEquipment(exercise.equipment),
        level: renderLevel(exercise.level),
        modality: exercise.modality,
      }
      newData.push(newExercise)
    }
    setData(newData)
  }, [exercises, renderLevel])

  useEffect(() => {
    init()
  }, [init])

  return (
    <div className="overflow-x-auto">
      <Table columns={columns} dataSource={data} bordered pagination={false} />
    </div>
  )
}
