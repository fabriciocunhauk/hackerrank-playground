function jumpingOnClouds(c) {
    let numOfJumps = 0;

    for (let i = 0; i < c.length; i++) {
        // if next cloud = 0 jump
        // if cloud = 0 jump
        let currentCloud = c[i]
        let nextCloud = c[i + 1]
        let next2Cloud = c[i + 2]
        if (currentCloud === nextCloud && currentCloud === next2Cloud) {
            currentCloud = next2Cloud;
            numOfJumps++;
        }

        if (currentCloud === nextCloud && currentCloud !== next2Cloud) {
            currentCloud = nextCloud;
            numOfJumps++;
        }
    }

    return numOfJumps;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
