const fibonacci = function(fibPos) {
    if(fibPos < 0){
        return "OOPS";
    }
    +fibPos;
    let pos1 = 1;
    let pos2 = 0;
    let temp = 0;
    for(let i = 0; i<fibPos;i++){
        temp = pos1;
        pos1 += pos2;
        pos2 = temp;
    }
    return temp;
};

// Do not edit below this line
module.exports = fibonacci;
