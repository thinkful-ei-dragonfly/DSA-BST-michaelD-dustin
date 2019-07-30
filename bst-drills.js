const BST = require('./bst');
const BT = require('./bt');

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

function findHeight(BST) {
  if (!BST) {
    return 0;
  } else if (BST.left && BST.right) {
    const right = findHeight(BST.right);
    const left = findHeight(BST.left);
    if (left > right) {
      return 1 + left;
    } else {
      return 1 + right;
    }
  } else if (BST.left && !BST.right) {
    return 1 + findHeight(BST.left);
  } else if (BST.right && !BST.left) {
    return 1 + findHeight(BST.right);
  } else {
    return 1;
  }
}

function isThisaBST(tree) {
  if (!tree) {
    throw new Error('empty tree');
  }

  let BSTtrue = true;
  if (
    (tree.left && tree.left.key > tree.key) ||
    (tree.right && tree.right.key < tree.key)
  ) {
    BSTtrue = false;
    return BSTtrue;
  }
  if (tree.left) {
    BSTtrue = isThisaBST(tree.left);
  }
  if (tree.right) {
    BSTtrue = isThisaBST(tree.right);
  }
  return BSTtrue;
}

function thirdLargeNode(tree, state) {
  if (tree.right) {
    //console.log(state);
    thirdLargeNode(tree.right, state);
    if (state.result) {
      return;
    }
  }
  if (!--state.num) {
    state.result = tree.key;
    return;
  }
  if (tree.left) {
    //console.log(state);
    thirdLargeNode(tree.left, state);
  }
}

function isBalanced(tree) {
  let balanced = true;
  let leftHeight = findHeight(tree.left);
  console.log(leftHeight);
  let rightHeight = findHeight(tree.right);
  console.log(rightHeight);
  if (leftHeight - rightHeight > 1 || rightHeight - leftHeight > 1) {
    balanced = false;
    return balanced;
  }
  if (tree.left) {
    console.log('lefttree');
    balanced = isBalanced(tree.left);
  }
  if (tree.right) {
    console.log('righttree');
    balanced = isBalanced(tree.right);
  }
  return balanced;
}

function isSameTree(arr1, arr2){
  if(arr1[0] !== arr2[0] || arr1.length !== arr2.length){
    return false;
  }
  
  

}

function main() {
  const newBST = new BST();
  const state = {
    num: 3,
    result: null
  };

  newBST.insert(3, 3); // 0 + findheight(right) + findheight(left)
  newBST.insert(1, 1); // findheight(left) = 1
  newBST.insert(5, 5);
  newBST.insert(4,4);
  newBST.insert(6, 6);
  newBST.insert(9, 9);
  newBST.insert(10,10);
  newBST.insert(2, 2);
  newBST.insert(0, 0);
  newBST.insert(-1, -1);

  console.log(isBalanced(newBST));

  // thirdLargeNode(newBST, state);
  // console.log(state.result);
  //-------------------
  // newBST.insert(5, 5);
  // newBST.insert(7, 7);
  //-------------------
  // console.log(isThisaBST(newBST));
  //-------------------
  // BINARY TREE - UNBALANCED (see BT.js => pushes all left)
  // const newBT = new BT();
  //
  // newBT.insert(3, 3);
  // newBT.insert(1, 1);
  // newBT.insert(4, 4);
  // newBT.insert(6, 6);
  // newBT.insert(9, 9);
  // newBT.insert(2, 2);
  // newBT.insert(0, 0);
  //-------------------
  // console.log(isThisaBST(newBT));
  // console.log(findHeight(newBST));
  // console.log(tree(newBST));
  //console.log(newBST);
}

main();
