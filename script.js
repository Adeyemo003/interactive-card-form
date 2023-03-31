const eyeOutline = document.querySelector('.eye-outline')
const logo = document.getElementById('logo')
const detailsBox = document.querySelector(".details-box")
const frontCard = document.querySelector(".front-card-cont")
const backCard = document.querySelector(".back-card-cont h4")
const nameInput = document.getElementById("user-name")
const nameOncard = document.querySelector(".user-name-oncard")
const message1 = document.getElementById("message-1")
const numberInput = document.getElementById("user-card-no")
const numberOncard = document.querySelector(".user-number-oncard")
const message2 = document.getElementById("message-2")
const monthInput = document.getElementById("user-monthofbirth")
const monthOncard = document.getElementById("monthofbirth")
const message3 = document.getElementById("message-3")
const yearInput = document.getElementById("user-birthyear")
const yearOncard = document.getElementById("birthyear")
const cvcInput = document.getElementById("user-cvc")
const cvcOncard = document.getElementById("cvc-oncard")
const message4 = document.getElementById("message-4")
const greeting = document.getElementById("greeting")
const time= document.getElementById("time")
const confirmBtn= document.getElementById("confirmBtn")
const message5 = document.getElementById("message-5")
const secContent = document.querySelector(".second-content")

let array = [
    "Hi!😊",
    "Hello!🤗",
    "Howdy?😉",
    "Sup?😎"
]
const date = new Date() 
console.log(date.toLocaleTimeString())

function randomNumber(){
    randomNumber = Math.floor(Math.random()*4)
    return randomNumber
}

