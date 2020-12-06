import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import TodoForm from "./Components/TodoForm";
import Todo from "./Components/Todo";

import React, { useState, useEffect } from "react";

function check(arr, id) {
  let newArr = [...arr];
  console.log("before", newArr[id]);
  newArr[id].isChecked = !newArr[id].isChecked;
  console.log("After", newArr[id]);

  console.log("New Arr", newArr);
  return newArr;
}

function App() {
  const [todoList, setToDoList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("tier-todo-list");
    if (data) {
      setToDoList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tier-todo-list", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (todo) => {
    setToDoList([todo, ...todoList]);
  };

  const updateTodoToChecked = (todo_id) => {
    console.log("test");
    setToDoList(check(todoList, todo_id));
  };

  const deleteTodo = (todo_id) => {
    let newArr = [];
    for (let i = 0; i < todoList.length; i++) {
      if (i === todo_id) {
      } else {
        newArr.push(todoList[i]);
      }
    }
    setToDoList(newArr);
  };

  return (
    <div className="container">
      <TodoForm onAdd={addTodo} />
      <Todo
        todoList={todoList}
        checkedTodo={updateTodoToChecked}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
