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
//Sample Array [1,2,3,4,5]
//Expecetd Output: [2,4]
const secondBigandSmall = (array) =>{
   let output = []
    output.push(array[1])
    output.push(array[array.length-2])
    return output
}
//Answer
// console.log(secondBigandSmall([1,2,3,4,5]))

//12.Write a Javascript function which says whether a number is perfect.
const perfectNum = (num) =>{
    let temp = 0
    for(let i = 1; i <= num/2; i++){
        if(num % i === 0){
            temp += i;
        }
    }
    if(temp === num && temp !== 0){
        return true
    } else{
        return false
    }
}
//Answer
// console.log(perfectNum(28))

//13. Write a javascript function to computer the factors of a positive integer

const factors = (n) =>{
    let num_factors = [], i;
    for(i = 1; i <= Math.floor(Math.sqrt(n)); i+=1){
        if(n % i === 0){
            num_factors.push(i)
            if(n / i !==i){
                num_factors.push(n / i);
            }
        }
        num_factors.sort(function(a,b)
        {
            return a - b;});
        }
        return num_factors;
}
//Answer
// console.log(factors(15))

//14. Write a Javascript function to conver an amount to coins.
//Example 46[25,10,5,2,1] Output: 25,10,10,1

const amountToCoins = (num, coins) =>{
    let output = []
    coins = [25,10,5,2,1]
    for(let i = 0; i < coins.length; i++){
        while(num >= coins[i]){
            num -= coins[i]
            output.push(coins[i])
        }   

    }
    return output
}
//Answer
// console.log(amountToCoins(46))

//15. Write a Javascript function to compute the value of bn where n is the exponent
// and b is the bases. Accept b and n from the user and display the result

const exponent = (b,n) =>{
    let ans = 1
    for (let i = 1; i <= n; i++){
        ans = b *ans
    }
    return ans
}
//Answer
// console.log(exponent(2,4))

//16. Write a Javascript function to extract unique characters from a string.
//Example string: 'thequickbrownfoxjumpsoverthelazydog"
//Expected Output: 'thequickbrownfxjmpsvlazydg'
const uniqueChar = (str) =>{
    let unique = ""
    for(let i = 0; i < str.length; i ++){
        if(unique.includes(str[i]) === false){
            unique += str[i]
        }
    }
    return unique
}

//Answer
// console.log(uniqueChar('thequickbrownfoxjumpsoverthelazydog'))

//17. Write a Javascript function to get the number of occurences of each letter in specified string.

const charCount = (str) =>{
    let result = {}
    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(result[char] > 0){
            result[char]++
        }else{
            result[char] = 1
        }
    }
    return result
}
//Answer
// console.log(charCount('Hello'))

//18. Write a function for searching Javascript arrays with a binary search.

const binarySearch = (items, value) =>{
    let start = 0
    let last = items.length - 1
    let middle = Math.floor((last + start)/2)
    while(items[middle] != value && start < last){
        if (value < items[middle]){
            last = middle - 1
        }else if (value > items[middle]){
            start = middle + 1
        }
        middle = Math.floor((last + start)/2)
    }
    return (items[middle] != value) ? -1 : middle;
}

//19. Write a javascript function that returns array elements larger than a number.

const biggerNum = (num, arr) =>{
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(num < arr[i]){
            result.push(arr[i])
        }
    }
    return result
}

// console.log(biggerNum(10,[1,2,11,54,8,9,12]))

//20. Write a javascript function that generats a string id(specified length) of random characters.

//21. Write a Javascript function to get all possible subset with a fixed length (for example 2) combinations in an array
// Sample array: [1,2,3] and subset length is 2
// Expected output: [[2,1], [3,1], [3,2]]

//22. Write a Javascript function that accepts two arguments, a string and a letter and the function will count the number of occurances
// of the specified letter within the string
// Sample arguments: 'microsoft.com' , 'o'
// Output: 3

const occurence = (str,char) =>{
    let output = 0
    for(let i = 0; i < str.length; i++){
        if(char === str[i]){
            output++
        }
    }
    return output
}

console.log(occurence('microsoft.com','o'))

//23. Write a Javasript function to find the first non repeated character.
// Sample arguments : 'abacddbec'
// Expected output: 'e'
