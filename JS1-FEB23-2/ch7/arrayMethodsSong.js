/*arrayMethodsSong.js is from @Una 
(Una Kravets, Chrome Browser, CSS Working Group) 
https://twitter.com/una/status/1092122139627536386?s=21
- it's highly entertaining 😂
here's the code Una uses in the background -
 */
// map      : transform EVERY element with the transform logic passed in as a callback
// filter   : return ONLY those elements that pass the filter test, with the predicate logic passed in as a callback
// reduce   : return A SINGLE VALUE after iterating over the original array, with the accumulator logic passed in as a callback

//  Una's entertaining example:
const newArr = [1,3,0].map(val => {
    return (val + 1);
})//2,4,1
console.log(newArr)
const smallVals = [1,12,13,14,6].filter(val => {
    return (val < 10)
})//1,6
console.log(smallVals)

const juice = ['kiwi', 'apple'].reduce((drink, item) => {
    drink.push(`squeezed ${ item }`)
    return drink
}, [])
console.log(juice)

// forEach loop performed on an array:
// Return value of undefined.
// Array.prototype.map() differs from forEach in that
// IT returns a NEW ARRAY: 
// const newArr = oldArr.map((val, index, arr)) => {
//     //transform how - here
// }
