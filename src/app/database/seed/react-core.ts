import { POST_STATUS } from '../../enum/post';
import { readHtmlFile } from '../../utils/readFileUtils';

export const reactCoreConcepts = {
  name: 'React Core',
  themeColor: '#C8C8C8',
  items: {
    'virtual-dom': {
      name: 'Virtual Dom',
      keyPoint: [
        'Definition: Core concept in the React framework developed to enhance the performance and efficiency of applications.',
        'Benefits: Before the Virtual DOM, most JavaScript frameworks and libraries operated directly on the actual DOM, which often resulted in inefficient performance during large-scale updates.',
        'Keywords: Core concept, Enhance performance and efficiency, inefficient performance before the Virtual DOM',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/react-core/virtual-dom.html'),
    },
    reconciliation: {
      name: 'Reconciliation',
      keyPoint: [
        'Definition: A core process in React used for efficiently updating the UI',
        'Benefits: Before the reconciliation process, updating the UI might have required re-rendering the entire component tree, even if there were only minor changes.',
        'Keywords: Core process in React, efficiently updating the UI, prevent re-rendering the entire component tree',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/react-core/reconciliation.html'),
    },
    fibers: {
      name: 'Fibers',
      keyPoint: [
        'Definition: A Fiber is an instance of a component in React, representing a unit of work in the UI.',
        'Benefits: React initial rendering process, before Fibers, was based on a recursive call stack, which had limitations in handling intensive UI updates and animations.',
        'Keywords: Instance of a component in React, handle complex UIs and improve performance for applications with heavy rendering tasks.',
      ],
      status: POST_STATUS.DONE,
      description: readHtmlFile('/react-core/fibers.html'),
    },
  },
};
