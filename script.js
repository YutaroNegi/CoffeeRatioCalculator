function getCoffee(){
    let water = Number(document.getElementById("waterInput").value) 
    let ratio = Number(document.getElementById("ratioInput").value)
    let coffee = document.getElementById("coffeeInput")

    coffee.placeholder = Math.ceil(water/ratio) 
}

function getWater(){
    let coffee = Number(document.getElementById("coffeeInput").value)
    let ratio = Number(document.getElementById("ratioInput").value)
    let water = document.getElementById("waterInput")

    water.placeholder = Math.round(coffee * ratio) 
}

function getRatio(){
    let coffee = Number(document.getElementById("coffeeInput").value)
    let water = Number(document.getElementById("waterInput").value)
    let ratio = document.getElementById("ratioInput")

    ratio.placeholder = Math.round(water/coffee)
}