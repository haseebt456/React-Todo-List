import React from 'react'

export default function TodoItem({todo}) {//todo = props.todo
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='btn btn-sm btn-danger'>delete</button>
    </div>
  )
}
