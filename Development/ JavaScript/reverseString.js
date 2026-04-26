function reverseString(str) {
    let length = str.length;
    let reversed = "";
    for (let i = length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let res = reverseString("Hello");
console.log(res);