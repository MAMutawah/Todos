import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

const TodoForm = props => {
  const [todo, setTodo] = useState('');
  const [isChecked,] = useState(false);
  const [emptyTodo, setEmptyTodo] = useState("")

  const addTodo = e => {
    e.preventDefault();
    if (!emptyTodo && todo.length > 0) {
      const todoItem = { todo, isChecked, updatedAt: Date.now(), createdAt: Date.now(), id: props.generateId() }
      props.onAdd(todoItem);
      // console.log(todoItem);
      setTodo('');
    } else {
      setEmptyTodo('Todo must be entered');
    }
  }

  const handleTodo = e => {
    setTodo(e.target.value);
    if (e.target.value.length === 0) {
      setEmptyTodo('Todo must be entered')
    } else {
      setEmptyTodo('');
    }
  }


  return (
    <form onSubmit={addTodo} className="m-0 p-0">
      <div className="row my-2">
        <div className="form-group col-6 ml-auto my-0">
          <input className="form-control" type="text" placeholder="Write what to do" onChange={e => handleTodo(e)} value={todo} />
          {
            emptyTodo ?
              <pre style={{ color: 'red' }}>{emptyTodo}</pre> : ''
          }
        </div>
        <div className="col-2 mr-auto">
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;