

// Cara ke 1 - keyword new function
const Risu1 = new Function("x","y","console.log('Ini Risu')");


// Cara ke 2 - standar function
function Risu2(x, y) {
    console.log(x + y);
};

Risu2("Ayunda", "Risu");


// Cara ke tiga - arrow function
const Risu3 = (x,y) => {
    console.log(x + y);
};

Risu1("Ayunda", "Risu-1");
Risu2("Ayunda", "Risu-2");
Risu3("Ayunda", "Risu-3");


// Ini function calculation 

function randomize() {
    const randomNumber = ~~(Math.random() * 1000);
    if (randomNumber > 200) {
        console.log('Wow ini lebih dari 200');
    }else{
        console.log(randomNumber);
    }
};

randomize()