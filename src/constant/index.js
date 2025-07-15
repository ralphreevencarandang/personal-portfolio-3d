import { FaGithub  } from "react-icons/fa";
import {  dishcovery,
    quotiva,
    nike,
    niki,
    movieApp,
    memoir } from "../assets/images";


const HeroWords = [
    'Modern',
    'Responsive',
    'User-friendly'
]

const BentoGridItems = [
  {
    title: "NIKI",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-2",
    imgUrl: niki,
    websiteUrl: 'https://niki-xi-six.vercel.app/',
    githubUrl:'https://github.com/ralphreevencarandang/NIKI',
    techStack: ['React', 'Tailwind', 'Daisy UI']
  
  },
  {
    title: "NIKE",
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-1",
    imgUrl: nike,
    websiteUrl: 'https://nike-website-kohl-gamma.vercel.app/',
    githubUrl: 'https://github.com/ralphreevencarandang/nike-website',
     techStack: ['React', 'Tailwind']


  },
  {
    title: "Movie App",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-1",
    imgUrl: movieApp,
    websiteUrl: 'https://movie-app-sand-five-87.vercel.app/',
    githubUrl:'https://github.com/ralphreevencarandang/MovieApp',
     techStack: ['React', 'Tailwind', 'Appwrite']

  
  },
  {
    title: "Memoir App",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-2",
    imgUrl: memoir,
    websiteUrl: 'https://memoirapp-frontend.onrender.com/',
    githubUrl: 'https://github.com/ralphreevencarandang/MemoirApp',
     techStack: ['React', 'Express', 'Node JS', 'MongoDB', 'Tanstack', 'TailwindCSS']

  },
  {
    title: "Dishcovery",
    description: "Join the quest for understanding and enlightenment.",
    className: "md:col-span-2",
    imgUrl: dishcovery,
    websiteUrl:'https://dishcovery-two.vercel.app/',
    githubUrl: 'https://github.com/ralphreevencarandang/RecipeFinder',
    techStack: ['React', 'Tailwind']

  },
  {
    title: "Quotiva",
    description: "Experience the thrill of bringing ideas to life.",
    className: "md:col-span-1",
    imgUrl:  quotiva,
    websiteUrl:'https://quotiva-ten.vercel.app/',
    githubUrl:'https://github.com/ralphreevencarandang/Quotiva',
    techStack: ['React', 'Tailwind']

  },


];



export {
    HeroWords,
    BentoGridItems

}