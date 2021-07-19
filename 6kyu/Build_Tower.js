const buildTower = (nFloors) => {
  const tower = [];
  let count = 0;
  for (let p = 0; p < nFloors; p++) {
    if (count === 0) {
      count += 1;
    } else {
      count += 2;
    }
  }
  const str = [];
  for (let i = 0; i < count; i++) {
    str.push(' ');
  }
  for (let i = 0; i < nFloors; i++) {
    tower.push(str.join(''));
  }

  let asteriskCount = 0;
  for (let i = 0; i < nFloors; i++) {
    const replacement = [];

    if (i === 0) {
      asteriskCount += 1;
    } else {
      asteriskCount += 2;
    }

    for (let j = 0; j < asteriskCount; j++) {
      replacement.push('*');
    }
    let t = tower[i].split(' ');
    t.splice(count / 2 - i, asteriskCount + 1, replacement.join(''));
    t = t.join(' ');
    tower[i] = t;
  }
  return tower;
};

buildTower(6);
