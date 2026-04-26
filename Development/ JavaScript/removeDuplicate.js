function removeDuplicateArr(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

let arr = [1, 2, 3, 2, 4, 1, 5];
console.log(removeDuplicateArr(arr));