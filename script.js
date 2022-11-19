
let img=document.getElementById('img');
let speedf=document.getElementById('speed')
let amount=document.getElementById('click')
function changeSize() {
    this.style.width = (180 - 0.5 + Math.random() * (260 - 180 + 1))+'px'
    this.style.height = (180 - 0.5 + Math.random() * (260 - 180 + 1))+'px'
    amount.textContent=Number(amount.textContent)+1 
    speedf.textContent=Number(speedf.textContent)+1 
    setTimeout((()=> {this.style.width = 200+'px', img.style.height = 200+'px'}),100)
}
img.onclick = changeSize
 
