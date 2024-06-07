console.log('============ * to string * ===============')

console.log('17 to string is ' + String(17)); //17
console.log('-17.17 to string is ' + String(-17.17)); //-17.17
console.log('false to string is ', String(false)); //false
console.log('null to string is ', String(null)); //null
console.log('undefined to string is ' + String(undefined)); //undefined
console.log('0 to string is ' + String(0)); //0

console.log('============ * to number * ===============')

console.log("'17' to number is " + Number('17')); //17
console.log('true to number is ' + Number(true)); //1
console.log('false to number is ' + Number(false)); //0
console.log('null to number is ' + Number(null)); //0
console.log('undefined to number is ' + Number(undefined)); //NaN
console.log("'   20   ' to number is " + Number(' 20 ')); //20
console.log("'      ' to number is " + Number('     ')); //0
console.log("'   30d   ' to number is " + Number('   30d   ')); //NaN

console.log('============ * to boolean * ===============')

console.log('null to boolean is ' + Boolean(null)); //false
console.log('undefined to boolean is ' + Boolean(undefined)); //false
console.log('0 to boolean is ' + Boolean(0)); //false
console.log('-0 to boolean is ' + Boolean(-0)); //false
console.log('NaN to boolean is ' + Boolean(NaN)); //false
console.log("'' to boolean is " + Boolean('')); // false
console.log("' ' to boolean is " + Boolean(' ')); //true
console.log('17 to boolean is ' + Boolean(17)); //true
console.log("'Hello' to boolean is " + Boolean('Hello')); //true