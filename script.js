
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

const date = {
    day: 5,
    month: 11,
    year: 2020,
}

// console.log(checkPalindromeForAllDateFormats(date));

