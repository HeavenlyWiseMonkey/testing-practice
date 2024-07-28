function caesarCipher(string, shiftFactor) {
    const alphabet = new Set();

    // Add utf-16 codes to set
    for (let i=65; i<91; i++) alphabet.add(i);

    for (let i=97; i<123; i++) alphabet.add(i);

    let cipher = '';
    let charCode;
    let newCharCode;

    for (let i=0; i<string.length; i++) {
        // Find out if char is in alphabet
        charCode = string.charCodeAt(i);
        if (alphabet.has(charCode)) {
            newCharCode = charCode+shiftFactor;
            if (alphabet.has(newCharCode)) {
                cipher = cipher.concat(String.fromCharCode(newCharCode));
            }
            else {
                if (newCharCode > 65 && newCharCode < 91) {
                    cipher = cipher.concat(String.fromCharCode(64 + newCharCode - 90));
                }
                else {
                    cipher = cipher.concat(String.fromCharCode(96 + newCharCode - 122));
                }
            }
        }
        else {
            cipher = cipher.concat(string.at(i));
        }
    }
    return cipher;
}

module.exports = caesarCipher;