const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');

const btnPopup=document.querySelector('.btnlogin-popup');
const iconlock=document.querySelector('.icon-lock');
registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconlock.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});