let btn= document.querySelector("button");

btn.addEventListener("click",function (){
    let color=getRandomColor();
    let h3=document.querySelector("h3");
    h3.innerText=color;

    let div=document.querySelector("#div1");
    div.style.backgroundColor=color;
});

function getRandomColor(){
    let red= Math.floor(Math.random()*256);
    let green= Math.floor(Math.random()*256);
    let blue= Math.floor(Math.random()*256);

    let color= `rgb(${red}, ${green}, ${blue})`;
    return color;
}