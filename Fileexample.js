const { dir } = require('console');
var files=require('fs');
var fdesc=0
//(name of file,mode of open,call-back fn)
/*mode of open:
r-read;
w-write;
a-append;*/

files.open('Demo.txt','a',function(err,fd){            //Opens the file in write mode.
    if(err !=undefined){
    console.log(err.message);
    console.log(err.code);
    }else{
        console.log('File opened successfully.');
        console.log(fd);
        fdesc=fd;
    }

var str=new Buffer.from('Welcome to NodeJS \n');
console.log(fdesc);
files.write(fdesc,str,0, str.length,null, function(err,written)
//(fileno,data to be wriiten,starting of buffer,size,<encoding|null>,<call-back fn>)

{
    console.log('Wrote ' +written+' characters to the file');
})
files.close(fdesc, function(){
    console.log('File closed successfully.')
});
});