document.addEventListener("DOMContentLoaded", function(event){

let numbersStrings = prompt("ingresa tres números ");

var regex = /(\d+)/g;

var numbersArray = numbersStrings.match(regex);

var numbersArrayInt = [];

for ( i=0; i < numbersArray.length; i++){
    numbersArrayInt.push(parseInt(numbersArray[i]));
}


var iguales = 0;
var maxNumber = Math.max(...numbersArrayInt);
var minNumber = Math.min(...numbersArrayInt);
var midNumber;


if (maxNumber == minNumber) {
    
    const resultsDivJS = document.getElementById("resultsDiv");
    resultsDivJS.innerHTML= ` Los tres números son iguales  ` ;

}else{
    for(i=0; i < numbersArrayInt.length; i++){
        if(numbersArrayInt.indexOf(maxNumber) != i && numbersArrayInt.indexOf(minNumber)!= i) midNumber =numbersArrayInt[i];
       
    } 

    const resultsDivJS = document.getElementById("resultsDiv");
    resultsDivJS.innerHTML= ` ${maxNumber}, ${midNumber}, ${minNumber} <br> ${minNumber}, ${midNumber}, ${maxNumber}  ` ;

}


})



