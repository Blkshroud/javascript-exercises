const reverseString = function(word) {
    if(word === ''){
        return word;
    }
    let subWord = '';
    for(let i = word.length;i>0;i--){
        subWord += word.substring(i,i-1);
    }
    return subWord;
};

// Do not edit below this line
module.exports = reverseString;
