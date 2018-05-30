var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (str) {
    var n = parseInt(str);
    for (var i = 0; ; i++) {
        if (n === 1) {
            console.log(i);
            break;
        }
        if (n % 2 === 0)
            n = n / 2;
        else
            n = (3 * n + 1) / 2;
    }
    rl.close();
})