
let title = document.getElementById('title');
console.log(title);

let label1 =  document.getElementById('nameLabel');
let inputName = document.getElementsByClassName('inputField')[0];
console.log(inputName);
let inputEmail = document.getElementsByClassName('inputField')[1];
let inputPassword = document.getElementsByClassName('inputField')[3];




let loginbtn = document.querySelector('.login');
let signupbtn = document.querySelector('.singup');
loginbtn.addEventListener('click',login);
signupbtn.addEventListener('click',signUp);


function login(){
  loginbtn.style.backgroundColor = 'blue';
  title.textContent = 'Log in';
  inputName.style.maxHeight = 0;
  inputName.style.border = 0;
  label1.textContent = '';
}
function signUp(e){
  signupbtn.style.backgroundColor = 'blue';
  title.textContent = 'Sign up';
  inputName.style.maxHeight = '65px';
  inputName.style.border = '2px solid gray';
  label1.textContent = 'Name';

  if (inputName.value && inputEmail.value && inputPassword){
    alert( `CONGRATULATIONS..YOU SIGN UP SUCCESSFULLY!! `);
    return
  }
}

