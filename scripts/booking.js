/********* create variables here *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let numberOfDaysSelected = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let monday = document.getElementById('monday');
let tuesday = document.getElementById('tuesday');
let wednesday = document.getElementById('wednesday');
let thursday = document.getElementById('thursday');
let friday = document.getElementById('friday');

let clearButton = document.getElementById('clear-button');
let halfDayButton = document.getElementById('half');
let fullDayButton = document.getElementById('full');

function mondayClicked()
{
    monday.classList.add('clicked');
    calculate();
}
monday.addEventListener("click", mondayClicked);


function tuesdayClicked()
{
    tuesday.classList.add('clicked');
    calculate();
}
tuesday.addEventListener("click", tuesdayClicked);


function wednesdayClicked()
{
    wednesday.classList.add('clicked');
    calculate();
}
wednesday.addEventListener("click", wednesdayClicked);


function thursdayClicked()
{
    thursday.classList.add('clicked');
    calculate();
}
thursday.addEventListener("click", thursdayClicked);

function fridayClicked() 
{
    friday.classList.add('clicked');
    calculate();
}
friday.addEventListener("click", fridayClicked);



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearButtonClicked() 
{
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');

    numberOfDaysSelected = 0;
    costPerDay = 0;

    calculate();
}


clearButton.addEventListener("click", clearButtonClicked);






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $25, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDayButtonClicked()
{
    costPerDay = 25;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');


    calculate();
}

halfDayButton.addEventListener("click", halfDayButtonClicked);



// when the full-day button is clicked, the daily rate is set back to $40, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDayButtonClicked()
{
    costPerDay = 40;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');

    calculate();
}

fullDayButton.addEventListener("click", fullDayButtonClicked);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate()
{
    // Initialize number of days to zero in order to only count days once
    numberOfDaysSelected = 0;

    //checking if days were selected and adding them
    if (monday.classList.contains('clicked') == true)
    {numberOfDaysSelected += 1;}
    if (tuesday.classList.contains('clicked') == true)
    {numberOfDaysSelected += 1;}
    if (wednesday.classList.contains('clicked') == true)
    {numberOfDaysSelected += 1;}
    if (thursday.classList.contains('clicked') == true)
    {numberOfDaysSelected += 1;}
    if (friday.classList.contains('clicked') == true)
    {numberOfDaysSelected += 1;}

    let calculatedCost = costPerDay * numberOfDaysSelected;

    document.getElementById('calculated-cost').innerHTML = calculatedCost;
}
