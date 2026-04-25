console.log("hi muskan");   
let myName="muskan";
let age=19;
let isReady=true;
console.log(myName); 
console.log(age);
console.log(isReady);
console.log(" my name is "+myName +" i am " + age +" years old "+" my future is Ready and its "+ isReady);               
// exercise 1
let favouriteColor="blue";
let city="Raebareli";
let codePractice="2-3 hours max";
console.log("I am from "+city+" my favourite color is "+favouriteColor+" and i can give "+codePractice+" daily");

// exercise 2
let myAge=30;
if(myAge<20){
    console.log("you are a teenager");
}
else if(myAge>=20 && myAge<=29 ){
console.log("you are in your 20s");
}
else{
    console.log("you are 30 or above");
}
 
// exercise 3
let hoursCodeToday=2;
if(hoursCodeToday>1){
    console.log("Future Muskan Is Proud");
} else if(hoursCodeToday==1){
    console.log("Almost There");
} else{
    console.log("Open VS Code now")
}
// arrays
let Skills=["HTML","CSS","JavaScript","React JS","node"];
console.log(Skills[0],Skills[1],Skills[2],Skills[3]);
Skills.push("NODE JS");
console.log(Skills);
Skills.pop();
console.log(Skills);
Skills.shift();
console.log(Skills);
Skills.unshift("HTML");
console.log(Skills);
Skills.forEach(function(Skill){
console.log("i know "+ Skill);
});
Skills.forEach(function(Skill){
    console.log(" i am learning "+Skill+ " and it will get me a job");
});
Skills.forEach((Skill)=>{
console.log(" i know "+Skill);
})

// map 
let upperSkills=Skills.map((Skill)=>{
    return Skill.toUpperCase();
})
console.log(upperSkills);

let mapPractice=Skills.map((Skill)=>{
    return "i know "+Skill;
})
console.log(mapPractice);
// filter
let number=[1,3,5,4,7,2];
let evenNum=number.filter((number)=>{
    return number%2==0;
})
console.log(evenNum);
let oddNum=number.filter((number)=>{
    return number%2!=0;
})
console.log(oddNum);
// challenge 1
let numbers=[1,2,3,4,5,6,7,8,9,10];
let greatNums=numbers.filter((number)=>{
    return number>5;
})
console.log(greatNums);
// challenge 2
let skillFilter=Skills.filter((Skill)=>{
    return Skill.length>3;
})
console.log(skillFilter);

let findNum=numbers.find((number)=>{
    return number>7;
})
console.log(findNum);

// methods ----------------------
//  ------slice------
let firstTwo=Skills.slice(1,4);
console.log(firstTwo);
console.log(Skills);

// -------includes--------
console.log(Skills.includes("CSS"));
console.log(Skills.includes("Python"));
console.log(Skills.indexOf("JavaScript"));
console.log(Skills.indexOf("Python"));

// -------splice-----------------
Skills.splice(1,2)
console.log(Skills);



// practice exercise
let students=[
    {name:"Muskan",marks:91,city:"Kanpur"},
    {name:"Priya",marks:45,city:"Delhi"},
    {name:"Riya",marks:72,city:"Kanpur"},
    {name:"Sneha",marks:33,city:"Mumbai"},
    {name:"Anjali",marks:85,city:"Delhi"}
]
let studentName=students.map((student)=>{
    return student.name;
})
console.log(studentName);
let studentScore=students.filter((student)=>{
    return student.marks>60;
})
console.log(studentScore);
let studentAddrs=students.filter((student)=>{
    return student.city=="Kanpur";
})
console.log(studentAddrs);
let stuMark=students.find((student)=>{
    return student.marks<50;
})
console.log(stuMark);


// object
// exercise 1
let myProfile={
    name:"muskan maurya",
    age:20,
    city:"kanpur",
    skills:["HTML","CSS","JavaScript","React JS","NODE JS","Express JS","MongoDB"]
}
console.log(myProfile.name);
console.log(myProfile.age);
console.log(myProfile.city);
console.log(myProfile.skills);
// exercise 2
let phone={
    brand:"Samsung Galaxy A12",
    price:125000,
    color:"cherry red"
}
phone.price=150000;
phone.isAvailable=true;
console.log(phone.isAvailable);
console.log(phone.price);

// final boss exercise
let stu=[
    {name:"Muskan",marks:91,city:"Kanpur"},
    {name:"Priya",marks:45,city:"Delhi"},
    {name:"Riya",marks:72,city:"Kanpur"},
    {name:"Sneha",marks:33,city:"Mumbai"},
    {name:"Anjali",marks:85,city:"Delhi"}
]

let passStu=stu.filter((res)=>{
    return res.marks>=40;
})
console.log(passStu);

