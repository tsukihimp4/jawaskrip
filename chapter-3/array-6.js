// Lanjutan dari array-5.js

// Jika kita mempunyai sebuah data dari back-end seperti ini

const data = [  
    {
        nama: 'Mas Aceng',
        bahasa: 'Python',
        umur: 28,
    },
    {
        nama: 'Pak Budi',
        bahasa: 'C++',
        umur: 43,
    },
    {
        nama: 'Bang Satriya',
        bahasa: 'PHP',
        umur: 24,
    },
    {
        nama: 'Bang Dea',
        bahasa: 'JS',
        umur: 30,
    }
]

// Nah kita sekarang akan mengambil nilai nama saja tanpa nilai dari bahasa dan umur
// kita gunakan

// data.map((values, index) => {
//     // maka ini akan memunculkan nama
//     // Jika ingin semua maka hanya values saja
//     // Jika ingin menambah maka .nama .bahasa
//     // contoh console(values.nama, values.bahasa);
//     console.log(values.nama, values.bahasa);
// })
// outputnya
// Mas Aceng Python
// Pak Budi C++
// Bang Satriya PHP
// Bang Dea JS

// Jika disuruh untuk mengurutkan sesuai usia maka kita menggunakan .sort
// menggunakan a dan b untuk perbandingan
// data.sort((a, b) => a.umur - b.umur).map((values) => console.log(values));
// Jika a - b maka akan dipilih dari yang paling muda hingga tua begitupun sebaliknya
// Maka outputnya
// { nama: 'Bang Satriya', bahasa: 'PHP', umur: 24 }
// { nama: 'Mas Aceng', bahasa: 'Python', umur: 28 }
// { nama: 'Bang Dea', bahasa: 'JS', umur: 30 }
// { nama: 'Pak Budi', bahasa: 'C++', umur: 43 }

// sekarang jika kita gunakan .filter untuk memilih orang yang di bawah 30 tidak masuk 
data
    .sort((a, b) => a.umur - b.umur)
    .filter((c) => c.umur >= 30)
    .map((values) => console.log(values))

    // Maka outputnya
// { nama: 'Bang Dea', bahasa: 'JS', umur: 30 }
// { nama: 'Pak Budi', bahasa: 'C++', umur: 43 }