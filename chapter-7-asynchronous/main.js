function satu() {
    console.log("Satu")
}

function dua() {
    // Sekarang kita coba tambahkan async di fungsi kedua
    // Fungsi dua berjalan di balik layar
    setTimeout(() => {
        console.log("Dua")
    }, 3000)

}

function tiga() {
    console.log("Tiga")
}


satu()
dua()
tiga()
// outputnya 
// Satu
// Tiga
// jeda 2 detik
// Dua