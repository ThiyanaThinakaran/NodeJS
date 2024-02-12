//definition of prinResults() func
function printResults(res)
{
    console.log('Results -',res);
}
 
//definition of calc() func
function calc(val1, val2, printResults)
{
    var res=val1*val2;
    printResults(res);
}
 
//invoke or call calc() func
//Pass the printresults() func as parameter to calc() func along with two other parameters i.e. 10 & 2
calc(10,2,printResults);

var IMEINo =1111111111;
 
//use module.exports to export all reusable fn and code
module.exports={calculate:calc,pr:printResults,IMEI_No: IMEINo}