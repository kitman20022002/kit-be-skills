import { POST_STATUS } from '../../enum/post';
import { readHtmlFile } from '../../utils/readFileUtils';

export const reactConcepts = {
  name: 'React',
  themeColor: '#FFCC00',
  items: {
    hoc: {
      name: 'High Order Components',
      keyPoint: [
        'Definition: A HOC is a function that takes a component and returns a new component.',
        'Benefits: more modular, reusable code',
        'Keywords: eg: this.children',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/react/hoc.html'),
    },
    'compound-components': {
      keyPoint: [
        'Definition: Design pattern commonly used in front-end development, It emerged to address the issues of state management and reusability in User Interface (UI) components.',
        'Benefits: Manage relationships and states between components more concisely, enhancing code readability and maintainability.',
        'Keywords: Design pattern, Manage relationships and states between components, concisely, Enhancing code readability and maintainability',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/react/compound-components.html'),
    },
    fragments: {
      name: 'Fragments',
      keyPoint: [
        'Definition: React Fragments were introduced in React version 16 as a feature to solve specific rendering issues. (eg: tr, td for table)',
        'Benefits:  Before this had to return a single root element, this limitation hindered certain layout implementations and could lead to unnecessary DOM elements.',
        'Keywords: Introduced in React version 16 as a feature, solve specific rendering issues. Allow components to return multiple elements without the need for an additional DOM element to wrap them',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/react/fragments.html'),
    },
    'lazy-loading': {
      name: 'Lazy Loading',
      keyPoint: [
        'Definition: Lazy loading is a technique to optimize web page or application load performance, which has been incorporated into React to enhance app efficiency.',
        'Benefits: Before lazy loading it will Load all resources at once, leading to long initial load times, especially in large applications.',
        'Keywords: Optimize web page, before Load all resources at once lead to long initial load times, especially in large applications',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/react/lazy-loading.html'),
    },
    suspense: {
      name: 'Suspense',
      keyPoint: [
        'Definition: Properties to pass data from parent components to child components',
        'Benefits: Predictability and Readability(Read only)',
        'Examples: function Comp(props) { const {abc} = props; }',
      ],
    },
    'error-boundaries': {
      name: 'Error Boundaries',
      keyPoint: [
        'Definition: Properties to pass data from parent components to child components',
        'Benefits: Predictability and Readability(Read only)',
        'Examples: function Comp(props) { const {abc} = props; }',
      ],
    },
    'context-api': {
      name: 'Context API',
      keyPoint: [
        'Definition: Managing state globally across an entire React app',
        'Benefits: avoid props drilling, easy to use, improves performance, Readability',
        'Examples: user, theme, or preferred language',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/react/context-api.html'),
    },
    hooks: {
      name: 'Hooks',
      keyPoint: [
        'Definition: they provide a way to use stateful logic in functional components.',
        'Benefits: n/a',
        'Keywords: After React version 16.8, removed limitation functional components could not use state and lifecycle features',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/react/hooks.html'),
    },
    state: {
      name: 'State',
      keyPoint: [
        'Definition: core concept in React applications, used to control the behavior and rendering of components.',
        'Benefits: traditional JavaScript DOM manipulation was mostly imperative, involving direct DOM manipulation to change the interface. React introduced the concept of state as a more efficient way to control interface updates.',
        'Keywords: core concept, control the behavior and rendering of components, more efficient way compare to direct DOM manipulation',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/react/state.html'),
    },
    props: {
      name: 'Props',
      keyPoint: [
        'Definition: Properties to pass data from parent components to child components',
        'Benefits: Predictability and Readability(Read only)',
        'Examples: function Comp(props) { const {abc} = props; }',
      ],
    },
    jsx: {
      name: 'JSX',
      keyPoint: [
        'Definition: Properties to pass data from parent components to child components',
        'Benefits: Predictability and Readability(Read only)',
        'Examples: function Comp(props) { const {abc} = props; }',
      ],
    },
    'controlled-vs-uncontrolled': {
      name: 'Controlled vs Uncontrolled Components',
      keyPoint: [
        'Definition: Properties to pass data from parent components to child components',
        'Benefits: Predictability and Readability(Read only)',
        'Examples: function Comp(props) { const {abc} = props; }',
      ],
    },
    'react-life-cycles': {
      keyPoint: [
        'Definition: Properties to pass data from parent components to child components',
        'Benefits: Predictability and Readability(Read only)',
        'Examples: function Comp(props) { const {abc} = props; }',
      ],
    },
    accessibility: {
      name: 'Accessibility',
      keyPoint: [
        'Definition: Properties to pass data from parent components to child components',
        'Benefits: Predictability and Readability(Read only)',
        'Examples: function Comp(props) { const {abc} = props; }',
      ],
    },
  },
};
