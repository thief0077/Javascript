function removeKFromList(l, k) {
    if ( l == null ) return [];
    
    while ( l != null && l.value == k ){
        l = l.next;
    }
    var tmp = l;
    while (tmp != null){
        let trailer = tmp;
        tmp = tmp.next;
        while (tmp != null && (tmp.value==k) ){
            tmp = tmp.next;
        }
        trailer.next = tmp;
    }
    return l;
}