import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import moment from 'moment';

const Todo = props => {
  const { todo } = props

  return (

    <>
      <div className="row m-1">
        <div className="col">
          <input id={`todo${todo.id}`} className="form-check-input" type="checkbox" checked={todo.isChecked} onChange={e => props.checkedTodo(todo.id)} />
          <label htmlFor={`todo${todo.id}`} > {todo.isChecked ? <del>{todo.todo}</del> : todo.todo}</label>
        </div>

        <div className="float-right">
          <div className="btn btn-danger  mr-2" onClick={e => props.deleteTodo(todo.id)}> Delete </div>
        </div>
      </div>
      <div className="row mx-2 font-weight-light">
        <span className="bg-light">{moment(todo.updatedAt).fromNow()}</span>
      </div>

    </>

  );
};

export default Todo;