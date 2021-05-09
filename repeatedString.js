function repeatedString(s, n) {
    let numOfAs = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let str = s[i]

        if (!str) {
            str = s[count]
            count++;
        }
        console.log(str);

        if (str === 'a') {
            numOfAs++
        }
    }


    return numOfAs;
}


console.log(repeatedString('aba', 10));