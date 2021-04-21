function countingValleys(steps, path) {
    let obj = {};
    let upAndDownPointer = 0;
    let downCount = 0;
    let valley = 0;

    for (var i = 0; i < path.length; i++) {
        console.log(upAndDownPointer)


        obj['char'] = path[i];
        console.log(obj);



        if (obj.char === "U") {
            upAndDownPointer++
        }
        if (obj.char === "D") {
            upAndDownPointer--
        }

        if (upAndDownPointer < 0) {
            downCount = 1;
        }
        if (upAndDownPointer > 0) {
            downCount = 0;
        }
        if (downCount === 1 && upAndDownPointer === 0) {
            valley++;
        }
    }

    return valley;
}
console.log(countingValleys(12, ["D", "D", "U", "U", "D", "D", "U", "D", "U", "U", "U", "D", "D", "D", "U", "U", "D", "U"]));



// Test 1 (8, ["U", "D", "D", "D", "U", "D", "U", "U"])
// Test 2 (12, ["D","D","U","U","D","D","U","D","U","U","U","D"])