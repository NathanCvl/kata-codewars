function points(games) {
    let total = 0;
    for (const item of games) {
        let game = item.split(':');
        if (game[0] > game[1]) {
        total += 3;
        } else if (game[0] === game[1]) {
        total += 1;
        }
    }
    return total;
}