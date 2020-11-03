import React from 'react';
import Li from './Li.js';
function todo({ todoText }) {
  return (
    <div>
      {/* 
        Li is a component imported from li.js
        todoText is props accessing todoText from eachTodo,js
    */}
      <Li todoText={todoText} />
    </div>
  );
}
export default todo;
