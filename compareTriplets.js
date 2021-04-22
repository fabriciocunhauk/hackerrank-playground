function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    // Compare a[i] and b[i]

    for (var i = 0; i < a.length; i++) {
        // If a[i] > b[i], then Alice is awarded 1 point.
        // If a[i] < b[i], then Bob is awarded 1 point.
        // If a[i] = b[i], then neither person receives a point.
        if (a[i] > b[i]) alice++;
        if (a[i] < b[i]) bob++;
    };

    // Add values to array
    const arrayOfPoints = [];
    arrayOfPoints.push(alice);
    arrayOfPoints.push(bob);

    return arrayOfPoints;
}

const result = compareTriplets([17, 28, 30], [99, 16, 8])
console.log(result);