function matching(){
    var input = document.getElementById('password')
    var confirm = document.getElementById('confirmPassword')

    if(input.value != confirm.value)
        input.setCustomValidity('Passwords must match')
    else
        input.setCustomValidity('')
}