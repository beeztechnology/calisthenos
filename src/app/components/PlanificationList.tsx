import { Link, Listbox, ListboxItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Planificacion } from "../types";

interface PlanificationListProps {
  list: Planificacion[];
  label: string;
}

export function PlanificationList({ list, label }: PlanificationListProps) {
  const currentPathname = usePathname()

  const getPath = ({ link, month }: Planificacion) => {
    if (link.length > 0) {
      return currentPathname + link;
    }
    return `${currentPathname}/mes/${month.toString()}`
  }

  return (
    <Listbox variant="bordered" aria-label={label}>
      {list.map((item, index, arr) => {
        const textValue = `Mes ${item.month}`
        return (
          <ListboxItem
            key={item.id}
            showDivider={index !== arr.length - 1}
            textValue={textValue}
          >
            <Link href={getPath(item)} color="foreground" className="w-full">
              {textValue}
            </Link>
          </ListboxItem>
        )
      })}
    </Listbox>
  )
}
