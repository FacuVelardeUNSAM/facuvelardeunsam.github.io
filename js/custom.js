
async function onLoad(url){
    document.getElementById("contenido").innerHTML= await (await fetch(url)).text();
}

function collapse(){
    let navbar = document.getElementById("navbarNav")
    if (screen.width < 576) {
        navbar.classList.toggle('show')
    }
}