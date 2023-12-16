import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/footer";
import React, {useState} from "react";
import Addtodo from "./components/Addtodo";
function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null)
  {
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo)=>{
    console.log("I am on delete",todo);
    //item will delte but DOM will not update
    //Deleting this way will not work in react
    //let index = todosArray.indexOf(todo);
    //todosArray.splice(index,1);
    setTodos(todosArray.filter((elementToKeepInNewArray)=>{
      return elementToKeepInNewArray !==todo;
    }));
    localStorage.setItem('todos',JSON.stringify(todosArray));
  }

  const addTodo = (title,desc)=>{
    let sno = todosArray.length+1;
    const myTodo = {
      sno:sno,
      title: title,
      desc: desc
    }
    setTodos([...todosArray,myTodo]);
    localStorage.setItem('todos',JSON.stringify(todosArray));
  }

 /*  todosArray: This is the state variable that holds the current state of your to-do items. It is initialized with an array of three to-do items, each represented by an object.

setTodos: This is the function that you can use to update the todosArray state. 
In React, when you want to modify the state, you use the corresponding setter function provided by the useState hook.
 In this case, setTodos would be used to update the todosArray state. */
 
  const [todosArray, setTodos]= useState(initTodo);
  return (
    <>
      <Header title="My Todos list" serchBar={false} />
      <Addtodo addTodo={addTodo}/>
      <Todos todoslist = {todosArray} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
