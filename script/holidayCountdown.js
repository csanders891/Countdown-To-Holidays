//today's date
var today = new Date();

//milliseconds in a day
var ms = 86400000;

//holidays 

if(today.getFullYear() == 2026)
    {
        var mlkDay = new Date("January 19, 2026");
        var valentinesDay = new Date("February 14, 2026");
        var presidentsDay = new Date("February 16, 2026");
        var stPatricksDay = new Date("March 17, 2026");
        var easter = new Date("April 5, 2026");
        var mothersDay = new Date("May 10, 2026");
        var memorialDay = new Date("May 25, 2026");
        var juneteenth = new Date("June 19, 2026");
        var fathersDay = new Date("June 21, 2026");
        var fourthOfJuly = new Date("July 4, 2026");
        var laborDay = new Date("September 7, 2026");
        var columbusDay = new Date("October 12, 2026");
        var halloween = new Date("October 31, 2026");
        var veteransDay = new Date("November 11, 2026");
        var thanksgiving = new Date("November 26, 2026");
        var christmas = new Date("December 25, 2026");
        var newYearsDay = new Date("January 1, 2027");
    }

else if(Date.getFullYear() == 2027)
    {
        var mlkDay = new Date("January 18, 2027");
        var valentinesDay = new Date("February 14, 2027");
        var presidentsDay = new Date("February 15, 2027");
        var stPatricksDay = new Date("March 17, 2027");
        var easter = new Date("March 28, 2027");
        var mothersDay = new Date("May 9, 2027");
        var memorialDay = new Date("May 31, 2027");
        var juneteenth = new Date("June 19, 2027");
        var fathersDay = new Date("June 20, 2027");
        var fourthOfJuly = new Date("July 4, 2027");
        var laborDay = new Date("September 6, 2027");
        var columbusDay = new Date("October 11, 2027");
        var halloween = new Date("October 31, 2027");
        var veteransDay = new Date("November 11, 2027");
        var thanksgiving = new Date("November 25,2027");
        var christmas = new Date("December 25, 2027");
        var newYearsDay = new Date("January 1, 2028");
        
    }

else if(Date.getFullYear() == 2028)
    {
        var mlkDay = new Date("January 17, 2028");
        var valentinesDay = new Date("February 14, 2028");
        var presidentsDay = new Date("February 21, 2028");
        var stPatricksDay = new Date("March 17, 2028");
        var easter = new Date("April 16, 2028");
        var mothersDay = new Date("May 14, 2028");
        var memorialDay = new Date("May 29, 2028");
        var fathersDay = new Date("June 18, 2028");
        var juneteenth = new Date("June 19, 2028");
        var fourthOfJuly = new Date("July 4, 2028");
        var laborDay = new Date("September 4, 2028");
        var columbusDay = new Date("October 9, 2028");
        var halloween = new Date("October 31, 2028");
        var veteransDay = new Date("November 11, 2028");
        var thanksgiving = new Date("November 23, 2028");
        var christmas = new Date("December 25, 2028");
        var newYearsDay = new Date("January 1, 2029");
        
    }

else if (Date.getFullYear() == 2029)
    {
        var mlkDay = new Date("January 15, 2029");
        var valentinesDay = new Date("February 14, 2029");
        var presidentsDay = new Date("February 19, 2029");
        var stPatricksDay = new Date("March 17, 2029");
        var easter = new Date("April 1, 2029");
        var mothersDay = new Date("May 13, 2029");
        var memorialDay = new Date("May 28, 2029");
        var fathersDay = new Date("June 17,2029");
        var juneteenth = new Date("June 19,2029");
        var fourthOfJuly = new Date("July 4, 2029");
        var laborDay = new Date("September 3, 2029");
        var columbusDay = new Date("October 8, 2029");
        var halloween = new Date("October 31, 2029");
        var veteransDay = new Date("November 11, 2029");
        var thanksgiving = new Date("November 22, 2029");
        var christmas = new Date("December 25, 2029");
        var newYearsDay = new Date("January 1, 2030");
    }

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
var newYearsCountdown = (newYearsDay - today) / ms;

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

//if Father's Day is before Juneteenth
if(fathersDayCountdown < juneteenthCountdown)
    {
        var holidays = ["King's Birthday", "Valentine's Day", "President's Day", "St. Patrick's Day", "Easter", "Mother's Day", "Memorial Day", "Father's Day", "Juneteenth", "the 4th of July", "Labor Day", "Columbus Day", "Halloween", "Veteran's Day", "Thanksgiving", "Christmas", "New Year's Day"];
    }

//if Juneteenth comes before Father's Day
else
    {
        var holidays = ["King's Birthday", "Valentine's Day", "President's Day", "St. Patrick's Day", "Easter", "Mother's Day", "Memorial Day", "Juneteenth", "Father's Day", "the 4th of July", "Labor Day", "Columbus Day", "Halloween", "Veteran's Day", "Thanksgiving", "Christmas", "New Year's Day"];
    }


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
            
        //make verb and noun singular if the holiday is tomorrow
        else if(daysRemaining == 1)
            alert("There is " + daysRemaining + " day left until " + holiday);

        //make verb and noun plural if there are 2 or more days left until that holiday
        else if(daysRemaining > 1)
            alert("There are " + daysRemaining + " days left until " + holiday);
    }
