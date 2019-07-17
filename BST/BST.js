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

    isEmpty() {
        return this.root === null
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

    //Prints the left most nodes
    LeftView() {
        var result = [];
        var current = this.root

        while (current !== null) {
            if (current.left !== null) {
                result.push(current.value)
                current = current.left;
            }

            else if (current.right !== null) {
                result.push(current.value);
                current = current.right;
            }

            else {
                result.push(current.value)
                break;
            }
        }
        return result;
    }

    //Prints the right most nodes
    RightView() {
        var result = [];
        var current = this.root;

        while (current !== null) {

            if (current.right !== null) {
                result.push(current.value);
                current = current.right;
            }
            else if (current.left !== null) {
                result.push(current.value);
                current = current.left;
            }
            else {
                result.push(current.value);
                break;
            }
        }

        return result;
    }

    //Prints all the leaf nodes (nodes with no children)
    LeafNodes() {
        var result = [];

        var traverse = node => {
            if (node.left !== null)
                traverse(node.left);

            if (node.right !== null)
                traverse(node.right);

            if (node.left === null && node.right === null)
                result.push(node.value);
        }

        traverse(this.root);
        return result;
	}
	
	remove(data){
        //Reinitialize the modified root node
        this.root = this.removeData(this.root, data);
    }

    removeData(node, key){
        
        if(node === null){
            return null;
        }
        
        if(key > node.value){
            node.right = this.removeData(node.right, key);
            return node;
        }

        else if(key < node.value){
            node.left = this.removeData(node.left, key);
            return node;
        }

        else{

			//Check to see if the deleted node 
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            
            //Check the children
            if(node.right !== null){
                node = node.right;
                return node;
            }

            else if(node.left !== null){
                node = node.left;
                return node;
			}
			
			var aux = this.min(node.right); 
			node.data = aux.data;
			node.right = this.removeData(node.right, aux.data); 
			return node;
        }
    }
}

module.exports = BST;