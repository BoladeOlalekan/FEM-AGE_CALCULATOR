//DECLARING constIABLES
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

    yearOtp.innerHTML = years;
    monthOtp.innerHTML = months;
    dayOtp.innerHTML = days;

    /*let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = 1 + today.getMonth();
    let currentDay = today.getDate();
    const month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(day_input > currentDay){
        currentDay = currentDay + month_days[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }
    if(month_input > currentMonth){
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }*/


   
}

submit.addEventListener('click' , function (e) {
    e.preventDefault();
    let day = checkDayInput();
    let month = checkMonthInput();
    let year = checkYearInput();

    if(!day || !month || !year){
        return false;
    }
    let birthday = `${month_input.value}/${day_input.value}/${year_input.value}`;
    console.log(birthday);
    calculateAge(birthday);
    console.log(calculateAge());

    typeof (day);
    typeof (month);
    typeof (year);

    console.log(typeof(day));
    console.log(typeof(month));
    console.log(typeof(year));
})


/*submit.addEventListener('click' , () => {
    const months = [31,28,31,30,31,30,31,31,30,31,30,31];
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();
    const isValid = true;

    //Validity for empty and non-empty input

    /*if(day_input.value > 31){
        day_input.style.borderColor = 'hsl(0, 100%, 67%)';
        dayHead.style.color = 'hsl(0, 100%, 67%)';
        dayMsg.innerHTML = 'Must be a valid date';
        isValid = false;
        return;
    }
    else{
        alert('You can proceed');
        isValid = true;
    }
})*/