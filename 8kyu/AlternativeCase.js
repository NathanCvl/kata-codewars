String.prototype.toAlternatingCase = function () {
    return this.split('').map(function (c) {
        return c == c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
    }).join('');
}
console.log("zgdsf".toAlternatingCase());