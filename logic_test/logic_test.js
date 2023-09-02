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



// Longest Sentences

/**
 * 
 * @param {String} sentences 
 */
const getLongest = (sentences) => {
    const word = sentences.split(' ')
    let longestWord = ''

    for (const w in word) {
        if (word[w].length > longestWord.length) {
            longestWord = word[w]
        }
    }
    return longestWord
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(getLongest(sentence));



// get num of sentences in array

let input = ['xc', 'dz', 'bbb', 'dz']
let query = ['bbb', 'ac', 'dz']

/**
 * 
 * @param {Array} input 
 * @param {Array} search 
 */
const getNumContent = (input, search) => {
    const count = {}
    for (const i in input) {
        if (!count[input[i]]) {
            count[input[i]] = 0
        }
        count[input[i]]++

    }

    let result = []
    for (const s in search) {
        result.push(count[search[s]] || 0)
    }

    return result
}

console.log(getNumContent(input, query)
)

// get matrix result

const matrix = [[1, 2, 0, 3], [4, 5, 6, 9], [7, 8, 9, 7]]

/**
 * 
 * @param {Array<Array<number>>} matrix 
 */
const countDiagonalMatrix = (arr) => {
    let diagonal1 = 0
    let diagonal2 = 0

    for (let i = 0; i < arr.length; i++) {
        diagonal1 += arr[i][i]
        diagonal2 += arr[i][arr.length - 1 - i]
    }

    const result = Math.abs(diagonal1 - diagonal2)

    return result

}

console.log(countDiagonalMatrix(matrix));
