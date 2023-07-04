const refresh = document.querySelector('.refresh-btn');
const maxPalette = 30;
const container = document.querySelector('.container');



const generatePalette = () =>{
    container.innerHTML = ""; //clearing the container
for (let i = 0; i < maxPalette; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    let color = document.createElement('li');
    color.classList.add('color');
    color.innerHTML = `<div class="rect-box" style="background:${randomHex}"></div>
    <span class="hex-value">${randomHex}</span>`;
    
   color.addEventListener("click" , () => copyColor(color , randomHex));
   container.appendChild(color);
}

}

generatePalette();

const copyColor = (elem , hexValue) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexValue).then(()=> {
        colorElement.innerText = "Copied";
    })
}


refresh.addEventListener("click" , generatePalette);


