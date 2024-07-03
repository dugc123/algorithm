let arr = [4, 6, 8, 1, 2, 5, 3, 7];


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    quickSort1(arr, 0, arr.length);
}

function quickSort1(arr, begin, end) {
    if (begin >= end) {
        return;
    }
    let left = begin, right = end - 1;
    const pivot = arr[left];
    while (left < right) {
        while (arr[right] > pivot && left < right) {
            --right;
        }
        while (arr[left] <= pivot && left < right) {
            ++left;
        }
        swap(arr, left, right);
    }
    swap(arr, left, begin);
    quickSort1(arr, begin, left - 1);
    quickSort1(arr, left + 1, end);
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

quickSort(arr);

console.log(arr);