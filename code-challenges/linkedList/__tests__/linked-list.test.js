'use strict';
const lists = require('../linked-list.js');


////reference lab 02 to find how to export a class


describe('linked', () =>{

  describe('linked list', () => {
    //three tests for prints 
    it('prints all the values ', () =>{
      let result = new lists.Linkedlist();
      result.insert('Hannah');
      result.insert('Emi');
      result.insert('Jessie');
      let arr = result.print();
      expect(arr).toEqual(['Hannah', 'Emi', 'Jessie']);

    });
    it('prints no values for an empty linked list', () =>{
      let result = new lists.Linkedlist();
      result.insert('Hannah');
      result.insert('Emi');
      result.insert('Jessie');
      let arr = result.print();
      expect(arr).toEqual(['Hannah', 'Emi', 'Jessie']);
    });

    it('prints values that are numbers, objects, or strings', () =>{
      let result = new lists.Linkedlist();
      result.insert('Hannah');
      result.insert('Emi');
      result.insert('Jessie');
      let arr = result.print();
      expect(arr).toEqual(['Hannah', 'Emi', 'Jessie']);
    });

    //it inserts new nodes  
    it('inserts a new node at the end ', () =>{
      let result = new lists.Linkedlist();
      result.insert('Hannah');
      result.insert('Jessie');
      expect(result.head.next.value).toEqual('Jessie');
    });

    it('does not insert a new node if value is not provided', () =>{
      let oneAdded = new lists.Linkedlist();
      oneAdded.insert('Hannah');
      let twoAdded = new lists.Linkedlist();
      twoAdded.insert('Hannah');
      twoAdded.insert();

      expect(oneAdded).toEqual(twoAdded);
    });

    it('inserts a new node with next equal to null', () =>{
      let result = new lists.Linkedlist();
      result.insert('Hannah');
      result.insert('Jessie');
      expect(result.head.next.next).toEqual(null);
    });
  

    //includes returns true if the value is included

    it('returns true if value is included', () =>{
      let result = new lists.Linkedlist();
      result.insert('Hannah');
      result.insert('Emi');
      result.insert(4);
      let included = result.includes('Hannah');
      expect(included).toEqual(true);
    });
    it('returns false if value is not included', ()=> {
      let result = new lists.Linkedlist();
      result.insert('Hannah');
      result.insert('Emi');
      result.insert(4);
      let included = result.includes('Jessie');
      expect(included).toEqual(false);
    });

    it('returns false if the linked list is empty', () =>{
      let result = new lists.Linkedlist();
      let included = result.includes('Jessie');
      expect(included).toEqual(false);

    });


  });

});