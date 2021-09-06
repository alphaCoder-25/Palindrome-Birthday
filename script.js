
function reverseString(str) { 
    const charList = str.split('');
    const reversedList = charList.reverse();
    const reversedString = reversedList.join('');
    return reversedString;
};
