//1. Write a Javascript function taht reverse a number.
//Example x = 32243 Output: 34233

//Answer

const reverseNum= (input) =>{
    return input.toString().split("").reverse().join("");
   
}
// console.log(reverseNum(32243))

//2. Write a Javascript function that checks wheather a passed string is palindrome or not?
//Answer
const isPalinDrome =(str) =>{
    let reverseString = str.split("").reverse().join("")
    if(reverseString === str){
        return true
    } else{
        return false
    }
}
// console.log(isPalinDrome('racecar'))

//3. Write a javascript function that generates all combinations of a string
// Example : 'dog' output d, do, dog, o,og,g
const allCombination = (str) =>{
    let combinations = []
    for(let i = 0; i<str.length; i++){
        for(let j = i +1; j<str.length + 1; j++){
            combinations.push(str.slice(i,j))
        }
    }
    return combinations
}
// Answer
// console.log(allCombination('dog'))

//4. Write a javascript function that returns a passed string with lettes in alaphbetical order
//Example string: 'webmaster' output: 'abeemrstw'

const inOrder = (str) =>{
    return str.split('').sort().join('')
}

//Answer
// console.log(inOrder('webmaster'))

//5. Write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase
//Example: 'the quick brown fox'
// Output: 'The Quick Brown Fox'
const uppercase = (str) =>{
    let newString = []
    let splitString = str.split(" ")
    for(let i = 0; i < splitString.length; i++){
        newString.push(splitString[i][0].toUpperCase() + splitString[i].slice(1))

    }
    return newString.join(" ")
    
}
console.log(uppercase('the quick brown fox'))