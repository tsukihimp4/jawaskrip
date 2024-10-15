// // Bagian ke 2 dari Chapter 3 tentang Array

// const arraySaya = ['Risu', 'Moona', 'Yopi', 'Ollie', 'Reine', ] // 0,1,2,3,4

// // Untuk mencari member dalam sebuah array maka bisa gunakan includes()
// const Yopi = arraySaya.includes('Yopi');

// if (Yopi) {
//     // Untuk menentukan posisi indeks dari sebuah array
//     const posisiYopi = arraySaya.indexOf('Yopi');
//     // Akan memunculkan sebuah konsol jika posisi Yopi ditemukan
//     console.log(
//         `Posisi Yopi itu ada dan dia berada di indeks ke - ${posisiYopi} `
//     )
// } else {
//     // memunculkan sebuah konsol untuk menunjukan bahwa posisi Yopi tidak berada dalam sebuah array di arraySaya
//     console.log('Saya tidak tau posisi Yopi dimana.');
// }

const arraySaya = ['Risu', 'Moona', 'Yopi', 'Ollie', 'Reine', ] // 0,1,2,3,4

// Untuk mencari member dalam sebuah array maka bisa gunakan includes()
const Yopi = arraySaya.includes('Yopi');

if (Yopi) {
    const posisiYopi = arraySaya.indexOf('Yopi');
    // untuk menentukan posisi sebelum indeks Yopi dan Sesudah Indeks Yopi
    const indexBefore = posisiYopi - 1
    const indexAfter = posisiYopi + 1
    const before = arraySaya[indexBefore];
    const after = arraySaya[indexAfter];
    // Memunculkan sebuah konsol untuk melakukan debug kepada const before dan after
    console.log(`Member sebelum Yopi adalah ${before}`);
    console.log(`Member sesudah Yopi adalah ${after}`);
    // unuk mencari posisi sebuah array di awal bisa menggunakan .shift()

    const memberAwal = arraySaya.shift();
    // Apa bedanya jika menggunakan ArraySaya[0]? Gak ada
    console.log(memberAwal);

    // untuk mencari posisi sebuah array yang berada di akhir, maka kita bisa menggunakan .pop()
    const memberAkhir = arraySaya.pop();
    console.log(memberAkhir)
    /* 
    
    @zaskhacodecraft
    1 bulan yang lalu 
    kalo pake arraySaya.shift() itu akan menghapus elemen pertama dari array.. Jadi setelah kita manggil shift(), array akan kehilangan elemen pertamanya dan panjang array (array.length) akan berkurang.

    Sebaliknya, kalo kita mau ngambil elemen pertama atau terakhir secara manual menggunakan indeks (array[0] untuk elemen pertama atau array[array.length-1] untuk elemen terakhir), kita hanya membaca elemen tersebut tanpa mengubah isi atau panjang array.

    jadi kalo kita pake method pop() atau shift(), panjang array bakal menjadi 3 karena kedua metode ini menghapus dua elemen dari array (satu dari depan dan satu dari belakang). 
    Tapi kalo kita pake yg cara manual, panjang array tetap 5 karena tidak ada elemen yang dihapus*/

    // Memunculkan sebuah konsol untuk memberi tahu posisi Yopi
    console.log(
        `Posisi Yopi itu ada dan dia berada di indeks ke - ${posisiYopi} `
    );
} else {
    // memunculkan sebuah konsol untuk menunjukan bahwa posisi Yopi tidak berada dalam sebuah array di arraySaya
    console.log('Saya tidak tau posisi Yopi dimana.');
}
