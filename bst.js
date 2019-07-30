class BST {
  constructor(parent=null, key=null, value=null){
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.right = null;
    this.left = null;
  }
  insert(key, value=null){
    if(this.key === null){
      this.key = key;
      this.value = value;
    }
    else if(this.key > key){
      if (this.left ===null) {
        this.left = new BST(this, key, value);
      } else{
        this.left.insert(key,value);
      }
    } else {
      if(this.right === null) {
        this.right = new BST(this.key,value);
      }else {
        this.right.insert(key, value);
      }
    }
  }
  find(key){
    if(this.key === key){
      return this.value;
    }
  }
}