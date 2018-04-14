function arrayMaxConsecutiveSum2(inputArray) {
  let maxSoFar = -1001;
  let maxEndingHere = 0;
  
  for ( var i = 0; i < inputArray.length; i++ ){
    maxEndingHere = maxEndingHere + inputArray[i];
    if ( maxSoFar < maxEndingHere ) maxSoFar = maxEndingHere;
    if (maxEndingHere < 0 ) maxEndingHere = 0;
  }
  
  return maxSoFar;
}
//Kadane's algorithm