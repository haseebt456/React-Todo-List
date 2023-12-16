import React, { useState } from 'react'

export default function Addtodo() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = ()=>{

    }
    return (
        <div className='container'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" value={title} class="form-control" id="description" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" value={desc} class="form-control" id="desc" />
                </div>
                
                <button type="submit" class="btn btn-success">Add todo</button>
            </form>
        </div>
    )
}
