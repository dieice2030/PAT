var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)

function check(str) {
    var l = str.length;
    var p = str.indexOf('P');
    var t = str.lastIndexOf('T');
    var a = p;
    var c = l - t - 1;
    var b = 0;
    for (var i = a + 1; i < t; i++) {
        if (str[i] === 'A')
            b++;
        else
            return 'NO';
    }
    for (var i = 0; i < a; i++) {
        if (str[i] !== 'A')
            return 'NO';
    }
    for (var i = t+1; i < l; i++) {
        if (str[i] !== 'A')
            return 'NO';
    }
    if(c===a*b&&b!==0)
        return 'YES';
    else
        return 'NO';
}

rl.question('', function (str) {
    var n = parseInt(str);
    var i = 0;
    rl.on('line', function (str2) {
        i++;
        console.log(check(str2));
        if (i === n) {
            rl.close();
        }
    })
})