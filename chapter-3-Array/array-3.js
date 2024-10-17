// Perlu di perhatikan jika ingin melakukan diplikat dengan sebuah Array    

const arraySaya = ['Risu', 'Moona', 'Yopi', 'Ollie', 'Reine', ]; //Original

// const newArraySaya = arraySaya // Duplikasi
// Lebih baik seperti ini
const newArraySaya = Array.from(arraySaya);
// Atau
// const newArraySaya = JSON.parse(JSON.stringify(arraySaya));


// Jika melakukan manipulasi pada newArraySaya maka akan memiliki dampak ke arraySaya
newArraySaya[0] = 'Kobo Pace'
// Maka outputnya akan 
// { arraySaya: [ 'Kobo Pace', 'Moona', 'Yopi', 'Ollie', 'Reine' ] }
// { newArraySaya: [ 'Kobo Pace', 'Moona', 'Yopi', 'Ollie', 'Reine' ] } 

// Jika menggunakan seperti ini
// const newArraySaya = Array.from(arraySaya);
// Maka outputnya
// { arraySaya: [ 'Risu', 'Moona', 'Yopi', 'Ollie', 'Reine' ] }
// { newArraySaya: [ 'Kobo Pace', 'Moona', 'Yopi', 'Ollie', 'Reine' ] }

console.log({ arraySaya });
console.log({ newArraySaya });