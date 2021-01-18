const secretmess = "JULKISPULKIS"

console.log(secretmess)

const charkoder = []

//Städa utan att ändra (ATT GÖRA)

function enkrypt() {
    for (let i = 0; i < secretmess.length; i++) {
        charkoder.push(secretmess[i].charCodeAt(0))
    
        // let charkod = secretmess[i].charCodeAt(0)
        // res = res + String.fromCharCode()
        // console.log(secretmess[i],charkod, charkod + 3, String.fromCharCode(charkod + 3))
    }
    
    for (let i = 0; i < charkoder.length; i++) {
        charkoder[i] = charkoder[i] + 1
    }
    
    // console.log(charkoder)
    
    let krypter = ""
    for (let i = 0; i < charkoder.length; i++) {
        krypter = krypter + String.fromCharCode(charkoder[i])
    }
console.log(krypter)
}

enkrypt();

// function enkryptm(mess) {
//     for (let i = 0; i < mess.length; i++) {
//         charkoder.push(mess[i].charCodeAt(0))
    
//         // let charkod = secretmess[i].charCodeAt(0)
//         // res = res + String.fromCharCode()
//         // console.log(secretmess[i],charkod, charkod + 3, String.fromCharCode(charkod + 3))
//     }
    
//     for (let i = 0; i < mess.length; i++) {
//         charkoder[i] = mess[i] + 1
//     }
    
//     // console.log(charkoder)
    
//     let krypter = ""
//     for (let i = 0; i < mess.length; i++) {
//         krypter = krypter + String.fromCharCode(mess[i])
//     }
// console.log(krypter)
// }

// enkryptm();



