
function reverseString(str) { 
    const charList = str.split('');
    const reversedList = charList.reverse();
    const reversedString = reversedList.join('');
    return reversedString;
};

function isPalindrome(str) {
    const reverse = reverseString(str);
    if( str === reverse ) {
        return true;
    }
    return false;
}    
console.log(isPalindrome('racecar'));
