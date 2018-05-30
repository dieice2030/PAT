var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)

rl.on('line', function (str) {
    var temp = str.split(' ');
    var result = [];
    if (temp[1]<1)
        console.log('0 0');
    else {
        for (var i = 0; i < temp.length; i += 2) {
            if (temp[i+1] == 0)
                break;
            result[i] = temp[i] * temp[i + 1];
            result[i + 1] = temp[i + 1] - 1;
        }
        var show = '';
        for (var i = 0; i < result.length - 1; i++) {
            show += result[i];
            show += ' ';
        }
        show += result[i];
        console.log(show);
    }
    rl.close();
})