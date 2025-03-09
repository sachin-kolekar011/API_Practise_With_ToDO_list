console.log("Hare Krishna") ;

// let userSeq = [] ;
// let gameSeq = [] ;

// let started = false ;
// let level = 0 ;
// document.addEventListener('keypress' , function ()
// {
//     if(started == false )
//     {
//         console.log("Game started") ;
//         started = true ;
//     }
// })



// function SaveData(data)
// {
//     return new Promise((resolve , reject)=>
//     {
//         let rand =Math.floor(Math.random() * 10) + 1 ;
//         if(rand > 4)
//         {
//             resolve("Data Saved") ;
//         }
//         else 
//         {
//             reject("Fail to save the data") ;
//         }
//     });
// }


// SaveData("Good Job")
//     .then((result) =>
//     {
//         console.log("Data Saved 2") ;
//         console.log(result) ;
//         return SaveData("Second Step") ;
//     })
//     .then((result)=>
//     {
//         console.log(" Data Saved 3") ;
//         console.log(result) ;
//         return SaveData("third Step") ;
//     })
//     .then ((result)=>
//     {
//         console.log("Data Saved 4") ;
//         console.log(result) ;
//         return SaveData("Fouth Step ") ;
//     })
//     .catch((err)=>
//     {
//         console.log("Promise is Rejected");
//         console.log(err) ;
//     });


// let h3 = document.querySelector('h3') ;

// let givecolor = (color , delay) => {
//     return new Promise((resolve,reject) =>{
//      setTimeout(() =>{
//         h3.style.color = color 
//         resolve();
//         console.log("function executed")
// },delay);
//     });
// };
    
    

//  function demo(givecolor)
// {
//      givecolor("red",1000) ;
//      givecolor("orange",1000) ;
//      givecolor("yellow",1000) ;
//      givecolor("green",1000) ;
//      givecolor("blue",1000) ;
//      givecolor("white",1000) ;
//      givecolor("violet",1000) ;

// }

// demo(givecolor) ;


// let url="https://fake-json-api.mock.beeceptor.comg/use" ;

// fetch(url)
// .then((res) =>
// {
//     console.log("Data fetched") ;
//     return res.json();
   
// })
// .then((data) =>
// {
//     console.log("data1",data) ;
//     return fetch(url);
// })
// .then((res) =>
// {
//     return res.json();
    
// })
// .then ((data) =>
// {
//     console.log("data2 ",data);
// })

// .catch((err)=>
// {
//     console.error("Error Found :" , err) ;
// })


// async function getRes()
// {
//     try {
//         let res =  await fetch(url) ;
//         let data =  await res.json() ;
//         console.log(res) ;
//         console.log(data) ;

//     }
//     catch(er){
//         console.log("Error Found :",er) ;
//     }
//     console.log('by') ;
// }

let resDiv = document.querySelector('#res') ;

let button = document.querySelector('button');
button.addEventListener('click' , async () =>
{
    console.log("Button Clicked") ;
    let output = await getRes() ;

     (funShowtile(output)) ;
})

let funShowtile = (output) =>
{
    
        resDiv.innerHTML ="" ;

        output.forEach(element =>
        {
            let p = document.createElement('p') ;
            p.classList.add('individual-list') ;
            p.innerText = element.title ;

            resDiv.appendChild(p) ;
        }
        );
    
}


let url="https://dummy-json.mock.beeceptor.com/todos" ;



async function getRes()
{
    try {
        let res =  await axios.get(url) ;
       
        return res.data;
       

    }
    catch(er){
        console.log("Error Found :",er) ;
    }
    console.log('by') ;
}


// getRes();

