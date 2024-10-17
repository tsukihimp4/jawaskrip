// Ini adalah biasa yang disebut pengiriman data function

// buatlah sebuah 2 parameter firstName dan lastName
// di dalam js, fn dan ls termasuk sebuah argumen
// function addName(firstName, lastName) {
//     // Lalu return fn dan ln nya
//     console.log(firstName, lastName);
//     // Atau pun bisa seperti ini
//     // console.log(firstName);
//     // console.log(lastName);

// };

// Kita harus mengembalikan nilai dari yang di ketik user

// di pemanggilan function addName, 2 kata itu adalah sebuah argumen yang kita ketik
addName('Araragi', 'Tsukihi');

// Bisa juga bisa menggunakjan console.log(arguments)
// fucntion juga termasuk memiliki argumen tanpa kita masukin parameter di dalam function
function addName() {
    console.log('Nama Marga:',arguments[0]);
    console.log('Nama Depan',arguments[1]);
};

// Nah kalau kita tidak tau isi argumenya seperti apa, kita bisa gunakan for loop

function addName() {
    for (let i = 0; i < arguments.length; i++) {
        console.log('Nama ', arguments[i])
    }
};

// output nya
// Nama  Araragi
// Nama  Tsukihi