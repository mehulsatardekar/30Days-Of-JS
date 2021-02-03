console.log("its working");



function getData(){

let url="https://api.github.com/users";

fetch(url).then((Response)=>{

    return Response.json();
}).then(data=>{

    console.log( data);
})
}



function postData(){

    let url="https://reqres.in/api/users";
    let data =
    `{
        "name": "morpheus",
        "job": "leader"
    }`
    let params ={
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:data
    }

    fetch(url,params).then(Response => Response.json()).then(data=>console.log(data))
}



let getdatabtn= document.getElementById('getdatabtn');
let postdatabtn= document.getElementById('postdatabtn');




getdatabtn.addEventListener('click',()=>{

   getData()
})

postdatabtn.addEventListener('click',()=>{

    postData()
 })

