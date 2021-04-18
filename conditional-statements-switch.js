function getLetter(s) {
    let letter;
    const firstLetter = s.charAt(0);
    const regExp1 = /[aeiou]/.test(firstLetter);
    const regExp2 = /[bcdjg]/.test(firstLetter);
    const regExp3 = /[hjklm]/.test(firstLetter);
    const regExp4 = /[npqrstuwxyz]/.test(firstLetter);

    switch (true) {
        case regExp1:
            letter = 'A';
            break;
        case regExp2:
            letter = 'B';
            break;
        case regExp3:
            letter = 'C';
            break;
        case regExp4:
            letter = 'D';
            break;
    }

    return letter;
}

console.log(getLetter("adfgt"));