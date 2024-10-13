import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './Convidados'

const store = configureStore({
  reducer: {
    Contatos: contatoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
