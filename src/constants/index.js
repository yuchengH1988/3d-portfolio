import {
  backend,
  web,
  javascript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  chai,
  vue,
  gcp,
  restaurant,
  surveyor,
  bartender,
  louisa,
  cama,
  angie,
  bat,
  meteor,
  cafeInventory,
  p5js,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "gcp",
    icon: gcp
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Chai JS",
    icon: chai,
  },
];

const experiences = [
  {
    title: "Node. Js Engineer",
    company_name: "Bat Mobile Inc",
    icon: bat,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Playing a key role supporting a Taiwanese student forum called Meteor, which hosts over 70,000 registered student accounts.",
      "Responsibilities include coding for front-end, back-end and testing",
      "Updating outdated code and documents.",
      "Development new functions with app team and operation team.",
    ],
  },
  {
    title: "Manager",
    company_name:"CAMA coffee",
    icon: cama,
    iconBg: "#fff",
    date: "Oct 2017 - Jul 2020",
    points: [
      "Managed and trained a team of ten employees.",
      "Created and maintained monthly staff schedules, and generated monthly and annual reports.",
      "Oversaw inventory management and ordering.",
    ]
  },
  {
    title: "Part time - Bartender",
    company_name: "Fairy",
    icon: bartender,
    iconBg: "#fff",
    date: "Jun 2016 - Feb 2019",
    points: [
      'LGBT friendly bar'
    ],
  },
  {
    title: "Barista",
    icon: louisa,
    iconBg: "#fff",
    company_name: "Louisa Coffee",
    date: "Jul 2016 - Aug 2017",
    points: [
      'Led and trained a team, ensuring smooth operations and a positive work environment.'
    ]
  },
  {
    title: "Waiter",
    icon: angie,
    company_name: "Osteria by Angie",
    iconBg: "#fff",
    date: "Apr 2015 ~  Feb 2016",
    points: [
      "Worked with multiple branches to share best practices and maintain consistency."
    ]
  },
  {
    title: "Waiter",
    icon: restaurant,
    company_name: "四知堂 (Four Senses Hall)",
    iconBg: "#fff",
    date: "Aug 2014 ~ Apr 2015",
    points: [
      "Ensuring exceptional customer service and satisfaction at a Taiwanese Restaurant"
    ]
  },
  {
    title: "Surveyor",
    company_name: "San He Surveying",
    icon: surveyor,
    iconBg: "#fff",
    date: "May 2013 - Apr 2013",
    points: [
      "Measuring the road, mountain, and river bottom depth of the Tamsui River in Taipei."
    ]
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Meteor",
    description:
      "A student forum called Meteor, which hosts over 70,000 registered student accounts. It has multiple platforms for management, client facing, android, ios, and pages for specific event.",
    tags: [
      {
        name: "Node.Js",
        color: "blue-text-gradient",
      },
      {
        name: "multi-platform",
        color: "green-text-gradient",
      },
      {
        name: "Chai.js",
        color: "pink-text-gradient",
      },
    ],
    image: meteor,
    website_link: "https://meteor.today/"
  },
  {
    name: "Inventory Management System",
    description:
      "I made a system for coffee shops to track ingredients accurately, generate monthly reports, customize drinks, manage multiple shop accounts, and switch between metric and imperial units.",
    tags: [
      {
        name: "Vue",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: cafeInventory,
    source_code_link: "https://github.com/yuchengH1988/cafe-inventory",
    website_link: "https://work-cafe-inventory.yuchengworkpresentation.net/"
  },
  {
    name: "Generative Digital Art",
    description:
      "I create original designs using creative coding through p5.js on the OpenProcessing platform. This JavaScript library facilitates the creation of interactive graphics and animations.",
    tags: [
      {
        name: "p5.js",
        color: "blue-text-gradient",
      }
    ],
    image: p5js,
    website_link: "https://openprocessing.org/user/436847?view=sketches"
  }
];

export { services, technologies, experiences, testimonials, projects };
