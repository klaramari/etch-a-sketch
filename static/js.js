document.addEventListener("DOMContentLoaded", makeRectangles(16, "blue"));

function makeRectangles(side, color){
    let cont;
    const container = document.querySelector(".container")
    
    if (container.hasChildNodes()) {
         container.innerHTML = "";
    }
    for (let h = 0; h < side; h++){
        cont = document.createElement('div');
        cont.id = "cont" + h;
        cont.className ="therows";
        container.appendChild(cont);
    
        for (let i = 0; i < side; i++){
            let div = document.createElement('div')
            div.id = "row" + h + "div" + i
            //div.innerHTML = ''
            div.className = "thedivs"
            sides = 960/side;

            div.style.width = sides + "px";
            div.style.height = sides + "px";
            cont.appendChild(div);
        }
    }
    const divs = document.querySelectorAll(".thedivs");

    divs.forEach((div) => {
        div.addEventListener("mouseover", function (e){
            e.target.style.background = color;
        })
    })
    
}

const opener = document.querySelector(".thebutton");
opener.addEventListener("click", changeRectangles);

function changeRectangles (){
    let side;
    do {
    side = prompt("How many squares per side? (max 100)");
    } while (side > 100 || !Number(side));
    makeRectangles(side, "blue");
};

// const closer = document.querySelector("#nein");
// closer.addEventListener("click", function (){closePopup()});

// function closePopup(){
//     const popup = document.querySelector(".blur");
//     console.log(popup)
//     popup.remove();
// }





