function visaHamburger(event){
    let fadeLayer = document.querySelector(".fade-layer")
    fadeLayer.classList.toggle("visible")

    let delay = document.querySelector("#menun")
    delay.classList.toggle("delay")
}

function visaInfo(event){
    let popup = document.querySelector("#popup")
    popup.classList.toggle("produkt_info")
}

function visaInte(event){
    let popup = document.querySelector("#popup")
    popup.classList.toggle("produkt_info")
}