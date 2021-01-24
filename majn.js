const secretmess = "JULKISPULKIS"

console.log(secretmess)

const charkoder = []

let krypter = ""
let kryptering = ""

//Städa

function enkrypt() {
    for (let i = 0; i < secretmess.length; i++) {
        charkoder.push(secretmess[i].charCodeAt(0))
    }
    
    for (let i = 0; i < charkoder.length; i++) {
        charkoder[i] = charkoder[i] + 2
    }
    
    for (let i = 0; i < charkoder.length; i++) {
        krypter = krypter + String.fromCharCode(charkoder[i])
    }
console.log(krypter)
}

enkrypt();

function dekrypt() {
    console.log(krypter)
    for (let i = 0; i < krypter.length; i++) {
        charkoder.push(krypter[i].charCodeAt(0))
    }

    for (let i = 0; i < charkoder.length; i++) {
        charkoder[i] = charkoder[i] - 2
    }

    for (let i = 0; i < krypter.length; i++) {
        kryptering = kryptering + String.fromCharCode(charkoder[i])
    }
console.log(kryptering)
}

dekrypt();

const svarbakom = "BE NICE TO EACH OTHER AND THE PLANET PLEASE"


function enkryptm(mess, steg) {
    const krypterm = []
    for (let i = 0; i < mess.length; i++) {
        krypterm.push(mess[i].charCodeAt(0))
    }
    
    for (let i = 0; i < krypterm.length; i++) {
        krypterm[i] = krypterm[i] + steg
    }
    
    let result = ""
    for (let i = 0; i < krypterm.length; i++) {
        result = result + String.fromCharCode(krypterm[i])
    }

return result
}