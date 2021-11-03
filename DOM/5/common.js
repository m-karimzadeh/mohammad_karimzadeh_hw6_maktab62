function checkInput(){
    document.getElementById('bodyInputText').innerText = document.getElementById('bodyInput').value;
}

document.getElementById('bodyInput').onkeyup = function (){
    checkInput();
}

document.getElementById('bodyInput').onkeypress = function (){
    checkInput();
}