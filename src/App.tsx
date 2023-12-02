import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

import { store } from './store'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header itensNoCarrinho={[]} />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
