import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {  //With destructuring for using parent function
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault(); //To prevent reloading of page
    if (!title || !desc)
      alert("Err.....")

    else
    {addTodo(title, desc);
    setTitle("");
    setDesc("");}
  }
  return (
    <div className='container my-3' >
      <form onSubmit={submit}>
        <h3>Add a Todo</h3>
        <div className="mb-3">
          <label htmlFor="title " className="form-label">Todo Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Submit</button>
      </form>
    </div>
  )
}


