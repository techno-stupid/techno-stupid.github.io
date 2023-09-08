// gitprofile.config.js

const config = {
  github: {
    username: 'techno-stupid', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mhpial',
    twitter: 'TechnoStupidOne',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '@pial.coder',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://technostupid.com',
    phone: '+880 1735311153',
    email: 'pial.coder@gmail.com',
  },
  resume: {
    fileUrl:
      'https://technostupid.com/doc/Md.%20Mahady_Hasan.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'Golang',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'AWS',
    'Microservices',
    'CICD',
  ],
  experiences: [
    {
      company: 'Easital Technologies Ltd.',
      position: 'Lead Software Engineer',
      from: 'September 2022',
      to: 'Present',
      companyLink: 'https://easital.com',
    },
    {
      company: 'Sheba Platform',
      position: 'Lead Backend Engineer',
      from: 'August 2019',
      to: 'August 2022',
      companyLink: 'https://www.sheba.xyz',
    },
    {
      company: 'WebAble Digital',
      position: 'Software Engineer',
      from: 'July 2018',
      to: 'Jusy 2019',
      companyLink: 'https://webable.digital',
    },
    {
      company: 'Next IT Ltd.',
      position: 'Software Engineer',
      from: 'July 2017',
      to: 'Jusy 2018',
      companyLink: 'http://nextitltd.com',
    },

  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Daffodin International University',
      degree: 'B.Sc in CSE',
      from: '2013',
      to: '2016',
    },
    {
      institution: 'Govt. Syed Hatem Ali Collece',
      degree: 'HSC',
      from: '2010',
      to: '2012',
    },
    {
      institution: 'Barishal Zilla School',
      degree: 'SSC',
      from: '2009',
      to: '2009',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Beeda Mega App',
      description:
        'Beeda offers a one-stop solution for all your daily needs. With just a tap, you can access a vast array of services.',
      imageUrl: 'https://res.cloudinary.com/djvdfx07x/image/upload/v1694197697/1_Cgv7zFJhiiqodvCCs3Du2A_q35se2.jpg',
      link: 'https://beeda.com',
    },
    {
      title: 'Project Name',
      description:
        'Sheba.xyz, largest service marketplace & one-stop solution for your home services in Bangladesh.',
      imageUrl: 'https://play-lh.googleusercontent.com/KdD-PttwhTyD3ALaL-pW0t5sjymog-RALwhoxh0ee1K8rXDaIVZvCcw8ToE22UYGNDQ',
      link: 'https://www.sheba.xyz',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@pial.coder', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
