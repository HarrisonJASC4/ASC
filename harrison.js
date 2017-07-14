// //Task
// //Create a rand() function
// //Takes a number
// //Returns a random number between 0 and that number

// //PSEUDOCODE
// //multiply Math.random() by the given nmber
// //remove the decimal part
// //return the remaining intege

// function rand(num) {
//     //returns a random integer between 0 and num
//     var randomNum = num * Math.random();
//     var result = Math.floor(randomNum);
//     return result;
// }
// //Time consuming & save code way:
//     //return Math.floor(num * Math.random());

// console.log(rand(15));
// console.log(rand(999));
// console.log(rand(0));

function sumArr(a,b) {
var a = (['2','4','12','34','15'], ['6', '56', '7', '9', '10']);
var b = (['12', '3', '23', '36', '8'],['4', '5', '56', '12', '234']);
      
for (var i = 0, i< a.length; i++, a.push(a[0]+a[1]));
      return a; 

 for (var i=0, i<b.length; i++, b.push(b[0] + b[1]);
        return b
}

