let colorCode = document.querySelector('.colorCode');
const btn = document.querySelector('.btn');
let container = document.querySelector('.container');

function changeColor(){
    let randomHexNum = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    // console.log(randomHexNum)
    colorCode.innerHTML = randomHexNum;
    container.style.backgroundColor = randomHexNum;
}


btn.addEventListener('click', changeColor);