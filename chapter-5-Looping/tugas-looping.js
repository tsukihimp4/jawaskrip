
// TUGAS LOOPING - 1

// 1.Buat sebuah perulangan dari suatu variabel bertipe array
// contoh
// const x = [3, 5, 12];   
// Loop data..
// Total nilai adalah 20 karena 3 + 5 + 12 = 20

// Looping data tersebut menggunakan for, while dan do while.
// dan munculkan  juga hasil penambahan semua angka yang ada di dalam Array tersebut
// seperti pada contoh

// For Loop

const Iofi = [3, 5, 12];

let yopi = 0

// Statment 1 inisialisasi variabel yopi dengan nilai 0 untuk hitung indeks yang ada di array Iofi
// Statment 2 pengkondisian variabel yopi apakah yopi masih kecil dibandingkan array Iofi, jika pengkondisian ini benar maka perulanagn akan berjalan. Iofi.length untuk memberi tahu seberapa banyak elemen yan ada di array Iofi
// Statment 3 ekspresi increment untuk menabah 1 sehingga perulangan terus bergerak sampai elemn berikutnya

// i sebagai iterasi
for (let i = 0; i < Iofi.length; i++) {
    // yopi += Iofi[yopi]; Pada setiap iterasi, elemen array Iofi[yopi] ditambahkan ke variabel 
    // += adalah operator yang menambah nilai di sebelah kanan ke variabel di sebelah kiri.
    yopi += Iofi[i];
};

console.log("Total nilai menggunakan for adalah:", yopi);

// While

const x = [3, 5, 12];

let totalWhile = 0;
let i = 0;

// Perulangan ini akan terus berjalan selama nilai i-nya masih kecil dari panjang array x. Ketika nilai i mencapai atau melebihi panjang array, perulangan berhenti.
while (i < x.length) {
  totalWhile += x[i];
  i++;
}

console.log("Total nilai menggunakan while adalah:", totalWhile);

// Do While

const y = [3, 5, 12];
let totalDoWhile = 0;
let j = 0

do {
    totalDoWhile +=y [j];
    j++
} while (j < y.length);

console.log("Total nilai menggunakan do...while adalah:", totalDoWhile);