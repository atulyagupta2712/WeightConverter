window.addEventListener("DOMContentLoaded", init);

function init(){
    document.querySelector("#output").className = "hide";
    document.querySelector("#input").addEventListener('keyup', ()=>{
        document.querySelector("#output").className = "show";
        let value= document.querySelector("#input").value;
        document.querySelector("#goutput").innerHTML = value/0.0022046;
        document.querySelector("#kgoutput").innerHTML = value/2.2046;
        document.querySelector("#ocoutput").innerHTML = value*16;
    })
}