/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i< gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts;
}
wrapGifts(gifts); */

const names = ["Lisa", "Kaitlin", "Jan"]
let eventName = "surprise"

function writeCards (names, eventName) {
    const newNames =[]
    for (let i = 0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
         debugger;
    }
    return newNames;
    
}

function countDown(someNum) {
   
    while (someNum >= 0) {
        console.log(someNum--)
    }
   
}  
