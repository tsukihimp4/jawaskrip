// function 3 adalah menjelaskan metode yang lain untuk membuat sebuah function

// sekarang kita coba buat function ini sebagai sebuah variabel
// const fullName = function addName(firstName, lastName) {
//     console.log(firstName, lastName)
// };

// fullName('Iopi', 'Risu')

// dan yang ketiga untuk pembuatan function bisa menggunakan keyword new

function addName(firstName, lastName) {
        console.log(firstName, lastName)
};

// Sekarang kita masukin sebuah parameter ke dalam new Function()
// Kalau menggunakan new parameternya itu langsung di dalam tipe data string
const fullName = new Function(
    "firstName",
    "lastName",
    "console.log(firstName, lastName)",
);

fullName('Airani', 'Iofifteen');
// Outputnya Airani Iofifteen

// dan juga untuk metode ketiga bisa digunakan sebagai perhitungan operator

const sum = new Function(
    "x",
    "y",
    "console.log(x+y) ",
);

sum(1,2);
// outputnya 3

// kalau misal tidak menggunakan facing data bisa seperti ini

const Iofi = new Function("console.log('Ini Iofi')");

Iofi();
// Outputnya 
// Ini Iofi

