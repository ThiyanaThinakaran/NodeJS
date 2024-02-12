var files=require('fs');
files.writeFile('Demo1.txt','Node JS is asynchronous.supprt callback',

function(err,data){
    if(err!=undefined)
        console.log(err.message);
    else
        console.log('write '+data+' to file');    
})
files.readFile('Demo1.txt',function(err,data){
    if(err!=undefined)
    console.log(err.message);
else
console.log(data);
})