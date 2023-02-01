const toggle_btn_Id = document.getElementById("toggle_btn");
const close_btn_Id = document.getElementById("close_btn");

const toggle_btn_Cl = document.querySelector(".toggle_btn");
const close_btn_Cl = document.querySelector(".close_btn");



const nav_menu = document.querySelector(".nav_menu");

toggle_btn_Id.addEventListener('click', function(e){
    e.preventDefault();
    nav_menu.style.right = "0"
    close_btn_Cl.style.display = "block";
})

close_btn_Id.addEventListener('click', function(e){
    e.preventDefault();
    nav_menu.style.right = "-100%"
    close_btn_Cl.style.display = "none";
    
})