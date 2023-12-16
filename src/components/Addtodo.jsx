import React, { useState } from 'react'

export default function Addtodo({addTodo}) {
    /* const [title, setTitle] = useState("");: 
    This line declares a state variable named title and a function to update its value named setTitle.
     The initial value of title is an empty string (""). */
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }
        addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div className='container'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="description" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-success">Add todo</button>
            </form>
        </div>
    )
}
