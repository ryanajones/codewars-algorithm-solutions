const highest = (x) => {
  const wordsArr = x.split(' ');
  const points = [];
  const arrayNum = [];
  for (let i = 97; i <= 122; i++) {
    arrayNum.push(i);
  }
  wordsArr.forEach((el, l) => {
    for (let i = 0; i < el.length; i++) {
      if (!points[l]) {
        points[l] = arrayNum.indexOf(el.charCodeAt(i)) + 1;
      } else {
        points[l] += arrayNum.indexOf(el.charCodeAt(i)) + 1;
      }
    }
  });
  console.log(points);
  const sorted = [...points].sort((a, b) => b - a);
  return wordsArr[points.indexOf(sorted[0])];
};

return highest('b aa');
