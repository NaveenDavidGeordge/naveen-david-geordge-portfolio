import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Naveen Kumar",
  lastName: "TamizhMurugan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Technical Analysist",
  avatar: "/images/avatar.jpg",
  email: "naveenkumar.t@gmail.com",
  location: "Chennai/Tamil Nadu", 
  languages: ["Tamil", "English"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">nFlows</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Naveen David Geordge, a UI developer at Stradegi Solutions <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "none", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Actually I am from a small village in Madurai. Completed schooling in Madurai and UG in Chennai. Started my career as UI Developer and doing 
        few projects too.. nothing else.. just a common man..
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Stradegi Solutions",
        timeframe: "2024 - Present",
        role: "Technical Analysist",
        achievements: [
          <>
            Redesigned the UI/UX for the nFlows application, a no-code platform
          </>,
          <>
            Implemented and configured Kendo and other UI components based on the requirements
          </>,
        ],
        images: [
          ],
      },
      {
        company: "Alphabet Techs",
        timeframe: "2022 - 2024",
        role: "UI Developer",
        achievements: [
          <>
            Worked on designing and development on Wordpress based application and backend integration using PhP
          </>,
          <>
            Build Wordpress plugin for the custom functionalities
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "B.E Computer Science Engineering",
        description: <>Loyola Institute of Technology.</>,
      },
      {
        name: "HSC",
        description: <>St Joseph Matric Hr.Sec School.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Client Side",
        description: <>HTML, CSS, Bootstrap, Tailwind CSS, JS, Jquery, Angular JS, React, Next</>,
        images: [],
      },
      {
        title: "Server Side",
        description: <>Java</>,
        images: [],
      },
      {
        title: "Database",
        description: <>Neo4j</>,
        images: [],
      }
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
