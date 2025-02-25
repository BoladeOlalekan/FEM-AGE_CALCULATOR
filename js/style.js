/*
//DECLARING VARIABLES
//INPUTS
const day_input = document.getElementById('day');
const month_input = document.getElementById('month');
const year_input = document.getElementById('year');

//OUTPUTS
const submit = document.querySelector('.img-btn');
const dayOtp = document.getElementById('calc-days');
const monthOtp = document.getElementById('calc-month');
const yearOtp = document.getElementById('calc-year');

//ERRORS
const dayMsg = document.querySelector('.day-msg');
const monthMsg = document.querySelector('.month-msg');
const yearMsg = document.querySelector('.year-msg');
const dayHead = document.querySelector(".day-header");
const monthHead = document.querySelector(".month-header");
const yearHead = document.querySelector(".year-header");
const requiredError = 'This field is required';
const dayError = 'Must be a valid date';
const monthError = 'Must be a valid month';
const yearError = 'Must be in the past';

//DATES
var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = 1 + today.getMonth();
var currentDay = today.getDate()

function checkDayInput(){   
    let value = (day_input.value);
    if(value == ''){
        day_input.style.borderColor = 'hsl(0, 100%, 67%)';
        dayHead.style.color = 'hsl(0, 100%, 67%)';
        dayMsg.innerHTML = requiredError;
        return false;
    }else if(value < 1 || value > 31)
    {
        day_input.style.borderColor = 'hsl(0, 100%, 67%)';
        dayHead.style.color = 'hsl(0, 100%, 67%)';
        dayMsg.innerHTML = dayError;
        return false;
    }else
    {
        day_input.style.borderColor = '';
        dayHead.style.color = '';
        dayMsg.innerHTML = '';
        return true;
    }
}

function checkMonthInput(){
    let value = Number(month_input.value);
    if(value == ''){
        month_input.style.borderColor = 'hsl(0, 100%, 67%)';
        monthHead.style.color = 'hsl(0, 100%, 67%)';
        monthMsg.innerHTML = requiredError;
        return false;
    }else if(value < 1 || value > 12)
    {
        month_input.style.borderColor = 'hsl(0, 100%, 67%)';
        monthHead.style.color = 'hsl(0, 100%, 67%)';
        monthMsg.innerHTML = monthError;
        return false;
    }else
    {
        month_input.style.borderColor = '';
        monthHead.style.color = '';
        monthMsg.innerHTML = '';
        return true;
    }
}

function checkYearInput(){
    let value = Number(year_input.value);

    if(value == ''){
        year_input.style.borderColor = 'hsl(0, 100%, 67%)';
        yearHead.style.color = 'hsl(0, 100%, 67%)';
        yearMsg.innerHTML = requiredError;
        return false;
    }else if(value < 1 || value > 2024)
    {
        year_input.style.borderColor = 'hsl(0, 100%, 67%)';
        yearHead.style.color = 'hsl(0, 100%, 67%)';
        yearMsg.innerHTML = yearError;
        return false;
    }else
    {
        year_input.style.borderColor = '';
        yearHead.style.color = '';
        yearMsg.innerHTML = '';
        return true;
    }
}

function calculateAge(birthday){
    //let birthday = (`${day_input.value}/${month_input.value}/${year_input.value}`);
    //console.log(birthday);

    var fullBirthDate = new Date(birthday);
    var ageDiff = Date.now() - fullBirthDate.getTime();

    var ageDate = new Date(ageDiff);
    var years = ageDate.getFullYear() - 1970;
    var months = ageDate.getMonth();
    var days = ageDate.getDate() - 1;

    yearOtp.textContent= years;
    monthOtp.textContent= months;
    dayOtp.textContent= days;

    /*var fullBirthDate = new Date(birthday);
    var birthDay = fullBirthDate.getDate();
    var birthMonth = fullBirthDate.getMonth();
    var birthYear = fullBirthDate.getFullYear();

    var result = currentYear - birthYear;

    yearOtp.textContent = ("Your year is " + result + "years old.");
    
    var years = currentYear - birthYear;
    var months = currentMonth - birthMonth;
    var days = currentDay - birthDay;

    if(months < 0 || (months === 0 && days < 0)){
        years--;
        if (months === 0){
            months = 11;
        } else{
            months = 12 + months;
        }
        days = 30 + days;
    }

    yearOtp.textContent= years;
    monthOtp.textContent= months;
    dayOtp.textContent= days;

    console.log(years);
    console.log(months);
    console.log(days);
    *//*
}

submit.addEventListener('click' , function (e) {
    e.preventDefault();
    let day = checkDayInput();
    let month = checkMonthInput();
    let year = checkYearInput();

    if(!day || !month || !year) return
    let birthday = (`${day_input.value}/${month_input.value}/${year_input.value}`);
    calculateAge(birthday);

    // console.log(birthday);
    // console.log(calculateAge());
    // console.log(typeof(day));
    // console.log(typeof(month));
    // console.log(typeof(year));
})

*/

