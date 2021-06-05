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

let totolEmpWage = 0;
let empHrs = 0;
let dailyWage = 0;
function sum(dailyWage)
{
    totolEmpWage += dailyWagel;
}
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

empDailyWageArray.forEach(sum);
console.log("UC7A - total Wage:" +totalWorkingDays+
            "Total Hours: "+totalEmpHrs+
            "Emp Wage: "+totolEmpWage);

function totalWages(totalWages, dailyWage)
{
    return totalWages + dailyWage;
}

console.log("UC7A - Emp Wage with Reduce: "+
            empDailyWageArray.reduce(totalWages,0));

//UC 7B Show the day along with daily wage using Array map helper Function

let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr +" = "+dailyWage;
}

let mapDayWithWageArray = empDailyWageArray.map(mapDayWithWage);
console.log("UC 7B - Daily Wage Map");
console.log(mapDayWithWageArray);

//UC 7C - show Days when full time wage of 160 were earned
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}

let fullDayWageArray = mapDayWithWageArray.filter(fulltimeWage);
console.log("UC 7C-daily Wage Filter When Full Time Wage Earned");
console.log(fullDayWageArray);

//UC 7D - Find the First occurrence when full time was earned using find function

function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7D - first time full time wage was earned on Day :"+
mapDayWithWageArray.find(findFulltimeWage));

//UC 7E - check if every element of full time wage is truely holding full time wage

function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7E - check all elements have full time Wage: "+
fullDayWageArray.every(isAllFullTimeWage));

//UC 7F check if there is any part time wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC 7F - check all elements have part time Wage: "+
mapDayWithWageArray.every(isAnyPartTimeWage));

//UC 7G find the number of days the Employee Worked

function totalDaysWorked(NUM_OF_WORKING_DAYS ,dailyWage)
{
    if(dailyWage > 0) return NUM_OF_WORKING_DAYS+1;
    return NUM_OF_WORKING_DAYS;
}
console.log("UC 7G - Number of Days Emp Worked: "+
empDailyWageArray.reduce(totalDaysWorked));
