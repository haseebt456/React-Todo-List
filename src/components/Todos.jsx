import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
  <div className="container">
    <h3>Todos</h3>
    <TodoItem todo={props.todoslist[0]}/>
  </div>
  )
}
