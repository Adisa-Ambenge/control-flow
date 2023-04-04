

//Question 1

function arrayOfStrings(array){
    for(let i = 0; i<array.length; i++)
    console.log(array[i]);
}
let myArr = ["Angela","Adisa","Ambenge"];
arrayOfStrings(myArr);
//Question 2
function arrayOfNumbers(arr){
    arr.forEach(function(num){
        console.log(num*2);

    });
}
let myArray = [20,40,24,25,60];
arrayOfNumbers(myArray); 

//QUESTION 3
function arrayOfNums(arr1){
    for(let i = 0; i<4; i++){
        arr1[i]=arr1[i]*8;
    }

let lastTwoNums = arr1.length-1;
arr1[lastTwoNums] +=5;
arr1[lastTwoNums-1]+=5;
console.log(arr1);
  
 }
 let arr1 = [24,32,68,90,100,42]
 arrayOfNums(arr1);


//QUESTION 4
function fourthIndex(arr2) {
    let i = 0;
    while (i < arr2.length) {
      if (i === 5) {
        break;
      }
      console.log(arr2[i]);
      i++;
    }
  }
  let arrNum= [1,2,3,4,5,6,7,8,9];
  fourthIndex(arrNum);

  //QUESTION 5


  function arrayOfStr(arr3){
    for (let i = 0; i < arr3.length;i++){
     if(i === 2){
        continue;
     }
     console.log(arr3[i]);
    }
} 

let fruits= ["apple","plum","banana","strawberries","kiwi"];
arrayOfStr(fruits);
