const { expect } = require('chai')
const { it, describe } = require('mocha')
const { CREATE_TODO } = require('../store/actions/constants')
const { todosReducer } = require('../store/reducers/todos')

describe('Testing Todos Reducer', () => {
  it(`Adds a new todo when ${CREATE_TODO} action is received`, () => {
    const testTodo = { text: 'hello', isCompleted: false, id: 1234 }
    const testAction = { type: CREATE_TODO, payload: testTodo }

    const originalState = { data: [], isLoading: false }
    const actualState = todosReducer(originalState, testAction)
    const expectedState = { data: [testTodo], isLoading: false }

    expect(actualState).to.deep.equal(expectedState)
  })
})
