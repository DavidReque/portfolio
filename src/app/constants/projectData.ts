import { Project } from "../types/types";

const projectsData: Project[] = [
    {
      title: 'Real Time Chat App',
      description: 'An interactive chat application leveraging Upstash Redis as the backend database, powered by TypeScript, Next.js, and React.js. Integrates seamless Google authentication for user access control. The responsive user interface, crafted using TailwindCSS, ensures a smooth experience across devices.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Upstash Redis'],
      imageUrl: '/img/chat.png',
      githubLink: 'https://github.com/DavidReque/conex-chat',
      site: 'https://conex-chat.vercel.app/login'
    },
    {
        title: 'Linktree clon',
        description: 'This is an application created with React and Firebase that functions similarly to Linktree. It allows you to create and share different social media links and also allows you to log in with Google.',
        technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'JavaScript'],
        imageUrl: '/img/link.png',
        githubLink: 'https://github.com/DavidReque/linktree',
        site: 'https://linktree-2c6e5.firebaseapp.com/'
      },
      {
        title: 'Movie app',
        description: 'Movie catalog project developed using TypeScript, Next.js, and Tailwind CSS, seamlessly integrating the TMDb API to access and display movie data.',
        technologies: ['React.js', 'Typescript', 'Tailwind CSS'],
        imageUrl: '/img/movie.png',
        githubLink: 'https://github.com/DavidReque/appmovie',
        site: 'https://appmovie-six.vercel.app/'
      },
      {
        title: 'E-commerce',
        description: 'This is an e-commerce project built using Next.js and styled with Tailwind CSS. The project features a fully functional e-commerce website with product listings, shopping cart, checkout process, and more.',
        technologies: ['React.js', 'Nextjs', 'Tailwind CSS', 'JavaScript'],
        imageUrl: '/img/comm.png',
        githubLink: 'https://github.com/DavidReque/store',
        site: 'https://store-two-rouge.vercel.app/'
      },
      {
        title: 'Java Game',
        description: 'Sunset Skies is a Java-based game featuring an airplane navigating through a sunset sky. Players control the airplane, avoiding obstacles and balloons while flying. The game provides an immersive experience where users must maneuver the aircraft to dodge buildings, houses, and balloons, aiming to prolong their flight duration without collisions.',
        technologies: ['Java'],
        imageUrl: '/img/javaGame.png',
        githubLink: 'https://github.com/DavidReque/sunset-skies-tower-scape',
        site: ''
      },
      {
        title: 'Todo TypeScript',
        description: 'Project management tool built using React and Vite, it offers convenient filters for sorting pending and completed tasks',
        technologies: ['TypeScript', 'React Js', 'Vite'],
        imageUrl: '/img/todo.png',
        githubLink: 'https://github.com/DavidReque/todo-typescript',
        site: 'https://todo-typescript-zeta.vercel.app/'
      },
      {
        title: 'Unplash photos',
        description: 'Gallery photos using Unplash API',
        technologies: ['React js', 'JavaScript', 'Next js'],
        imageUrl: '/img/gall.png',
        githubLink: 'https://github.com/DavidReque/next-api',
        site: 'https://next-api-orcin.vercel.app/'
      },
      {
        title: 'Chat firebase',
        description: 'This is a chat application project developed with React and Firebase.',
        technologies: ['React js', 'JavaScript', 'Firebase'],
        imageUrl: '/img/chatf.png',
        githubLink: 'https://github.com/DavidReque/chat-firebase',
        site: ''
      },
      {
        title: 'tic-tac-toe',
        description: 'React-Tac-Toe" is a classic Tic-Tac-Toe game crafted with React and JavaScript. Enjoy the timeless fun of this two-player game, where users take turns marking their X or O on a 3x3 grid',
        technologies: ['React js', 'JavaScript', 'Vite'],
        imageUrl: '/img/tic.png',
        githubLink: 'https://github.com/DavidReque/tic-tac-toe',
        site: 'https://tictactoedavid.netlify.app/'
      },
  ];

export default projectsData;
