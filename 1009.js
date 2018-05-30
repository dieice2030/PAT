var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)

rl.on('line', function (str) {
    var temp = str.split(' ');
    var arr = temp.reverse();
    var result = '';
    for (var i = 0; i < arr.length - 1; i++) {
        result += arr[i];
        result += ' ';
    }
    result += arr[arr.length - 1];
    console.log(result);
})