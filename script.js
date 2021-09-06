
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

const date = {
    day: 25,
    month: 05,
    year: 1997 
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
console.log(convertDateToString(date));