import { POST_STATUS } from '../../enum/post';
import { readHtmlFile } from '../../utils/readFileUtils';

export const JSConcepts = {
  name: 'JS',
  themeColor: '#6E4E9B',
  items: {
    'web-component': {
      keyPoint: [
        'Definition: Web Components are a set of browser-native technologies allowing the creation of reusable custom elements.',
        'Benefits: Without web components, developers relied on specific frameworks or libraries for component creation.',
        'Keywords: standardized, native technologies, reusable custom elements, Shadow DOM',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/web-compoment.html'),
    },
    'call-stack': {
      keyPoint: [
        'Definition: A stack structure that records the calls and execution of functions.',
        'Benefits:  harder to track and manage functions in the programs.',
        'Keywords: LIFO, track and manage functions, limit size',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/call-stack.html'),
    },
    'event-loop': {
      keyPoint: [
        'Definition: The event loop mechanism enables asynchronous programming.',
        'Benefits: without event loop program will remain unresponsive while executing long-running tasks.',
        'Keywords: Asynchronous programming, JavaScript runtime environment, responsible for coordinating code execution, event handling, and message processing',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/event-loop.html'),
    },
    'callback-hell': {
      keyPoint: [
        'Definition: Callback hell refers to a situation where callbacks are nested within other callbacks several levels deep.',
        'Benefits: No befits since it is a problem.',
        'Keywords: Nested within other callbacks several levels deep, async/await',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/callback-hell.html'),
    },
    promise: {
      keyPoint: [
        'Definition: A Promise is an object that represents the eventual completion or failure of an asynchronous operation.',
        'Benefits:  Managing nested callbacks became increasingly difficult. The introduction of Promises provided a clearer and more powerful way to handle asynchronous operations..',
        'Keywords: Pending, fulfilled, and rejected state, clearer and powerful way to handle asynchronous operations',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/promise.html'),
    },
    operators: {
      keyPoint: [
        'Definition: JavaScript operators are used to perform mathematical operations, comparison operations, logical operations, etc.',
        'Benefits: Without it we cannot have more complex data processing and decision-making.',
        'Keywords: Perform mathematical operations, comparison operations, logical operations, etc.',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/operator.html'),
    },
    'spread-operator': {
      name: 'Spread Operator(ES6)',
      keyPoint: [
        'Definition: The spread operator is a JavaScript syntax feature introduced in ES6 (ECMAScript 2015).',
        'Benefits: Designed to simplify the manipulation of arrays and objects, especially in copying, merging, or extending them. Before ES6, merging arrays or objects typically required functions like concat or loops',
        'Keywords: JavaScript syntax feature introduced in ES6, simplify the manipulation of arrays and objects avoid merging using loops concat or loops.',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/spead-operator.html'),
    },
    this: {
      keyPoint: [
        'Definition: A way to reference dynamic context, allowing functions and methods to be reused in different contexts..',
        'Benefits: Without it functions and methods cannot be reused.',
        'Keywords: In strict mode ("use strict"),this will be undefined. "this" refers to the context object that the function is being called upon. Its value depends on how the function is called, not how it defined.  ',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/this.html'),
    },
    'var-let-const': {
      name: '  Variable Declarations( var let const )',
      keyPoint: [
        'Definition: Designed to store data values in a program',
        'Benefits:  Without it data management in programs was more complex, requiring manual management of data storage and retrieval in memory.',
        'Keywords: Store data values in program, without it data management in programs was more complex. const -> let -> var ',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/var.html'),
    },
    functions: {
      name: 'functions',
      keyPoint: [
        'Definition: More concise syntax for writing function',
        'Benefits: does not have own "this" lexically bound',
        'Examples: const sum = (a, b) => a + b;',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/function.html'),
    },
    'control-flow': {
      name: 'Control Flow',
      keyPoint: [
        'Definition: More concise syntax for writing function',
        'Benefits: does not have own "this" lexically bound',
        'Examples: const sum = (a, b) => a + b;',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/control-flow.html'),
    },
    'data-type': {
      name: 'Data Types',
      keyPoint: [
        'Definition: More concise syntax for writing function',
        'Benefits: does not have own "this" lexically bound',
        'Examples: const sum = (a, b) => a + b;',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/data-type.html'),
    },
    'async-await': {
      keyPoint: [
        'Definition: Composition in programming refers to combining two or more functions to create a new function.',
        'Benefits: Modularity, Readability, Maintainability, Testability',
        'Examples: const multiplyByTwoAndAddThree = (x) => addThree(multiplyByTwo(x));',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/js/async-await.html'),
    },
  },
};
