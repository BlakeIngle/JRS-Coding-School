
iLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i * j == 2) {
            continue iLoop;
        }
        console.log(j);
    }
    if (i == 1) {
        break;
    }
    console.log(i);
}