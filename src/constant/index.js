
import {  dishcovery,
    quotiva,
    nike,
    niki,
    movieApp,
    memoir,
     cvsuLogo,
    formalPic,
    supsoft,
     acernity,
    boostrap,
    css,
    daisy,
    framer,
    html,
    jscript,
    react,
    tailwind,
       codeigniter,
        express,
        mongo,
        node,
        php,
        sql,
        typescript,
        git,
        figma,
        postman,
        render,
        vercel,
        vite
  } from "../assets/images";


const HeroWords = [
    'Modern',
    'Responsive',
    'User-friendly'
]

const BentoGridItems = [
  {
    title: "NIKI",
    description: "A React-based Netflix-inspired app that displays a dynamic gallery of NIKI photos with a familiar streaming UI.",
    className: "md:col-span-2",
    imgUrl: niki,
    websiteUrl: 'https://niki-xi-six.vercel.app/',
    githubUrl:'https://github.com/ralphreevencarandang/NIKI',
    techStack: ['React', 'Tailwind', 'Daisy UI']
  
  },
  {
    title: "NIKE",
    description: "A sleek, responsive Nike landing page that highlights product features and branding using modern web design.",
    className: "md:col-span-1",
    imgUrl: nike,
    websiteUrl: 'https://nike-website-kohl-gamma.vercel.app/',
    githubUrl: 'https://github.com/ralphreevencarandang/nike-website',
     techStack: ['React', 'Tailwind']


  },
  {
    title: "Movie App",
    description: "A React-based movie discovery platform powered by an external movie API.",
    className: "md:col-span-1",
    imgUrl: movieApp,
    websiteUrl: 'https://movie-app-sand-five-87.vercel.app/',
    githubUrl:'https://github.com/ralphreevencarandang/MovieApp',
     techStack: ['React', 'TailwindCSS', 'Appwrite']

  
  },
  {
    title: "Memoir App",
    description:
      "A note-taking web application built with the MERN stack for managing personal notes efficiently",
    className: "md:col-span-2",
    imgUrl: memoir,
    websiteUrl: 'https://memoirapp-frontend.onrender.com/',
    githubUrl: 'https://github.com/ralphreevencarandang/MemoirApp',
     techStack: ['React', 'Express', 'Node JS', 'MongoDB', 'Tanstack', 'TailwindCSS', 'Redis']

  },
  {
    title: "Dishcovery",
    description: "A recipe search application that provides rich cooking content fetched from a public API",
    className: "md:col-span-2",
    imgUrl: dishcovery,
    websiteUrl:'https://dishcovery-two.vercel.app/',
    githubUrl: 'https://github.com/ralphreevencarandang/RecipeFinder',
    techStack: ['React', 'Tailwind']

  },
  {
    title: "Quotiva",
    description: "A minimalist quote generator that displays random inspirational quotes ",
    className: "md:col-span-1",
    imgUrl:  quotiva,
    websiteUrl:'https://quotiva-ten.vercel.app/',
    githubUrl:'https://github.com/ralphreevencarandang/Quotiva',
    techStack: ['React', 'Tailwind']

  },


];

const aboutInfo = [
  {
    title:'Ralph Reeven Carandang',
    subtitle:'Web Developer',
    description: 'I\'m a passionate and motivated individual with a strong interest in web and software development. I enjoy turning ideas into functional and user-friendly applications. I\'m always exploring new technologies and ways to improve my skills, particularly in front-end development, React.js, and other modern tools. I value teamwork, problem-solving, and the ability to adapt in fast-paced environments. Outside of coding, I enjoy design, learning new tech trends, and working on personal projects that challenge me creatively.',
    imgUrl: formalPic
  },
  {
    title:'Cavite State University — Silang Campus',
    subtitle:'BS in Information Technology',
    description: 'I am a graduating student of Cavite State University – Silang Campus, taking up Bachelor of Science in Information Technology. Over the past four years, I’ve gained solid knowledge in areas such as web development, programming, networking, and database systems. My academic journey has helped me build a strong technical foundation and a mindset for continuous learning and improvement.',
    imgUrl: cvsuLogo
  },
  {
    title:'Supsoft Technologies',
    subtitle:'Frontend Developer - Intern ',
    description: 'I completed my internship at Supsfot Technologies, where I gained hands-on experience in real-world development processes. During my internship, I was able to apply my classroom knowledge to actual tasks like building responsive web pages, maintaining websites, and assisting in debugging and testing. This experience taught me the importance of collaboration, version control, and writing clean, maintainable code — all essential skills I aim to bring into my future career.',
    imgUrl: supsoft
  },
]


const techStackIcon = [
  {
    frontend: [
      {
        imgUrl: html
      },
      {
        imgUrl: css
      },
      {
        imgUrl: jscript
      },
      {
        imgUrl: boostrap
      },
        {
        imgUrl: tailwind
      },
        {
        imgUrl: react

      },
      {
           imgUrl: framer
         },
      {
        imgUrl: acernity
      },

      {
        imgUrl: daisy
      },
     
   
     
    
    
    ],
    backend: [
      {
        imgUrl: express
      },
      {
        imgUrl: node
      },
      {
        imgUrl: mongo
      },
      {
        imgUrl: php
      },
      {
        imgUrl: codeigniter
      },
      {
        imgUrl: sql
      },
      {
        imgUrl: typescript
      },
    ],
    tools: [
      {
        imgUrl: git
      },
      {
        imgUrl: figma
      },
      {
        imgUrl: postman
      },
      {
        imgUrl: vite
      },
      {
        imgUrl: vercel
      },
      {
        imgUrl: render
      },
    ]
  },

]


export {
    HeroWords,
    BentoGridItems,
    aboutInfo,
    techStackIcon

}