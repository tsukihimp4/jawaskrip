// Ini sebuah string. String biasanya menggunakan tanda kutip contoh:
let nama = "Araragi Tsukihi"
// Ini sebuah tipe data integer
let usia = 13 
// Tipe data Float
// Ini dinamakan CamelCase (memiliki huruf kapital di sebuah variabel)
let tinggiBadan = 158.2 
let beratBadan //jika dipanggil maka akan muncul undefined
let pacar = null

beratBadan = 50 //menambahkan nilai

// Pengkondisian statmen
// Mengubah nilai pacar

// Pengkondisian If Else
if (pacar == null) {
    pacar = 'belum punya pacar'
} else {
    // Jika nilai pacar berubah menjadi 1
    pacar = 'sudah punya pacar'
}

// Pengkondisian Switch Case
// Switch = kasus, pacar = statment
// switch(pacar) {
//     // Jika nilai pacar = 1 
//     case 1:
//         pacar = "punya 1 pacar"
//     break
//     // Jika nilai pacar = 2
//     case 2:
//         pacar = "punya 2 pacar"
//     break
//     // Jika nilai pacar selain 1, 2, dan null maka akan muncul secara default
//     default:
//         pacar = "belum punya"
//     break
// }

console.log(`Namanya ${nama} usianya ${usia} tinggi badannya ${tinggiBadan} berat badannya ${beratBadan} dan ${pacar}`);