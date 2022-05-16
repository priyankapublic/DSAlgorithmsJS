/**
 * @param {number} n
 * @return {string[]}
 */
var generateBrackets = function (output, i, n, open,  close, res){
    if(i==2*n){
        res.push(output)
    }
    if(open<n){
        generateBrackets(output+'(', i+1, n, open+1, close, res);
    }
    if(close<open){
        generateBrackets(output+')', i+1, n, open, close+1, res);
    }
}
var generateParenthesis = function(n) {
    var res = [];
    var output = ''
    open = 0;
    close = 0;
    i=0;
    generateBrackets(output+'(', i+1, n, open+1, close, res);
    return res
};