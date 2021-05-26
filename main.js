// tabs

// const tab1 = document.getElementById('tab-1')
// const tab2 = document.getElementById('tab-2')
// const tab3 =document.getElementById('tab-3')
// const btn1 = document.getElementById('btn-1')
// const btn2 = document.getElementById('btn-2')
// const btn3 = document.getElementById('btn-3')


// btn1.addEventListener('click',()=>{
//     tab1.style.transform='translateX(-600px)'
//     tab2.style.transform='translateX(100%)'
//     tab3.style.transform='translateX(100%)'
//     btn1.style.borderBottom='2px solid hsl(0, 94%, 66%)'
//     btn2.style.borderBottom='2px solid hsl(229, 8%, 60%)'
//     btn3.style.borderBottom='2px solid hsl(229, 8%, 60%)'
// })
// btn2.addEventListener('click',()=>{
//     tab1.style.transform='translateX(100%)'
//     tab2.style.transform='translateX(-600px)'
//     tab3.style.transform='translateX(100%)'
//     btn2.style.borderBottom='2px solid hsl(0, 94%, 66%)'
//     btn1.style.borderBottom='2px solid hsl(229, 8%, 60%)'
//     btn3.style.borderBottom='2px solid hsl(229, 8%, 60%)'
// })
// btn3.addEventListener('click',()=>{
//     tab1.style.transform='translateX(100%)'
//     tab2.style.transform='translateX(100%)'
//     tab3.style.transform='translateX(-600px)'
//     btn3.style.borderBottom='2px solid hsl(0, 94%, 66%)'
//     btn2.style.borderBottom='2px solid hsl(229, 8%, 60%)'
//     btn1.style.borderBottom='2px solid hsl(229, 8%, 60%)'
// })



// accordion
const accordionQuestions=document.querySelectorAll(".accordion-question")

accordionQuestions.forEach(accordionQuestion=>{
    accordionQuestion.addEventListener("click",event=>{
        accordionQuestion.classList.toggle("active")
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
