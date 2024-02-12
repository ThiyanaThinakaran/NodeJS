//Import OS Module
var osinfo=require('os');
console.log(osinfo.arch());
console.log("cpu's:" + osinfo.cpus())
console.log("Count of CPUs:" + osinfo.cups)