let word1 = "abcd", word2 = "pq";

let mergeAlternately = (word1, word2) => {

    let w1 = word1.split('');
    let w2 = word2.split('');
    let newWord = [];
    let i = 0, j = 0;
    while(i<w1.length || j<w2.length) {
        if(w1[i] !== undefined) {
            newWord.push(w1[i])
        }
        if(w2[j] !== undefined) {
            newWord.push(w2[j])
        }
        i++;
        j++;
    }

    return newWord.join('')
}

mergeAlternately(word1, word2)