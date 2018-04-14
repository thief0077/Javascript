function sumInRange(nums, queries) {
    let retSum = 0;
    let prefixArr = [];
    let sum = 0;
    
    for ( var i = 0; i < nums.length; i++){
        sum += nums[i];
        prefixArr.push(sum);
    }
    
    for ( var i = 0; i < queries.length; i++){
        if (queries[i][0] !== 0){
            retSum += prefixArr[queries[i][1]] - prefixArr[queries[i][0]-1];
        }else{
            retSum += prefixArr[queries[i][1]];
        }
    }
    
    if (retSum < 0) return 1000000007 + (retSum % 1000000007);
    return retSum % 1000000007;
}