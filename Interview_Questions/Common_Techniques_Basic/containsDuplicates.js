function containsDuplicates(a) {
    let searchArray = {};
    
    for ( var i = 0; i < a.length; i++){
        if ( searchArray[a[i]] ) return true;
        else searchArray[a[i]] = 1;
    }
    return false;
}