var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)

function compare(value1, value2) {
    return value2 - value1;
}

rl.question('', function (str) {
    var n = parseInt(str);
    rl.on('line', function (str2) {
        var num = str2.split(' ');
        for (var j = 0; j < num.length; j++) {
            t = parseInt(num[j]);
            for (var i = 0;; i++) {
                if (t === 1) {
                    break;
                }
                if (t % 2 === 0)
                    t = t / 2;
                else
                    t = (3 * t + 1) / 2;
                var temp = num.indexOf(t.toString());

                if (temp !== -1) {
                    num.splice(temp, 1);
                    if (j > temp)
                        j--;
                }
            }

        }
        num.sort(compare);
        var result = '';
        for (var i = 0; i < num.length - 1; i++) {
            result += num[i];
            result += ' ';
        }
        result += num[num.length - 1];
        console.log(result);
        rl.close();
    })
})