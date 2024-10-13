// TUGAS CHAPTER 1

// 1.prompt untuk menentukan saldo akhir dari apa yang diinputkan user
// 2.menentukan hari dari tanggal yang ada saat ini di pc

// Jawab

// Tugas nomer 1

let saldoAwal = Number(prompt("Masukkan saldo awal:"));
let saldoAkhir = Number(prompt("Masukkan saldo akhir:"));

const totalSaldo = saldoAwal + saldoAkhir
console.log("Saldo akhirmu adalah " + totalSaldo);

// Tugas nomer 2

const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
let indeksHari = new Date().getDay();
let hari = namaHari[indeksHari];

console.log("Hari ini adalah " + hari);