import { List } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IPlanificacion } from "../../types/training-plan";
import './styles.css'

interface PlanificationListProps {
  list: IPlanificacion[];
  level: string;
}

export function PlanificationList({ list, level }: PlanificationListProps) {
  const currentPathname = usePathname()

  const getPath = ({ month }: IPlanificacion) => {
    return `${currentPathname}/${level}/mes/${month.toString()}/dia/1`
  }

  return (
    <List
      className="PlanificationList"
      dataSource={list}
      renderItem={(item) => {
        const textValue = `Mes ${item.month}`
        return (
          <List.Item>
            <Link href={getPath(item)} className="w-full link">
              <List.Item.Meta title={textValue} />
            </Link>
          </List.Item>
        )
      }}
    />
  )
}
