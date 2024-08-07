const btn = document.querySelectorAll('.box')
const body = document.querySelector('body')
btn.forEach((item)=>{
    item.addEventListener('click',(e)=>{
    if (e.target.style.backgroundColor === "grey")
    {
        body.style.backgroundColor = e.target.style.backgroundColor
    }
    if (e.target.style.backgroundColor === "white")
        {
            body.style.backgroundColor = e.target.style.backgroundColor
        }
    if (e.target.style.backgroundColor === "blue")
        {
            body.style.backgroundColor = e.target.style.backgroundColor
        }
    if (e.target.style.backgroundColor === "yellow")
        {
            body.style.backgroundColor = e.target.style.backgroundColor
        }
    }) 
})
const homeButton = document.querySelector('.home-btn')
homeButton.addEventListener('click',(e)=>{
    body.style.backgroundColor = "rgb(243, 243, 243)";
})