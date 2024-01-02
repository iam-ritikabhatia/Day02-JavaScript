// #1(Tabular Form)
let firstName = "Ritika"
let parentName = "Tina"
let lastName = "Bhatia"
console.table([firstName, parentName, lastName])

// #2  Boolean Datatypes
var firstName = true
var lastName = false
console.table([typeof firstName, typeof lastName]) 

// #3 
let first = true
let last = false
console.log(typeof first, typeof last)


// #4
const first = true
const last = false
console.log(typeof first, typeof last)

// #5
const userLogged = false
const loggedIn = false
console.table([typeof userLogged])
console.table([loggedIn])
console.log(typeof userLogged)
console.log(typeof loggedIn)

// #6 (Number Datatypes)
var age = 20
console.log(typeof age)

// #7 String Datatypes (its output is string because we write in a "quote")
var studentAge1 = "20"
var studentAge2 = "25"
console.log(typeof studentAge1, typeof studentAge2)

// #8
var firstName = "Ritika"
console.log(typeof firstName)

// #9 Symbol DataTypes is used to make something unique. Suppose we make button in our website and if we want to make button unique then we use symbol().
let firstId = Symbol("123")
let secondId = Symbol("123")
console.log(firstId == secondId)

// #10 undefined DataTypes
var age 
console.log(age)
console.log(typeof age)

// #11
var age = 
console.log(age)

// #12(in this age age is defined it means declaration is given and also we initialze in the string)
var age = ""
console.log(age)

// #13 Typeof Conversion
let age = 30
console.log(age, typeof age)

// #14
let DOB = "20 August 2020"
let DOBinNumber = Number(DOB)
let checkTypeofNan = NaN;
console.table([DOB, typeof DOBinNumber, typeof checkTypeofNan, checkTypeofNan]);


// #15
let phoneNumber = 123456;
let phoneNumberinString = String(phoneNumber);
let phoneNumberinBoolean = Boolean(phoneNumber);
console.table([phoneNumberinString, typeof(phoneNumberinString)]);
console.table([phoneNumberinBoolean, typeof phoneNumberinBoolean]);


// #16
let temperature = null;
let temperatureInNumber = Number(temperature);
console.table([temperatureInNumber, typeof temperatureInNumber]);

// #17
let something = undefined;
let somethinginNumber = Number(something);
console.table([somethinginNumber, typeof somethinginNumber])

// #18
let isLoggedIn = ""
let isLoggedInBoolean = Boolean(isLoggedIn);
console.table([isLoggedIn,typeof isLoggedIn,isLoggedInBoolean])

// #19 (Output is true because there is not an empty string)
let isLoggedOut = "Yes";
let isLoggedOutBoolean = Boolean(isLoggedOut)
console.log(isLoggedOut,isLoggedOutBoolean,typeof isLoggedOut,typeof isLoggedOutBoolean)




