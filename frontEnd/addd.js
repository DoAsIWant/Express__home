 const btn = document.querySelector(".waves-effect");
 const form = document.forms.myform;
 console.dir(form);
 const data = {

 }
 btn.addEventListener("click",()=>{
     data.name = form.elements["name"].value;
     data.price = form.elements["price"].value;
     data.id = form.elements["id"].value;
     console.log(data);
     fetch("/add:post",{
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: {
          'Content-Type': 'application/json'
        }
     }).then((data)=>{return data.json()})
     .then((data=>{
        console.log(data);
     }));
 })