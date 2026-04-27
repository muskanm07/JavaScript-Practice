// name is a preserved word in browser it already exists as window.name so we can't use only name
// && mean AND - both conditions must be true
// >= means greater than or equal to
// == checks if value are equal 



// ARRAY
// in array push is used to add item in array from the last and pop is used to delete from the last ans shift is used to delete from the start and unshift is used to add items from the start
// forEach method is used to loop through every item one by one
// two ways to write it
// old
Skills.forEach(function(Skill){
    console.log(" i am learning "+Skill+ " and it will get me a job");
});
// new
Skills.forEach((Skill)=>{
console.log(" i know "+Skill);
})  
// if i use Skills instead of Skill inside foreach method function console.log it will run in one go on all element not one by one
// we can define function parameter with res which is a short form of result
// // Cannot use a variable inside its own declaration
// forEach returns undefined it does not store anything and neither return it
// forEach — it just like we wanna do something with items performing some task but don't store it
// it just loop through array and perform action does not return new array
// Use it when → printing, displaying, sending emails, showing notifications. Just DOING something. Not storing anything new.
// map in JS return new array
// map — when we want to perform task or transform array
// it returns new Array
// Use it when → converting data, adding text to items, transforming API data before showing on screen. React uses map everywhere to display lists on webpage.
// filter — in this if any items matches the condition even it is one item
// we use it when we want to filter some things on items like for example in number odd even number etc.
// For real life example we use it in search bar and while shopping online by filtering color, price, size,discount etc.
let jobs = [
  {title: "React Developer", salary: 40000, city: "Delhi"},
  {title: "Node Developer", salary: 25000, city: "Mumbai"},
  {title: "UI Designer", salary: 35000, city: "Delhi"},
  {title: "React Developer", salary: 50000, city: "Bangalore"}
]

// filter - only high paying jobs
let highPaying = jobs.filter((job) => job.salary > 30000)

// map - show only titles
let titles = highPaying.map((job) => job.title)

// forEach - display each one
titles.forEach((title) => console.log(title))

// find
// find is used to find one specific item like finding a specifice user by id etc.
// find()- returns first single items that matches the condition
// stops immediately when it finds the first match like if else condition
// filter() returns all matches,find() returns only First one
// array of objects - real world data looks like this
// access object property inside array method using dot notation
// student.name, student.marks, student.city
// in array there is slice  methode which start from starting index and end to ending index but we don't count ending index
// ------real life example of slice in real world-----
// show only first 3 products on homepage
let products = ["phone", "laptop", "shoes", "shirt", "watch"]
let featuredProducts = products.slice(0, 3)
// ["phone", "laptop", "shoes"]
// original products array untouched!!

// pagination - show items 5 to 10
let page2 = products.slice(5, 10)

// get last 3 notifications
let recent = notifications.slice(-3)

// ---splice------------------------------
// slice slice do not change the original array make the copies of it and splice directly changed the original array
// splice(start,deleteCount)-remove items change original
// splice(start,0,newItem- adds item at that position

// ------------Real examples:
// User deletes a todo → splice removes it from array
// Insert notification at top of list → splice adds at index 0
// Remove a product from cart → splice deletes it

// ---------------------includes & indexOf-------------------------
// includes returns boolean value true or false if item does not exist it returns false otherwise
// includes is used to know whether this item exists
// indexOf return index of item and returns -1 if item does not exist
// i had problem in combining indexof and slice to find index and delete at the same time so have to practice this
//------------------------ object--------------------------------

// in object we group related data about one thing in the box
// and ther is no need for let when adding new property
// we can access single property with the dot notation
// in real world example like we store user data like email password username etc. and job listing
// MongoDB documents are literally JS objects
// if i am performig some task like like filtering mapping foreach and find first see ans study the question 4-5 times and understand what it says
// and we can perform task like chain connected to each other by using their variables like we can use filter's variable in map to build logic performing task only filtered value and this was my big mistake today so read and understand question
// and if array has object we will use res.property if it does not have objects but strings and numbers then we will use only just res inside method function got it!
// there is two ways to access object property:
// dot notation when you know the properety name
example- student.name
//and second is bracket notation when propeerty name is in a variable
example- student[key]
// in object Object.keys().foreach() is the best way to loop through object
// use bracket notation scores[score] when key is in a variable
//  if we write scores.react i mean one specific key value then it will print on all in foreach but i want all key with their valuuue so we don't use any specifice key value or key we just use bracket notation
// dot notation gives one specific fixed value and bracket notation changes dynamically every loop
// that is why we use bracket notation inside foreach
// ----------------------important---------------
// when we use object.key it converts object into array so we can perform array functions and methods
// in object we can use double notation to get the specif object's key value
// first it checks which item in array then which property in object



// ---------------functions------------------------------
// we use function for repetitive task
//  like adding and substracting through this we do not have to write logic again and again once we made a function and write the  logic  only one time we can use it 
// my weak topic is function right now forgetting syntax
// and instead of returning and storing i print them so i do not have to repeat this mistake again
// and i can do normal functions and logic i get stuck on callback and its logic
// we use call back when we want one function to do different task based on situation
// in real world we use callbacks for example we want to add delete and edit task so we can do this through callback

// ==================26 april 2026  update===================================

// still have to practice on array

// ===================27 april 2026 update===================================

// filanally learnt where i need to create new variable for logic and use
// i solved some problems by myself if there was not then i had made symmitrical syntax and logic structure
// struggling less with logic
// created my own little exercise and solved but struggled with little logic  
// practiced some exercises from previous day without seeing it to improve my logic 


// ----------------------------------DOM-------------------------------------------------
// getElemnetById grabs html elements by ids
// to change the text on web page with the help javascript we use variableName.textcontent and add the new text
// with the help of style.color we can style the webpage through JS
// to add functionality in web page we use functions
// when we want to show something from input box on webpage we use .value next to input variable
// if we want to show numbers on webpage we use either Number() or parseInt() because we have to show number in form of int not string textcontext gives strinf
// again i don'n read questions with full focus so try to read and understand question and logic first