function isValidBrackets(string) {
  const stack = [];
  const map = {
    ']': '[',
    '}': '{',
    ')': '(',
  };
  for (let i = 0; i < string.length; i += 1) {
    const current = string[i];

    if (isClosedBracket(current)) {
      if (map[current] !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(current);
    }
  }
  return stack.length === 0;
}

function isClosedBracket(ch) {
  return [')', ']', '}'].indexOf(ch) > -1;
}

console.log(isValidBrackets('[}}{}()]['));
console.log(isValidBrackets('[]{}()'));
console.log(isValidBrackets('[({})]'));
console.log(isValidBrackets('[({})])'));
