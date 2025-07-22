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
import heroImage from '../images/landscape.jpg';
import AStarNavigator from '../images/portfolio/AStarNavegator.png';
import infochange from '../images/portfolio/InfocChange.png';
import LiveTrafficEye from '../images/portfolio/LiveTrafficEye.jpg';
import MazeSolver from '../images/portfolio/MazeSolver.png';
import orcast from '../images/portfolio/orcast.png';
import passwordGenie from '../images/portfolio/passwordGenie.png';
import R from '../images/portfolio/R.png';
import SanchoROS2 from '../images/portfolio/sancho.jpg';
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
  imageSrc: heroImage,
  name: `Hi! I'm Ant.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Software Engineering graduate</strong> currently pursuing an M.Sc. in
        Artificial Intelligence and Software Engineering at the University of Málaga. I'm passionate about{' '}
        <strong className="text-stone-100">Computer Vision, Human–Robot Interaction</strong>, and robotics applied to
        healthcare. In my spare time, I enjoy growing plants and playing video games.
      </p>
    </>
  ),
  actions: [
    {
      href: '/Ant_Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      //Research profile link
      href: 'https://mapir.isa.uma.es/mapirwebsite/?p=4094',
      text: 'Researcher Profile',
      primary: false,
      Icon: AcademicCapIcon,
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
  description: `I'm a Software Engineering graduate from the University of Málaga, currently pursuing an M.Sc. in Artificial Intelligence and Software Engineering.  
Proficient in Python, C++, Java, and C#, I'm actively exploring areas such as Computer Vision, Human–Robot Interaction, and Machine Learning.  
I thrive in collaborative research environments and enjoy solving complex real-world problems, especially those related to robotics and healthcare technologies.
`,
  aboutItems: [
    {label: 'Location', text: 'Málaga, Spain', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Spanish', Icon: FlagIcon},
    {label: 'Interests', text: 'Botany, Artificial Intillegence, Aerial Robotics', Icon: SparklesIcon},
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
  title: 'Sancho ROS2 Workspace',
  description:
    'Modular robot system powered by ROS 2 Humble and a React + Vite web interface. Includes multimodal perception, full Nav2 navigation, and a modern control UI.',
  url: 'https://github.com/antbaena/sancho_ws',
  image: SanchoROS2, // asegúrate de importar o definir esta imagen
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
      'Classic tic-tac-toe game made in C++ using .NET with an intuitive GUI and different levels of difficulties.',
    url: 'https://github.com/antbaena/TicTacTouch',
    image: tictac,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2021- July 2025',
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
  {
    date: 'September 2025 – July 2026 (expected)',
    location: 'Universidad de Málaga',
    title: 'M.Sc. in Artificial Intelligence & Software Engineering',
    content: (
      <p>
        Currently enrolled in a multidisciplinary master’s program focused on advanced topics in{' '}
        <strong>Machine Learning, Deep Learning, Software Architecture, and Computer Vision</strong>. The program
        combines theoretical foundations with hands-on projects in applied AI, enabling the development of scalable,
        intelligent systems. It complements my research work in human–robot interaction and strengthens my expertise in
        software engineering best practices.
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
        Designed and optimized advanced human–robot interaction systems using Python, C++, ROS 2, and CUDA. Collaborated
        in multidisciplinary teams to integrate cloud technologies, improving the performance and scalability of robotic
        software. Focused on developing efficient, real-time solutions for mobile robotics while actively contributing
        to team dynamics and successful project delivery.
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
    {
      type: ContactType.WebSite,
      text: 'Researcher Profile',
      href: 'https://mapir.isa.uma.es/mapirwebsite/?p=4094',
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
    {name: 'Ros2', image: 'https://pic.vsixhub.com/ce/76/a243dbe2-060a-42e0-84a2-e2d177fa174b-logo.webp'},
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

  ],
};
