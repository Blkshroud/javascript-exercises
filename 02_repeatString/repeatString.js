const repeatString = function(string, num) {
    let stringRepeat = string;
        for(let i = 1; i<+num; i++){
            stringRepeat += string;
        }
    if(num < 0){
        stringRepeat = 'ERROR';
    }
    else if(num === 0){
        stringRepeat = '';
    }
    return stringRepeat
};

// Do not edit below this line
module.exports = repeatString;
