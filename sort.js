// 冒泡排序
// 不断比较移动给定范围的最大值 直至最大值在数组的末尾
var bubble = (arr) => {
  let n = arr.length;
  let bigger;
  for (let i = 0; i < n - 1; i++) { // 为了限制内部循环的长度
    for (let j = 0; j < n - 1 - i; j++) {
      // 将更大的值 放在后面
      if (arr[j + 1] < arr[j]) {
        bigger = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = bigger;
      }
    }
  }
}

// 选择排序
var selection = (arr) => {
  let n = arr.length, minIndex;
  for (let i = 0; i < n; i++) {
    minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // exchange minIndex and i
    // 最小值有更新
    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
}

// 插入排序
var insertion = (arr) => {
  let n = arr.length, temp;
  // 标记前多少元素是有序的
  for (let i = 0; i < n - 1; i++) {
    // 将有序数列的后一个元素加入进来
    for (let j = i + 1; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}

let arr = [3, 2, 1, 7, 6, 8, 0, 4];
insertion(arr);
console.log(arr);

