/**
 *
 * 利用二叉搜索树实现数据分组排序
 */

function BinarySearchTree() {
  //  创建节点方法
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  // 根结点
  var root = null;
  this.insert = function(key) {
    var node = new Node(key);
    var insertNode = function(node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    };
    if (root === null) {
      root = node;
    } else {
      insertNode(root, node);
    }
  };
}