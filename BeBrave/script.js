
let title = document.getElementById('title');


let label1 =  document.getElementById('nameLabel');
let inputName = document.getElementsByClassName('inputField')[0];
let inputEmail = document.getElementsByClassName('inputField')[1];
let inputPassword = document.getElementsByClassName('inputField')[2];

let menubox = document.getElementById('menubox');

let ul = document.querySelector('ul');
let loginsign = document.querySelector('.login-sign');


function secretcheckbox(){
 ul.classList.toggle('mystyle');
 loginsign.classList.toggle('mystyle');

 let loginbtn = document.getElementsByTagName('button');
 loginbtn[0].addEventListener('click',console.log('ass'));

 let signbtn = document.querySelector('.signup');
 signbtn.addEventListener('click',signupFunc);

function loginFunc(){
  alert('xzxzxz');
}

}



// function login(){
  
//   loginbtn.style.backgroundColor = 'blue';
  // title.textContent = 'Log in';
  // inputName.style.maxHeight = 0;
  // inputName.style.border = 0;
  // label1.textContent = '';
// }
// function signUp(){
//   signupbtn.style.backgroundColor = 'blue';
//   title.textContent = 'Sign up';
//   inputName.style.maxHeight = '65px';
//   inputName.style.border = '2px solid gray';
//   label1.textContent = 'Name';
// }