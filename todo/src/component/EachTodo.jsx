import React from 'react';

function EachTodo({ toDos, setTodos }) {
  return (
    <div>
      {toDos.map((todo) => (
        <Todo todoText={todo.text} key={todo.id} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default EachTodo;
