/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 28. Implement strStr()
var strStr = function(haystack, needle) {
    if(needle == ''){
        return 0;
    }
    for(let i=0;i<haystack.length;i++){
        if(needle[0]==haystack[i] && isEqual(i, haystack, needle))
            return i
    }
    return -1;
};

var isEqual = (cur, haystack, needle) =>{
    for(let i = 0;i<needle.length;i++){
        if(needle[i]!=haystack[cur+i])
            return false
    }
    return true
}
