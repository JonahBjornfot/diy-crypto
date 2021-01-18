const secretmess = "JULKISPULKIS"

console.log(secretmess)

const charkoder = []

let krypter = ""

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
    
    for (let i = 0; i < charkoder.length; i++) {
        krypter = krypter + String.fromCharCode(charkoder[i])
    }
console.log(krypter)
}

enkrypt();


function dekrypt() {
    for (let i = 0; i < krypter.length; i++) {
        charkoder.push(krypter[i].charCodeAt(0))
    }

    for (let i = 0; i < charkoder.length; i++) {
        charkoder[i] = charkoder[i] - 1
    }

    let kryptering = ""
    for (let i = 0; i < charkoder.length; i++) {
        kryptering = kryptering + String.fromCharCode(charkoder[i])
    }
console.log(kryptering)
}

dekrypt();



// const krypterm = []
// function enkryptm(mess) {
//     for (let i = 0; i < krypterm.length; i++) {
//         krypterm.push(mess[i].charCodeAt(0))
//     }
    
//     for (let i = 0; i < krypterm.length; i++) {
//         krypterm[i] = krypterm[i] + 1
//     }
    
//     let result = ""
//     for (let i = 0; i < krypterm.length; i++) {
//         result = result + String.fromCharCode(krypterm[i])
//     }

// return result
// }

// enkryptm();



