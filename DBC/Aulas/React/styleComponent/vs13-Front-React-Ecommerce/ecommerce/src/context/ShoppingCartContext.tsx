import { createContext, useState } from 'react'
import { IChildren, Store } from '../utils/interface'

interface CartProduct extends Store {
  quantity: number
  originalValue: number
}

interface ShoppingCartContext {
  cartProducts: CartProduct[] | []
  addProductToCart: (product: CartProduct) => void
  removeProductCart: (idProductToDelete: number) => void
  // editProductCart: (idProductToEdit: number, newQuantity: number) => void
  totalPriceItens: number
  deliveryPrice: number
  totalPriceBuy: number
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function ShoppingCartProvider({ children }: IChildren) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  const deliveryPrice = 4.0
  const totalPriceItens = cartProducts
    .map((product) => product.originalValue * product.quantity)
    .reduce((acc, total) => acc + total, 0)

  const totalPriceBuy = totalPriceItens + deliveryPrice

  function addProductToCart(product: CartProduct) {
    setCartProducts((state) => [...state, product])
  }

  function removeProductCart(idProductToDelete: number) {
    setCartProducts((state) =>
      state.filter((store) => idProductToDelete !== store.id)
    )
  }

  // function editProductCart(idProductToEdit: number, newQuantity: number) {
  //   setCartProducts((state) =>
  //     state.map((store) => {
  //       return store.id === idProductToEdit
  //         ? {
  //             ...store,
  //             quantity: newQuantity,
  //             value: store.originalValue * newQuantity,
  //           }
  //         : store
  //     })
  //   )
  // }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        removeProductCart,
        // editProductCart,
        deliveryPrice,
        totalPriceItens,
        totalPriceBuy,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
