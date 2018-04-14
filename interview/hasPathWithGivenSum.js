function hasPathWithGivenSum(t, s) {
    let hasItem = false;
    function traverse( rec , sum ){
        let localSum = sum;
        if ( rec != undefined ){
            localSum += rec.value;
            if ( localSum === s && rec.left == null && rec.right == null ) hasItem = true;
        } 
        
        for ( key in rec ){
            if ( typeof rec[key] === 'object'){
                traverse(rec[key], localSum);
            }
        }
        return localSum;
    }
    if ( t == null && s == 0 ) return true;
    traverse(t , 0);
    return hasItem;
}
