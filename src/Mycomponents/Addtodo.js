// import React from 'react'
import React, { useState } from 'react';
export const Addtodo = ({addtodo}) => {
         const [tittle, settittle] = useState("");
         const [desc, setdesc] = useState("");
    const submit= (e)=>{
             e.preventDefault();
                if(!tittle||!desc){
                    alert("tittle or desc cannot be blank ")
                }
                else{
                  addtodo(tittle,desc);
                settittle("");
                setdesc("");
                }


    }
    return (
        <div className="container my-3">
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label for="tittle" className="form-label">Todo tittle </label>
    <input type="text"  value={tittle} onChange={(e)=>{settittle(e.target.value)}} className="form-control" id="tittle" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="desc" className="form-label">Todo Add todo</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }}className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-success">Add todo</button>
</form>
        </div>
    )
}
