var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)

rl.question('', function (str) {
    var n = str.split(' ')[0];
    var p = str.split(' ')[1];
    p = p % n;
    rl.on('line', function (str2) {
        var arr = str2.split(' ');
        var temp;
        for (var i = 0; i < p; i++) {
            temp = arr[n - 1];
            for (var j = n - 1; j > 0; j--) {
                arr[j] = arr[j - 1];
            }
            arr[0] = temp;
        }
        var result = '';
        for (var i = 0; i < arr.length - 1; i++) {
            result += arr[i];
            result += ' ';
        }
        result += arr[arr.length - 1];
        console.log(result);
        rl.close();
    })
})