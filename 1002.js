var readline=require('readline')
var rl=readline.createInterface(process.stdin,process.stdout)

var zh=['ling','yi','er','san','si','wu','liu','qi','ba','jiu']

rl.on('line',function(str){
    var s=0;
    var output='';
    for(var i=0;i<str.length;i++){
        var n=parseInt(str[i]);
        s+=n;
    }
    var sum=s.toString();
    for(var i=0;i<sum.length;i++){
        var temp=parseInt(sum[i]);

        output+=zh[temp];
        if(i<sum.length-1)
        output+=' ';
    }
    console.log(output);
    rl.close();
})