const token = ~~[Math.random() * 12345678]

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username, callback) {
    // Memvalidasi data
    console.log('proses data.... memvalidasi data...    ')
    // Anggaplah disini ada jeda 200 sec untuk memanipulasi waktu login
    setTimeout(() => {
        callback({token, username}) 
    }, 200);

}

function getUser(token, callback) {
    console.log("Memproses ApiKey..")
    if(token)
    setTimeout(() => {
    callback ({apiKey: 'anggapAjaKeyRahasia'})
    }, 500)
}

function getPictures(apiKey, callback   ) {
    if (apiKey)
    console.log("Memproses Pictures..")
    setTimeout(() => { 
        callback ({pic : pictures})
     }, 1400)
}

// kita tangkap username dalam sebuah parameter karena nilai akhir dari token dan username berada di callback
// Yang mana callback nya adalah sebuah parameter

// ini disebut nested callback
login("Tsukihi.mp4", function(response) {
    const {token} = response
    getUser (token, function(response) {
        const {apiKey} = response
        getPictures(apiKey, function(response){
            const {pic} = response
            console.log(pic)
        })
    })

})
    // const apiKey = getUser(token)
    // console.log({apiKey})
    // Kenapa callback apiKey masih bisa muncul? karena pebuatan apiKey nya tidak secara asynchoronous
    // Jika di tambah setTimeout() maka akan undefined

// output 
// proses data.... memvalidasi data...    
// Mendapatkan data! { token: 10867484, username: 'Tsukihi.mp4' }

// Tidak bisa seperti ini karena outputnya akan undefined
// console.log('user adalah ', user)