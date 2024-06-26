class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinarySearchTree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */
  
    insert(val) {
        if(this.root === null){
            this.root = new Node(val)
            return this;
        }

        let currentNode = this.root;
        while(true){

            if(currentNode > val){
                if(currentNode.left === null){
                    currentNode.left = new Node(val)
                    return this;
                } else {
                    currentNode = currentNode.left
                }
           
            }
            else if(currentNode < val ){
                if(currentNode.right === null){
                    currentNode.right = new Node(val);
                    return this;
                }
                else{
                    currentNode = currentNode.right  
                } 
            }
         }
    }
  
    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */
  
    insertRecursively(val, currentNode = this.root) {
        if(this.root === null){
            this.root = new Node(val)
            return this;
        }
            if(currentNode > val){
                if(currentNode.left === null){
                    currentNode.left = new Node(val)
                    return this;
                } 
                return this.insertRecursively(val,currentNode.left)
            }
            else if(currentNode < val ){
                if(currentNode.right === null){
                    currentNode.right = new Node(val);
                    return this;
                }
                return this.insertRecursively(val,currentNode.right) 
            }
         }


    
  
    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */
  
    find(val) {
        let currentNode = this.root;
        let found = false;

        if(currentNode.val === val) return currentNode;

        while(currentNode && !found){
            
            if(currentNode.val > val){
                currentNode = currentNode.left;
            }
            else if (currentNode.val < val ){
                currentNode = currentNode.right;
            }
            else{
                found = true;
            }
        }

        if(!found) return undefined;
        return currentNode;
  
    }
  
    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */
  
    findRecursively(val,currentNode = this.root) {
        if(this.root === null) return undefined;

        if(currentNode > val){
            if(currentNode.left === null) return undefined;
            return this.insertRecursively(val,currentNode.left);
        }
        else if(currentNode < val){
            if(currentNode.right === null)return undefined;
            return this.insertRecursively((val,currentNode.right))
        }
        return currentNode;

  
    }
  
    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */
  
    dfsPreOrder() {
        let visited = [];
        let currentNode = this.root;

        function traverse(node){
            visited.push(node.val)
            if(node.left)traverse(node.left)
            if(node.right)traverse(node.right)
                
        }
        traverse(currentNode);
        return visited;
    }
  
    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */
  
    dfsInOrder() {
        let visited = []
        let currentNode = this.root;

        function traverse(node){
            if(node.left) traverse(node.left)
            visited.push(node.val)
            if(node.right)traverse(node.right)
        }
        traverse(currentNode);
        return visited;
  
    }
  
    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */
  
    dfsPostOrder() {
        let visited = []
        let currentNode = this.root;

        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right)traverse(node.right)    
            visited.push(node.val)
            
        }
        traverse(currentNode);
        return visited;
  
    }
  
    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */
  
    bfs() {
         let currentNode = this.root;
         let queue = [];
         let visited = [];

        while(queue.length){
            currentNode = queue.shift();
            visited.push(currentNode.val);
            if(currentNode.left){
                visited.push(currentNode.left);
            }
            else if(currentNode.right){
                visited.push(currentNode.right);
            }
        }
        return visited;
    }
  
    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */
  
    // remove(val) {
  
    // }
  
    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */
  
    // isBalanced() {
  
    // }
  
    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */
  
    // findSecondHighest() {
      
    // }
  }

  let bst = new BinarySearchTree()

  bst.insert(7);
  bst.insert(5);
  bst.insert(3);
  bst.insert(16);
  bst.insert(21);

  bst.insertRecursively(6);
  bst.insertRecursively(2);
  bst.insertRecursively(14);
  bst.insertRecursively(19);

  bst.find(6);
  bst.find(20);

  bst.findRecursively(16);
  bst.findRecursively(24);

  bst.dfsPreOrder();
  bst.dfsInOrder();
  bst.dfsPostOrder();
  bst.bfs();
  
  
  module.exports = BinarySearchTree;
  