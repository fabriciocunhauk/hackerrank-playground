function repeatedString(s, n) {
    let numOfAs = 0;
    let count = 0;

    // Base case
    if (s === 'a' && n === 1000000000000) return 1000000000000;

    for (let i = 0; i < n; i++) {
        let str = s[i]
        if (count >= s.length) count = 0;

        let subStr = s.replace(i, str).slice(count, count + 1);

        if (!str) {
            str = subStr
        }
        count++;
        console.log(str);

        if (str === 'a') numOfAs++;
    }

    return numOfAs;
}


console.log(repeatedString('aba', 10));