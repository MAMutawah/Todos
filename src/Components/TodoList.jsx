import React, { useState } from 'react'
import Todo from './Todo';

function check(arr, id) {
  let newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].id === id) {
      newArr[i].isChecked = !newArr[i].isChecked;
      newArr[i].updatedAt = Date.now();
    }
  }

  return newArr;
}


const TodoList = props => {
  const [selectedClass,] = useState("btn-primary");
  const [unSelectedClass,] = useState("btn-outline-primary");

  const { todoList, setToDoList } = props

  const [todoTab, setTodoTab] = useState(selectedClass)
  const [doneTab, setDoneTab] = useState(unSelectedClass)

  const [filterByCheck, setFilterByCheck] = useState(false)

  const updateTodoToChecked = (todo_id) => {
    // console.log(todo_id);
    // console.log(todoList);
    setToDoList(check(todoList, todo_id));
  };

  const deleteTodo = (todo_id) => {
    let newArr = [];
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === todo_id) {
      } else {
        newArr.push(todoList[i]);
      }
    }
    setToDoList(newArr);
  };

  const chooseTodo = e => {
    setTodoTab(selectedClass);
    setDoneTab(unSelectedClass);
    setFilterByCheck(false)
  }

  const chooseDone = e => {
    setTodoTab(unSelectedClass);
    setDoneTab(selectedClass);
    setFilterByCheck(true)

  }

  return (
    <div>
      <div className="d-flex">
        <div className="btn-group my-2 mx-auto" role="group">
          <div className={`btn ${todoTab}`} onClick={chooseTodo}>Todo</div>
          <div className={`btn ${doneTab}`} onClick={chooseDone}>Done</div>
        </div>
      </div>
      <ul className='list-group'>
        {todoList
          .sort((a, b) => { return new Date(b.updatedAt) - new Date(a.updatedAt) })
          .filter((todo) => { return todo.isChecked === filterByCheck })
          .map((todo, index) => {
            return <li className="list-group-item" key={index}>
              <Todo
                todo={todo}
                checkedTodo={updateTodoToChecked}
                deleteTodo={deleteTodo}
              />
            </li>
          })}
      </ul>

    </div>
  )
}

export default TodoList
