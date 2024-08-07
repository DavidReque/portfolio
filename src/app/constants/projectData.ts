import { Project } from "../types/types";

const projectsData: Project[] = [
    {
      title: 'Aplicación de Chat en Tiempo Real',
      description: 'Una aplicación de chat interactiva que utiliza Upstash Redis como base de datos de backend, impulsada por TypeScript, Next.js y React.js. Integra la autenticación de Google de manera fluida para el control de acceso del usuario. La interfaz de usuario es receptiva.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Upstash Redis'],
      imageUrl: '/img/chat.png',
      githubLink: 'https://github.com/DavidReque/conex-chat',
      site: 'https://conex-chat.vercel.app/login'
    },
    {
        title: 'Clon de Linktree',
        description: 'Esta es una aplicación creada con React y Firebase que funciona de manera similar a Linktree. Te permite crear y compartir diferentes enlaces de redes sociales y también te permite iniciar sesión con Google.',
        technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'JavaScript'],
        imageUrl: '/img/link.png',
        githubLink: 'https://github.com/DavidReque/linktree',
        site: 'https://linktree-2c6e5.firebaseapp.com/'
      },
      {
        title: 'Aplicación de Películas',
        description: 'Proyecto de catálogo de películas desarrollado utilizando TypeScript, Next.js y Tailwind CSS, integrando sin problemas la API de TMDb para acceder y mostrar datos de películas.',
        technologies: ['React.js', 'Typescript', 'Tailwind CSS'],
        imageUrl: '/img/movie.png',
        githubLink: 'https://github.com/DavidReque/appmovie',
        site: 'https://appmovie-six.vercel.app/'
      },
      {
        title: 'E-commerce',
        description: 'Este es un proyecto de comercio electrónico construido con Next.js y estilizado con Tailwind CSS. El proyecto presenta un sitio web de comercio electrónico completamente funcional con listados de productos, carrito de compras, proceso de pago y más.',
        technologies: ['React.js', 'Nextjs', 'Tailwind CSS', 'JavaScript'],
        imageUrl: '/img/comm.png',
        githubLink: 'https://github.com/DavidReque/store',
        site: 'https://store-two-rouge.vercel.app/'
      },
      {
        title: 'Juego en Java',
        description: 'Sunset Skies es un juego basado en Java que presenta un avión navegando por un cielo al atardecer. Los jugadores controlan el avión, evitando obstáculos y globos mientras vuelan.',
        technologies: ['Java'],
        imageUrl: '/img/javaGame.png',
        githubLink: 'https://github.com/DavidReque/sunset-skies-tower-scape',
        site: ''
      },
      {
        title: 'Todo TypeScript',
        description: 'Herramienta de gestión de proyectos construida con React y Vite, ofrece filtros convenientes para ordenar tareas pendientes y completadas',
        technologies: ['TypeScript', 'React Js', 'Vite'],
        imageUrl: '/img/todo.png',
        githubLink: 'https://github.com/DavidReque/todo-typescript',
        site: 'https://todo-typescript-zeta.vercel.app/'
      },
      {
        title: 'Task Mobile App',
        description: 'Esta es una aplicación de administración de tareas creada con Expo y Firebase, creada usando create-expo-app. La aplicación permite a los usuarios gestionar sus tareas de manera eficiente con una interfaz de usuario intuitiva.',
        technologies: ['TypeScript', 'React Native', 'Expo', 'Firebase'],
        imageUrl: '/img/tasks.jpeg',
        githubLink: 'https://github.com/DavidReque/task-app-mobile',
        site: ''
      },
      {
        title: 'PDF Automation Tool',
        description: 'PDF Automation Tool es una herramienta que permite extraer información clave de documentos PDF, como facturas o contratos, utilizando modelos de visión artificial como LayoutLM. La aplicación incluye una interfaz web para cargar archivos PDF y ver los resultados de la extracción de datos.',
        technologies: ['React js', 'TypeScript', 'Node JS', 'Express'],
        imageUrl: '/img/pdfe.png',
        githubLink: 'https://github.com/DavidReque/pdf-automation-tool',
        site: 'https://pdf-automation-tool.vercel.app/'
      },
      {
        title: 'Chat con Firebase',
        description: 'Este es un proyecto de aplicación de chat desarrollado con React y Firebase.',
        technologies: ['React js', 'JavaScript', 'Firebase'],
        imageUrl: '/img/chatf.png',
        githubLink: 'https://github.com/DavidReque/chat-firebase',
        site: ''
      },
      {
        title: 'Tic-tac-toe',
        description: '"React-Tac-Toe" es un juego clásico de Tic-Tac-Toe creado con React y JavaScript.',
        technologies: ['React js', 'JavaScript', 'Vite'],
        imageUrl: '/img/tic.png',
        githubLink: 'https://github.com/DavidReque/tic-tac-toe',
        site: 'https://tictactoedavid.netlify.app/'
      },
      {
        title: 'CRUD con FastAPI',
        description: 'FARM CRUD',
        technologies: ['React js', 'FastAPI', 'Python', 'Vite', 'MongoDB'],
        imageUrl: '/img/task.png',
        githubLink: 'https://github.com/DavidReque/FARM-CRUD',
        site: ''
      },
      {
        title: 'Ejercicios de LeetCode',
        description: 'Resolución de problemas de LeetCode',
        technologies: ['C++', 'TypeScript', 'Python', 'C', 'JavaScript'],
        imageUrl: '/img/leet.jpg',
        githubLink: 'https://github.com/DavidReque/Retos-Diarios',
        site: ''
      },
  ];

export default projectsData;
