'use strict';

const lists = require('../linked-list.js');


describe('linked', () =>{

  describe('linked list', () => {
    //three tests for prints 
    it('prints all the values ', () =>{
      let result = new lists.Linkedlist();
      result.append('Hannah');
      result.append('Emi');
      result.append('Jessie');
      let arr = result.print();
      expect(arr).toEqual(['Hannah', 'Emi', 'Jessie']);

    });
    it('prints no values for an empty linked list', () =>{
      let result = new lists.Linkedlist();
      result.append('Hannah');
      result.append('Emi');
      result.append('Jessie');
      let arr = result.print();
      expect(arr).toEqual(['Hannah', 'Emi', 'Jessie']);
    });

    it('prints values that are numbers, objects, or strings', () =>{
      let result = new lists.Linkedlist();
      result.append('Hannah');
      result.append('Emi');
      result.append('Jessie');
      let arr = result.print();
      expect(arr).toEqual(['Hannah', 'Emi', 'Jessie']);
    });

    //it appends new nodes  
    it('appends a new node at the end ', () =>{
      let result = new lists.Linkedlist();
      result.append('Hannah');
      result.append('Jessie');
      expect(result.head.next.value).toEqual('Jessie');
    });

    it('does not append a new node if value is not provided', () =>{
      let oneAdded = new lists.Linkedlist();
      oneAdded.append('Hannah');
      let twoAdded = new lists.Linkedlist();
      twoAdded.append('Hannah');
      twoAdded.append();

      expect(oneAdded).toEqual(twoAdded);
    });

    it('appends a new node with next equal to null', () =>{
      let result = new lists.Linkedlist();
      result.append('Hannah');
      result.append('Jessie');
      expect(result.head.next.next).toEqual(null);
    });
  

    //includes returns true if the value is included
    it('returns true if value is included', () =>{
      let result = new lists.Linkedlist();
      result.append('Hannah');
      result.append('Emi');
      result.append(4);
      let included = result.includes('Hannah');
      expect(included).toEqual(true);
    });
    it('returns false if value is not included', ()=> {
      let result = new lists.Linkedlist();
      result.append('Hannah');
      result.append('Emi');
      result.append(4);
      let included = result.includes('Jessie');
      expect(included).toEqual(false);
    });

    it('returns false if the linked list is empty', () =>{
      let result = new lists.Linkedlist();
      let included = result.includes('Jessie');
      expect(included).toEqual(false);

    });



    it('inserts something after', () =>{
      let result = new lists.Linkedlist();
      result.append('Hannah');
      result.append('Emi');
      result.append('Jessie');
      result.insertAfter('Hannah', '28');
      expect(result.head.next.value).toEqual('28');

    });

    it('inserts something before', () =>{
      let result = new lists.Linkedlist();
      result.append('Hannah');
      result.append('Emi');
      result.append('Jessie');
      result.insertBefore('Emi', '28');
      expect(result.head.next.value).toEqual('28');

    });

  });

});

