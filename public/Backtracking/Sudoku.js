/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const isSafe = function(board, num, i, j, n){
    for(let k =0;k<n;k++){
        if(board[i][k] === num ||board[k][j] === num){
            return false;
        }
    }
    let sx=Math.floor(i/3)*3
     
      
    let sy=Math.floor(j/3)*3
      
      
    for(let k =sx; k<sx+3; k++){
         for(let l=sy; l<sy+3 ;l++){
        if(board[k][l]===num){
            return false;
        }
         }
    }
    return true
}
const willSolveSoduko= function(board,i,j,n, res) {
    //basecase
    if(i===n){
          
        return true;
    }
    //res
    if(j==n){
        return willSolveSoduko(board, i+1, 0, n,res);
    }
   // skip prefilled cell
    if(board[i][j]!='.'){
        return willSolveSoduko(board, i, j+1, n, res);
      }
    //cell to be filled
    for(let num=1;num<=9;num++){
        var no = ''+num
        if(isSafe(board, no, i, j, n)){
             board[i][j] = no;
            const willSolveUbProblem =  willSolveSoduko(board, i, j+1, n, res);
            if(willSolveUbProblem){
                return true
            }
        }
    }
    board[i][j] = '.';
    return false;
}
 

var solveSudoku = function(board) {
    let n = 9
    let res=[];
    willSolveSoduko(board, 0, 0, 9, res);

    return board;
};