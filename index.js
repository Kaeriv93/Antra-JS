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
//Answer
// console.log(uppercase('the quick brown fox'))

//6. Write a javascript function that accepts a string as a parametr and find the longest word within the string
// Example string: 'Web Development Tutorial'
// Expeceted output: 'Development

const longestString = (str) =>{
    let longest = ''
    let splitStr = str.split(" ")
    for(let i = 0; i < splitStr.length; i++){
        if(longest.length < splitStr[i].length){
            longest = splitStr[i]
        }
    }
    return longest
}
//Answer
// console.log(longestString('Web Development Tutorial'))

//7. Write a javascript function that accepts a string as a parameter and coutns the number ovwels iwthin the string.
//Example String: 'The quick brown fox'
//Expected Output: 5
const vowel = (str) =>{
    let vowelCount = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'o' || str[i] === 'i'|| str[i] === 'u' ){
            vowelCount++
        }
    }
    return vowelCount
}
// Answer
// console.log(vowel('The quick brown fox'))

//8. Write a Javascript function that accepts a number as a parameter and check the number is prime or not

const isPrime = (num) =>{
    if(num % 2 === 0){
        return false
    }
    return true
}
//Answer
// console.log(isPrime(100))

//9.Write a Javascript function which accepts an argument and returns the type

const checkType = (str) =>{
    return typeof(str)
}
//Answer
// console.log(checkType('pineapple'))

//10. Write a Javasript function which returns n rows by n columns identity matrix.
const matrix = (n) =>{
    let i;
    let j;
    for( i = 0; i < n; i++){
        for(j = 0; j < n; j++){
            if( i === j){
                console.log(' 1 ')
            }
            else{
                console.log(' 0 ')
            }
            console.log('----------')
        }
    }
}

//Answer
// matrix(3)

//11. Write a Javascript Function which will take na array of numbers tored and find the second lowest and second great numbers, respectively.
//Sample Array [1,2,3,4,5] my test array [4,1,5,3,2]
//Expecetd Output: 2,4