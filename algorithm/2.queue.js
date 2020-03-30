/**
 *
 * 队列 先进先出原则的一组有序数列
 * fifo
 */

function Queue() {
  let items = [];
  //  入列
  this.enqueue = function(item) {
    items.push(item);
  };
  // 出列
  this.dequeue = function() {
    return items.shift();
  };
  // 队列顶部元素
  this.front = function() {
    return items[0];
  };
  // clear
  this.clear = function() {
    items = [];
  };
  // size
  this.size = function() {
    return items.length;
  };
  // isEmpty
  this.isEmpty = function() {
    return items.length == 0;
  };
  // print
  this.print = function() {
    console.log(items.toString());
  };
  // get items
  this.getQueue = function() {
    return items;
  };
}

const q1 = new Queue();
q1.enqueue(1);
console.log(q1.getQueue());

console.log(q1.front());

/**
 *
 * 队列扩展 优先级队列
 *
 * 实现原理 在入列时根据优先级入列
 */

function PriorityQueue() {
  //  队列
  let items = [];
  // 包装元素优先级
  function QueueElement(param, priority) {
    this.element = param;
    this.priority = priority;
  }
  // 入列
  this.enqueue = function(param, priority) {
    // 包装元素优先级
    let element = new QueueElement(param, priority);
    // 当前队列是否为空
    if (this.isEmpty()) {
      items.push(element);
    } else {
      // 当前队列不为空，遍历队列元素优先级在正确位置插入元素
      let isAdd = false; // 记录是否插入元素
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.priority > element.priority) {
          items.splice(i, 0, element);
          isAdd = true;
          break;
        }
      }
      if (!isAdd) {
        items.push(element);
      }
    }
  };
  // 出列
  this.dequeue = function() {
    return items.shift();
  };
  // size
  this.size = function() {
    return items.length;
  };
  // clear
  this.clear = function() {
    items = [];
  };
  // front
  this.front = function() {
    return items[0];
  };
  // getQueue
  this.getQueue = function() {
    return items;
  };
  // print
  this.print = function() {
    console.log(items.toString());
  };
  // isEmpty
  this.isEmpty = function() {
    return items.length == 0;
  };
}
const pq = new PriorityQueue();
// pq.getQueue();
pq.enqueue('jack', 2);
// console.log(pq.getQueue());
pq.enqueue('aero', 3);
pq.enqueue('bob', 1);
console.log(pq.getQueue());

/**
 *
 * 研究分组排序问题
 * 1.已知 数组 [{a:a,b:1},{a:a,b:0},{a:a,b:3},{a:a,b:2},{c:c,b:5},{c:c,b:1},{c:c,b:4},{d:c,b:5},{c:c,b:1}]
 * 2.按照数组内每一项的a的key分组 并对其进行排序
 */

let arr3 = [
  { a: 1, b: 1 },
  { c: 2, b: 5 },
  { a: 1, b: 3 },
  { a: 1, b: 2 },
  { c: 2, b: 4 },
  { d: 3, b: 5 },
  { a: 1, b: 11 },
  { a: 1, b: 11 },
  { c: 2, b: 11 },
  { d: 3, b: 11 },
  { a: 1, b: 0 },
  { d: 3, b: 1 },
  { a: 1, b: 12 },
  { a: 1, b: 9 },
  { a: 1, b: 6 },
  { c: 2, b: 1 },
  { c: 2, b: 10 },
  { a: 1, b: 11 },
  { a: 1, b: 12 },
  { c: 2, b: 10 },
  { d: 3, b: 22 },
  { a: 1, b: 33 },
  { d: 3, b: 99 },
  { a: 1, b: 100 }
];
function arrSort(arr) {
  let items = [],
    len = arr.length;
  let s = 0;
  let n = Date.now();
  for (let k = 0; k < arr.length; k++) {
    let ele = arr[k];
    let keys = Object.keys(ele);
    if (!items.length) {
      items.push(ele);
    } else {
      let add = false;
      let i = 0;
      for (i; i < items.length; i++) {
        s++;
        const item = items[i];
        if (Object.keys(item).toString() == keys.toString()) {
          if (items[i].b > ele.b) {
            add = true;
            items.splice(i, 0, ele);
            break;
          }
          if (i < items.length - 1) {
            if (
              Object.keys(item).toString() === keys.toString() &&
              Object.keys(items[i + 1]).toString() !== keys.toString()
            ) {
              add = true;
              items.splice(i + 1, 0, ele);
              break;
            }
          }
        }
      }
      if (!add) {
        items.push(ele);
      }
    }
  }
  console.log(s);
  console.log(Date.now() - n);
  return items;
}
let items = arrSort(arr3);
console.log(items);

/**
 * 击鼓传花
 */

function hotPotato(list, count) {
  let q = new Queue();
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    q.enqueue(item);
  }
  while (q.size() > 1) {
    for (let i = 0; i < count; i++) {
      const element = count;
      q.enqueue(q.dequeue());
      console.log(q.getQueue());
    }
    const a = q.dequeue();
  }
  return q.dequeue();
}
console.log(hotPotato(['weenie', 'bob', 'smith', 'steven'], 3));
