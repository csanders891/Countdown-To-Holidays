//today's date
var today = new Date();

//milliseconds in a day
var ms = 86400000;

//upcoming holidays in 2025
var easter2025 = new Date("April 20, 2025");
var mothersDay2025 = new Date("May 11, 2025");
var memorialDay2025 = new Date("May 26, 2025");
var fathersDay2025 = new Date("June 15, 2025");
var juneteenth2025 = new Date("June 19, 2025");
var fourthOfJuly2025 = new Date("July 4, 2025");
var laborDay2025 = new Date("September 1, 2025");
var columbusDay2025 = new Date("October 13, 2025");
var halloween2025 = new Date("October 31, 2025");
var veteransDay2025 = new Date("November 11, 2025");
var thanksgiving2025 = new Date("November 27, 2025");
var christmas2025 = new Date("December 25, 2025");
var newYears2026 = new Date("January 1, 2026");

//holiday countdown                            
var easterCountdown = (easter2025 - today) / ms;
var mothersDayCountdown = (mothersDay2025 - today) / ms;
var memorialDayCountdown = (memorialDay2025 - today) / ms;
var fathersDayCountdown = (fathersDay2025 - today) / ms;
var juneteenthCountdown = (juneteenth2025 - today) / ms;
var fourthOfJulyCountdown = (fourthOfJuly2025 - today) / ms;
var laborDayCountdown = (laborDay2025 - today) / ms;
var columbusDayCountdown = (columbusDay2025 - today) / ms;
var halloweenCountdown = (halloween2025 - today) / ms;
var veteransDayCountdown = (veteransDay2025 - today) / ms;
var thanksgivingCountdown = (thanksgiving2025 - today) / ms;
var christmasCountdown = (christmas2025 - today) / ms;
var newYearsCountdown = (newYears2026 - today) / ms;

//remaining days rounded to the nearest whole number
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

alert("There are " + easterCountdown + " days left until Easter");
alert("There are " + mothersDayCountdown + " days left until Mother's Day");
alert("There are " + memorialDayCountdown + " days left until Memorial Day");
alert("There are " + fathersDayCountdown + " days left until Father's Day");
alert("There are " + juneteenthCountdown + " days left until Juneteenth");
alert("There are " + fourthOfJulyCountdown + " days left until the 4th of July");
alert("There are " + laborDayCountdown + " days left until Labor Day");
alert("There are " + columbusDayCountdown + " days left until Columbus Day");
alert("There are " + halloweenCountdown +  " days left until Halloween");
alert("There are " + veteransDayCountdown + " days left until Veteran's Day");
alert("There are " + thanksgivingCountdown + " days left until Thanksgiving");
alert("There are " + christmasCountdown + " left until Christmas");
alert("There are " + newYearsCountdown + " left until the new year");