class Node{
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST{
	constructor() {
		this.root = null;
		this.count = 0;
	}

	size() {
		return this.count;
	}

	insert(value) {
		this.count++;
		var newnode = new Node(value);

		if(this.root === null){
			this.root = newnode;
			return;
		}

		var insertNode = node => {
			if (value < node.value) {
				if (node.left === null) {
					console.log('Inserted value: ' + value)
					node.left = newnode
				} else {
					insertNode(node.left)
				}
			}

			else if (value > node.value) {
				if (node.right === null) {
					console.log('Inserted value: '+ value)
					node.right = newnode
				}
				else {
					insertNode(node.right);
				}
			}
		}

		insertNode(this.root)
	}

	min() {
		var current = this.root;

		while (current.left !== null) {
			current = current.left;
		}

		return current.value;
	}

	max() {
		var current = this.root;

		while (current.right !== null) {
			current = current.right;
		}

		return current.value;
	}

	contains(value) {
		var current = this.root;

		while (current !== null) {
			if (value === current.value)
				return true;

			if (value < current.value)
				current = current.left;

			else if (value > current.value)
				current = current.right;
		}

		return false;
	}

	//Implementations of Breadth First Search: In-order, Pre-order, Post-order
	//Left, Root, Right
	bfsInOrder() {
		var result = [];

		var traverse = node => {

			if (node.left !== null)
				traverse(node.left);

			result.push(node.value);

			if (node.right !== null)
				traverse(node.right);
		}

		traverse(this.root);

		return result;
	}

	//Root, Left, Right
	bfsPreOrder() {
		var result = [];

		var traverse = node => {

			result.push(node.value);

			if (node.left !== null)
				traverse(node.left);

			if (node.right !== null)
				traverse(node.right);
		}

		traverse(this.root);
		return result;
	}

	//Left, Right, Root
	bfsPostOrder() {
		var result = [];

		var traverse = node => {
			if (node.left !== null)
				traverse(node.left);

			if (node.right !== null)
				traverse(node.right);

			result.push(node.value);
		}

		traverse(this.root);
		return result;
	}
}


var bst = new BST();
bst.insert(4)
bst.insert(2)
bst.insert(8)
bst.insert(3)
console.log(bst.min());
console.log(bst.max());

console.log(bst.contains(0));
console.log(bst.bfsInOrder());
console.log(bst.bfsPostOrder());
console.log(bst.bfsPreOrder());

console.log('Size is: ' + bst.size())