// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]
// dfa

// P: Are you ever given an empty array or undefined? What then? Are you always given digits?
// R: Whatever number was given, it is now split up into an array and the order of the numbers is reversed.
// E: if we were given 9238 => [8,3,2,9]
//                     330 => [0,3,3]


function digitize(n) {
    //make number a string and split that number
    let numArray = n.toString().split('').reverse()
    // reverse array
    return Number(...numArray)
    // make array integers again and return
}

digitize(9238)
console.log(digitize(330),[0,3,3])

// can't do it this way, use map