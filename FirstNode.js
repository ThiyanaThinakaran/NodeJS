var firstName='Thiya';
var lastName='T';
console.log ('First Name : ',firstName);
console.log('LAst Name : ',lastName);
var cities=['Bng','Chn','LK','DL','Hl'];
for (i in cities)
console.log(cities[i]);
console.log('---------------------------------\n');
for (j in cities)
console.log(cities[j]);


console.log(cities.includes("Chn") ? "Found" : "Not Found");
console.log(cities.includes("LK") ? "Found" : "Not Found");

//console.log('Delhi' in cities)
console.log((('Chn' in cities)?"Found": "Not Found"));