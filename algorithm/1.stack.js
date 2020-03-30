/**
 * stack 栈结构
 * lifo 后进先出
 *
 * 常用于变量存储、函数调用
 *
 */

function Stack() {
  let item = [];
  // push
  this.push = function(arg) {
    item.push(arg);
  };
  // pop
  this.pop = function() {
    return item.pop();
  };
  // peek
  this.peek = function() {
    return item[item.length - 1];
  };
  // isEmpty
  this.isEmpty = function() {
    return item.length == 0;
  };
  // size
  this.size = function() {
    return item.length;
  };
  // clear
  this.clear = function() {
    item = [];
  };
  // print
  this.print = function() {
    console.log(item.toString());
  };
}

// 调用栈

const a = new Stack();
a.push(1);
a.print();
console.log(a.size());
console.log(a.isEmpty());
a.push(2);
a.push(3);
console.log(a.pop());
a.print();
console.log(a.peek());

/**
 *
 * 利用栈结构实现十进制转换为2进制
 * 1. 十进制的二进制表达为 10/2 取余
 */

function divideBy2(params) {
  let stack = new Stack(),
    rem,
    str = '';

  while (params > 0) {
    rem = params % 2;
    console.log('rem' + rem);
    params = Math.floor(params / 2);
    stack.push(rem);
    console.log('params' + params);
  }
  stack.print();
  while (!stack.isEmpty()) {
    str += stack.pop().toString();
  }
  return str;
}
let a2 = divideBy2(10);
console.log(a2); // 1010
console.log('============================');
/**
 *
 *  把十进制转换为任何进制数，利用普通数组
 */
function baseConverter(num, base) {
  var stack = [],
    rem,
    str = '',
    check = '0123456789ABCDEF';

  while (num > 0) {
    rem = num % base;
    // console.log('rem', rem);
    stack.push(rem);
    num = Math.floor(num / base);
    // console.log('num', num);
  }
  while (stack.length) {
    let s = stack.pop();
    str += check[s];
  }
  return str;
}
let n = baseConverter(12, 4);
console.log(n);
