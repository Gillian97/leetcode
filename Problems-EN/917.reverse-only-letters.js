/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
/**
 * 
 * 主要还是双指针的运用，比较方便
 */
var reverseOnlyLetters = function (S) {
    let len = S.length;
    let arr = S.split('');
    let i = 0, j = len - 1;
    while (i <= j) {
        if (i == j)
            break;
        if (!isLetter(arr[i])) {
            i++;
            continue;
        }
        if (!isLetter(arr[j])) {
            j--;
            continue;
        }
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join('');
};

var isLetter = (item) => {
    if (item.charCodeAt() > 122
        || (item.charCodeAt() > 90 && item.charCodeAt() < 97)
        || item.charCodeAt() < 65) {
        return false;

    } else
        return true
}

let str = 'a-bC-dEf-ghIj'
reverseOnlyLetters(str);
// @lc code=end

