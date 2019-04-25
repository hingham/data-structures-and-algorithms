class Node{
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  let root = new Node(2);
  let a = new Node(4);
  let b = new Node(1);
  let c = new Node(4);
  
  root.right = b;
  root.left = a;
  a.right = c;
  
  console.log(root);
  
  var findTilt = function(root) {
      let sum = 0;
      
      let getTilt = (node) =>{
          
      
      if(node === null){
          return 0;
      }
       
      // let diff = Math.abs( getTilt(node.right) - getTilt(node.left) );
      sum =  sum + Math.abs( getTilt(node.right) - getTilt(node.left)); //3
      
      // sum = Math.abs( getTilt(node.right) - getTilt(node.left))  + sum; //7
  
      // sum =  sum + diff; //7
  
      console.log(sum);
      return node.val;
      }
   
      getTilt(root);
      return sum;
  };
  
  findTilt(root);
  