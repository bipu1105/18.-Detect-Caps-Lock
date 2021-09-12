let passField = document.querySelector('.form-pass');
let warning = document.querySelector('.warning')

passField.addEventListener('keydown' , function(event){
    // when my caps lock is enable then getModifierState method will return true and if caps
    // lock is disable then it will return false
    let x = event.getModifierState('CapsLock');
    if(x == true){
        warning.style.display = 'block'
    }else{
        warning.style.display = 'none'
        
    }
})