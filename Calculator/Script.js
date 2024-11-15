let display = document.getElementById("display");

function evaluate1(val) {
    if(display.innerText==='0'){
        display.innerText=val;
    }
    else{
        display.innerText+=val;
    }
}

function clearDisplay() {
    display.innerText='0';
}

function back(){    
    display.innerText=display.innerText.slice(0,-1);
    if(!display.innerText){
        display.innerText='0';
    }
}

function enter(){
    display.innerText=eval(display.innerText);

}
