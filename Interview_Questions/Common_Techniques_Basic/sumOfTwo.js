function sumOfTwo(a, b, v) {
    let aa = new Set(a);
    let bb = new Set(b);
    
    for (let item of aa) if (bb.has(v-item)) return true;

    return false;
}