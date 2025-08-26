const form=document.querySelector("form");
const ans=Math.floor(Math.random()*10)+1;
console.log(ans);
let count=10;
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(count<=0) location.reload()
    const value=parseInt(document.getElementById("guessField").value)
    if(value===ans){
        document.querySelector(".resultParas").innerHTML=`YOU GUESSES RIGHT ANS ${value}`
        count=0;
    }
    else{
        count-=1
        let addText;
        if(count===9)
            addText=document.createTextNode(` ${value}`)
        else
            addText=document.createTextNode(`, ${value}`)
        document.querySelector(".lastResult").innerHTML=`${count}`;
        document.querySelector(".guesses").appendChild(addText);
    }
    if(count ===0){
        document.querySelector(".resultParas").innerHTML=`YOUR GUESSES ARE OVER`
    }

});