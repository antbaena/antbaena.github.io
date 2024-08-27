import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import backgroundImage from '../images/backgroundImage.jpg';
//import heroImage from '../images/headerBackground.jpg';
import AStarNavigator from '../images/portfolio/AStarNavegator.png';
import infochange from '../images/portfolio/InfocChange.png';
import LiveTrafficEye from '../images/portfolio/LiveTrafficEye.jpg';
import MazeSolver from '../images/portfolio/MazeSolver.png';
import orcast from '../images/portfolio/orcast.png';
import passwordGenie from '../images/portfolio/passwordGenie.png';
import R from '../images/portfolio/R.png';
import tictac from '../images/portfolio/tictactouch.png';
import profilepic from '../images/profilepic2.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  programmingLanguages,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ant´s portfolio ',
  description: 'Ant Baena personal portfolio',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Competences: 'Competences',
  Stats: 'stats',
  Skills: 'Skills',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: MazeSolver,
  name: `Hi! I'm Ant.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Software Engineering</strong> student at the University of Malaga. I
        have a passion for Computer Vision, growing plants, and Video Games.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I’m a Software Engineering student at the University of Malaga with a strong passion for programming. Proficient in Java, Python, C++, and C#,
   I’m currently exploring Computer Vision, Mobile Apps, and Machine Learning.
   I thrive in collaborative environments and enjoy working as part of a team to tackle complex problems and drive innovation.`,
  aboutItems: [
    {label: 'Location', text: 'Málaga, Spain', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Spanish', Icon: FlagIcon},
    {label: 'Interests', text: 'Botany, Artificial Intillegence, hiking ', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Málaga', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'MAPIR research group.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const Competences: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'French',
        level: 2,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C++',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend frameworks',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Angular',
        level: 5,
      },
      {
        name: 'Vue',
        level: 3,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Spring',
        level: 7,
      },
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Flask',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'LiveTrafficEye',
    description:
      'Real-time traffic monitoring and analysis using live video streams with Python, computer vision, and AI. (In development)',
    url: 'https://github.com/antbaena/LiveTrafficEye',
    image: LiveTrafficEye,
  },
  {
    title: 'A-Star-Navigator',
    description: 'Java implementation of the A* algorithm, ideal for finding optimal paths in graphs and maps.',
    url: 'https://github.com/antbaena/A-Star-Navigator',
    image: AStarNavigator,
  },
  {
    title: 'Fake-Accounts-Instagram',
    description:
      'Detect fake Instagram accounts by leveraging real datasets and applying regression models in R. This project includes a comprehensive analysis, thoroughly explained step-by-step, to highlight the methodology and insights gained from the data.',
    url: 'https://github.com/antbaena/Fake-Accounts-Instagram',
    image: R,
  },
  {
    title: 'Orcast',
    description: '2D game developed using Unity and C#, featuring an exciting and vibrant storyline.',
    url: 'https://www.yellowbeavers.com/',
    image: orcast,
  },
  {
    title: 'MazeSolver',
    description: 'Java GUI application with multiple options to create and solve mazes. (In development)',
    url: 'https://github.com/antbaena/MazeSolver',
    image: MazeSolver,
  },
  {
    title: 'InfoChange',
    description: 'Simulation of a cryptocurrency exchange with real-time data using Node.js and React.',
    url: 'https://infochange.me/',
    image: infochange,
  },
  {
    title: 'PasswordGenie',
    description:
      'Web project developed in Angular that provides a web tool for generating customizable passwords and tools for checking password security.',
    url: 'https://antbaena.github.io/PasswordGenie/',
    image: passwordGenie,
  },
  {
    title: 'TicTacTouch',
    description:
      'Classic tic-tac-toe game made in C++ using .NET with an intuitive GUI and different levels of difficulties. (In development)',
    url: 'https://github.com/antbaena/TicTacTouch',
    image: tictac,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2021-2025',
    location: 'Universidad de Málaga',
    title: 'Bachelor of software engineering',
    content: (
      <p>
        During my time at UMA, I gained a solid foundation in Software Engineering, learning to develop and manage
        complex software applications. I acquired valuable skills in project management, teamwork, and problem-solving.
        My education also enhanced my ability to adapt to new technologies and apply analytical thinking in various
        situations.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2024 - Present',
    location: 'MAPIR',
    title: 'Research Team Member',
    content: (
      <p>
        Optimized systems and developed complex human-robot interaction systems using Python, C++, ROS2, and CUDA.
        Collaborated in team projects to implement cloud technologies, enhancing robotic software performance and
        scalability. Focused on creating efficient and advanced solutions for mobile robots while actively contributing
        to group dynamics and successful project outcomes.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact me if needed, and I will respond as soon as possible.',
  items: [
    {
      type: ContactType.Email,
      text: 'antcbaena@gmail.com',
      href: 'mailto:antcbaena@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Málaga, Spain',
      href: 'https://maps.app.goo.gl/pgNk8wid9UJej5MN8',
    },
    {
      type: ContactType.Instagram,
      text: '@ant_cbaena',
      href: 'https://www.instagram.com/ant_cbaena/',
    },
    {
      type: ContactType.Github,
      text: 'antbaena',
      href: 'https://github.com/antbaena',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/antbaena'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/26955826/antbaena'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/antonio-ca%C3%B1ete-baena-b61a5a235/'},
];

// data.tsx

export const Skills: programmingLanguages = {
  imageSrc: backgroundImage,
  items: [
    {name: 'Java', image: 'https://abrudz.github.io/logos/Java.svg'},
    {name: 'C++', image: 'https://abrudz.github.io/logos/CPlusPlus.svg'},
    {name: 'C#', image: 'https://abrudz.github.io/logos/CSharp.svg'},
    {name: 'Python', image: 'https://abrudz.github.io/logos/Python.svg'},
    {
      name: 'C',
      image:
        'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/c.svg',
    },
    {name: 'JavaScript', image: 'https://abrudz.github.io/logos/JS.svg'},
    {name: 'TypeScript', image: 'https://abrudz.github.io/logos/TypeScript.svg'},
    {
      name: 'Angular',
      image:
        'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/angular.svg',
    },
    {
      name: 'React',
      image:
        'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/react.svg',
    },
    {
      name: 'Spring',
      image:
        'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/spring.svg',
    },
    {name: 'R', image: 'https://abrudz.github.io/logos/R.svg'},
    {
      name: '.NET',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/640px-Microsoft_.NET_logo.svg.png',
    },
  ],
};
