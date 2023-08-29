document.addEventListener("DOMContentLoaded", makeRectangles(16, "black"));

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
            if (color == "darker"){
                div.style.backgroundColor = "antiquewhite";
            }
            div.style.filter = "brightness(1)";
            div.style.width = sides + "px";
            div.style.height = sides + "px";
            cont.appendChild(div);
        }
    }
    const divs = document.querySelectorAll(".thedivs");
    let colornow;
    divs.forEach((div) => {
        div.addEventListener("mouseover", function (e){
            
            if (color == "random"){
                e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
            }
            else if (color == "darker"){
                colornow = e.target.style.filter;
                console.log(colornow);
                
                colornow = (Number(colornow.slice(11,-1)) * 0.9).toFixed(2);
                
                console.log(colornow);
                e.target.style.filter = "brightness(" + colornow + ")"; 
            }
            else {
            e.target.style.background = color;
            }
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
    let color;
   
    color = prompt("Which color to paint? Type the name of a color or type 'Random' for random colors. You can also type 'Darker' to have a color gradient.");
    color = color.toLowerCase();
    makeRectangles(side, color);
};



// const closer = document.querySelector("#nein");
// closer.addEventListener("click", function (){closePopup()});

// function closePopup(){
//     const popup = document.querySelector(".blur");
//     console.log(popup)
//     popup.remove();
// }





