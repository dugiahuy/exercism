function Triangle(a, b, c) {
  this.kind = () => {
    if (a + b < c || a + c < b || b + c < a || a <= 0 || b <= 0 || c <= 0) {
      throw Error();
    } else if (a === b && b === c && a === c) {
      return 'equilateral';
    } else if (a === b || a === c || b === c) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  };
}

export default Triangle;
