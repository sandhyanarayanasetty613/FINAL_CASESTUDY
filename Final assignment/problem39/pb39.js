function checkIfStringHasSpecialChar(_string)
{
    let spChars = /[$]+/;
    if(spChars.test(_string)){
      return true;
    } else {
      return false;
    }
}
let string1= "ja$"
let string2 = "javascript"
try {
 if(string1 == $) throw "$ symbol is present";
}
catch(err) {
    console.log('An error caught'); 
    console.log('Error message: ' + err);  
}
finally {
    console.log(checkIfStringHasSpecialChar(string1));
    console.log(checkIfStringHasSpecialChar(string2));
}