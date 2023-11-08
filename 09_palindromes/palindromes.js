const palindromes = function (palCheck) {
    let isPal = true;
    palCheck = palCheck.toLowerCase();
    palCheck = palCheck.replace(/[^a-z0-9]/g, "");
    let endNum = palCheck.length-1;
    let palLength = endNum;
    for(let startNum = 0; startNum<=palLength; startNum++){
        let palStart = palCheck.substr(startNum, 1);
        let palEnd = palCheck.substr(endNum, 1);
        if(palStart != palEnd){
            isPal = false;
        }
        endNum--;
    }
    return isPal;
};

// Do not edit below this line
module.exports = palindromes;
