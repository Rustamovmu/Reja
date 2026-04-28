// MITASK B
let count= 0;
function countNumbers(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === String(Number(word[i]))) {
            count++;
        }
    }
    return count;
}

console.log(countNumbers("e3ng4in1e34er"));

// MITASK-A

// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi
// let count= 0;
// function countLetter(letter, word) {
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("e", "engineer"));




// console.log("Trainingni boshlash");
// // lesson 21 & 22 asynchronous programming, callback functions
// const list = [
//     "yahshi talaba boling!", //0-20
//     "togri boshliq tanlang va koproq xato qiling!", //20-30
//     "ozingizga ishlashni boshlang!",//30-40 
//     "siz kuchli bolgan narsa ustida ishlang!",//40-50
//     "yoshlarga yordam bering!", //50-60
//     "toxtab qolmang, endi jamiyat uchun ishlashni boshlang!", //60
// ];

// function maslahatchi(a, callback) {
//     if (typeof a !== "number") callback("Iltimos, yoshni raqam bilan kiriting!", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         callback(null, list[5]);
//     }
    
// }

// function maslahatchi(a, callback) {
//     if (typeof a !== "number") callback("Iltimos, yoshni raqam bilan kiriting!", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(() => {
//             callback(null, list[5]);
//         }, 2000);
//     }
    
// }
// console.log("Maslahatchi tayyor, endi uni chaqiramiz");
// maslahatchi(77, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else console.log(data);
// });
// console.log("1");

// lesson 22

// async function maslahatchi(a) {
//     if (typeof a !== "number") throw new Error ("Iltimos, yoshni raqam bilan kiriting!");
//     else if (a <= 20) return (null, list[0]);
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//        return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//        });
//     }
    
// }
// // console.log("Maslahatchi tayyor, endi uni chaqiramiz");
// // maslahatchi(20)
// // .then((data) => console.log(data))
// // .catch((err) => console.log("ERROR:", err));

// // console.log("1");

// async function run() {
//     let javob = await maslahatchi(27);
//     console.log(javob);
//     javob = await maslahatchi(75);
//     console.log(javob);
//     javob = await maslahatchi(15);
//     console.log(javob);
// }
// run();
// console.log("1");

// function maslahatchi(a, callback) {
//     if (typeof a !== "number") callback("Iltimos, yoshni raqam bilan kiriting!", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(() => {
//             callback(null, list[5]);
//         }, 2000);
//     }
    
// }
// console.log("Maslahatchi tayyor, endi uni chaqiramiz");
// maslahatchi(77, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else console.log(data);
// });
// console.log("1");




