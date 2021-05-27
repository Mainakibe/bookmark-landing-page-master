// tabs

function setupTabs(){
    document.querySelectorAll('.box-btn').forEach(button=>{
        button.addEventListener('click',()=>{
            const titlesBox = button.parentElement
            const tabs = titlesBox.parentElement
            const tabNumber=button.dataset.forTab
            const tabToActivate = tabs.querySelector(`.tabs-content[data-tab="${tabNumber}"]`)

            titlesBox.querySelectorAll('.box-btn').forEach(button=>{
                button.classList.remove('box-btn-active')
            })
            tabs.querySelectorAll('.tabs-content').forEach(tab=>{
                tab.classList.remove('active')
            })
            button.classList.add('box-btn-active')
            tabToActivate.classList.add('active')
        })
    })
}
document.addEventListener('DOMContentLoaded',()=>{
    setupTabs()
})


// accordion
const accordionQuestions=document.querySelectorAll(".accordion-question");

accordionQuestions.forEach(accordionQuestion=>{
    accordionQuestion.addEventListener("click",event=>{
        accordionQuestion.classList.toggle("active");
    })
})


// mobile nav
const ham = document.querySelector('.ham');
const mobileNav = document.querySelector('.mobile-nav');
const closeIcon = document.querySelector('.close');

ham.addEventListener('click',()=>{
    if(mobileNav.classList.contains('showMenu')){
        mobileNav.classList.remove('showMenu');
        closeIcon.style.display='none';
        ham.style.display='flex';
    }
    else{   
        mobileNav.classList.add('showMenu');  
        closeIcon.style.display='flex';
        ham.style.display='none';
    }  
})

//close icon
closeIcon.addEventListener('click',()=>{
    if(mobileNav.classList.contains('showMenu')){
        mobileNav.classList.remove('showMenu');
        closeIcon.style.display='none';
        ham.style.display='flex';
    }
    else{
            mobileNav.classList.add('showMenu');
            closeIcon.style.display='flex';
            ham.style.display='none';
    } 
})


// form
const form =document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const email= form['email'].value
  
    if(email===''){
        failureError('email','Whoops email cannot be empty')
    }
    else if(!isEmailValid(email)){
        failureError('email',"Whoops make sure you entered a valid email")
    }
    else{
        success('email')
    }

})
function failureError(input,message){
        const formInput =form[input].parentNode
        formInput.classList.add('error')

        const small=formInput.querySelector('small')
        small.innerText=message
        small.style.opacity='1'
}
function success(input){
        const formInput =form[input].parentNode
        formInput.classList.remove('error')
        const small=formInput.querySelector('span')
        small.style.opacity='0'
}
function isEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
