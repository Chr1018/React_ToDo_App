import React, { useState } from 'react';
import PrintData from './PrintData';
import './style.css';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodo] = useState(
    localStorage.getItem('add:todo')
      ? JSON.parse(localStorage.getItem('add:todo'))
      : []
  );

  const inputHandler = (e) => {
    if (e.target.value.trim() !== '') setInputText(e.target.value);
  };

  const insertTodo = () => {
    setTodo([...todos, inputText]);
    localStorage.setItem('add:todo', JSON.stringify([...todos, inputText]));
    setInputText('');
  };

  const clearAll = () => {
    setTodo([]);
    localStorage.setItem('add:todo', JSON.stringify([]));
  };

  return (
    <div className="completeapp">
      <h1>Todo App</h1>
      <input
        type="text"
        value={inputText}
        onChange={inputHandler}
        placeholder="Add Your New Todo"
      />
      <button className="inpzone" onClick={insertTodo}>
        <i className="fa fa-plus" />
      </button>
      <PrintData todos={todos} setTodo={setTodo} />
      <div className="lastline" style={{ color: 'black' }}>
        <span>Totally there are {todos.length} tasks</span>
        <button onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
}
