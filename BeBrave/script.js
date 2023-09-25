
let title = document.getElementById('title');


let label1 =  document.getElementById('nameLabel');

let inputName = document.querySelectorAll('input')[0];
let inputEmail = document.querySelectorAll('input')[1];
let inputPassword = document.querySelectorAll('input')[2];

let inputField = document.getElementsByClassName('inputField')[0];
console.log(inputField);

let menubox = document.getElementById('menubox');

let ul = document.querySelector('ul');
let loginsign = document.querySelector('.login-sign');


function secretcheckbox(){
 ul.classList.toggle('mystyle');
 loginsign.classList.toggle('mystyle');
}

let loginbtn = document.getElementsByTagName('button');
loginbtn[0].addEventListener('click',login);

let signbtn = document.querySelector('.signup');
signbtn.addEventListener('click',signupFunc);

function signupFunc (){
  if (inputName.value === '' && inputEmail.value === '' && inputPassword.value === ''){
    title.textContent ='Sign up';
    signbtn.style.backgroundColor = 'blue';
    inputField.style.maxHeight = "65px";
    inputName.style.border = '2px solid gray';
  } else {
    alert(`You're registered successfully!`);
    
  }
}

function login(){
  if (inputEmail.value === '' && inputPassword.value === ''){
  title.textContent ='Log in';
  loginbtn[0].style.backgroundColor = 'blue';
  inputField.style.maxHeight = 0;
  inputField.style.border = 0;
  label1.textContent = '';
  console.log(inputEmail);
  }else {
    alert(`You're log in successfully!`);
  }
  }