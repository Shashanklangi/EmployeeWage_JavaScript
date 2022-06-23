// UC1:Checking Employee Present or Absent
const Is_Present = 1
let EmpCheck = Math.floor(Math.random() * 10) % 2;
if(EmpCheck == Is_Present)
{
    console.log("Employee is Present");
}
else
{
    console.log("Employee is Absent");
}

// UC3:Checking Employee PartTime And FullTime Using Function
const PartTime = 1;
const FullTime = 2;
const PartTimeHours = 4;
const FullTimeHours = 8;
const WageperHour = 20;

function CalculateDailyWage(CheckEmp)
{
    switch(CheckEmp)
{
    case PartTime:
        return PartTimeHours; 
    case FullTime:
        return FullTimeHours;
    default:
        return 0;
}
}
let CheckEmp = Math.floor(Math.random() * 10) % 3;
let Emphours = CalculateDailyWage(CheckEmp);
let EmpWage = Emphours * WageperHour;
console.log("Employee Wage is: " + EmpWage);
