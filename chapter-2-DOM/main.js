const body = document.body;

// // Append untuk menambahkan
// body.append('Pagi Dunia');

// // Membuat dan kombinasi DOM
// // Membuat dulu sebuah elemen agar bisa menambahkan
// const h1 = document.createElement('h1');

// // Ada 3 cara
// // h1.innerHTML = "Ini contoh H1";
// // h1.innerText = "Ini contoh H1";
// h1.textContent = "Ini contoh H1";

// // alternatif 2
// // Dalam setiap innerHTML maka akan mengeksekusi seperti <marquee>"Tsukihi.mp4"</marquee>;
// // Dalam setiap innerText atau textContent maka akan mengeksekusi seperti "<marquee>Tsukihi.mp4</marquee>";
// const namaSaya = document.createElement(p);
// namaSaya.innerHTML = "Tsukihi.mp4";

// body.append(h1);


// Data selector
// Blyd vs QS 
// Khusus untuk id
const btn1 = document.getElementById('btn1');
// Universal
const btn2 = document.querySelector('btn2');

const deafultText = 'klik saya 1 ';
btn1.textContent = deafultText;

// Styling selector
btn1.style.border = 'none';
btn1.style.padding = '8px';
btn1.style.fontSize = '24px';
btn1.style.background = 'tomato';

// Event Trigger
// buat dulu sebuah fungsi
// function clickButton() {
//     btn1.style.background = 'aqua';
//     const newText = document.createElement('p');
//     newText.textContent = 'Halo bung!';
//     body.append
// }

// Tugas untuk button 2

const addText = document.createElement('p');

function tambahText(){
    addText.textContent='Halo bang';
    body.append(addText);
}

function gantiWarna(){
   addText.style.color='red';
}



// Mouse Event
// buat sebuah fungsi
// Saat di hover
function ubahText() {
    btn1.textContent = 'heheheha'
}

// Saat keluar dari hover
function oriText() {
    btn1.textContent = deafultText
}