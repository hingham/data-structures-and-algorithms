append(value) {
    //if head is not assigned, assign head the value and a next value
    let node = new Node (value);
      
    if( ! this.head){
        this.head = node;
        return;
      }
  
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
  }