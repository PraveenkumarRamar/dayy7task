// Asian coutries(using filter)

// let connect = new XMLHttpRequest();
// connect.open ("GET","https://restcountries.com/v2/all");
// connect.send()
// connect.onload = function() {
//     var res = JSON.parse(connect.response)
//     console.log(res)
// let arr=res.filter((val)=>val.region==="Asia").map((val)=>val.name)
// console.log(arr)
// }


// Population less than 2 lakh(using filter)----------------------------------------------

// let connect = new XMLHttpRequest();
// connect.open ("GET","https://restcountries.com/v2/all");
// connect.send()
// connect.onload = function() {
//     var res = JSON.parse(connect.response)
//     console.log(res)

//     var pop=res.filter((val)=>val.population<200000)
//     console.log(pop)
// }


// name,capital,flag(forEach)-----------------------------------------

// let connect = new XMLHttpRequest();
// connect.open ("GET","https://restcountries.com/v2/all");
// connect.send()
// connect.onload = function() {
//     var res = JSON.parse(connect.response)
//     console.log(res)
// res.forEach((val)=>console.log(`Country Name :${val.name}  
// Capital:${val.capital}
// Country Flag${val.flag}`))
// }


// Total population-----------------------------------------------------

// let connect = new XMLHttpRequest();
// connect.open ("GET","https://restcountries.com/v2/all");
// connect.send()
// connect.onload = function() {
//     var res = JSON.parse(connect.response)
//     console.log(res)

// var final = res.reduce((acc,cv)=>acc+cv.population,0)
// console.log(`Total population: ${final}`)

// }
// ------------------------------------------------------------------------------

// country using dollars

let connect = new XMLHttpRequest();
connect.open ("GET","https://restcountries.com/v2/all");
connect.send()
connect.onload = function() {
    var res = JSON.parse(connect.response)
    console.log(res)
var arr = res.filter((val)=>val.currencies)
// console.log(arr)
var ress =arr.filter((val)=>(val.currencies[0].code=="USD")).map((val)=>val.name)
console.log(ress)
}