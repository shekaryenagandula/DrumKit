for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        buttonInnerHTML=this.innerHTML
        handleClicksAndKeys(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keypress",function(e){
    handleClicksAndKeys(e.key);
    buttonAnimation(e.key);
})

function handleClicksAndKeys(key){

    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');    
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');    
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');    
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');    
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');    
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');    
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');    
            break;
        default:
            console.log("not in scope.")
            break;
    }
    audio.play();
}

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed")
    setTimeout(() => {
        document.querySelector("."+currentKey).classList.remove("pressed")
    }, 100);
}