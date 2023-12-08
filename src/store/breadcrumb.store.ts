import { ItemType } from "antd/es/breadcrumb/Breadcrumb"
import { Draft } from "immer"
import { Key } from "react"
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface BreadcrumbStore {
  items: ItemType[]
  addItem: (newItem: Draft<ItemType>) => void
  removeItem: (keyToDelete: Key) => void
}

const findItemByKey = (items: ItemType[], key?: Key) => {
  return items.find(item => item.key === key)
}

export const useBreadcrumbStore = create<BreadcrumbStore, [["zustand/immer", never]]>(immer((set) => ({
  items: [] as BreadcrumbStore['items'],
  addItem: (newItem) => set((state) => {
    if (!findItemByKey(state.items, newItem.key)) {
      state.items.push(newItem)
    }
  }),
  removeItem: (key: Key) => set((state) => {
    const itemToDelete = state.items.findIndex(el => el.key === key)
    if (itemToDelete !== -1) {
      state.items.splice(itemToDelete, 1);
    }
  })
})))
