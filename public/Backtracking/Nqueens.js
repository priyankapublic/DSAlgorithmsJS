/**
 * @param {number} n
 * @return {string[][]}
 */
 const canPlaceQueen=function(board,n,x,y){
    
    //check column
     for(let j=0;j<x;j++){
        if(board[j][y] == 'Q'){
             
            return false
        }
     }
    //left diagonal
    let i=x
    let j=y;
   while(i>=0 && j>=0){
        if(board[i][j] == 'Q'){
            
            return false
        }
       i--;
       j--;
     }
    
      //right diagonal
   i=x
   j=y;
   while(i>=0 && j<n){
        if(board[i][j] == 'Q'){
             
            return false
        }
       i--;
       j++;
     }
    
     return true


}
const pushBoards = function(res, n, board){
    let localRes = []
    for(let i=0;i<n;i++){
        
        let joined = board[i].join('');
        localRes.push(joined)
    }
    res.push(localRes)
}
var solveNQueenPb = function(board,n,i, res){
    
    if(i===n){
        pushBoards(res, n, board)
        return 1
    }
    let ways=0;
    for(let j = 0;j<n;j++){
        if(canPlaceQueen(board,n,i,j)){
             
            board[i][j] = 'Q'
            ways += solveNQueenPb(board,n,i+1, res)
            board[i][j] = '.'
        }
    }
    return ways
}
var solveNQueens = function(n) {
    let res = []
    let board=[];
     for(let i=0;i<n;i++){
         board[i]=[]
         for(let j=0;j<n;j++){
             board[i][j] = '.'
         }
     }
      console.log(board);  
  solveNQueenPb(board, n, 0, res)
    return res;
};