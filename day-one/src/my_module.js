const getSquare = number => {
  return number*number;
};

const add = (a,b) => {
  return a + b;
}

const divide = (a,b) => {
  return a/b;
};
//przy default tylko sciezka
//export default getSquare;
//named expodr
export { getSquare, add, divide}
