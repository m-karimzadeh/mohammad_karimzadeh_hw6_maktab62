let inputIdArray = ['username', 'password', 'rePassword']

for(let i of inputIdArray){
    let elementName = document.getElementById(i);

    elementName.onfocus = function(){
        this.parentElement.classList.add('active')
    }

    elementName.onblur = function(){
        if(this.value == ''){
            this.parentElement.classList.remove('active')
        }
    }
    
}

function checkForm(thisForm){
    if(thisForm.username.value == ''){
        document.getElementById('usernameError').style.display = 'block';
        return false;

    }else{
        document.getElementById('usernameError').style.display = 'none';
    }

    if(thisForm.password.value.length < 8 || !(/[A-Z]+/.test(thisForm.password.value)) || !(/[0-9]/.test(thisForm.password.value))){
        document.getElementById('passwordError').style.display = 'block';
        return false;

    }else{
        document.getElementById('passwordError').style.display = 'none';
    }

    if(thisForm.password.value !== thisForm.rePassword.value){
        document.getElementById('rePasswordError').style.display = 'block';
        return false;

    }else{
        document.getElementById('rePasswordError').style.display = 'none';
    }
}