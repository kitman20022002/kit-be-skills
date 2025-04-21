export const functionalProgrammingConcepts = {
  name: 'Functional Programming',
  items: {
    'high-order-functions': {
      keyPoint: [
        'Definition: Takes functions as arguments and return a function as its result',
        'Benefits: more modular, reusable code',
        'Examples: eg: .map(), filter()',
      ],
    },
    'pure-functions': {
      keyPoint: [
        'Definition: Returns the same output for the same input, no side effect',
        'Benefits: Predictability,Testability,Reusability, Maintainability',
        'Examples: sum(a,b)',
      ],
    },
    currying: {
      keyPoint: [
        'Definition: Where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument.',
        'Benefits: Code Reusability, Lazy Evaluation (delayed evaluation of a function until all arguments are provided), Increased Readability',
        'Examples: sum(a)(b)(c)',
      ],
    },
    'function-composition': {
      keyPoint: [
        'Definition: Composition in programming refers to combining two or more functions to create a new function.',
        'Benefits: Modularity, Readability, Maintainability, Testability',
        'Examples: const multiplyByTwoAndAddThree = (x) => addThree(multiplyByTwo(x));',
      ],
    },
    'first-class-functions': {
      keyPoint: [
        'Definition: A function is called "first-class" when it can be passed as an argument to other functions, can be returned by another function, and can be assigned as a value to a variable.',
        'Benefits: Modularity, Readability, Maintainability, Testability',
        'Keywords: Can be passed as an argument to other functions, can be returned by another function, and can be assigned as a value to a variable.',
      ],
    },
    'lazy-evaluation': {
      keyPoint: [
        'Definition: Is a technique that delays the computation of an expression until its value is required.',
        'Benefits: Modularity, Readability, Maintainability, Testability',
        'Examples: const multiplyByTwoAndAddThree = (x) => addThree(multiplyByTwo(x));',
      ],
    },
  },
};
