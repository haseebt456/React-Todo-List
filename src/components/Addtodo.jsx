import React from 'react'

export default function Addtodo() {
    return (
        <div className='container'>
            <h3>Add Todo</h3>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="description" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" class="form-control" id="description" />
                </div>
                
                <button type="submit" class="btn btn-success">Add todo</button>
            </form>
        </div>
    )
}
