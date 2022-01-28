import 'node-fetch'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'
import sinon from 'sinon'

import {
  LOADING_TODOS,
  LOADING_TODOS_SUCCESS,
} from '../store/actions/constants'
import { loadTodosThunk } from '../store/actions/todosThunks'

describe('Testing loadTodos thunk', () => {
  it('Dispatches the correct actions in the success scenario', async () => {
    const testDispatch = sinon.spy()

    const testTodos = [{ text: 'hello' }, { text: 'world' }]
    fetchMock.get('http://localhost:8000/todos', testTodos)

    const expectedFirstAction = { type: LOADING_TODOS }
    const expectedSecondAction = {
      type: LOADING_TODOS_SUCCESS,
      payload: {
        todos: testTodos,
      },
    }

    await loadTodosThunk()(testDispatch)

    expect(testDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction)
    expect(testDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction)

    fetchMock.reset()
  })
})
