const strSplit = (str) => {
  if (str.length === 0) return [];

  const arr = [];

  for (let i = 0; i < str.length; i += 2) {
    arr.push(str.slice(i, i + 2));
  }

  if (arr[arr.length - 1].length === 1) {
    arr[arr.length - 1] = `${arr[arr.length - 1]}_`;
  }

  return arr;
};

strSplit('abcde');