confirmBtn.style.opacity = "0.3"
confirmBtn.addEventListener ('click', function(){
    if(nameInput.value === "" || numberInput.value === "" || monthInput.value === "" || yearInput.value === "" || cvcInput.value === "" ){
        confirmBtn.disabled = true
        message5.textContent = "Input Fields cannot be empty!"
    }else if(!isNaN(nameInput.value) && isNaN(Value) && isNaN(monthInput.value) && isNaN(yearInput.value) && isNaN(cvcInput.value)){
        confirmBtn.disabled = true
        message5.textContent = "Input Field cannot be empty!"
    }else if(monthInput.value > 12 && monthInput.value.length > 2 && yearInput.value < 24 && yearInput.value.length > 2 && cvcInput.value.length < 3){
        confirmBtn.disabled = true
        message5.textContent = "Input Field cannot be empty!"
    }else if(numberInput.value.length < 16){
        message2.textContent = "Please fill input correctly."
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else{
        confirmBtn.disabled = false
        message5.textContent = ""
        secContent.innerHTML = `
        <div class="pyramid-cont">
            <div class="pyramid-loader">
                <div class="wrapper">
                <span class="side side1"></span>
                <span class="side side2"></span>
                <span class="side side3"></span>
                <span class="side side4"></span>
                <span class="shadow"></span>
                </div>  
            </div>
        </div>
        <div class="complete-state-cont">
            <svg width="80px" height="80px" viewbox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
            <h1>THANK YOU!</h1>
            <h3><span id="greeting">${array[randomNumber()]}</span><span id="name-fromcard"> ${nameInput.value}</span> We've added your card details at, <span id="time">${date.toLocaleTimeString()}</span>.</h3>
            <button><a href="#" target="_blank">Continue</a></button>
        </div>
    `   
    }
})

eyeOutline.addEventListener("click" , function(){
    detailsBox.classList.toggle("toggle-details")
    logo.classList.toggle("toggle-details")
    frontCard.classList.toggle("rotate")
    frontCard.classList.remove("card1")

    backCard.classList.toggle("blur")
})

nameOncard.textContent = "Adeyemo Opeyemi"
nameInput.addEventListener("input" , function(){
    if(nameInput.value === ""){
        message1.textContent = "Input Field cannot be empty!"
        nameOncard.textContent = "Adeyemo Opeyemi"
        nameInput.style.border = "2px solid rgb(255, 82, 82)";
        nameInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else if(!isNaN(nameInput.value)){
        message1.textContent = "Input Field cannot be a number!"
        nameOncard.textContent = "Adeyemo Opeyemi"
        nameInput.style.border = "2px solid rgb(255, 82, 82)";
        nameInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else{
        message1.textContent = ""
        nameOncard.textContent = nameInput.value
        confirmBtn.disabled = false
        confirmBtn.style.opacity = "1"
    }
})

numberOncard.textContent = "0000 0000 0000 0000"
numberInput.addEventListener("input", function(){
    let Value = numberInput.value
    console.log(Value)
    if(Value === ""){
        message2.textContent = "Input Field cannot be empty!"
        numberOncard.textContent = "0000 0000 0000 0000"
        numberOncard.textContent = Value
        numberInput.style.border = "2px solid rgb(255, 82, 82)";
        numberInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else if(!isNaN(Value)){
        Value = Value.slice(0, 4) + ' ' + Value.slice(4, 8) + ' ' + Value.slice(8, 12) + ' ' + Value.slice(12, 16);
        numberOncard.textContent = Value
        message2.textContent = ""
        confirmBtn.disabled = false
        confirmBtn.style.opacity = "1"
    }else if(isNaN(Value)){
        message2.textContent = "Wrong format, numbers only"
        numberInput.style.border = "2px solid rgb(255, 82, 82)";
        numberInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else{
        message2.textContent = ""
        numberOncard.textContent = Value
        numberInput.style.border = "2px solid rgb(96, 5, 148)";
        numberInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = false 
        confirmBtn.style.opacity = "1"
    }
})

monthOncard.textContent = "00"
monthInput.addEventListener("input", function(){
    let num = monthInput.value
    if (!isNaN(num) && parseInt(num) < 10 && num > 1 ){
        let paddednum = num.toString().padStart(2, "0")
        monthInput.value = paddednum
        monthOncard.textContent = paddednum
    } else if (num === 0){
        let paddednum = num.toString().padStart(1)
        monthInput.value = paddednum
        monthOncard.textContent = paddednum
    } else if (num >= 1){
        let paddednum = num.toString().padStart(2, "0")
        monthInput.value = paddednum
        monthOncard.textContent = paddednum
    }
    
    if(monthInput.value === ""){
        message3.textContent = "Can't be blank!"
        monthOncard.textContent = "00"
        monthInput.style.border = "2px solid rgb(255, 82, 82)";
        monthInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else if(monthInput.value > 12){
        message3.textContent = "Invalid month input!"
        monthInput.style.border = "2px solid rgb(255, 82, 82)";
        monthInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else if(monthInput.value.length > 2){
        message3.textContent = "Digits not more than 2."
        monthOncard.textContent = "00"
        monthInput.style.border = "2px solid rgb(255, 82, 82)";
        monthInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else if(isNaN(monthInput.value)){
        message3.textContent = "Cannot be an alphabet."
        monthOncard.textContent = "00"
        monthInput.style.border = "2px solid rgb(255, 82, 82)";
        monthInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else{
        message3.textContent = ""
        monthOncard.textContent = monthInput.value
        confirmBtn.disabled = false
        confirmBtn.style.opacity = "1"
    }
})

yearOncard.textContent = "00"
yearInput.addEventListener("input", function(){
    if(yearInput.value === ""){
        message3.textContent = "Can't be blank!"
        yearOncard.textContent = "00"
        yearInput.style.border = "2px solid rgb(255, 82, 82)";
        yearInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else if(yearInput.value < 24){
        message3.textContent = "Expiry year invalid!"
    }else if(yearInput.value.length > 2){
        message3.textContent = "Digits not more than 2."
        yearInput.style.border = "2px solid rgb(255, 82, 82)";
        yearInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else if(isNaN(yearInput.value)){
        message3.textContent = "Cannot be an alphabet."
        yearOncard.textContent = "00"
        yearInput.style.border = "2px solid rgb(255, 82, 82)";
        yearInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else{
        message3.textContent = ""
        yearOncard.textContent = yearInput.value
        confirmBtn.disabled = false
        confirmBtn.style.opacity = "1"
    }
    
})

cvcOncard.textContent = "000"
cvcInput.addEventListener("input", function(){
    
    if(cvcInput.value === ""){
        message4.textContent = "Can't be blank!"
        cvcOncard.textContent = "000"
        cvcInput.style.border = "2px solid rgb(255, 82, 82)";
        cvcInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    } else if(cvcInput.value.length < 3){
        message4.textContent = "CVC digits not less than 3."
        cvcOncard.textContent = cvcInput.value
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else if(isNaN(cvcInput.value)){
        message4.textContent = "Cannot be an alphabet."
        cvcOncard.textContent = "000"
        cvcInput.style.border = "2px solid rgb(255, 82, 82)";
        cvcInput.style.borderRadius = "0.4rem";
        confirmBtn.disabled = true
        confirmBtn.style.opacity = "0.3"
    }else{
        message4.textContent = ""
        cvcOncard.textContent = cvcInput.value
        confirmBtn.disabled = false
        confirmBtn.style.opacity = "1"
    }  
})