let btn=document.getElementById("btn")
let msg=document.getElementById("msg")
btn.addEventListener("click",()=>{
  setTimeout(()=>{
    msg.textContent="hello from the future"
  console.log("hello from future")
//   nested setTimeout
  setTimeout(()=>{
     msg.style.color="green"
 },2000)
  },2000)
 
    })

    // promise
    let promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("success!!");
        },2000);
    })
    promise.then((result)=>{
        console.log(result)  //prints success after 2 sec
    })

    // practice 1
    let promise1=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("i waited 3 seconds")
        }, 3000);
    })
    promise1.then((result)=>{
       console.log(result)
    })

    let promise2=new Promise((resolve,reject)=>{
        let random=Math.random();
        setTimeout(() => {
            if(random>0.1){
                resolve(random)
            }else{
                reject("failed")
            }
        }, 2000);
    })
    promise2.then((result)=>{     //through .then
        console.log(result)
    }).catch((e)=>{
        console.log(e)
    })

    // async await
    async function myFunc() {   //through async await on the same promise
        let result=await promise2
        console.log(result)
    }
    myFunc()

    async function getData() {
        // console.log("Starting...")
    // wait 2 seconds
    await new Promise((resolve)=>{
        setTimeout(() => resolve(),2000);
    
    })
    console.log("Done after 2 seconds!!")
}
    getData()
 
    let promise3=new Promise((resolve)=>{
        setTimeout(() => {
            resolve("hello")
        }, 3000);
    })
    async function sayHello(){
        let result=await promise3;
        console.log(result)
    }
    sayHello()

    // exercise 1
    async function delayedMsg() {
        await new Promise((resolve)=>{
            setTimeout(() => resolve(),2000);
        })
        console.log("i waited!")
    }
    delayedMsg();
    let promise4=new Promise((resolve)=>{
        setTimeout(() => {
            resolve("I WAITED!")
        }, 2000);
    })
    async function delayedMessage(){
        let result=await promise4;
        console.log(result)
    }
    delayedMessage()

    // exercise 2
     async function multipleWaits() {
        // first promise
   let practice2=new Promise((resolve)=>{
    setTimeout(() => {
         resolve("first caught u!!")
         }, 1000);
 })
          let result=await practice2;
           console.log(result)
        //    second promise

         let promise5=new Promise((resolve)=>{
            setTimeout(() => {
                resolve("second caught u !")
            }, 3000)
    })
      let result1=await promise5;
              console.log(result1)
    }
    multipleWaits()


    // exercise 3 
    async function randomResult() {
      let promise6= new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(Math.random()>0.5){
                    resolve("Lucky!")
                }else{
                    reject("Unlucky!")
                }
            }, 2000);
        })
        
    
     try{
        let result=await promise6 
        console.log(result);
     } catch(e){
        console.log('caught:',e)
     }
    }
    randomResult()

    // exercise 4
     async function myPromise() {
        let myPractice=new Promise((resolve)=>{
            setTimeout(() => {
                resolve("muskan")
            }, 1500);
        })
        let result=await myPractice;
        console.log("welcome "+result+" !!")
     }
     myPromise()

    async function practiceAsync() {
        let newPromise= new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve("learning")  
            }, 2000);
        })
        let result=await newPromise;
        console.log(result)
    }
    practiceAsync()

    async function practiceWithError(params) {
        let errorPromise=new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("your code run successful")
            }, 2000);
        })
        try{
        let result=await errorPromise;
        console.log(result)
        }catch(e){
        console.log("error caughht: ",e);
        }
    }
    practiceWithError()

    async function getGithub(params) {
        try{
            let response=await fetch("https://api.github.com/users/muskanm07")
            let data=await response.json()

            console.log(data.name)
            console.log(data.public_repos)
            console.log(data.avatar_url)
        }
    catch(e){
    console.log("throws an error: ",e)
    }
}
getGithub()