import { Rate, Space, Tag } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { Key, ReactElement, useCallback, useEffect, useState } from 'react';
import { Equipment, EquipmentType, ExerciseDescriptor, Modality, MuscleWorkZone, MuscleWorkZoneType } from "../types/exercises";
import { Level } from "../types/training-plan";

interface ExerciseDescriptorTableProps {
  exercises: ExerciseDescriptor[]
}

export default function ExerciseDescriptorTable({ exercises }: ExerciseDescriptorTableProps) {
  const [data, setData] = useState<ExerciseDescriptor[]>([])

  const renderName = (name: ExerciseDescriptor['name']): string => {
    let newName = `${name.english}`;
    if (name.spanish) {
      newName += ` (${name.spanish})`;
    }
    return newName
  }

  const columns: ColumnsType<ExerciseDescriptor> = [
    {
      title: "NAME",
      dataIndex: "name",
      filters: data.map(({ name }) => ({
        text: renderName(name),
        value: renderName(name),
      })),
      onFilter: (value, { name }) => {
        return renderName(name) === value
      },
      filterSearch: true,
      render: (value) => renderName(value)
    },
    {
      title: "NIVEL",
      dataIndex: "level",
      align: 'center',
      filters: Object
        .values(Level)
        .filter(level => exercises.findIndex(ex => ex.level === level) !== -1)
        .map(mod => ({
          text: mod,
          value: mod
        })),
      onFilter: (value, record) => {
        return record.level === value
      },
      render: (value) => renderLevel(value)
    },
    {
      title: "ZONAS DE TRABAJO",
      dataIndex: "muscleWorkZones",
      filters: Object
        .values(MuscleWorkZone)
        .filter(wz => exercises.findIndex(ex => ex.muscleWorkZones.includes(wz)) !== -1)
        .map(mod => ({
          text: mod,
          value: mod
        })),
      filterSearch: true,
      onFilter: (value, record) => {
        return record.muscleWorkZones.includes(value.toString() as MuscleWorkZoneType)
      },
      render: (value) => renderWorkZones(value)
    },
    {
      title: "EQUIPAMIENTO",
      dataIndex: "equipment",
      filters: Object
        .values(Equipment)
        .filter(eq => exercises.findIndex(ex => ex.equipment.includes(eq)) !== -1)
        .map(mod => ({
          text: mod,
          value: mod
        })),
      filterSearch: true,
      onFilter: (value, record) => {
        return record.equipment.includes(value.toString() as EquipmentType)
      },
      render: (value) => renderEquipment(value)
    },
    {
      title: "MODALIDAD",
      dataIndex: "modality",
      align: 'center',
      filters: Object
        .values(Modality)
        .filter(mod => exercises.findIndex(ex => ex.modality === mod) !== -1)
        .map(mod => ({
          text: mod,
          value: mod
        })),
      onFilter: (value, record) => {
        return record.modality === value
      },
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
      <Rate count={4} value={getRate(level)} character={<>💪</>} disabled className="flex" />
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
    </ul>
  }

  const mapData = () => {
    return data.map(exercise => ({ ...exercise, key: exercise.id }))
  }

  useEffect(() => {
    setData(exercises)
  }, [exercises])

  return (
    <div className="overflow-x-auto">
      <Table sticky columns={columns} dataSource={mapData()} bordered pagination={false} />
    </div>
  )
}
