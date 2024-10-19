// Untuk for harus ada 3 statment yang di masukan dalam buka tutup nya

// Statment 1 Inisialisasi
// Statment 2 kondisi
// statsmen 3 efek
for(let i = 0; i < 5; i++) {
    console.log('data-', i);
};
// Output
// data- 0 ----- i = 1
// data- 1 ----- i = 2
// data- 2 ----- i = 3
// data- 3 ----- i = 4
// data- 4 ----- i = 5
// data- 5 ----- Tidak ada karena akan tereksekusi jika kurang dari 5

// Bad Logic
// for(let i = 5; i <= 1; i--) {
//     console.log('data-', i);
// };

// Pengkondisian Loop
// for(let i = 1; i < 10; i++) {
//     if (i % 2 !== 0) console.log('Data ke -', i)
// };

// While loop
let x = 1
while (x <= 10) {
    {
        console.log('Data x ke -',x)
    }
    x++
}

// Do While

let y = 1 
// Lakukan dulu lalu lakukan yang lain
do {
    {
        console.log('Data y ke -',y)
    }
    y++
} while (y <= 10    )

    // Jika y = lebih dari 10   dan gak sama dengan yang while maka akn tereskskusi satu kali