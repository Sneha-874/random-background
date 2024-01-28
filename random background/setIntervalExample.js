const body = document.body;
const button = document.querySelector("button");
let rgb;
const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
     rgb = `rgb(${red} , ${green} , ${blue})`;
    body.style.background = rgb;
},1000);

button.addEventListener("click" , ()=>{
    clearInterval(intervalId);
    
})
button.addEventListener("click" , ()=>{
    button.textContent =body.style.background;
    
})