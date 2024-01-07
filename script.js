// getting the submit button
const submitBtn = document.querySelector('.sub-btn');

const checkPasswordEquality = (e) =>{
    //getting values from DOM elements
    const password = document.querySelector('#password');
    const confirmedPassword = document.querySelector('#confirm-password');
    const pwNotMatchText = document.querySelector('.pw-not-match');

    // checking and manipulating
    if(password.value == confirmedPassword.value){
        password.classList.remove('red-border');
        confirmedPassword.classList.remove('red-border');
        pwNotMatchText.style.display = 'none';
    }
    else{
        //preventing page refresh
        e.preventDefault();
        password.classList.add('red-border');
        confirmedPassword.classList.add('red-border');
        pwNotMatchText.style.display = 'block';
    }
}

//calling the checker function when submit button is clicked
submitBtn.addEventListener('click', checkPasswordEquality);