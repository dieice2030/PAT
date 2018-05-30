var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)

rl.question('', function (str) {
    var n = parseInt(str);
    var i = 0;
    var maxStu, minStu;
    var max = 0;
    var min = 100;
    rl.on('line', function (str2) {
        var temp = str2.split(' ');
        var score = parseInt(temp[2]);
        if (score > max) {
            max = score;
            maxStu = temp;
        }

        if (score < min) {
            min = score;
            minStu = temp;
        }

        i++;
        if (i === n) {
            console.log(maxStu[0] + ' ' + maxStu[1]);
            console.log(minStu[0] + ' ' + minStu[1]);
            rl.close();
        }

    })
})