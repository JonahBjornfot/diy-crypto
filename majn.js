const secretmess = "JULKISPULKIS"

const charkoder = []

// console.log(secretmess.charCodeAt(0))

let res = ""

for (let i = 0; i < secretmess.length; i++) {
    charkoder.push(secretmess[i].charCodeAt(0))

    // let charkod = secretmess[i].charCodeAt(0)
    // res = res + String.fromCharCode()
    // console.log(secretmess[i],charkod, charkod + 3, String.fromCharCode(charkod + 3))
}

console.log(charkoder)



