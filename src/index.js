module.exports = function towelSort (matrix) {
  let result = [];
  
  for (let row in matrix) {
    row % 2 === 0 ? result.push(...matrix[row]) : result.push(...matrix[row].reverse());
  }
  
  return result;
}
