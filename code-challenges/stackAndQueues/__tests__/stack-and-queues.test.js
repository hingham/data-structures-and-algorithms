'use strict';

let sq = require('../stacks-and-queues.js');
// let pseudoSq = require('../queueWithStack/queue-with-stacks.js');

describe('stacks', () =>{
  describe('push', () =>{
    it('will push a node to the top of the stack', () =>{
      let myStack = new sq.Stack();
      myStack.push('hannah');
      myStack.push('emi');
      expect(myStack['top']['value']).toEqual('emi');
    });  
    
    it('will set the next value of the new node the be the previous top', () =>{
      let myStack = new sq.Stack();
      myStack.push('hannah');
      myStack.push('emi');
      expect(myStack['top']['next']['value']).toEqual('hannah');
    }); 
    it('will return the original node if no value is provided', () =>{
      let myStack = new sq.Stack();
      myStack.push('hannah');
      myStack.push('emi');
      myStack.push();

      expect(myStack['top']['value']).toEqual('emi');
    });   
  });

  describe('pop', () =>{
    xit('removes the top node from the stack', () =>{
      let myStack = new sq.Stack();
      myStack.push('hannah');
      myStack.push('emi');
      myStack.push('jess');
      myStack.pop();
      expect(myStack['top']['value']).not.toEqual('jess');
    });

    xit('returns the top node from the stack', () =>{
      let myStack = new sq.Stack();
      myStack.push('hannah');
      myStack.push('emi');
      myStack.push('jess');
      expect( myStack.pop().value).toEqual('jess'); 
    });

    xit('sets the next node to be the new top node', () =>{
      let myStack = new sq.Stack();
      myStack.push('hannah');
      myStack.push('emi');
      myStack.push('jess');
      myStack.pop();
      expect(myStack['top']['value']).toEqual('emi');
    });
  });

  describe('peek', () =>{
    it('returns the top node from the stack', () =>{
      let myStack = new sq.Stack();
      myStack.push('hannah');
      myStack.push('emi');
      myStack.push('jess');
      expect( myStack.peek().value).toEqual('jess');  
    });

    it('does not mutate the stack', () =>{
      let myStack = new sq.Stack();
      myStack.push('hannah');
      myStack.push('emi');
      myStack.push('jess');
      let result = myStack;
      myStack.peek();
      expect(result).toEqual(myStack); 
    });

    it('sets the next value of the returned node to null', () =>{
      let myStack = new sq.Stack();
      myStack.push('hannah');
      myStack.push('emi');
      myStack.push('jess');
      expect( myStack.peek().next).toBe(null);   
    });
  });

});



describe('Queues', () =>{
  describe('enqueue', () =>{
    it('adds something to the rear', () =>{
      let myQ = new sq.Queue();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      expect(myQ.rear.value).toEqual('leo');
    });

    it('does not the change the front value', () =>{
      let myQ = new sq.Queue();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      expect(myQ.front.value).toEqual('han');
    });

    it('has a next value of null', () =>{
      let myQ = new sq.Queue();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      expect(myQ.rear.next).toBe(null); 
    });
  });

  describe('dequeue', () =>{
    it('returns the first node', () =>{
      let myQ = new sq.Queue();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      myQ.enqueue('jess');
      expect(myQ.dequeue().value).toEqual('han'); 
    });

    it('resets the first node to be the next in line', () =>{
      let myQ = new sq.Queue();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      myQ.enqueue('jess');
      myQ.dequeue();
      expect(myQ.front.value).toEqual('leo'); 
    });

    it('returns the first node with the next property set to null', () =>{
      let myQ = new sq.Queue();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      myQ.enqueue('jess');
      expect(myQ.dequeue().next).toBe(null);  
    });
  });

  describe('peek', () =>{
    it('returns the first value', () =>{
      let myQ = new sq.Queue();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      myQ.enqueue('jess');
      expect(myQ.peek().value).toEqual('han'); 
    });

    it('returns the first value with next set to null', () =>{
      let myQ = new sq.Queue();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      myQ.enqueue('jess');
      expect(myQ.peek().next).toBe(null);  
    });

    it('does not mutate the stack', () =>{
      let myQ = new sq.Queue();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      myQ.enqueue('jess');
        
      let Q = new sq.Queue();
      Q.enqueue('han');
      Q.enqueue('leo');
      Q.enqueue('jess');
      Q.peek();
        
      expect(myQ).toEqual(Q);  
    });
  });
});

describe('pseudo queue', () =>{
  describe('pseudo dequeue', () =>{
    xit('returns the first node when dequeued', () =>{
      let myQ = new pseudoSq.QueueWithStacks();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      myQ.enqueue('jess');
      let result = myQ.pop();
      expect(result.value).toEqual('jess');
    });
    xit('changes the front value of the queue to the next value', ()=> {
      let myQ = new pseudoSq.QueueWithStacks();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      myQ.enqueue('jess');
      myQ.pop();
      expect(myQ.front.value).toEqual('leo');
    });
  });

  describe('pseudo enqueue', () =>{
    xit('does not change the front of the queueu', () =>{
      let myQ = new pseudoSq.QueueWithStacks();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      myQ.enqueue('jess');
      expect(myQ.top.value).toEqual('han');
    });
    xit('sets the rear to be the new node added', ()=> {
      let myQ = new pseudoSq.QueueWithStacks();
      myQ.enqueue('han');
      myQ.enqueue('leo');
      myQ.enqueue('jess');
      expect(myQ.rear).toEqual('jess');
    });
  });
});