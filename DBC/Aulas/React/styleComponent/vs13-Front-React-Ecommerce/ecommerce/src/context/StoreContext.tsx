import { createContext, useState } from 'react'
import { IChildren, Store } from '../utils/interface'
import { API } from '../utils/api'

interface StoreContextType {
  storeData: Store[] | null
  getAllItens: () => Promise<void>
}

export const StoreContext = createContext({} as StoreContextType)

export function StoreProvider({ children }: IChildren) {
  const [storeData, setStoreData] = useState<Store[] | null>(null)

  async function getAllItens() {
    try {
      const response = await fetch(`${API}products`)

      if (!response.ok) {
        throw new Error('Os produtos não foram encontrados')
      }

      const data = await response.json()

      const firstFourItems = data.slice(0, 4)

      setStoreData(firstFourItems)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <StoreContext.Provider value={{ storeData, getAllItens }}>
      {children}
    </StoreContext.Provider>
  )
}
