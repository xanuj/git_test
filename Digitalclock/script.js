const clock=document.getElementById("clock")
// const newtime=clock.cloneNode(true)
setInterval(() => {
    const date=new Date()
    clock.innerHTML=date.toLocaleString()
    connsole.log(date.toLocaleString())
    // clock.replaceWith(newtime)
}, 1000);