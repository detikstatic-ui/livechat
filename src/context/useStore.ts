import { create } from "zustand"

type Store = {
  show: boolean
  toggle: () => void
}

const useStore = create<Store>((set) => ({
  show: false,
  toggle: () => set((state) => ({ show: state.show ? false : true })),
}))

export default useStore
