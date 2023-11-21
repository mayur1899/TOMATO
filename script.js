let hamburger = document.getElementById("ham");
let menu = document.getElementById("menu");
let order = document.getElementById("b1")
let login = document.getElementById("b2")
let link = document.getElementsByClassName("link_")

hamburger.addEventListener("click", ()=>{
    if (menu.style.top == "-50%"){
        menu.style.top = "10%";
    }else{
        menu.style.top = "-50%";
    }
});

order.addEventListener("click", ()=>{
    alert("YOU CAN ORDER THROUGH ZOMATO");
    open("https://www.zomato.com/india")
})

login.addEventListener("click", ()=>{
    alert("YOU CAN'T LOGIN NOW")
})