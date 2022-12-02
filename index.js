// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, eventName ) {
    for (let i = 0; i < names.length; i++) {
    const copyOfNames = [...names];
    copyOfNames.splice(0, 3, "Thank you, Guadalupe, for the wonderful surprise gift!",
    "Thank you, Ollie, for the wonderful surprise gift!",
    "Thank you, Aki, for the wonderful surprise gift!");
     return copyOfNames;

    }
}
writeCards('Guadalupe', 'surprise')


function countDown() {
    let num = 10;
    while (num > -1) {
      console.log(num--);
    }

}
countDown(10)