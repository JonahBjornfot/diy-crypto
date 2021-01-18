const secretmess = "JULKISPULKIS"

console.log(secretmess)

const charkoder = []

//Städa utan att ändra (ATT GÖRA)

function enkrypt(mess) {
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


