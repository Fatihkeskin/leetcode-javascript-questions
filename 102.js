/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const consonants = []
    for (let a in s) {
        if (s[a] == 'a' || s[a] == 'e' ||s[a] == 'i' ||s[a] == 'o' ||s[a] == 'u') {
            console.log(s[a]);
        } else {
            consonants.push(s[a])
        } 
    }
    
    console.log(consonants.join("\r\n"));
}