'use strict';

const LinkedList = require('../linked-list');

describe('linked List', () => {

  it('insert() instantiates an empty array', () => {
    let list = new LinkedList;
    list.insert();
    expect(list.head.value).toEqual(undefined);
    expect(list.head.next).toEqual(null);
  });

  it('insert() can properly insert into the linked list', () => {
    let list = new LinkedList;
    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toEqual(null);

  });

  
  it('insert() The Head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList;
    list.insert(1);
    expect(list.head.value).toEqual(1);
  });
  

  it('insert() successfully creates multiple nodes to the linked list', () => {

    let list = new LinkedList;

    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next.value).toEqual(1);

  });

  it('includes() searches through the Linked List returns true if found', () => {

    let list = new LinkedList;
    let testArray = [ 1, true, 'test', null ];

    testArray.forEach( test => {
      list.insert( test );
    });

    testArray.forEach( test => {
      expect(list.includes( test )).toEqual(true);
    });

    expect(list.includes( {} )).toEqual(false);

  });

  it('includes() searches through the Linked List return false if not found', () => {

    let list = new LinkedList;
    let testArray = [ 1, true, 'test', null ];

    testArray.forEach( test => {
      list.insert( test );
    });

    testArray.forEach( test => {
      expect(!list.includes( test )).toEqual(false);
    });

    expect(list.includes( {} )).toEqual(false);

  });

  it('toString() returns a string representing all values in Linked List', () => {

    let list = new LinkedList;
    let testArray = [ 1, true, 'test', null, {}, () => {} ];

    testArray.forEach( test => {
      list.insert( test );
    });

    expect(list.toString()).toEqual('() => {} [object Object]  test true 1');

  });
});