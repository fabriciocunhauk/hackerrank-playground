function countingValleys(steps, path) {
    let result = 0;
    let upsAndDowns = 0;
    let mountain = 0;
    let valley = 0;

    for (var i = 0; i < path.length; i++) {
        console.log(upsAndDowns)
        if (path[i] === "U") {
            upsAndDowns++
        }
        if (path[i] === "D") {
            upsAndDowns--
        }
    }


    console.log(result)
    return result;
}

countingValleys(8, ["U", "D", "D", "D", "U", "D", "U", "U"]);