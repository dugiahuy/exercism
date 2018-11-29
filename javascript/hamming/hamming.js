export const compute = (a, b) => {
  /* Old solution
  if (a.length !== b.length) {
    throw Error('left and right strands must be of equal length');
  } else {
    let count = 0;
    const arrA = a.split('');
    const arrB = b.split('');
    for (let i = 0; i < a.length; i++) {
      if (arrA[i] !== arrB[i]) {
        count++;
      }
    }
    return count;
  }
  */

  // New solution
  if (a.length !== b.length) {
    throw Error('left and right strands must be of equal length');
  } else {
    return [...a].filter((element, index) => element !== b[index]).length;
  }
};
