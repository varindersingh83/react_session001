import React from 'react';
import Todo from './todo.js';
import { useSelector } from 'react-redux';

function EachTodo({ toDos, setTodos }) {
  const todoRedux = useSelector((state) => state.todos.todo1);
  console.log(todoRedux);

  return (
    <div>
      {/* 
        this will take a list of items passsed from array(toDos) in
      ToDoStructure
    */}
      {/* 
            Todo is a component 
            todoText is props accessing text from todo
            key is props accessing id from todo
            setTodos is props accesing funciton setTodos
        */}
      {toDos.map((todo) => (
        <Todo todoText={todo.textTodo} key={todo.id} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default EachTodo;
