function isCryptSolution(crypt, solution) {
    let retArr = [];
    for ( var i = 0; i < crypt.length; i++ ) {
        retArr.push([]);
        for ( var j = 0; j < crypt[i].length; j ++ ){
            for ( var k = 0; k < solution.length; k++ ){
                if ( solution[k][0] === crypt[i][j] ){
                    retArr[i].push(solution[k][1]);
                }
            }
        }
        retArr[i] = retArr[i].join("");
    }
    for ( var i = 0; i < retArr.length; i++ ){
        if ( retArr[i][0] === '0' && retArr[i].length >= 2 ) return false;
    }
    if ( ( Number(retArr[0]) + Number(retArr[1]) ) === Number(retArr[2]) ) return true;
    return false;
}
