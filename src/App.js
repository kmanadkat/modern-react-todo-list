import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
`

export default hot(module)(App)
