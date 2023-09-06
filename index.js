const modal = document.getElementById("modal")
const modalBtn = document.getElementById("modal-btn")
const loginData = document.getElementById("")
const form = document.getElementById("consent-form")
const modalInner = document.getElementById("modal-inner")
const modalCloseBtn = document.getElementById("modal-close-btn")
const declineBtn = document.getElementById("decline-btn")
const modalChoiceBtns = document.getElementById('modal-choice-btns')

const formData = new FormData(form)
const fullName = formData.get("fullName")
declineBtn.addEventListener("mouseenter",function(){
    modalChoiceBtns.classList.toggle("modal-btns-reverse")
})
modalCloseBtn.addEventListener("click", function(){
    modal.style.display = "none"
})

setTimeout(function(){modal.style.display = "inline"}, 1500)
form.addEventListener("submit", function(e){
    e.preventDefault()
    document.getElementById("modal-text").innerHTML =  `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    setTimeout(function(){
        document.getElementById("upload-text").innerHTML= `Making The Sale`
    },1500)
    setTimeout(function(){
        modalInner.innerHTML = `<h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>`
    },3000)
    modalCloseBtn.disabled = false
    

    
})

   

