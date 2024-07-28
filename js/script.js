let firstname=document.querySelector("div.box>input#fn")
let height=document.querySelector("#height")
let weight=document.querySelector("#weight")
let btn=document.querySelector("#btn")
let box=Array.from(document.querySelectorAll("div.item li"))
btn.addEventListener("click",()=>{
let heightvalue=Number(height.value); 
let weightvalue=Number(weight.value); 
let bmi=(weightvalue/(heightvalue*heightvalue))
console.log(bmi);
let sth
let color
if(bmi<16){
    sth="severely underweight"
    color="yellow"
}
else if (18.5>bmi && bmi >16){
    sth="underweight"
    color="yellow"
}
else if (25>bmi && bmi >18.5){
    sth="normal"
    color="green"
}
else if (29>bmi && bmi >25){
    sth="overweight"
    color="orange"
}
else if (35>bmi && bmi >30){
    sth="moderatly obese"
    color="red"
}
else if (40>bmi && bmi >35){
    sth="severely obese"
    color="red"
}
else if (40>bmi){
    sth="morbidy obese"
    color="red"
    
}


function colorbox(sth,color){
box.map((elem)=>{
if(elem.innerHTML==sth){
elem.classList.add(color)
elem.classList.add("key")
}
})}
colorbox(sth,color)

})


