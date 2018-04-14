function climbingStairs(s) {
    s += 1;
    let res = Array.from(Array(s), () => 0);
    res[0] = res[1] = 1;
    
    for ( var i = 2; i < s; i++ ){
        for ( var j = 1; j < 2+1; j++ ){
            res[i] = res[i] + res[i-j];
            if ( j > i ) break;
        }
    }
    
    return res[s-1];
}