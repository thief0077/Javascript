function firstDuplicate(a) {
  for ( var i = 0; i < a.length; i++){
    let pos = Math.abs(a[i]) - 1;
    if (a[pos] < 0) return pos + 1;
    a[pos] = a[pos] * -1;
  }
  return -1;
}