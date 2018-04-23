function isListPalindrome(l) {
    let palArr = [],
        c = l;
    while ( c != null ){
        palArr.push(c.value);
        c = c.next;
    }
    for ( var i = 0 , j = palArr.length-1; i < Math.ceil(palArr.length / 2); i++ ){
        if ( palArr[i] != palArr[j] ) return false;
        j--;
    }
    return true;
}
