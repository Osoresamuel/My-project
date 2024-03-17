const btn = document.querySelector("#hamburger")
btn.addEventListener("click", () => {
    if (btn.innerText == 'Open'){
        btn.innerText == "nav"
    }
    else{
        btn.innerText =='close'
    }
    document.getElementById('main-nav').classList.toggle('showMenu')
})