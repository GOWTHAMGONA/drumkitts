alert('its been a while');

document.querySelectorAll("button")[0].addEventListener("click",audio1)

function audio1(){
    var audio=new Audio('sounds/crash.mp3')
    audio.play()
}

document.querySelectorAll("button")[1].addEventListener("click",audio2)

function audio2(){
    var audio=new Audio('sounds/kick-bass.mp3')
    audio.play()
}

document.querySelectorAll("button")[2].addEventListener("click",audio2)

function audio2(){
    var audio=new Audio('sounds/snare.mp3')
    audio.play()
}
document.querySelectorAll("button")[3].addEventListener("click",audio3)

function audio3(){
    var audio=new Audio('sounds/tom-1.mp3')
    audio.play()
}
document.querySelectorAll("button")[4].addEventListener("click",audio4)

function audio4(){
    var audio=new Audio('sounds/tom-2.mp3')
    audio.play()
}

document.querySelectorAll("button")[5].addEventListener("click",audio5)

function audio5(){
    var audio=new Audio('sounds/tom-3.mp3')
    audio.play()
}

document.querySelectorAll("button")[6].addEventListener("click",audio6)

function audio6(){
    var audio=new Audio('sounds/tom-4.mp3')
    audio.play()
}








