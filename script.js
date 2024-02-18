let count = document.getElementById("box").innerText=0;

function increase(){
    document.getElementById("box").innerText = count+1;
    count = count + 1;
}

function decrease(){
    document.getElementById("box").innerText = count - 1;
    count = count-1;
}

function reset(){
    document.getElementById("box").innerText = 0;
    count = 0;
}