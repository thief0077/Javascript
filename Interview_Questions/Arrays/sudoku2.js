function sudoku2(grid) {
    function checkRows(g){
        for ( var i = 0; i < g.length; i++){
            let hash = {};
            for ( var j = 0; j < g[0].length; j++ ){
                if ( g[i][j] !== '.' && hash.hasOwnProperty(g[i][j]) ) return false;
                else hash[g[i][j]] = true;
            }
        }
        return true;
    }
    function checkCols(g){
      for ( var i = 0; i < g[0].length; i++){
            let hash = {};
            for ( var j = 0; j < g.length; j++ ){
                if ( g[j][i] !== '.' && hash.hasOwnProperty(g[j][i]) ) return false;
                else hash[g[j][i]] = true;
            }
        }
        return true;
    }
    function checkGrids(g){
        for ( var h = 0; h < 9; h+=3 ){
            for ( var i = 0; i < 9; i+=3 ){
                let hash = {};
                for ( var j = h; j < h+3; j++ ){
                    for ( var k = i; k < i+3; k++ ){
                        if ( g[j][k] !== '.' && hash.hasOwnProperty(g[j][k]) ) return false;
                        else hash[g[j][k]] = true;
                    }
                }
            }
        }
        return true;
    }
    
    if ( checkRows(grid) && checkCols(grid) && checkGrids(grid) ) return true;
    else return false;
}
