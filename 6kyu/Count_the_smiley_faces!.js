const smileys = (arr) => {
  const eyes = [':', ';'];
  const nose = ['-', '~'];
  const mouth = [')', 'D'];
  let smileyCount = 0;
  if (arr.length === 0) return 0;
  arr.forEach((el) => {
    const temp = el.split('');
    const features = temp.length;
    let featuresTwo = 0;
    let featuresThree = 0;
    if (features === 3) {
      if (eyes.indexOf(temp[0]) !== -1) featuresThree += 1;
      if (nose.indexOf(temp[1]) !== -1) featuresThree += 1;
      if (mouth.indexOf(temp[2]) !== -1) featuresThree += 1;
    }
    if (features === 2) {
      if (eyes.indexOf(temp[0]) !== -1) featuresTwo += 1;
      if (mouth.indexOf(temp[1]) !== -1) featuresTwo += 1;
    }
    if (features === 2 && featuresTwo === 2) smileyCount += 1;
    if (features === 3 && featuresThree === 3) smileyCount += 1;
  });
  return smileyCount;
};

return smileys([';]', ':[', ';*', ':$', ';-D']);
