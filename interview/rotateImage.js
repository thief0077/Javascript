function rotateImage(a) {
    let retArr = [];
    for ( var i = 0; i < a[0].length; i++ ){
        retArr.push([]);
        for ( var j = a.length-1 ; j >= 0; j-- ){
            retArr[i].push(a[j][i]);
        }
    }
    return retArr;
}
