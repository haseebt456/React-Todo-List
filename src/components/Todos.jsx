import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
  <div className="container">
    <h3 className="text-center my-3">Todos</h3>
    {props.todoslist.map((todo)=>{
      return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
    })}
    
  </div>
  )
}
