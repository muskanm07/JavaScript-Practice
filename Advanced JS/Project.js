let fetchBtn=document.getElementById("fetchBtn")
let githubName=document.getElementById("githubName")
let repoCount=document.getElementById("repoCount")

async function getData() {
        fetchBtn.addEventListener("click",async()=>{
   try{

     let response=await fetch("https://api.github.com/users/muskanm07")
        let data= await response.json();
     
             console.log("hello")
            let myName=data.name;
            githubName.textContent=myName;
            
            let avatar=document.getElementById("avatar").src= data.avatar_url;
            console.log(avatar)

            let myRepo=data.public_repos;
             repoCount.textContent=myRepo
                console.log(myName)
 } catch(e){
        console.log("error",e)
    }
        })
  
}
getData()


// fetch ecercise 2
let usernameInput=document.getElementById("usernameInput")
let searchBtn=document.getElementById("searchBtn")
let userName=document.getElementById("userName")
let userBio=document.getElementById("userBio")
let userRepos=document.getElementById("userRepos")

async function githubFinder(params) {
    searchBtn.addEventListener("click",async()=>{
        try{
        let nameInput=usernameInput.value
        let response=await fetch("https://api.github.com/users/"+nameInput)
        let githubData=await response.json()
       
        // user github avatar
       let userAvatar=document.getElementById("userAvatar").src=githubData.avatar_url
    
    //    users github username
       let gather=githubData.name
        userName.textContent=gather;

        // users github bio
        let githubBio=githubData.bio
        userBio.textContent=githubBio
        // user repos count
         let myRepo=githubData.public_repos;
             userRepos.textContent=myRepo
                console.log(myRepo)

        }catch(e){
          
              console.log(e,"error")
        }
    })
}
githubFinder()