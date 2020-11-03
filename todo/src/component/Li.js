import React from 'react';

function Li({ todoText }) {
  return (
    <div>
      {/* 
        Li is a tag
        todoText is props accessing todoText from todo,js
    */}
      <li>{todoText}</li>
    </div>
  );
}

export default Li;
