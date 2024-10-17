// Menggabungkan 2 Array

const ArrayGen1 = ['Moona', 'Yopi', 'Risu'];
const ArrayGen2 = ['Ollie', 'Anya', 'Reine'];

// gunakan concat
const mergeArray = ArrayGen1.concat(ArrayGen2);

// console.log(mergeArray);

// memberikan list indeks
// for (list in mergeArray) console.log(list);
// output
// 0
// 1
// 2
// 3
// 4
// 5

// memberikan list indeks beserta nilai nya
mergeArray.map((value, index) => console.log(index, value));
// Output
// 0 Moona
// 1 Yopi
// 2 Risu
// 3 Ollie
// 4 Anya
// 5 Reine