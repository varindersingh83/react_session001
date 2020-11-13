const foo = (x, y) => {
  const sum = (a, b) => {
    return a + b;
  };
  const subtract = (a, b) => {
    return a - b;
  };
  return sum(x, y);
};

console.dir(foo);

module.exports = foo;
