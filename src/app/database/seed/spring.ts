import { POST_STATUS } from '../../enum/post';
import { readHtmlFile } from '../../utils/readFileUtils';

export const springConcepts = {
  name: 'Spring',
  themeColor: '#C8C8C8',
  items: {
    di: {
      name: 'Dependency Injection(DI)',
      keyPoint: [
        'Definition: DI is a process that allows objects to define their dependencies, which are then provided through constructor parameters, factory method parameters, or properties of the object instance.',
        'Benefits: Before DI, dependencies in objects were typically created directly within the object via hardcoding, leading to high coupling and low reusability.',
        'Keywords: Managing dependency relationships more flexible, reducing coupling between components, and enhancing the testability and maintainability of the code. Decoupling, Declarative Configuration, Container Management',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/spring/di.html'),
    },
    ioc: {
      name: 'Inversion of Control (IoC) Container',
      keyPoint: [
        'Definition: An IoC container is a framework or library that manages the creation, configuration, and lifecycle of objects in a Java application',
        'Benefits: Before the advent of IoC containers, objects were typically created and managed directly in the code, leading to high coupling and difficulty in testing.',
        'Keywords: Ioc design principle, Aim improving code maintainability and scalability by changing the way objects are created and managed, Inversion of Control, Dependency Injection, Declarative Management',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/spring/ioc.html'),
    },
    'bean-lifecycle': {
      name: 'Bean Lifecycle',
      keyPoint: [
        'Definition: The concept of the Bean lifecycle is a core part of the Spring framework.',
        'Benefits: Before the advent of the Spring framework, the creation, initialization, and destruction of Java objects had to be manually managed by programmers.',
        'Keywords: Core part of the Spring framework, from creation, initialization, and destruction of Java objects, Container Management, Lifecycle Callbacks, Dependency Injection',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/spring/bean.html'),
    },
  },
};
