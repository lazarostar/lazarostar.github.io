module.exports = {
  siteTitle: 'Lázaro Nascimento',
  siteDescription:
    'Lázaro Nascimento is a senior full stack engineer, who is proficient in blockchain and AI.',
  siteKeywords:
    'Lázaro Nascimento, Lazaro, Nascimento, lazarostar, blockchain, ai, crypto, defi, web3, fullstack, Brazil',
  siteUrl: 'https://lazarostar.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Lázaro Nascimento',
  location: 'Natal, RN, Brazil',
  email: 'nascimento.dev26@gmail.com',
  github: 'https://github.com/lazarostar',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/lazarostar',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/lazarostar/',
    },
    {
      name: 'ProductHunt',
      url: 'https://www.producthunt.com/@lazarostar/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
