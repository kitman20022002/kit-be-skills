import { readHtmlFile } from '../../utils/readFileUtils';

export const typescriptConcepts = {
  name: 'Typescript',
  themeColor: '#C8C8C8',
  items: {
    'basic-types': {
      name: 'Basic Types',
      keyPoint: [
        'Definition: is a superset of JavaScript, adding a type system and compile-timetype checking.',
        'Benefits: Allowed developers to detect potential type errors during coding',
        'Keywords: Superset of JS, Detect potential type errors during coding',
      ],
      description: readHtmlFile('/typescript/basic-types.html'),
    },
    tuples: {
      name: 'Tuples',
      keyPoint: [
        'Definition: A data structure that holds a fixed number of elements, with each element potentially being of a different type',
        'Benefits: Introduced a data structure that is both fixed in number and diverse in type.',
        'Keywords: holds a fixed number of elements, each element potentially being of a different type',
      ],
      description: readHtmlFile('/typescript/tuple.html'),
    },
    union: {
      name: 'Union and Intersection types',
      keyPoint: [
        'Definition: Union types are a variable type that can store one of several different types.',
        'Benefits: The introduction of union types brought flexibility and expressiveness by allowing variables to represent multiple possible types.',
        'Keywords: A variable type that can store one of several different types, flexibility and expressiveness.',
      ],
      description: readHtmlFile('/typescript/union.html'),
    },
    generics: {
      name: 'Generics',
      keyPoint: [
        'Definition: A variable type that can store one of several different types, such as an integer or a string.',
        'Benefits: The introduction of generics enabled flexible handling of various data types while maintaining type safety.',
        'Keywords: Can store one of several different types, Enabled flexible handling of various data types while maintaining type safety.',
      ],
      description: readHtmlFile('/typescript/generics.html'),
    },
    'type-inference': {
      name: 'Type Inference',
      keyPoint: [
        'Definition: A Fiber is an instance of a component in React, representing a unit of work in the UI.',
        'Benefits: React initial rendering process, before Fibers, was based on a recursive call stack, which had limitations in handling intensive UI updates and animations.',
        'Keywords: Instance of a component in React, handle complex UIs and improve performance for applications with heavy rendering tasks.',
      ],
    },
    'type-guards': {
      name: 'Type guards',
      keyPoint: [
        'Definition: A Fiber is an instance of a component in React, representing a unit of work in the UI.',
        'Benefits: React initial rendering process, before Fibers, was based on a recursive call stack, which had limitations in handling intensive UI updates and animations.',
        'Keywords: Instance of a component in React, handle complex UIs and improve performance for applications with heavy rendering tasks.',
      ],
    },
    'conditional-types': {
      name: 'Conditional Types',
      keyPoint: [
        'Definition: A Fiber is an instance of a component in React, representing a unit of work in the UI.',
        'Benefits: React initial rendering process, before Fibers, was based on a recursive call stack, which had limitations in handling intensive UI updates and animations.',
        'Keywords: Instance of a component in React, handle complex UIs and improve performance for applications with heavy rendering tasks.',
      ],
    },
    'function-overloading': {
      name: 'Function Overloading',
      keyPoint: [
        'Definition: A Fiber is an instance of a component in React, representing a unit of work in the UI.',
        'Benefits: React initial rendering process, before Fibers, was based on a recursive call stack, which had limitations in handling intensive UI updates and animations.',
        'Keywords: Instance of a component in React, handle complex UIs and improve performance for applications with heavy rendering tasks.',
      ],
    },
  },
};
