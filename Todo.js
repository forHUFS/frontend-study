import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const [todos, setTodo] = useState([
    {
      text: "리액트",
    },
    {
      text: "어렵당",
    },
    {
      text: "후..",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const addTodo = (text) => {
    const newTodo = [...todos, { text: text }]; // {text} o
    setTodo(newTodo);
  };

  const removeTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            placeholder="할 일"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleSubmit}>추가 </button>
        </form>
        {todos.map((todo, index) => (
          <div key={index}>
            <h3>{todo.text}</h3>
            <button onClick={() => removeTodo(index)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
