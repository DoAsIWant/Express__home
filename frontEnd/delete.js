const button = document.querySelector("a");
const form = document.forms.delform;

button.addEventListener("click",()=>{
    let id = form.elements["id"].value;
    fetch(`/delete/:${id}`,{})
})