//DECLARING VARIABLES
//INPUTS
const day_input = document.getElementById('day');
const month_input = document.getElementById('month');
const year_input = document.getElementById('year');

//OUTPUTS
const submit = document.querySelector('.img-btn');
const dayOtp = document.getElementById('calc-days');
const monthOtp = document.getElementById('calc-month');
const yearOtp = document.getElementById('calc-year');

//ERRORS
const dayMsg = document.querySelector('.day-msg');
const monthMsg = document.querySelector('.month-msg');
const yearMsg = document.querySelector('.year-msg');
const dayHead = document.querySelector(".day-header");
const monthHead = document.querySelector(".month-header");
const yearHead = document.querySelector(".year-header");
const requiredError = 'This field is required';
const dayError = 'Must be a valid date';
const monthError = 'Must be a valid month';
const yearError = 'Must be in the past';

//DATES
var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = 1 + today.getMonth();
var currentDay = today.getDate();

function checkDayInput(){   
    let value = (day_input.value);
    if(value == ''){
        day_input.style.borderColor = 'hsl(0, 100%, 67%)';
        dayHead.style.color = 'hsl(0, 100%, 67%)';
        dayMsg.innerHTML = requiredError;
        return false;
    }else if(value < 1 || value > 31)
    {
        day_input.style.borderColor = 'hsl(0, 100%, 67%)';
        dayHead.style.color = 'hsl(0, 100%, 67%)';
        dayMsg.innerHTML = dayError;
        return false;
    }else
    {
        day_input.style.borderColor = '';
        dayHead.style.color = '';
        dayMsg.innerHTML = '';
        return true;
    }
}

function checkMonthInput(){
    let value = Number(month_input.value);
    if(value == ''){
        month_input.style.borderColor = 'hsl(0, 100%, 67%)';
        monthHead.style.color = 'hsl(0, 100%, 67%)';
        monthMsg.innerHTML = requiredError;
        return false;
    }else if(value < 1 || value > 12)
    {
        month_input.style.borderColor = 'hsl(0, 100%, 67%)';
        monthHead.style.color = 'hsl(0, 100%, 67%)';
        monthMsg.innerHTML = monthError;
        return false;
    }else
    {
        month_input.style.borderColor = '';
        monthHead.style.color = '';
        monthMsg.innerHTML = '';
        return true;
    }
}

function checkYearInput(){
    let value = Number(year_input.value);

    if(value == ''){
        year_input.style.borderColor = 'hsl(0, 100%, 67%)';
        yearHead.style.color = 'hsl(0, 100%, 67%)';
        yearMsg.innerHTML = requiredError;
        return false;
    }else if(value < 1 || value > currentYear)
    {
        year_input.style.borderColor = 'hsl(0, 100%, 67%)';
        yearHead.style.color = 'hsl(0, 100%, 67%)';
        yearMsg.innerHTML = yearError;
        return false;
    }else
    {
        year_input.style.borderColor = '';
        yearHead.style.color = '';
        yearMsg.innerHTML = '';
        return true;
    }
}

function calculateAge(birthday){
    var fullBirthDate = new Date(birthday);
    var ageDiff = Date.now() - fullBirthDate.getTime();

    var ageDate = new Date(ageDiff);
    var years = ageDate.getUTCFullYear() - 1970;
    var months = ageDate.getUTCMonth();
    var days = ageDate.getUTCDate() - 1;

    yearOtp.textContent = years;
    monthOtp.textContent = months;
    dayOtp.textContent = days;
}

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let day = checkDayInput();
    let month = checkMonthInput();
    let year = checkYearInput();

    if(!day || !month || !year) return;
    let birthday = `${year_input.value}-${month_input.value}-${day_input.value}`;
    calculateAge(birthday);
});