//Declaring variables
var day_input = document.getElementById('day');
var month_input = document.getElementById('month');
var year_input = document.getElementById('year');
//var date = new date();
var dayMsg = document.querySelector('.day-msg');
var monthMsg = document.querySelector('.month-msg');
var yearMsg = document.querySelector('.year-msg');
var submit = document.querySelector('.img-btn');
var head1 = document.querySelector(".day-header");
var head2 = document.querySelector(".month-header");
var head3 = document.querySelector(".year-header");

// Validate input values
var isValid = true;~

submit.addEventListener('click' , () => {
    const months = [31,28,31,30,31,30,31,31,30,31,30,31];
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDay = today.getDate();

    //Validity for empty and non-empty input
    if(typeof day_input.value, month_input.value, year_input.value == ""){
        console.log(typeof day_input.value, month_input.value, year_input.value);
        isValid = false;
        dayMsg.innerHTML = 'This field is required';
        monthMsg.innerHTML = 'This field is required';
        yearMsg.innerHTML = 'This field is required';
        head1.style.color = 'hsl(0, 100%, 67%)';
        head2.style.color = 'hsl(0, 100%, 67%)';
        head3.style.color = 'hsl(0, 100%, 67%)';
        day_input.style.borderColor = 'hsl(0, 100%, 67%)';
        month_input.style.borderColor = 'hsl(0, 100%, 67%)';
        year_input.style.borderColor = 'hsl(0, 100%, 67%)';
        return;
    }

    if(typeof day_input.value > '31'){
        console.log(typeof day_input);
        isValid = false;
        dayMsg.innerHTML = 'Must be a valid day';
        head1.style.color = 'hsl(0, 100%, 67%)';
        head2.style.color = 'hsl(0, 100%, 67%)';
        head3.style.color = 'hsl(0, 100%, 67%)';
        day_input.style.borderColor = 'hsl(0, 100%, 67%)';
        month_input.style.borderColor = 'hsl(0, 100%, 67%)';
        year_input.style.borderColor = 'hsl(0, 100%, 67%)';
        return;
    } else{
        isValid = true;
        dayMsg.innerHTML = "";
    }

    if(typeof month_input.value > currentDay){
        console.log(typeof month_input);
        isValid = false;
        monthMsg.innerHTML = 'Must be a valid month';
        head1.style.color = 'hsl(0, 100%, 67%)';
        head2.style.color = 'hsl(0, 100%, 67%)';
        head3.style.color = 'hsl(0, 100%, 67%)';
        day_input.style.borderColor = 'hsl(0, 100%, 67%)';
        month_input.style.borderColor = 'hsl(0, 100%, 67%)';
        year_input.style.borderColor = 'hsl(0, 100%, 67%)';
        return;
    } else{
        isValid = true;
        monthMsg.innerHTML = "";
    }

    if(typeof year_input.value > currentYear){
        console.log(typeof year_input);
        isValid = false;
        yearMsg.innerHTML = 'Must be in the past';
        head1.style.color = 'hsl(0, 100%, 67%)';
        head2.style.color = 'hsl(0, 100%, 67%)';
        head3.style.color = 'hsl(0, 100%, 67%)';
        day_input.style.borderColor = 'hsl(0, 100%, 67%)';
        month_input.style.borderColor = 'hsl(0, 100%, 67%)';
        year_input.style.borderColor = 'hsl(0, 100%, 67%)';
        return;
    } else{
        isValid = true;
        yearMsg.innerHTML = "";
    }
})