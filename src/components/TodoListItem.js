import { CalendarCheck, Trash } from 'phosphor-react'
import React from 'react'
import styled from 'styled-components'

const TodoListItem = ({ todo, deleteTodo, markComplete }) => {
  return (
    <TodoItemContainer>
      <TodoHeading isCompleted={todo.isCompleted}>{todo.text}</TodoHeading>
      <ButtonsContainer>
        {!todo.isCompleted && (
          <ActionButtonColor
            isComplete={true}
            onClick={(e) => markComplete(todo.id)}>
            <CalendarCheck
              color='#00812A'
              size={22}
              weight='duotone'
              style={{ position: 'relative', top: 2 }}
            />
          </ActionButtonColor>
        )}
        <ActionButtonColor
          isComplete={false}
          onClick={(e) => deleteTodo(todo.id)}>
          <Trash
            color='#B61515'
            size={22}
            weight='duotone'
            style={{ position: 'relative', top: 2 }}
          />
        </ActionButtonColor>
      </ButtonsContainer>
    </TodoItemContainer>
  )
}

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px 32px;
  position: relative;
  box-shadow: 0 4px 8px rgb(0 0 0 / 9%);
`

const TodoHeading = styled.h3`
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : '')};
`

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  border: none;
  border-radius: 1000px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  margin-left: 8px;
`

const ActionButtonColor = styled(ActionButton)`
  background-color: ${(props) => (props.isComplete ? '#f3fff2' : '#fff5f5')};
`

export default TodoListItem
