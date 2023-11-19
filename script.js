let dropdown = document.getElementById("submenu");
let hamburger = document.getElementById("bars");
let isOpen = false;
hamburger.addEventListener('click',()=>{
    if(isOpen ==  false){
        dropdown.style.height = "auto";
        isOpen = true;
    }
    else{
        dropdown.style.height = "0px";
        isOpen = false;
    }
})