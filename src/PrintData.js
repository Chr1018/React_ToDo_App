import React, { useState } from 'react';

export default function PrintData(props) {
  const removeTodo = (i) => {
    const newTodo = props.todos.filter((todo, index) => {
      return i !== index;
    });
    props.setTodo(newTodo);
    localStorage.setItem('add:todo', JSON.stringify(newTodo));
  };
  return (
    <>
      <div className="todo">
        {props.todos.map((ele, ind) => (
          <div className="listEle" key={`${ele}-${ind}`}>
            <div className="todo-text">{ele}</div>
            <div className="trash-wrapper">
              <i
                className="fa fa-trash"
                style={{ margin: '5px' }}
                onClick={() => removeTodo(ind)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
