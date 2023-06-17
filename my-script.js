const user_con = document.querySelector('.user-container')
const regis_btn = document.querySelector('.registration-btn')
const login_btn =document.querySelector('.login-btn')

regis_btn.addEventListener('click',() =>{
    user_con.classList.add('login-display')
})

login_btn.addEventListener('click',() =>{
    user_con.classList.remove('login-display')
})

function validation(){
    var uname=document.Register-form.username.value;
    if(uname=='')
    {
        alert('Please Enter your Name');
    }
    
    var email=document.Register-form.email.value;
    if(email==''){
        alert('please enter your Email');
    }
}