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
let taskInput=document.getElementById("taskInput");
let addBtn=document.getElementById("addBtn");
let taskList=document.getElementById("taskList");
let counterr=0;
addBtn.addEventListener("click",()=>{
    let showTask=taskInput.value;
    let li=document.createElement("li");
    li.textContent=showTask;
    counterr+=1;
    let delBtn=document.createElement("button");
    delBtn.textContent="Delete";
    delBtn.addEventListener("click",()=>{
       taskList.removeChild(li);
    })
    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskList.prepend(li)     
    taskInput.focus();
  
// to clear the input
    taskInput.value="";
    
   console.log(counterr);
})

// toggleBtn


// exercise 1
let darkBtn=document.getElementById("darkBtn");
darkBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        darkBtn.textContent="Light Mode";
        // document.body.style.backgroundColor="pink"
    }else{
        darkBtn.textContent="Dark Mode";
        // document.body.style.backgroundColor="grey"
    }
    console.log(darkBtn)
})
let card=document.getElementById("card");
let showCard=document.getElementById("showCard");

showCard.addEventListener("click",()=>{
 card.innerHTML=`
          <h2>iphone</h2>
          <p>price:80000</p>
          <p>rating: 5 star</p>
          `
        })
// exercise 3
 let searchInput=document.getElementById("searchInput");
 let searchResult=document.getElementById("searchResult");
 searchInput.addEventListener("input",()=>{
    let showResult=searchInput.value;
    searchResult.textContent="Searching for : "+showResult;

 })
//  exercise 4
 let itemInput=document.getElementById("itemInput");
 let addItem=document.getElementById("addItem");
 let itemList=document.getElementById("itemList");

  addItem.addEventListener("click",()=>{
    let showCase=itemInput.value;
    let li=document.createElement("li");
    li.textContent=showCase;
    let delBtn=document.createElement("button");
     delBtn.textContent="Delete";
      let checkTask=document.createElement("input");
        checkTask.type="checkbox";
        let edit=document.createElement("button");
        edit.textContent="Edit";
        let inputEdit=document.createElement("input");
        inputEdit.value=itemInput.value;
        li.appendChild(inputEdit);
        edit.addEventListener("click",()=>{
          let editTask=itemInput.value;
          itemList.append()
           
        })
    delBtn.addEventListener("click",()=>{
     li.remove();
    });
    checkTask.addEventListener("click",()=>{
        if(checkTask.checked){
            itemList.style.textDecoration="line-through";
        }
    })
    itemList.appendChild(li);
    li.appendChild(edit);
    li.appendChild(delBtn);
    li.appendChild(checkTask)
    itemInput.value="";
    itemInput.focus();
    console.log(itemInput);
  console.log(addItem);
console.log(itemList);
 })
 
  let colorPicker=document.getElementById("colorPicker");
  let colorText=document.getElementById("colorText");
  colorPicker.addEventListener("input",()=>{
   let showColor=colorPicker.value;
//      colorText.style.color=showColor;
//    console.log(showColor)
  console.log(showColor)
  document.body.style.backgroundColor = showColor  // yeh add kar!!
  colorText.textContent = "Color: " + showColor
  })
  
//   practice 1
let countWord=document.getElementById("countWord");
let action=document.getElementById("action");
action.addEventListener("click",()=>{
 
    let count=countWord.value;
    if(count.length>12){
     alert("you reached the limit")
    }
    
})
// keyboard Events
let input=document.getElementById("taskInput");
input.addEventListener("keypress",(e)=>{
    console.log(e)
    console.log(e.key);
    console.log(e.keyCode);
    // if Enter key pressed
    if(e.key="Enter"){
        console.log("Enter pressed!")
    }
})
let mouseEvent=document.getElementById("darkBtn");

//  when mouse hovers
mouseEvent.addEventListener("mouseover",()=>{
   mouseEvent.style.backgroundColor="wheat";
})
// mouseEvent.addEventListener("mouseleave",()=>{
//    mouseEvent.style.backgroundColor="blue";
// })

mouseEvent.addEventListener("mousedown",()=>{
   mouseEvent.style.backgroundColor="yellow";
})
mouseEvent.addEventListener("mouseup",()=>{
   mouseEvent.style.backgroundColor="#614848";
})

mouseEvent.addEventListener("mouseout",()=>{
   mouseEvent.style.backgroundColor="black";
})
// exercise 1
let textArea=document.getElementById("textArea");
let charCount=document.getElementById("charCount");
textArea.addEventListener("input",(e)=>{
   
  let charTextArea=Number(textArea.value.length);
  charCount.textContent=charTextArea+"/100";
  if(charTextArea>=100){
   textArea.disabled=true;
    // charCount.textContent="you have reached the limit";
    textArea.style.border="2px solid red";
    console.log("reached the limit")
  }else{
    console.log("great ")
  }
})
// exercise 2
let colorBox=document.getElementById("colorBox");
let colorCode=document.getElementById("colorCode");
let colorInput=document.createElement("input")
colorInput.type="color";
let randomColor=()=>{
  let hex=Math.floor(Math.random()*16777215).toString(16);
  return "#"+hex;
}
colorBox.addEventListener("click",()=>{
   
     let chooseColor=randomColor()
     colorBox.style.backgroundColor=chooseColor;
     colorCode.textContent="color: "+chooseColor;
})

// exercise 3
let noteInput=document.getElementById("noteInput");
let noteList=document.getElementById("noteList");

noteInput.addEventListener("keypress",(e)=>{
    let li=document.createElement("li");
    let checkbox=document.createElement("input");
    checkbox.type="checkbox"
    if(e.key=="Enter"){
    let showInput=noteInput.value;
      li.textContent=showInput;
      noteList.appendChild(li);
      console.log(showInput)
       noteInput.value="";
}    
  checkbox.addEventListener("click",()=>{
    if(checkbox.checked){
      li.style.textDecoration="line-through";
}
})
  
    li.appendChild(checkbox)

})
let openGithub=document.getElementById("openGithub")
openGithub.addEventListener("click",()=>{
  let anchor=document.createElement("a");
   anchor.href="https://api.github.com/users/muskanm07".value;
    let openLink=anchor;
    document.body.textContent=openLink;
       openGithub.appendChild(anchor);
    
})
  



