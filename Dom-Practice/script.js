let title=document.getElementById("title");
let para=document.getElementById("para");
let btn=document.getElementById("btn");
title.textContent="I am learning DOM !!"
title.style.color="blue";
title.style.fontSize="30px";
para.textContent="JS is Controlling Now";

btn.addEventListener("click",()=>{
title.textContent="you clicked me Bro!!!!!!!"
title.style.color="red";
para.textContent="Button Was Clicked"
btn.style.color="white";
btn.style.backgroundColor="blue";
})
console.log(title);
console.log(para);
console.log(btn);


// Exercise 1
let btn2=document.getElementById("btn2");

btn2.addEventListener("click",()=>{
    let btnColor=["green","yellow","red"];
  
   let randomIndex=Math.floor(Math.random()*btnColor.length);
      btn2.style.backgroundColor=btnColor[randomIndex];
    
})

let secret=document.getElementById("secret");
let toggleBtn=document.getElementById("toggleBtn");

toggleBtn.addEventListener("click",()=>{
   if(secret.style.display=="block"){
   secret.style.display="none";
   toggleBtn.textContent = "Hide"
   } 
   else{
    secret.style.display="block";
    toggleBtn.textContent = "Show"
   }
})
let nameInput=document.getElementById("nameInput");
let greetBtn=document.getElementById("greetBtn");
let greetMsg=document.getElementById("greetMsg");

greetBtn.addEventListener("click",()=>{
    let value=nameInput.value;
    greetMsg.textContent="Hello "+value+" !!";
})
let count=document.getElementById("count");
let increment=document.getElementById("increment");
let decrement=document.getElementById("decrement");

increment.addEventListener("click",()=>{
    let currentCount=parseInt(count.textContent);
    currentCount=currentCount+1;
    count.textContent=currentCount;
})
decrement.addEventListener("click",()=>{
     let currentCount=parseInt(count.textContent);
     if(currentCount>0){
        currentCount=currentCount-1;
        count.textContent=currentCount;
    }
      else{
      currentCount=0;
    }
})



// Exercise
let ammountInput=document.getElementById("ammountInput");
let tipPercentage=document.getElementById("tipPercentage");
let amt=document.getElementById("amt");
let calculate=document.getElementById("calculate");
calculate.addEventListener("click",()=>{

   let tip=Number(ammountInput.value)*(Number(tipPercentage.value)/100);
   let res=Number(ammountInput.value)+tip;

   let final=Number(amt.textContent);
   final=res;
   amt.textContent=final;
   console.log(res);
    
})

