import './App.css';
import Header from './MyComponents/header' // bcz of using default in header component

import { Todos } from "./MyComponents/Todos"; // {} bcz of using name export in Todos component

import { Footer } from './MyComponents/Footer' // {} bcz of using name export in Footer component

import React, { useEffect, useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import {About} from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todo_arr") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todo_arr"));
  };



  const onDelete = (todo) => {
    console.log("I am On Delete", todo);

    setTodo_arr(todo_arr.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todo_arr", JSON.stringify(todo_arr));

  };

  const addTodo = (title, desc) => {
    console.log("This is add todo of ", title, desc);
    let sno;
    if (todo_arr.length === 0) {
      sno = 0;
    }
    else {
      sno = todo_arr[todo_arr.length - 1].sno + 1; //increment for new serial no
    }


    let myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };


    setTodo_arr([...todo_arr, myTodo]);
    console.log(myTodo);


    localStorage.setItem("todo_arr", JSON.stringify(todo_arr));

  }

  const [todo_arr, setTodo_arr] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo_arr", JSON.stringify(todo_arr));
  }, [todo_arr])


  return (
    <>
      <Router>
        <Header title="Todos List" search={true} />



        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todo_par={todo_arr} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
