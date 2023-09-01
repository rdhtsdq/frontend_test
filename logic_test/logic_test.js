// Reverse

/**
 * 
 * @param {String} str 
 */
const reverse = (str) => {
    const splitted = str.split('')
    let sentences = []
    let index = 0
    splitted.map((r) => {
        if (!parseInt(r)) {
            sentences.push(r)
        } else {
            index = splitted.indexOf(r)
        }
    })
    const reversed = [sentences.reverse().join(""), splitted[index]].join("")
    return reversed
}

console.log(reverse('NEGIE1'))

