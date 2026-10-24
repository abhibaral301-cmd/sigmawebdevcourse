let button = document.getElementsById("btn")
// list of all mouse events

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click please")
})
button.addEventListener("keydown", ()=>{
    alert("Dont hack us by Right click please")
})