const prime = (num) => {
  let bool = true;
  if (num < 2) bool = false;
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 2; i < sqrt + 1; i++) {
    if (num % i === 0) {
      bool = false;
      break;
    }
  }
  return bool;
};

prime(5);
