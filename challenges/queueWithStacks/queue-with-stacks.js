'use strict';

const QnS = require('./stacks-and-queues');
const Stack = QnS.Stack;

class PseudoClass {

  constructor(){
    this.front = new Stack;
    this.rear = new Stack;
  }

  enqueue( value ){
    this.rear.push( value );
  }

  dequeue(){

    if( this.front.peek() ){
      this.front.pop();
    } else if ( this.rear.peek() ) {
      while( this.rear.peek() ){
        let transferValue = this.rear.pop();
        this.front.push( transferValue );
      }
      this.front.pop();
    } else return null;
  }

}

module.exports = PseudoClass;