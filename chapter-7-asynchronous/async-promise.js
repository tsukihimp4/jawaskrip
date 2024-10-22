

const token = ~~[Math.random() * 12345678]

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
    console.log('proses data.... memvalidasi data...    ')
        return new Promise ((success, failed) => {
                setTimeout(() => {
            if (username != "Tsukihi.mp4") failed("Maaf! Salah data!")
                success({ token })
        }, 200)
    })
}

function getUser(token) {
    console.log("Memproses apiKey..")
    return new Promise ((success, failed) => {
        if (!token) failed("Maaf! Tidak Ada Token. Tidak bisa akses!")
                setTimeout(() => {
                    success({apiKey: 'anggapAjaKeyRahasia'})
                }, 500)
    })
}

function getPictures(apiKey) {
    if (apiKey)
    console.log("Memproses Pictures..")
    setTimeout(() => { 
        return ({pic : pictures})
     }, 1400)
}

const user = login("Tsukihi.mp4")
// Kalau promise dia seperti ini dan tetap saja dia akan nested seperti callback
user.then(function (response) {
    const {token} = response
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
    getUser(token).then(function(response){
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
}).catch(err => console.log(err))
console.log(user)