import AWS from "./components/icons/skills/AWS.astro";
import Astrodev from "./components/icons/skills/Astrodev.astro";
import Bootstrap from "./components/icons/skills/Bootstrap.astro";
import C from "./components/icons/skills/C.astro";
import CSS3 from "./components/icons/skills/CSS3.astro";
import Docker from "./components/icons/skills/Docker.astro";
import Eslint from "./components/icons/skills/Eslint.astro";
import Express from "./components/icons/skills/Express.astro";
import Fastify from "./components/icons/skills/Fastify.astro";
import Figma from "./components/icons/skills/Figma.astro";
import Firebase from "./components/icons/skills/Firebase.astro";
import Git from "./components/icons/skills/Git.astro";
import Github from "./components/icons/skills/Github.astro";
import Googlecloud from "./components/icons/skills/Googlecloud.astro";
import Graphql from "./components/icons/skills/Graphql.astro";
import Html5 from "./components/icons/skills/Html5.astro";
import Javascript from "./components/icons/skills/Javascript.astro";
import Jest from "./components/icons/skills/Jest.astro";
import Materialize from "./components/icons/skills/Materialize.astro";
import Materialui from "./components/icons/skills/Materialui.astro";
import Mongodb from "./components/icons/skills/Mongodb.astro";
import Nestjs from "./components/icons/skills/Nestjs.astro";
import Nextjs from "./components/icons/skills/Nextjs.astro";
import Nodejs from "./components/icons/skills/Nodejs.astro";
import Playwrigth from "./components/icons/skills/Playwrigth.astro";
import Python from "./components/icons/skills/Python.astro";
import React from "./components/icons/skills/React.astro";
import Redux from "./components/icons/skills/Redux.astro";
import Sass from "./components/icons/skills/Sass.astro";
import Sequelize from "./components/icons/skills/Sequelize.astro";
import Tailwind from "./components/icons/skills/Tailwind.astro";
import Typescript from "./components/icons/skills/Typescript.astro";
import Vitejs from "./components/icons/skills/Vitejs.astro";
import Vitest from "./components/icons/skills/Vitest.astro";
import VScode from "./components/icons/skills/VScode.astro";

export default {
  title: {
    title: "Agustín Barberis",
    subtitle: "Web Developer",
  },
  about: {
    cv: "/cv.pdf",
  },
  experience: [
    {
      name: "Freelance",
      time: "Actualmente",
      job: "Desarrollador de software",
      descriptions:
        "Desarrollé una web personalizada para un negocio que gestiona stock, ventas y clientes. Implementé un bot de WhatsApp con Twilio para agendar turnos y mejorar la comunicación. Usé Next.js y Astro en el frontend, y NestJS con MongoDB en el backend. La solución fue desplegada en AWS, garantizando rendimiento, escalabilidad y disponibilidad.",
    },
    {
      name: "Akuda Ciberseguridad",
      time: "2025",
      job: "Desarrollador de software",
      descriptions:
        "Me uni al desarrollo de una app para monitorizar eventos en servidores y servicios cloud (AWS, GCP, Azure), integrada con Wazuh para visualizar alertas en tiempo real. Implementación del frontend con React, Vite y Material UI. Uso de Docker para contenedores de Wazuh y la plataforma. Creación de la landing page con Astro y TailwindCSS.",
    },
    {
      name: "Lösen",
      time: "2021 - 2024",
      job: "Desarrollador de software",
      descriptions:
        "Trabajé con un equipo de desarrollo creando y escalando productos digitales para el sector automotriz en Latinoamérica. Participé en el desarrollo de e-commerce, CMS y sistemas de pedidos internos usando Node.js, NestJS, React y Next.js. Implementé microservicios y migramos infraestructuras a GCP y AWS. Usé MongoDB para optimizar el rendimiento y la escalabilidad.",
    },
  ],
  projects: [
    {
      name: "Bot de Whatsapp",
      description:
        "Automatización de la atención al cliente respondiendo preguntas frecuentes y facilitando la agenda de turnos.",
      languajes: [Nodejs, Nestjs],
      image: "bot_wsp.webp",
    },
    {
      name: "Wordle",
      description:
        "Una replica del popular juego de palabras Wordle, en el que los jugadores deben adivinar una palabra de 5 letras en un número limitado de intentos.",
      languajes: [Html5, CSS3, Javascript],
      image: "wordle-0.webp",
    },
    {
      name: "Crypto Market",
      description:
        "Una aplicación movil desarrollada con React Native que detalla los valores del mercado de las criptomonedas que se obtienen desde una API.",
      languajes: [React],
      image: "crypto-0.webp",
    },
  ],
  skills: [
    {
      name: "Lenguajes",
      icons: [
        { name: "Javascript", icon: Javascript },
        { name: "Typescript", icon: Typescript },
        { name: "Html5", icon: Html5 },
        { name: "CSS3", icon: CSS3 },
        { name: "C", icon: C },
        { name: "Python", icon: Python },
      ],
    },
    {
      name: "Frontend",
      icons: [
        { name: "React", icon: React },
        { name: "Nextjs", icon: Nextjs },
        { name: "Vitejs", icon: Vitejs },
        { name: "Astro", icon: Astrodev },
        { name: "Redux", icon: Redux },
      ],
    },
    {
      name: "Backend",
      icons: [
        { name: "Nodejs", icon: Nodejs },
        { name: "Nestjs", icon: Nestjs },
        { name: "Express", icon: Express },
        { name: "Fastify", icon: Fastify },
      ],
    },
    {
      name: "Herramientas",
      icons: [
        { name: "VScode", icon: VScode },
        { name: "Git", icon: Git },
        { name: "Github", icon: Github },
        { name: "Eslint", icon: Eslint },
        { name: "Graphql", icon: Graphql },
        { name: "Docker", icon: Docker },
      ],
    },
    {
      name: "Diseño",
      icons: [
        { name: "Tailwind", icon: Tailwind },
        { name: "Sass", icon: Sass },
        { name: "Materialize", icon: Materialize },
        { name: "Materialui", icon: Materialui },
        { name: "Bootstrap", icon: Bootstrap },
        { name: "Figma", icon: Figma },
      ],
    },
    {
      name: "Bases de datos",
      icons: [
        { name: "Mongodb", icon: Mongodb },
        { name: "Sequelize", icon: Sequelize },
        { name: "Firebase", icon: Firebase },
      ],
    },
    {
      name: "Cloud",
      icons: [
        { name: "AWS", icon: AWS },
        { name: "Googlecloud", icon: Googlecloud },
      ],
    },
    {
      name: "Testing",
      icons: [
        { name: "Jest", icon: Jest },
        { name: "Playwrigth", icon: Playwrigth },
        { name: "Vitest", icon: Vitest },
      ],
    },
  ],
  contact: {
    // email: "contacto@agusbarberis.com",
    email: 'agustinbarberisdev@gmail.com',
    linkedin: {
      user: "Linkedin/AgustinBarberis",
      url: "https://www.linkedin.com/in/agustin-barberis-356535203/",
    },
    location: "Buenos Aires. Argentina.",
  },
  footer: {
    build: {
      text: "Hecho con ",
      from: {
        name: "Astro",
        url: "https://astro.build/",
      },
    },
  },
};
