let button = document.getElementsByTagName('button')[0];
let button2 = document.getElementsByTagName('button')[1];
let left = document.getElementsByClassName('left')[0];
let img = document.getElementsByClassName('img')[0];
let main = document.getElementsByClassName('main')[0];
let input = document.getElementsByTagName('input')[0];
let success = document.getElementsByClassName('success')[0];
let h1 = document.getElementsByClassName('h1')[0];
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
button.addEventListener('click', function(event){
event.preventDefault();
    if(validateEmail(input.value)){
        main.classList.remove('error');
    main.classList.toggle('hidden');
    success.classList.toggle('hidden');
    h1.textContent = `A confirmation email has been sent to ${input.value}.Please open it and click the button inside to confirm your subscription.`}
    else{
        main.classList.add('error');
    }

})
button2.addEventListener('click', function(event){
    event.preventDefault();
        main.classList.toggle('hidden');
        success.classList.toggle('hidden');
    
    })

