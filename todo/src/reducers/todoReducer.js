const intialState = {
  todo: [
    {
      todo1: 'something from redux',
    },
  ],
};

const todoReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CREATE_TODO':
      return [
        ...state,
        {
          todo1: payload.todo1,
        },
      ];
      break;

    default:
      return state;
      break;
  }
};

export default todoReducer;
