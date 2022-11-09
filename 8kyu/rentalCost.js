function rentalCarCost(d) {
    let cost = 40 * d;
    if (d >= 7) {
        cost -= 50;
    } else if (d >= 3) {
        cost -= 20;
    }
    return cost;
}