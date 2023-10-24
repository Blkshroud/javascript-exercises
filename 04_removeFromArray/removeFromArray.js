const removeFromArray = function() {
    let array = arguments[0];
    for(let argPos = 1;argPos < arguments.length; argPos++){        
        for(let arrayPos = 0; arrayPos < array.length;arrayPos++){
            if(array[arrayPos] === arguments[argPos]){
                array.splice(arrayPos,1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
