var addTwoNumbers = function (l1, l2) {

    // Extract numbers from the array
    const arr1 = parseInt(l1.join(''));
    console.log("arr1", arr1);
    const arr2 = parseInt(l2.join(''));
    console.log("arr2", arr2);
    const addNumbers = arr1 + arr2
    const result = Array.from(addNumbers.toString());

    const toNums = result.reverse().map(Number);

    console.log('result', toNums);

    return toNums;
};

addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])