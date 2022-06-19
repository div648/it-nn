function random(from = 0, before) {
    var rand = Number((Math.random() * before).toFixed());

    while (rand < from) {
        rand = Number((Math.random() * before).toFixed());
    }
    return Number(rand);
}

function randomFArr(aarr) {
    return String(aarr[random(0, Number(aarr.length) - 1)]);

}