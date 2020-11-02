import React, { useState } from 'react';
import EachTodo from './EachTodo.jsx';
function TodoStructure() {
  //
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!inputText) return;
    setToDos([...toDos, { textTodo: inputText, id: Math.random() * 899 }]);
    setInputText('');
  };
  console.log(setToDos);

  return (
    <div>
      hello
      <ul>
        <li>test</li>
      </ul>
      <EachTodo toDos={toDos} setToDos={setToDos} />
      <form>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type='text'
        />
        <button onClick={handelSubmit}>Submit</button>
      </form>
      <p>{inputText}</p>
    </div>
  );
}

export default TodoStructure;
