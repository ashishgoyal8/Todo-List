import React from 'react'
import  {TodoItem}  from "../MyComponents/TodoItem"; 
export const Todos = (props) => {
  let myStyle ={
    minHeight:"70vh",
    margin: "40px auto"
  }
  return (
    <div className="container " style = {myStyle}>
      <h3 className='my-3' >Todos List</h3>
      {props.todo_par.length===0? "No Todos right now":
      props.todo_par.map((todo) => { 
        return (<>
        <TodoItem todo = {todo} key='sno' onDelete ={props.onDelete} / >
        <hr />
        </>
        )
          
    })} 
      
     
    </div>
  )
}


