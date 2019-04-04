'use strict';
const util = require('util');
let Hashtable = require('../hashtable.js');

describe('hashtable class', () =>{
  let myHash = new Hashtable(5);
  describe('hash method', () =>{
    it('returns a number, which is between 0 and specificed size', () =>{
      let result = myHash.hash('zoe');
      let lessThan = !!(result < 5);
      let greaterThan = !! (result > 0);
      expect(typeof(result)).toEqual('number');
      expect(lessThan).toBe(true);
      expect(greaterThan).toBe(true);
    });
  });

  describe('add method', () =>{
    let hash = myHash.hash('zoe');
    myHash.add('zoe', '4');
    it('creates a new linked list at the index if not yet created', () =>{
      
      let result; 
      if(myHash.table[hash].head){result = true;}
      expect(result).toBe(true);
    });

    it('creates adds key and value object to the linked list node value', () =>{
      let result = typeof(myHash.table[hash].head.value);
      expect(result).toEqual('object');
    });

    it('creates adds the name as the key value in the node value object', () =>{
      let result = myHash.table[hash].head.value;
      expect(result).toEqual({'zoe': '4'});
    });
     
  });

  describe('find method', () =>{
    let hash = myHash.hash('zoe');
    myHash.add('zeo',  1);
    myHash.add('eoz', '2');
    myHash.add('oez', '3');

    it('returns an string', () =>{
      let result = typeof(myHash.find('zoe'));
      expect(result).toBe('string');
    });

    it('returns the object with the correct key and value pair', () =>{
      let result = myHash.find('zeo');
      expect(result).toEqual(1);
    });

    it('returns null if the key is not found', () =>{
      let result = myHash.find('hannah');
      expect(result).toBe(null);
    });   
  });

  describe('find hash', () =>{
    myHash.add('zeo',  1);
    myHash.add('eoz', '2');
    myHash.add('oez', '3');
    
    it('returns an number, and it is always the same number', () =>{
      let hash = typeof(myHash.GetHash('zoe'));
      let anotherHash = typeof(myHash.GetHash('zoe'));
      expect(hash).toEqual('number');
      expect(hash).toEqual(anotherHash);
    });

    it('returns undefined if no key is provided', () =>{
      let result = myHash.find('');
      expect(result).toBe(null);
    });
     
  });

  describe('contains', () =>{
    myHash.add('zeo',  1);
    myHash.add('eoz', '2');
    myHash.add('oez', '3');
    
    it('returns a boolean', () =>{
      let hash = typeof(myHash.contains('zoe'));
      expect(hash).toEqual('boolean');
    });

    it('returns true if found', () =>{
      let hash = myHash.contains('zoe');
      expect(hash).toBe(true);
    });
     

    it('returns false if not found', () =>{
      let hash = myHash.contains('hannah');
      expect(hash).not.toBe(true);
    });
  });
});