let img=document.getElementById('img')
let amount=document.getElementById('click')
function changeSize() {
    img.width = 120
    img.height = 120
    amount.textContent=Number(amount.textContent)+1
}
if (img.onclick == null) {
img.width = 200 
img.height = 200
}
img.onclick = changeSize
