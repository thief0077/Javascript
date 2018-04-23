function firstNotRepeatingCharacter(s) {
    let table = {};
    let last = "_";
    
    for ( var i = s.length-1; i >= 0; i-- ){
        if ( !table.hasOwnProperty(s[i]) ){
            table[s[i]] = 1;
        }else{
            table[s[i]] += 1;
        }
    }
    
    for ( k in table ){
        if ( table[k] === 1 ) last = k;
    }
    
    return last;
}
