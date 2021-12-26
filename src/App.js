
import './App.css';
import Header from "./Mycomponents/header";
import {Todos} from "./Mycomponents/Todos";
import {Footer}  from "./Mycomponents/Footer";
import {Addtodo}  from "./Mycomponents/Addtodo";
import React, { useState ,useEffect } from 'react';
import {About}  from "./Mycomponents/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Usestatehooks } from './Usestatehooks';
import Usestateclass from './Usestateclass';
import { Usestatehook } from './Usestatehook';
import { Reduxop } from './reactredux/Reduxop';

function App() {
  let inittodo;
  if(localStorage.getItem("todos")===null){
    inittodo =[];

  }
  else{
    inittodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete=(todo)=>{
    console.log("i am ondelete of todo",todo);
    // deleting this way in react does not work 
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return  e!==todo;

    }));
     localStorage.getItem("todos")
  }
  const addtodo =(tittle, desc)=>{
    console.log("i am adding this todo ",tittle , desc);
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{

  sno =todos[todos.length-1].sno+1;
    }
    const mytodo={
      sno:sno,
      tittle:tittle,
      desc:desc
    }
    setTodos([...todos,mytodo])
    console.log(mytodo);


  }
   const [todos, setTodos] = useState([inittodo])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    < >
     {/* <Router>
      <Header   tittle=" My  Todos List "   searchbar={false }/>
    <Switch>
          <Route  exact path="/" render={()=>{
          return  (
          <>
          <Addtodo  addtodo={addtodo}/>
      <Todos todos ={todos} onDelete={onDelete}/>
              </>)
          }}>
          </Route>
          <Route exact  path="/about">
            <About />
          </Route>
        </Switch>
        
      <Footer/>
       </Router> */}
       {/* <Usestatehooks/> */}
       {/* <Usestateclass/> */}
       {/* <Usestatehook/> */}
       <Reduxop/>
       
            </>
  );
}

export default App;
