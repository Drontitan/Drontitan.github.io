import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
    return (
        <div>
              <h4>{todo.tittle}</h4>
              <p>{todo.desc}</p>
              <button   className=" btn btn-danger"  onClick={()=>{onDelete(todo)}}>Delete </button>
        </div>
    )
}
