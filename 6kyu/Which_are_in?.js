const inArr = (array1, array2) => {
  const result = [];

  array1.forEach((el) => {
    const regex = new RegExp(`${el}`);

    array2.forEach((word) => {
      if (regex.test(word) && result.indexOf(el) === -1) result.push(el);
    });
  });

  return result.sort();
};

inArr(
  ['live', 'strong', 'arp'],
  ['lively', 'alive', 'harp', 'sharp', 'armstrong']
);
