// Jika sebuah array memiliki banyak tipe data

// Array itu bersifat apa saja bahkan jika ada sebuah function di Array
const Array = [
    'Yopi',
     1,
    { 
        Hololive: function () {
        console.log('Ini adalah teks Hololive   ')
        }
    },
    ['Moona, Risu']
];

// Jika hanya seperti ini maka function Hololive tidak akan terpanggil jadi kita bisa melakukan seperti ini
// console.log(Array[2]);
// outputnya akan
// { Hololive: [Function: Hololive] }

console.log(Array[2].Hololive);
// Output akan 
// [Function: Hololive]