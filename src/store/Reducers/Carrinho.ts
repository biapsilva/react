import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Game } from '../../App'
import { type } from 'os'

type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
