var addTwoNumbers = function (l1, l2) {

    // Extract numbers from the array
    const arr1 = l1.map((a, b) => a + b, 0)
    console.log("arr1", arr1);
    const arr2 = l2.reduce((a, b) => a + b, 0)
    console.log("arr2", arr2);
    const addNumbers = arr1 + arr2
    const result = Array.from(addNumbers.toString())

    const toNums = result.map(Number)

    console.log(toNums);

    return toNums
};

addTwoNumbers([2, 4, 3], [5, 6, 4])