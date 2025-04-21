import { readHtmlFile } from '../../utils/readFileUtils';

export const securityConcepts = {
  name: 'Security',
  themeColor: '#FFCC00',
  items: {
    csp: {
      name: 'Content Security Policy(CSP)',
      keyPoint: [
        'Definition: The Content Security Policy (CSP) is a browser feature designed to enhance web security.',
        'Benefits: Before the introduction of CSP, websites primarily relied on server-side security measures to prevent attacks. The introduction of CSP enabled browsers to in security protection, providing an additional layer of security for web pages.',
        'Keywords: Prevent cross-site scripting (XSS) attacks and other code injection attacks, principles: Whitelist Sources, Restrict Various Resources, Reporting and Monitoring',
      ],
      description: readHtmlFile('/security/csp.html'),
    },
    xss: {
      name: 'Cross-Site Scripting(XSS)',
      keyPoint: [
        'Definition: The Content Security Policy (CSP) is a browser feature designed to enhance web security.',
        'Benefits: Before the introduction of CSP, websites primarily relied on server-side security measures to prevent attacks. The introduction of CSP enabled browsers to in security protection, providing an additional layer of security for web pages.',
        'Keywords: Prevent cross-site scripting (XSS) attacks and other code injection attacks, principles: Whitelist Sources, Restrict Various Resources, Reporting and Monitoring',
      ],
      description: readHtmlFile('/security/xss.html'),
    },
    'token-exposure': {
      name: 'Security Token Exposure',
      keyPoint: [
        'Definition: The Content Security Policy (CSP) is a browser feature designed to enhance web security.',
        'Benefits: Before the introduction of CSP, websites primarily relied on server-side security measures to prevent attacks. The introduction of CSP enabled browsers to in security protection, providing an additional layer of security for web pages.',
        'Keywords: Prevent cross-site scripting (XSS) attacks and other code injection attacks, principles: Whitelist Sources, Restrict Various Resources, Reporting and Monitoring',
      ],
      description: readHtmlFile('/security/token-exposure.html'),
    },
    idor: {
      name: 'Insecure Direct Object Reference(IDOR)',
      keyPoint: [
        'Definition: The Content Security Policy (CSP) is a browser feature designed to enhance web security.',
        'Benefits: Before the introduction of CSP, websites primarily relied on server-side security measures to prevent attacks. The introduction of CSP enabled browsers to in security protection, providing an additional layer of security for web pages.',
        'Keywords: Prevent cross-site scripting (XSS) attacks and other code injection attacks, principles: Whitelist Sources, Restrict Various Resources, Reporting and Monitoring',
      ],
      description: readHtmlFile('/security/idor.html'),
    },
    'unsecured-authentication-logic': {
      name: 'Unsecured Authentication Logic',
      keyPoint: [
        'Definition: The Content Security Policy (CSP) is a browser feature designed to enhance web security.',
        'Benefits: Before the introduction of CSP, websites primarily relied on server-side security measures to prevent attacks. The introduction of CSP enabled browsers to in security protection, providing an additional layer of security for web pages.',
        'Keywords: Prevent cross-site scripting (XSS) attacks and other code injection attacks, principles: Whitelist Sources, Restrict Various Resources, Reporting and Monitoring',
      ],
    },
    ddos: {
      keyPoint: [
        'Definition: A malicious attempt to disrupt normal traffic to a targeted server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.',
        'Benefits: n/a',
        'Keywords: Malicious attempt to disrupt normal traffic to a targeted server',
      ],
    },
  },
};
