

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
    
    console.log("Memproses Pictures..")
    return new Promise((success, failed) => {
        if (!apiKey) failed ("Tidak ada apiKey! Tidak bisa mengakses!")
        setTimeout(() => { 
            success ({pic : pictures})
     }, 1400)
    })

}

async function UserDisplay() {
    try {
    const { token } = await login("Tsukihi.mp4")
    const { apiKey } = await getUser(token)
    const { pic } = await getPictures(apiKey)

    console.log(`
        token anda adalah ${token}
        apikey anda adalah ${apiKey}
        hasil request gambar anda berikut ini: ${pic}
        `)
        } catch (err) {
        console.log(err)
    }
}

UserDisplay()

// Output

// proses data.... memvalidasi data...    
// Memproses apiKey..
// Memproses Pictures..

//         token anda adalah 1395068
//         apikey anda adalah anggapAjaKeyRahasia
//         hasil request gambar anda berikut ini: 1.jpg,2.jpg,3.jpg