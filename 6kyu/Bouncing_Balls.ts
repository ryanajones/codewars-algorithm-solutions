const bouncing = (h: number, bounce: number, window: number): any => {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let count = 0;

  while (h > window) {
    if (h * bounce <= window) {
      h *= bounce;
      count++;
    } else {
      h *= bounce;
      count += 2;
    }
  }

  return count;
};

console.log(bouncing(3.0, 0.66, 1.5));
