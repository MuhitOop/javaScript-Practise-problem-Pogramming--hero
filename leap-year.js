//simple solution
/*
year will be leap year if the year is divisible by 4
*/

function simpleLeapYear(isYear) {
    if (isYear % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

const theYear = simpleLeapYear();
// console.log(theYear);



// The most accurate solution
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }

    } else {
        return false;
    }
}

const yearIs = isLeapYear(2020);

console.log(yearIs);