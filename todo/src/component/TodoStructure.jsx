import React, { useState } from 'react';
import EachTodo from './EachTodo.jsx';
function TodoStructure() {
  // state = inputText : function = setInputText : access to temp storage = useState set to empty string
  const [inputText, setInputText] = useState('');
  // state = toDos : function = setToDos : access to temp storage = useState set to empty array
  const [toDos, setToDos] = useState([]);
  {
    /*
  destructuring the state by adding 3 dots to todo state`...todo` 
  textTodo get value from input box
  key to indetify each list element
  */
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText) return;

    setToDos([...toDos, { textTodo: inputText, id: Math.random() * 899 }]);
    //setting the input text form to empty
    setInputText('');
  };
  console.log(toDos);

  return (
    <div>
      hello
      <ul>
        <li>test</li>
      </ul>
      {/*
        comment here
        // pass array of toDos to child EachTodo 
        // setToDos is a function to passed to EachTodo component


     */}
      <EachTodo toDos={toDos} setToDos={setToDos} />
      <form>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type='text'
        />
        {/*
        //handleSubmit is a function that gets triggered
        */}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default TodoStructure;
