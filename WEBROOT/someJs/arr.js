const arrTest= [12, 5, 8, 130, 44];
/**
 *  filter example valus groter dan 10
 */
function isBigEnough(value) {
  return value >= 10;
}

const filtered = arrTest.filter(isBigEnough);
// filtered is [12, 130, 44]
console.log(filtered);
var x=100; //x in the global scope; 

function valuesGroterDanX(value){
    return value >= x; 
}

console.log(arrTest.filter(valuesGroterDanX));