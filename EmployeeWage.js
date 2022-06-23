// UC1:Checking Employee Present or Absent
const Is_Present = 1
let EmpCheck = Math.floor(Math.random() * 2);
if(EmpCheck == Is_Present)
{
    console.log("Employee is Present");
}
else
{
    console.log("Employee is Absent");
}

// UC2:Checking Employee PartTime And FullTime
const PartTime = 1;
const FullTime = 2;
const PartTimeHours = 4;
const FullTimeHours = 8;
const WageperHour = 20;
let Emphours = 0;
let CheckEmp = Math.floor(Math.random() * 3);

switch(CheckEmp)
{
    case PartTime:
        Emphours = PartTimeHours;
        break;
    case FullTime:
        Emphours = FullTimeHours;
        break;
    default:
        Emphours = 0;
}
let EmpWage = Emphours * WageperHour;
console.log("Employee Wage is: " + EmpWage);