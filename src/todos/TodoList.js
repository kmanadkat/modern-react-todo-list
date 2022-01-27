import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import { generateId } from "../util";

const TodoList = ({ todos = [{ text: "Helllo" }] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem key={generateId()} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
