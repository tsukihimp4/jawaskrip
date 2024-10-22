// Lanjutan tentang looping di js
// For of, For In, Foreach


const anggotaGrup = ['Iofi', 'Moona', 'Risu'];

for(let anggota of anggotaGrup) {
    console.log(anggota);
}
    // Maka outputnya 
    // Iofi
    // Moona
    // Risu

    // Kenapa harus looping dan enggak langsung console.log aja? 
    // Jika hanya sperti ini
    console.log(anggotaGrup);
    // Maka outputnya
    // [ 'Iofi', 'Moona', 'Risu' ]

    // karena jika yang terlooping maka data nya mapping 1 per 1 terpisah

// Lalu untuk for in

// Lanjutan tentang looping di js
// For of, For In, Foreach

// const anggotaGrup = ['Iofi', 'Moona', 'Risu'];

for(let anggota in anggotaGrup) {
    console.log(anggota);
}

// Jika pakai "in" kita mendapat indeksnya
// Jika pakai "of" kita mendapat nilainya

// Sekarang foreach

// Lanjutan tentang looping di js
// For of, For In, Foreach


const anggotaHoloGen3 = ['Zeta', 'Kobo', 'Kaela'];

anggotaHoloGen3.forEach((anggotaHolo) => {
    console.log(anggotaHolo);
});

// outputnya 
// Zeta
// Kobo
// Kaela

// Sama seperti yang menggunakan for of, tapi bedanya dengan for of. di foreach bisa 

// menggunakan .map pun bisa
anggotaHoloGen3.map((anggotaHolo, index) => {
    console.log(anggotaHolo, index);
});

// jadi kita bisa mendapat nilai dan indeks dari array nya

// Outputnya
// Zeta 0
// Kobo 1
// Kaela 2