let passStuNames=passStu.map((res)=>{
    return res.name;
})
console.log(passStuNames);
passStuNames.forEach((res)=>{ 
console.log("Congratulations "+ res+" you Passed!");
})
let findstudent=stu.find((res)=>{
    return res.city=="Kanpur";
})
console.log(findstudent);
// object method
let stu1={
    name:"muskan",
    city:"kanpur",
    age:19,
    skills:["HTML","CSS","JavaScript"]
}
console.log(Object.keys(stu1));
console.log(Object.values(stu1));
console.log(Object.entries(stu1))
Object.keys(stu1).forEach((key)=>{
    console.log(key+" : "+stu1[key]);
})
// exercise
let scores={
    javascript:85,
    react:72,
    nodejs:68,
    mongodb:90
}
Object.keys(scores).forEach((score)=>{
    console.log(score+" score is "+scores[score]);
})

// Exercise
let products=[
    {name:"iphone",price:80000,category:"phone",inStock:true},
    {name:"Samsung",price:45000,category:"phone",inStock:false},
    {name:"MacBook",price:120000,category:"laptop",inStock:true},
    {name:"Dell",price:60000,category:"laptop",inStock:true},
    {name:"ipad",price:40000,category:"tablet",inStock:false}
]
// Q1
let isAvailable=products.filter((product)=>{
    return product.inStock==true;
})
console.log(isAvailable);
// Q2
let underPrice=products.filter((product)=>{
    return product.price<=70000;
})
console.log(underPrice);
// Q3
let productNames=products.map((product)=>{
    return product.name;
})
console.log(productNames);
// Q4
let findLaptop=products.find((product)=>{
    return product.category=="laptop";
})
console.log(findLaptop);
// Q5
let getProducts=isAvailable.map((product)=>{
    return product.name;
})
console.log(getProducts);
// Q6
Object.keys(products[0]).forEach((product)=>{
   console.log( product+" : "+products[0][product]);
})

// Q7
let categories=["phone","laptop","tablet"];
console.log(categories.includes("smartwatch"));
// Q8
let brands=["apple","samsung","dell","hp"];
let findIndex=brands.indexOf("samsung");
brands.splice(findIndex,1);
console.log(brands);


// ------------function-------------------------
let nameGreet=function greet(name,city){
    console.log("HI i am "+name+" from "+city)
}
nameGreet("muskan","kanpur");

function isPass(marks){
    if(marks>=40){
        return "pass!"
    }else{
        return "fail!"
    }
}
console.log(isPass(40));
console.log(isPass(35));
console.log(isPass(70));
 function birthYear(currentYear,bornYear){
    let Age=currentYear-bornYear;
 console.log(Age);
 }
 birthYear(2026,2005);
// ---------------------- arrow function-----------------------
 let greet=(name,city)=>{
    return "my name is "+name+" i am from "+city;
 }
 let greeting=greet("muskan","kanpur");
 console.log(greeting);
 let ispASS=(marks)=>{
    if(marks>=40){
        return "pass!";
    
    }else{
        return "fail";
    }
 }
 let pass=ispASS(56);
 console.log(pass);

 let calculateAge=(birthyear)=>{
    return 2026-birthyear;
 }
let total=calculateAge(2006);
console.log(total);

function greets(name,callback){
    console.log("hi "+ name);
    callback()  //calling the function passed in
}
    function sayBye(){
        console.log("bye");
    }
    greets("muskan",sayBye);
// function practice 


let calculate=(num1,num2,callback)=>{
    let result=callback(num1,num2);
    console.log(result);
    
}

let add=(num1,num2)=>{
    return num1+num2;
}
let multiply=(num1,num2)=>{
    return num1*num2;
}
calculate(5,6,add);
calculate(2,3,multiply);

// exercise 1
let multi=(a,b)=>{
    return a*b;
}
let res=multi(88,67);
console.log(res);
// exercise 2
let checkOddEven=(num)=>{
    if(num%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
checkOddEven(6);
// exdercise 3
let stu5=[
    {name:"muskan",marks:85},
    {name:"priya",marks:33},
    {name:"riya",marks:72},
    {name:"sneha",marks:40}
]
let getPassedStudents=(stu5)=>{
    let calc=stu5.filter((res)=>{
        return res.marks>=40;
       
    })
   return calc;
}
let result=getPassedStudents(stu5);
console.log(result);

// exercise 4
let Operate=(num1,num2,callback)=>{
 let result = callback(num1,num2);
 console.log(result);
}
let addition=(num1,num2)=>{
return num1+num2;
}
let substract=(num1,num2)=>{
  return num1-num2;  
}
let divide=(num1,num2)=>{
 return num1/num2;   
}
Operate(45,67,addition);
Operate(56,60,substract);
Operate(60,7,divide);

// exercise 5
let stu6=[
    {name:"muskan",marks:85,city:"delhi"},
    {name:"priya",marks:33,city:"kanpur"},
    {name:"riya",marks:72,city:"gurgaon"},
    {name:"sneha",marks:40,city:"noida"}
]
let describeStudent=(stu6)=>{
 let greet=stu6.forEach((res)=>{
    let status=res.marks>=40?"Pass!!":"fail!!"
    console.log(res.name + " is from "+res.city+" and scored "+res.marks +" and is "+status)
 })
 
}
describeStudent(stu6);

