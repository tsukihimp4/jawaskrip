const token = ~~[Math.random() * 12345678]

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
    // Memvalidasi data
    console.log('proses data.... memvalidasi data...    ')
    // Anggaplah disini ada jeda 200 sec untuk memanipulasi waktu login
    setTimeout(() => {
        return {token, username};
    }, 200);

}

function getUser(token) {
    if(token) return {apiKey: 'anggapAjaKeyRahasia'};
}

function getPictures(apiKey) {
    if (apiKey) return pictures 
}

// Panggil Funhi mya
const user = login("Tsukihi.mp4")
console.log(user);

// Maka akan undefined
