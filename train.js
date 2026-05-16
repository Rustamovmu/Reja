// TASK I

// Array ichida eng ko'p takrorlangan raqamni topib qaytarsin.

// Masalan: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]) return 4
function majorityElement(arr) {
    let maxCount = 0;
    let result = null;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            result = arr[i];
        }
    }

    return result;
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]))


// TASK H

// Integerlardan iborat arrayni qabul qilib, faqatgina
//  positive sonlarni olib string holatida return qilsin.

// Masalan: getPositive([1, -4, 2]) return "12"

// function getPositive(arr) {
//     let positiveNumbers = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             positiveNumbers.push(arr[i]);
//         }
//     }
//     return positiveNumbers.join("");
// }
// console.log(getPositive([1, -4, 2]));

// TASK G

// Yagona parametrga ega function tuzing. 
// Array tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// Masalan: getHighestIndex([5, 21, 12, 21, 8]) return 1

// function getHighestIndex(a) {
//     let highestIndex = 0;
//     for(i = 0; i < a.length; i++){
//         if(a[i] > a[highestIndex]){
//             highestIndex = i;
//         }
//     }
//     return highestIndex;
// }

// console.log(getHighestIndex([5, 21, 12, 212, 8]))

// TASK F

// Yagona string argumentga ega findDoublers nomli function tuzing.
//  Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa true yokida false natija qaytarsin.

// Masalan: findDoublers("hello") return true

// function findDoublers(a) {
//    for (let i = 0; i < a.length; i++) {
//        for (let j = i + 1; j < a.length; j++) {
//            if (a[i] === a[j]) return true;
//        }
//    }
//    return false;
// }
// const word = findDoublers("hello");
// console.log(word)


// TASK E

// Shunday function tuzing, u bitta string argumentini qabul qilib,
//  qabul qilingan stringni teskari ko'rinishda return qilsin.

// Masalan: getReverse("hello") return "olleh"
// function getReverse(a) {
//     const b = a.split("").reverse().join("")
//     return b;
// }

// const a = getReverse("hello");
// console.log(a);









// TASK D

// Ikkita parametra ega function tuzing, va functioning berilgan birinchi va 
// ikkinchi parametr qiymatlari o'zaro to'liq mos kelsa true qiymat qaytarsin.

// Masalan: checkContent("mitgroup", "gmtiprou") return true

// function checkContent(str1, str2) {
   
//     const sortedStr1 = str1.split("").sort().join("");
//     const sortedStr2 = str2.split("").sort().join("");
//     if  (sortedStr1 === sortedStr2) return true; 
//     else return false;
        
// }

// const a = checkContent("mitgroup", "gmtiprou");
// console.log(a)



// Task-c
// TASK-C

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!
// const e = require("express");
// const moment = require("moment");
// // const now = moment().format("HH:mm");
// class Shop  {
//     constructor(non, lagman, cola) {
//         this.non = non;
//         this.lagman = lagman;
//         this.cola = cola;
//     }
   
//     qoldiq() {
//         const now = moment().format("HH:mm");
//         console.log(`Hozir ${now}da ${this.non}ta non, ${this.lagman}ta lag'mon va ${this.cola}ta cola mavjud`);
        
//     }

//     sotish(food, amount) {
//         if (food === "non") {
//             if (this.non >= amount) {
//                 this.non -= amount;
//                 this.qoldiq();
//             } else {
//                 console.log("Non yetarli emas");
//             }
//         } else if (food === "lagman") {
//             if (this.lagman >= amount) {
//                 this.lagman -= amount;
//                 this.qoldiq();
//             } else {
//                 console.log("Lag'mon yetarli emas");
//             }
//         } else if (food === "cola") {
//             if (this.cola >= amount) {
//                 this.cola -= amount;
//                 this.qoldiq();
//             } else {
//                 console.log("Cola yetarli emas");
//             }
//         } else {
//             console.log("Bunday ovqat mavjud emas");
//         }
        
//     }

//     qabul(food, amount) {
//         if (food === "non"){
//             this.non += amount;
//             this.qoldiq();
//         } else if (food === "lagman"){
//             this.lagman += amount;
//             this.qoldiq();
//         } else if (food === "cola"){
//             this.cola += amount;
//             this.qoldiq();
//         }else {
//             console.log("Bunday ovqat sotib olinmaydi");
//         }
//     }
// }


// const chop1 = new Shop(3, 4, 3);
// chop1.qoldiq();
// chop1.sotish("cola",2);
// chop1.sotish("non", 2);
// chop1.qabul("cola", 12);
// chop1.qabul("non", 5);
// chop1.sotish("cola", 66);
// chop1.qabul("shashlik", 5);
// chop1.sotish("manti", 4);
// chop1.sotish("olma", 4);
// chop1.qoldiq();
// // MITASK B
// let count= 0;
// function countNumbers(word) {
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === String(Number(word[i]))) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countNumbers("e3n457g4i-2n1e34er"));

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




