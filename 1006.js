var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)

rl.on('line',function(str){
    var len=str.length;
    var result='';
    if(len===3){
        for(var i=0;i<str[3-len];i++)
            result+='B';
    }
    if(len>=2){
        for(var i=0;i<str[len-2];i++)
            result+='S';
    }
    if(len>=1){
        for(var i=1;i<=str[len-1];i++)
            result+=i;
    }
    console.log(result);
    rl.close();
})