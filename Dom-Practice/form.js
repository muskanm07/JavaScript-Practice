let nameField=document.getElementById("nameField")
let emailField=document.getElementById("emailField")
let submitBtn=document.getElementById("submitBtn")
 let message1=document.getElementById("message1")
  
submitBtn.addEventListener("click",()=>{
  let nameReuired= nameField.value;
  let emailRequired=emailField.value;
  if(nameReuired==""){ 
    
     message1.textContent="name is required!!"
      message1.style.color="red"
      
     
  
  }else if(emailRequired==""){
    message1.textContent="email is required !!";
   message1.style.color="red";
  
  }else{
    message1.textContent="Form Submitted";
    message1.style.color="green"
    submitBtn.style.backgroundColor="green"
  }
})

