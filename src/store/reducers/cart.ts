import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItems, Restaurante } from '../../pages/Home'

type CartState = {
  items: Restaurante[]
  isOpen: boolean
  pratos: CardapioItems[]
}

const initialState: CartState = {
  items: [],
  pratos: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItems>) => {
      const prato = state.pratos.find((item) => item.id === action.payload.id)
      if (!prato) {
        state.pratos.push(action.payload)
      } else {
        alert('O jogo já está no carrinho')
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer
