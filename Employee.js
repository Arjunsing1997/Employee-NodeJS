console.log("Welcome to Employee Wage Problems using NodeJS");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MOMTH = 160;


let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();

function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        break;
    default: 
        return 0;
    }
}
 //For Daily Wage
function callDailyWage(empHrs)
{
    return empHrs * WAGE_PER_HOURS;
}

let empHrs = 0;
//using While loop
while(totalEmpHrs <= MAX_HRS_IN_MOMTH && 
    totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(callDailyWage);
}

let empWage = callDailyWage(totalEmpHrs);
console.log("Total Working Days-->"+totalWorkingDays+
            "\nTotal Hours -->"+empHrs+
            "\nEmployee Wage --->"+empWage);