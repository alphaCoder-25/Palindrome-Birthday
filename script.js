
function reverseString(str) { 
    const charList = str.split('');
    const reversedList = charList.reverse();
    const reversedString = reversedList.join('');
    return reversedString;
};

function isPalindrome(str) {
    const reverse = reverseString(str);
    return str === reverse;
};

function convertDateToString(date) {

    const dateString = { day: '', month: '', year: ''};
    
    if( date.day < 10 ) {
        dateString.day = '0' + date.day;
    } else {
        dateString.day = date.day.toString();
    }

    if( date.month < 10 ) {
        dateString.month = '0' + date.month;
     } else {
        dateString.month = date.month.toString();
     }

      dateString.year = date.year.toString();

     return dateString;
};

function getAllDateFormats(date) {

    const dateString = convertDateToString(date);

    const ddmmyyyy = dateString.day + dateString.month + dateString.year;
    const mmddyyyy = dateString.month + dateString.day + dateString.year;
    const yyyymmdd = dateString.year + dateString.month + dateString.day;
    const ddmmyy   = dateString.day + dateString.month + dateString.year.slice(-2);
    const mmddyy   = dateString.month + dateString.day + dateString.year.slice(-2);
    const yymmdd   = dateString.year.slice(-2) + dateString.month + dateString.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDateFormats(date) {

    const listOfPalindromes = getAllDateFormats(date);

    let randomVariable = false;

    for(let i=0; i < listOfPalindromes.length; i++) {
        if(isPalindrome(listOfPalindromes[i])) {
            randomVariable = true;
            break;
        }
    }   
    return randomVariable;
};


function checkLeapYear(year) {
    if(year % 400 === 0) {
        return true;
    }
    if(year % 100 === 0) {
        return false;
    }
    if(year % 4 === 0) {
        return true;
    }
    return false;
}


function getNextDate(date) {
    let day = date.day + 1;
    let month = date.month;
    let year = date.year;

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month === 2) {
        if(checkLeapYear(year)) {
            if(day > 29) {
               day = 1;
               month++; 
            }
        }
        else {
            if(day > 28) {
               day = 1;
               month++;
            }
        }
    }
    else {
        if(day > daysInMonth[month - 1]){
            day = 1;
            month++;
        }
    }

    if (month > 12) {
        month = 1;
        year++;
    }

    return{
        day: day,
        month: month,
        year: year
    };
}


function getNextPalindromeDate(date) {
    let counter = 0;
    let nextDate = getNextDate(date);

    while(1){
        counter++;
        const checkPalindrome = checkPalindromeForAllDateFormats(nextDate);
        if(checkPalindrome){
            break;
        }
        nextDate = getNextDate(nextDate);
    }
    return [counter, nextDate];
}



const date = {
    day: 31,
    month: 12,
    year: 2020,
}

// console.log(getNextPalindromeDate(date));

