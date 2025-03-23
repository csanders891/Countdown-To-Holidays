//today's date
var today = new Date();

//milliseconds in a day
var ms = 86400000;

//holidays 
var mlkDay = new Date("January 20, 2025");
var valentinesDay = new Date("February 14, 2025");
var presidentsDay = new Date("February 17, 2025");
var stPatricksDay = new Date("March 17, 2025");
var easter = new Date("April 20, 2025");
var mothersDay = new Date("May 11, 2025");
var memorialDay = new Date("May 26, 2025");
var fathersDay = new Date("June 15, 2025");
var juneteenth = new Date("June 19, 2025");
var fourthOfJuly = new Date("July 4, 2025");
var laborDay = new Date("September 1, 2025");
var columbusDay = new Date("October 13, 2025");
var halloween = new Date("October 31, 2025");
var veteransDay = new Date("November 11, 2025");
var thanksgiving = new Date("November 27, 2025");
var christmas = new Date("December 25, 2025");
var newYears = new Date("January 1, 2026");


//holiday countdown  
var mlkCountdown = (mlkDay - today) / ms;
var valentinesDayCountdown = (valentinesDay - today) / ms;
var presidentsDayCountdown = (presidentsDay - today) / ms;
var stPatricksDayCountdown = (stPatricksDay - today) / ms;
var easterCountdown = (easter - today) / ms;
var mothersDayCountdown = (mothersDay - today) / ms;
var memorialDayCountdown = (memorialDay - today) / ms;
var fathersDayCountdown = (fathersDay - today) / ms;
var juneteenthCountdown = (juneteenth - today) / ms;
var fourthOfJulyCountdown = (fourthOfJuly - today) / ms;
var laborDayCountdown = (laborDay - today) / ms;
var columbusDayCountdown = (columbusDay - today) / ms;
var halloweenCountdown = (halloween - today) / ms;
var veteransDayCountdown = (veteransDay - today) / ms;
var thanksgivingCountdown = (thanksgiving - today) / ms;
var christmasCountdown = (christmas - today) / ms;
var newYearsCountdown = (newYears - today) / ms;

//remaining days rounded to the nearest whole number
mlkCountdown = Math.round(mlkCountdown);
valentinesDayCountdown = Math.round(valentinesDayCountdown);
presidentsDayCountdown = Math.round(presidentsDayCountdown);
stPatricksDayCountdown = Math.round(stPatricksDayCountdown);
easterCountdown = Math.round(easterCountdown);
mothersDayCountdown = Math.round(mothersDayCountdown);
memorialDayCountdown = Math.round(memorialDayCountdown);
fathersDayCountdown = Math.round(fathersDayCountdown);
juneteenthCountdown = Math.round(juneteenthCountdown);
fourthOfJulyCountdown = Math.round(fourthOfJulyCountdown);
laborDayCountdown = Math.round(laborDayCountdown);
columbusDayCountdown = Math.round(columbusDayCountdown);
halloweenCountdown = Math.round(halloweenCountdown);
veteransDayCountdown = Math.round(veteransDayCountdown);
thanksgivingCountdown = Math.round(thanksgivingCountdown);
christmasCountdown = Math.round(christmasCountdown);
newYearsCountdown = Math.round(newYearsCountdown);



var holidayCountdown = [mlkCountdown, valentinesDayCountdown, presidentsDayCountdown, stPatricksDayCountdown, easterCountdown, mothersDayCountdown, memorialDayCountdown, fathersDayCountdown, juneteenthCountdown, fourthOfJulyCountdown, laborDayCountdown, columbusDayCountdown, halloweenCountdown, veteransDayCountdown, thanksgivingCountdown, christmasCountdown, newYearsCountdown];

var holidays = ["King's Birthday", "Valentine's Day", "President's Day", "St. Patrick's Day", "Easter", "Mother's Day", "Memorial Day", "Father's Day", "Juneteenth", "the 4th of July", "Labor Day", "Columbus Day", "Halloween", "Veteran's Day", "Thanksgiving", "Christmas", "New Year's Day"];


for(var i =0; i < holidays.length; i++)
    {
        var daysRemaining = holidayCountdown[i];
        var holiday = holidays[i];

        //don't output holidays that have already passed
        if(daysRemaining < 0)
            continue;

        //if the holiday is today
        else if(daysRemaining == 0)
             alert(holiday + " is today");
            
        //make verb and noun singular if holiday is tomorrow
        else if(daysRemaining > 1)
            alert("There is " + daysRemaining + " day left until " + holiday);

        else 
            alert("There are " + daysRemaining + " days left until " + holiday);
    }