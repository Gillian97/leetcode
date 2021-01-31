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
      if (arr[j] >= arr[j - 1]) break;
      temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
}

// 快速排序
var quickSort = (arr, left, right) => {
  if (left < right) {
    let partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  // left==right 则数组不需要做排序操作 直接返回即可
}
// 分区
var partition = (arr, left, right) => {
  let pivot = left, // 随机选择基准值
    index = pivot + 1; // 标记第一个可以交换的位置
  for (let i = index; i <= right; i++) {
    // 比基准值小的元素 与index位置的元素进行交换
    if (arr[i] < arr[pivot]) {
      if (i != index) swap(arr, i, index);
      index++; // 下一个可以交换的位置往后移
    }
  }
  // 所有小于基准值的在左边 大于基准值的在右边
  // index 指向第一个大于基准值的元素
  // 将基准值交换到中间
  swap(arr, pivot, index - 1);
  // 返回基准值的最新位置
  // 为下一轮划分分区做准备
  return index - 1;
}
// 交换元素
var swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


// 归并排序
// 直接对原数组进行修改排序
var mergeSort = (arr) => {
  let n = arr.length;
  // 递归结束条件
  // 数组只有一个元素 直接返回
  if (n <= 1) {
    return arr;
  }
  let mid = Math.floor(n / 2),
    leftArr = arr.slice(0, mid),
    rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

var merge = (leftArr, rightArr) => {
  let result = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }
  while (leftArr.length) {
    result.push(leftArr.shift());
  }
  while (rightArr.length) {
    result.push(rightArr.shift());
  }
  return result;
}

// --------------- 桶的各种应用 ---------------

/** 
 * 计数排序
 * 需要确定待排序元素的数值范围 不是比较排序
 * 时间复杂度 n+k
 * 一个桶一个数
 **/
var countingSort = (arr, maxValue) => {
  let n = maxValue + 1, index = 0;
  let bucket = new Array(n);
  // 初始化数组的值为 0
  for (let i = 0; i < n; i++) {
    bucket[i] = 0;
  }
  // 统计待排数组
  for (let i of arr) {
    bucket[i]++;
  }
  console.log('bucket', bucket);
  // 形成排序之后的数组
  for (let i = 0; i < n; i++) {
    while (bucket[i] > 0) {
      arr[index++] = i; // 先取值, 再++
      bucket[i]--;
    }
  }
  console.log(arr);
  return arr;
}

/**
 * 基数排序
 * 
 **/
var radixSort = (arr) => {
  let bucket = new Array(10);
  let index = 0, mod = 10, dev = 1;
  for (let i = 0; i < 10; i++) bucket[i] = [];

  // 找到最大值 获取最长位数
  let maxVal = 0;
  for (let i of arr) maxVal = Math.max(maxVal, i);
  let maxLen = maxVal.toString().length;

  // 进行除法的次数
  for (let i = 0; i < maxLen; i++, mod *= 10, dev *= 10) {
    index = 0;
    for (let num of arr) bucket[Math.floor(num % mod / dev)].push(num);
    // 依次读取bucket中的值
    for (let item of bucket) {
      while (item.length > 0) {
        arr[index++] = item.shift(); // 先进的值更小 比如 54 52
      }
    }
  }
  return arr;
}

/**
 * 桶排序
 * 一个桶多个数
 **/
var bucketSort = (arr) => {
  // 桶的默认数量
  const bucketNum = 5;
  // 确定每个桶的容量/平均每个桶装几个数
  let minVal = arr[0], maxVal = arr[0];
  for (let i of arr) {
    minVal = Math.min(minVal, i);
    maxVal = Math.max(maxVal, i);
  }
  // 桶区间
  let scope = Math.floor((maxVal - minVal) / (bucketNum - 1));
  // 初始化桶
  let buckets = new Array(bucketNum);
  for (let i = 0; i < bucketNum; i++)  buckets[i] = [];
  // 数组中元素根据大小放入桶中 注意减去最小值
  for (let i of arr) buckets[Math.floor((i - minVal) / scope)].push(i);
  // 对每个桶中的元素进行排序 这里使用插入排序
  for (let bucket of buckets) {
    for (let i = 0; i < bucket.length - 1; i++) {
      // 找到插入的位置
      for (let j = i + 1; j > 0; j--) {
        if (bucket[j] >= bucket[j - 1]) break;
        let temp = bucket[j];
        bucket[j] = bucket[j - 1];
        bucket[j - 1] = temp;
      }
    }
  }

  // 将桶中排好序的元素拿出
  let newIndex = 0;
  for (let bucket of buckets) {
    for (let i of bucket) arr[newIndex++] = i;
  }
}

let arr = [60, 20, 13, 54, 3, 10, 6, 41, 52, 1]
bucketSort(arr);