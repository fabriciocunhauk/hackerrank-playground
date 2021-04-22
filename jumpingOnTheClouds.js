function jumpingOnClouds(c) {
    let numOfJumps = 0;

    for (let i = 0; i < c.length; i++) {
        // if next cloud = 0 jump
        // if cloud = 0 jump
        let cloud = c[i]
        let nextCloud = c[i + 1]
        if (cloud === 0) {
            if (nextCloud === 0) {
                numOfJumps++
            }
        }
    }

    return numOfJumps;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));