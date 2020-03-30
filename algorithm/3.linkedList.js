/**
 * 链表
 * 什么是链表：
 *    链表是有序的数据集合
 * 特点：
 *    链表中的元素在内存中不是连续放置的，每个元素由一个存储元素本身的节点和一个指向下一个元素的引用组成
 * 优点：
 *    添加或删除元素时不需要移动其他元素
 * 缺点：
 *    必须全部迭代才能找到指定的元素
 *
 */

function LinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };
  let length = 0,
    head = null;
  // 追加
  this.append = function(element) {
    let node = new Node(element);
    let current = null;
    if (head) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };
  // 插入
  this.insert = function(position, element) {};
  // 按位移除
  this.removeAt = function(position) {};
  // 移除某元素
  this.remove = function(element) {};
  // 索引
  this.indexOf = function(element) {};
  // 是否为空
  this.isEmpty = function() {
    return !!length;
  };
  // 长度
  this.size = function() {
    return length;
  };
  // 读取链头
  this.getHead = function() {
    return head;
  };
  // 字符串
  this.toString = function() {};
  // 输出
  this.print = function() {};
}
