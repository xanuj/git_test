const result=document.getElementById("results")
// console.log(result)
const form=document.querySelector("form")

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    console.log(weight)
    console.log(height)
    let text;
    if(height===''||height<=0|| isNaN(height)){
        const text="Give valid height"
        result.innerHTML=text
    }
    else if(weight===''||weight<=0|| isNaN(weight)){
        // if(text==='')
        const text="Give valid weight"
        // else text.append("and weight")
        result.innerHTML=text
    }
    else {
        const bmi=(weight / (height*height)).toFixed(2)
        const text=`Your bmi is ${bmi}`
        result.innerHTML=text
    }
    
    // text='';
    // console.log(result)
})




