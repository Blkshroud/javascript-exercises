const sumAll = function(num1, num2) {
    let smallerNum = 0;
    let biggerNum = 0;
    if(typeof num1 != 'number' || typeof num2 != 'number' || num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    else if(num1 > num2){
        biggerNum = num1;
        smallerNum = num2;
    }
    else{
        biggerNum = num2;
        smallerNum = num1;
    }
    let sum = smallerNum;
    for(let i = smallerNum+1; i <= biggerNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
