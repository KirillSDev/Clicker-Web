
let img=document.getElementById('img');
let container =document.getElementById('cont-1')
let speedf=document.getElementById('speed')
let amount=document.getElementById('click')
let quantitySec=document.getElementById('click')
const appearImg = document.getElementById('score-1')
let stylePropert = window.getComputedStyle(container)
quantitySec=0
const timeAll = new Date()
function scoreAdd() {
   appearImg.style.display='inline'
    console.log(stylePropert.width.split('px')[0])
    appearImg.style.left=( 0 - 0.5 + Math.random() * ((stylePropert.width.split('px')[0]) - 180 + 1))+'px'
    appearImg.style.right=( 0 - 0.5 + Math.random() * ((stylePropert.width.split('px')[0]) - 180 + 1))+'px'
    appearImg.style.top=( 0 - 0.5 + Math.random() * ((stylePropert.height.split('px')[0]) - 180 + 1))+'px'
    appearImg.style.bottom=( 0 - 0.5 + Math.random() * ((stylePropert.height.split('px')[0]) - 180 + 1))+'px' 
    setTimeout((()=> {appearImg.style.display='none'}),300)
}
function changeSize() {
    this.style.width = (180 - 0.5 + Math.random() * (260 - 180 + 1))+'px'
    this.style.height = (180 - 0.5 + Math.random() * (260 - 180 + 1))+'px'
    amount.textContent=Number(amount.textContent)+1 
    setTimeout((()=> {this.style.width = 200+'px', img.style.height = 200+'px'}),100)
    scoreAdd()
}
img.onclick = changeSize
 
