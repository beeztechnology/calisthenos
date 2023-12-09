import { ItemType } from "antd/es/breadcrumb/Breadcrumb"
import { Draft } from "immer"
import { Key } from "react"
import { StateCreator, create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface BreadcrumbStore {
  items: ItemType[]
  addItem: (newItem: Draft<ItemType>) => void
  removeItem: (keyToDelete: Key) => void
}

const findItemByKey = (items: ItemType[], key?: Key) => {
  return items.find(item => item.key === key)
}

const state: StateCreator<BreadcrumbStore, [["zustand/immer", []]]> = (set) => ({
  items: [] as BreadcrumbStore['items'],
  addItem: (newItem) => set((state) => {
    if (findItemByKey(state.items, newItem.key)) return
    state.items.push(newItem)
    state.items.sort((a, b) => {
      return Number(a.key) - Number(b.key)
    })
  }),
  removeItem: (key: Key) => set((state) => {
    const itemToDelete = state.items.findIndex(el => el.key === key)
    if (itemToDelete !== -1) {
      state.items.splice(itemToDelete, 1);
    }
  })
})

export const useBreadcrumbStore = create<BreadcrumbStore, [["zustand/immer", []]]>(immer(state))
