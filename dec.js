// function fizzBuzz(n) {
//     // Write your code here
//     for(let i=1; i <= 100; i++){
//         if(n%3=== 0 && n%5 === 0){
//            console.log("FizzBuzz") 
//         } else if(n%3 === 0){
//            console.log("Fizz") 
//         } else if(n%5 === 0){
//            console.log("buzz") 
//         }else{
//            console.log(n) 
//         }
//     }
// }
// fizzBuzz(100)



var commonChars = function(a) {
    let hash = {}
    for(let i =0; i <= a.length; i++){
        for(let key of a){
            if(hash[key]){
                hash[key]++
            }else{
                hash[key] = 1
            }
        }
        return hash

    }
   
};
console.log(commonChars(["hello"]))