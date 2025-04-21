import { POST_STATUS } from '../../enum/post';
import { readHtmlFile } from '../../utils/readFileUtils';

export const JavaConcepts = {
  name: 'JAVA',
  themeColor: '#6E4E9B',
  items: {
    'concurrency-and-multithreading': {
      name: 'Concurrency and Multithreading',
      keyPoint: [
        'Definition: Multiple tasks being executed macroscopically at the same time',
        'Benefits: Before the advent of multithreading and concurrency mechanisms, programs typically executed tasks sequentially in a single-threaded manner, unable to fully utilize the advantages of multi-core processors.',
        'Keywords: Being executed macroscopically at the same time, Thread Safety, Lock Mechanism, Resource Management',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/java/concurrency.html'),
    },
    'java-memory-model': {
      name: 'Java Memory Model',
      keyPoint: [
        'Definition: The Java Memory Model defines the rules for accessing variables in shared memory and how threads interact with memory, ensuring the correctness and performance of multithreaded programs.',
        'Benefits: Avoid different behaviors on different platforms due to inconsistencies in memory access.',
        'Keywords: Defines the rules for accessing variables in shared memory + how threads interact with memory,  consistency guarantee for memory access across different platforms.',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/java/jmm.html'),
    },
    'jvm-architecture': {
      name: 'JVM Architecture',
      keyPoint: [
        'Definition: The JVM is a virtual machine that provides an environment to execute Java bytecode.',
        'Benefits: Allow Java programs can run on any platform that has the JVM installed.',
        'Keywords: Components: Class Loader, Runtime Data Are, Execution Engine. JVM allows Java programs can run on any platform that has the JVM installed.',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/java/jvm-architecture.html'),
    },
    JIT: {
      name: 'Just-In-Time (JIT) Compiler',
      keyPoint: [
        'Definition: A JIT compiler is a runtime compiler that compiles source code or bytecode into machine code',
        'Benefits: Before the JIT compiler, programs typically needed to be fully compiled before execution or executed line-by-line through an interpreter, each method having its limitations.',
        'Keywords: Compiles source code or bytecode into machine code, improve the execution efficiency of the program.',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/java/jit.html'),
    },
    'class-loaders': {
      name: 'ClassLoaders',
      keyPoint: [
        'Definition: Class loaders are responsible for reading Java bytecode and converting it into classes executable by the JVM',
        'Benefits: Before class loaders, all classes had to be loaded and linked at once when a Java program started.',
        'Keywords: reading Java bytecode, converting it into classes executable by the JVM, does not need all classes be loaded and linked at once when a Java program started',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/java/class-loader.html'),
    },
    java8: {
      name: 'Java 21',
      keyPoint: [
        'Definition: Takes functions as arguments and return a function as its result',
        'Benefits: more modular, reusable code',
        'Examples: eg: Lambda Expressions and Functional Interfaces, Streams API and Collectors, Optional class, New Date and Time API',
      ],
    },
  },
};
