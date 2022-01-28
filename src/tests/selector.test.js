const { expect } = require('chai')
const { it, describe } = require('mocha')
const { getCompleteTodosFromState } = require('../store/selectors')

describe('Testing getCompleteTodosFromState selector', () => {
  it('Returns only completed todos', () => {
    const testTodos = [
      { text: 'hello', isCompleted: true },
      { text: 'world', isCompleted: false },
    ]

    const expected = [{ text: 'hello', isCompleted: true }]
    const actual = getCompleteTodosFromState.resultFunc(testTodos)

    expect(actual).to.deep.equal(expected)
  })
})
