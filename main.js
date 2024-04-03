// 1-misol

// let arr = [1,2,3,4,5,6,7,8,9]
// let juft = 0
// let toq = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         juft++
//     }else{
//         toq++
//     }
// }
// console.log(`juft sonlar ${juft} ta`)
// console.log(`toq solar ${toq} ta`)




// 2-misol

// let arr = [1,2,3,4,5,6,7,8,9]
// let a = prompt("Enter your number...")
// let juft = 0
// let toq = 0
// let total = 0

// for (let i = 0; i < arr.length; i++) {
//     total += arr[i]
//     if (arr[i] % 2 == 0) {
//         juft += arr[i]
//     }else{
//         toq += arr[i]
//     }
// }
// console.log(`array ichidagi sonlar yigindisi ${total} ga teng`)
// console.log(`juft sonlar yigindisi ${juft} ga teng`)
// console.log(`toq sonlar yigindisi ${toq} ga teng`)
// let different = Math.abs(a - total)
// console.log(`prompt bilan array yigindisi farqi ${different} ga teng`)




// 3-misol

// let prmt1 = +prompt("Enter your number first...")
// let prmt2 = +prompt("Enter your number seconf...")
// let juft = 0
// if (prmt1 < prmt2) {
//     for (let i = (prmt1 + 1); i < prmt2; i++) {
//        if (i % 2 === 0) {
//         juft +=+i
//        }
//     }
// }else{
//     alert("Birinchi kiritga soniz 2-sondan kichkina bolishi kerak")
// }
// console.log(juft)





// 4-misol

// function fn(params) {
//     let obj1 = {num1: 1, num2: 2, num3: 3, num4: 4, num5 :5}
//     let obj2 = {num6: 6, num7: 7, num8: 8}
//     let new_obj = Object.assign(obj1, obj2)
//     let arr = []
//     for(let value in new_obj){
//         arr.push(new_obj[value])
//     }
//     let max_num = Math.max(...arr)
//     let min_num = Math.min(...arr)
//     console.log(Math.abs(max_num - params) + "ga value larining kattasidan function parametri kichik")
//     console.log(Math.abs(min_num - params) + "ga value larining kattasidan function parametri katta")
// }
// fn(2)






// 5-misol

// function value(params) {
//     let arr = []
//     for (const value in params) {
//         arr.push(params[value])
//     }
//     console.log(arr)
// }
// value({num1: 1, num2: 2, num3: 3})

// function key(params) {
//     let arr = []
//     for (const key in params) {
//         arr.push(key)
//     }
//     console.log(arr)
// }
// key({num1: 1, num2: 2, num3: 3})






// 6-misol

// let arr = [1,3,2,0,4,5]
// let min = Math.min(...arr)
// let max = Math.max(...arr)
// let min_index = null
// let max_index = null
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === min) {
//         min_index = i
//     }else if (arr[i] === max) {
//         max_index = i
//     }
// }
// arr[max_index] = min
// arr[min_index] = max
// console.log(arr)






// 7-misol

// function getInitialOdds(n) {
//     let arr = []
//     for (let i = 1; i < n*2; i++) {
//         if (i % 2 == 0) {
            
//         }else {
//             arr.push(i)
//         }
//     }
//     console.log(arr)
// }
// getInitialOdds(10)
