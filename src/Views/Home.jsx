import React, { useState, useEffect } from "react";

import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";


const Home = () => {

  const [todoList, setToDoList] = useState([]);

  useEffect(() => {
    // const data = localStorage.getItem("tier-list");
    const data = localStorage.getItem("tier-todo-list");
    if (data) {
      let list = JSON.parse(data);
      checkList(list);
      setToDoList(list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("tier-todo-list", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (todo) => {
    setToDoList([todo, ...todoList]);
  };

  const generateId = () => {
    // console.log('yy', todoList[0], todoList.length + 1);
    let number = todoList.length + 1;
    let found = true;
    while (found) {
      found = false
      for (let i = 0; i < todoList.length; i++) {
        console.log('test', todoList[i].id);
        if (todoList[i].id === number) {
          found = true;
          number++;
          break;
        }
      }
    }

    return number;
  }

  // This Method is temporary for updating the old data
  const checkList = (arr) => {
    // let updatedArr = [...arr]
    for (let i = 0; i < arr.length; i++) {
      // console.log(i);
      if (arr[i].id === undefined) {
        console.log('No ID', i, generateId());
        arr[i].id = i + 1;
      }

      if (arr[i].createdAt === undefined) {
        // console.log('No createdAt', i);
        arr[i].createdAt = Date.now()

      }

      if (arr[i].updatedAt === undefined) {
        // console.log('No updatedAt', i);
        arr[i].updatedAt = Date.now()
      }

    }

  }

  return (

    <>
      <TodoForm onAdd={addTodo} generateId={generateId} />
      <TodoList todoList={todoList} setToDoList={setToDoList} />
    </>
  )
}

export default Home
