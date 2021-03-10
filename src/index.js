
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if(matrix !== undefined) {
  const str = matrix.map((item, index) => (index % 2) ? item.reverse() : item);
  result = str.flat();
  }
  return result;
}