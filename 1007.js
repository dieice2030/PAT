var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)

function check(test){
    for(var i=2;i<=Math.sqrt(test);i++){
        if(test%i===0)
            return false;
    }
    return true;
}

rl.on('line',function(str){
    var n =parseInt(str);
    var sum=0;
    for(var i=2;i<=n-2;i++){
        if(check(i)&&check(i+2))
            sum++;
    }
    console.log(sum);
    rl.close();
})