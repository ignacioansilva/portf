import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';

import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfolio',
  description: "Ignacio´s Portfolio",
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
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ignacio Silva.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Developer</strong>, currently looking for
        my <strong className="text-stone-100">First IT work.</strong> <br/> Excited to take on new challenges and develop new skills.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Rugby</strong>,
        plucking my <strong className="text-stone-100">guitar</strong>, or learning new{' '}
        <strong className="text-stone-100">Technologies</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/IgnacioSilvaCV.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
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
  description: `I'm a passionate front-end developer who likes building interactive and responsive user interfaces for web applications. I have a keen eye for design, and I'm constantly striving to create user experiences that are both beautiful and intuitive.`,
  aboutItems: [
    {label: 'Location', text: 'Entre Rios, Arg', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Argentinian', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Rugby, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Henry', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 7,
      },
   
      {
        name: 'Spanish',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 4,
      },
      {
        name: 'TailwindCSS',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'PostgreSQL',
        level: 6,
      },
      {
        name: 'MongoDB',
        level: 4,
      },
    ],
  },

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Henry Countries',
    description: 'Page that renders a list of countries and allows you to add activities to them.',
    url: 'https://pi-countries-six-phi.vercel.app/home',
    image: porfolioImage1,
  },
  {
    title: 'Pringles App',
    description: 'Interface based in Pringles using React and Tailwind Css.',
    url: 'https://pringles-eta.vercel.app',
    image: porfolioImage6,
  },
  {
    title: 'Calculator',
    description: 'It´s a simple calculator created using React-Hooks and States',
    url: 'https://calculator-nine-gray.vercel.app',
    image: porfolioImage7,
  },
  {
    title: 'Henry BarberShop',
    description: 'A responsive design of the barbershop.',
    url: 'https://barbershop-front-deploy.vercel.app',
    image: porfolioImage4,
  },
  {
    title: 'Henry BarberShop',
    description: 'Page of a barbershop that allows you to add and edit appointments and buy products.',
    url: 'https://barbershop-front-deploy.vercel.app',
    image: porfolioImage9,
  },


];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'March 2022 - December 2022',
    location: 'Soy Henry',
    title: 'Desarrollo Web Full Stack',
    content: <p></p>,
  },
  {
    date: '2015 - 2020',
    location: 'Instituto Santa Teresita D-51',
    title: 'Titulo secundario-Bacchillerato en comunicaciones',
    content: <p></p>,
  },

  {
    date: '2011 - 2019',
    location: 'Anglo Institute',
    title: 'Ingles',
    content: (
      <p>
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2022 - December 2022',
    location: 'Henry',
    title: 'Henry BarberShop',
    content: (
      <p>
        Desarrollo de un E-Commerce con funcionalidades como
        carrito de compras, LogIn, sistema de turnos, favoritos.
        Diseñada con tecnologias como React, Tailwind,
        Typescript, MongoDB.
      </p>
    ),
  },
  {
    date: 'October 2022 - November 2022',
    location: 'Henry',
    title: 'Henry Countries',
    content: (
      <p>
        Diseñar y desarrollar una App de países que incluía:
        búsquedas, filtrados y ordenamientos. Usando para el
        Front React, Redux, CSS puro y Back desarrollado en
        Node.js con Express. Base de datos en PostgreSQL y
        Sequelize.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here you have some ways to get in touch with me. Send me a message!',
  items: [
    {
      type: ContactType.Email,
      text: 'ignacioansilva@gmail.com',
      href: 'mailto:ignacioansilva@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Concepcion del Uruguay, Entre Rios, Argentina',
      href: 'https://www.google.com.ar/maps/place/Concepción+del+Uruguay,+Entre+Ríos/@-32.4736845,-58.3113186,13z/data=!3m1!4b1!4m6!3m5!1s0x95afdb005dbc939d:0x3c8a23c6cb1334b2!8m2!3d-32.4845349!4d-58.2321416!16zL20vMDdzaDA0',
    },
    {
      type: ContactType.Instagram,
      text: '@nachosilva2000',
      href: 'https://www.instagram.com/nachosilva2000/',
    },
    {
      type: ContactType.Github,
      text: 'ignacioansilva',
      href: 'https://github.com/ignacioansilva',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ignacioansilva'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ignacio-silva-54824723b/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/nachosilva2000/'},
];
