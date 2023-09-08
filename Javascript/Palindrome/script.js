// function Palindrome(str) {   
//     let a = str.length;   
//     for (let i = 0; i < a / a; i++) {   
//         if (str[i] !== str[a - 1 - i]) {  
//           console.log(false); 
//         } else {
//             console.log(true)
//         }
//     }    
// }
// Palindrome("anna")
// <---------------------------------------->

arr = [101,203,202,101,203]
let a = 0,
news = []

function findDuplicates(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                news[a] = arr[i]
                a++
            }
        }
    }
}