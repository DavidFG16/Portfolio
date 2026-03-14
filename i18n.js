/* ===========================
   INTERNATIONALIZATION (i18n)
   =========================== */
const translations = {
  en: {
    // Nav
    navAbout: 'About',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navContact: 'Contact',

    // Hero
    heroBadge: 'Available for opportunities',
    heroTitle: 'DevOps & Cloud <span class="highlight">Engineer</span>',
    heroSubtitle: 'DevOps & Cloud-focused Software Developer building automated infrastructure, resilient CI/CD pipelines, and scalable cloud architectures.',
    heroSupport: 'I design systems that deploy faster, scale smarter, and run reliably.',
    heroBtn1: 'View Projects',
    heroBtn2: 'Download CV',

    // About
    aboutLabel: 'Get to know me',
    aboutTitle: 'About Me',
    aboutP1: "I'm David Gamboa, a passionate Software Developer with a deep focus on DevOps and Cloud Engineering. My journey in tech started with a Technical High School Diploma in Computer Systems, and has since evolved into building real-world infrastructure solutions.",
    aboutP2: "I thrive on automating processes, designing scalable cloud architectures, and streamlining deployment pipelines. From configuring CI/CD workflows to orchestrating containerized applications, I'm driven by the challenge of making infrastructure reliable, efficient, and elegant.",
    aboutCloud: 'Cloud',
    aboutCloudDesc: 'AWS & Cloud Architecture',
    aboutAutomation: 'Automation',
    aboutAutomationDesc: 'Scripts & Workflows',
    aboutCICD: 'CI/CD',
    aboutCICDDesc: 'Pipelines & Delivery',
    aboutIaC: 'Infrastructure as Code',
    aboutIaCDesc: 'Terraform & Provisioning',

    // Experience
    expLabel: 'My Journey',
    expTitle: 'Experience',
    expCampusRole: 'Software Developer (Student)',
    expCampusTime: 'November 2024 — October 2025',
    expCampusDesc: 'Worked in structured learning environments designed to simulate real-world software development teams. Focused primarily on software development while collaborating on projects that involved backend logic, APIs, and modern web technologies.<br><br>Additionally gained exposure to DevOps practices by working with tools such as Docker and GitHub Actions to containerize applications and automate basic CI/CD workflows, building a foundation in modern development and deployment processes.',
    expGlobantRole: 'DevOps Trainee',
    expGlobantTime: 'November 2026 — Present',
    expGlobantDesc: 'Started working in real cloud environments and participating in production-level infrastructure and deployment workflows. Gaining practical experience with DevOps practices, infrastructure automation, and CI/CD pipelines while contributing to improving deployment processes and operational efficiency in a professional enterprise setting.',
    expCertBtn: 'Certificate',
    expCurrentTag: 'Current',

    // Projects
    projLabel: 'Featured Work',
    projTitle: 'Projects',
    projSubtitle: 'Real-world cloud infrastructure and automation solutions',
    proj1Desc: 'Infrastructure automation project that deploys a scalable architecture using EC2, Application Load Balancer, and Boto3 scripting.',
    proj2Desc: 'CI/CD pipeline that builds and pushes Docker images to AWS ECR using GitHub Actions for automated container registry management.',
    projGithub: 'View on GitHub',

    // Skills
    skillsLabel: 'Tech Stack',
    skillsTitle: 'Skills',
    skillsSubtitle: 'Technologies I work with to build and deploy infrastructure',
    skillsCatDevops: 'DevOps',
    skillsCatDev: 'Development',
    skillsCatOther: 'Others',

    // Contact
    contactLabel: "Let's Connect",
    contactTitle: 'Contact',
    contactSubtitle: 'Have a project or opportunity? Feel free to reach out',
    contactName: 'Name',
    contactEmail: 'Email',
    contactMessage: 'Message',
    contactNamePh: 'Your name',
    contactEmailPh: 'your@email.com',
    contactMessagePh: 'Tell me about your project or idea...',
    contactBtn: 'Send Message',
    contactToast: '✓ Message sent! Your email client should open shortly.',

    // Footer
    footerText: '© 2025 David Gamboa. All Rights Reserved.',
  },

  es: {
    // Nav
    navAbout: 'Sobre mí',
    navExperience: 'Experiencia',
    navProjects: 'Proyectos',
    navSkills: 'Habilidades',
    navContact: 'Contacto',

    // Hero
    heroBadge: 'Disponible para oportunidades',
    heroTitle: 'DevOps & Cloud <span class="highlight">Engineer</span>',
    heroSubtitle: 'Desarrollador de Software enfocado en DevOps y Cloud, construyendo infraestructura automatizada, pipelines CI/CD resilientes y arquitecturas escalables.',
    heroSupport: 'Diseño sistemas que se despliegan más rápido, escalan mejor y se ejecutan de manera confiable.',
    heroBtn1: 'Ver Proyectos',
    heroBtn2: 'Descargar CV',

    // About
    aboutLabel: 'Conóceme',
    aboutTitle: 'Sobre Mí',
    aboutP1: 'Soy David Gamboa, un apasionado Desarrollador de Software con un profundo enfoque en DevOps e Ingeniería Cloud. Mi camino en la tecnología comenzó con un Diploma Técnico de Bachillerato en Sistemas Informáticos, y desde entonces ha evolucionado hacia la construcción de soluciones de infraestructura del mundo real.',
    aboutP2: 'Disfruto automatizando procesos, diseñando arquitecturas cloud escalables y optimizando pipelines de despliegue. Desde configurar flujos de trabajo CI/CD hasta orquestar aplicaciones en contenedores, me impulsa el desafío de hacer que la infraestructura sea confiable, eficiente y elegante.',
    aboutCloud: 'Cloud',
    aboutCloudDesc: 'AWS y Arquitectura Cloud',
    aboutAutomation: 'Automatización',
    aboutAutomationDesc: 'Scripts y Flujos de Trabajo',
    aboutCICD: 'CI/CD',
    aboutCICDDesc: 'Pipelines y Entrega',
    aboutIaC: 'Infrastructure as Code',
    aboutIaCDesc: 'Terraform y Aprovisionamiento',

    // Experience
    expLabel: 'Mi Trayectoria',
    expTitle: 'Experiencia',
    expCampusRole: 'Desarrollador de Software (Estudiante)',
    expCampusTime: 'Noviembre 2024 — Octubre 2025',
    expCampusDesc: 'Trabajé en entornos de aprendizaje estructurados diseñados para simular equipos de desarrollo de software del mundo real. Me enfoqué principalmente en el desarrollo de software mientras colaboraba en proyectos que involucraban lógica backend, APIs y tecnologías web modernas.<br><br>Adicionalmente, obtuve exposición a prácticas DevOps trabajando con herramientas como Docker y GitHub Actions para contenedorizar aplicaciones y automatizar flujos de trabajo CI/CD básicos, construyendo una base en procesos modernos de desarrollo y despliegue.',
    expGlobantRole: 'Aprendiz DevOps',
    expGlobantTime: 'Noviembre 2026 — Presente',
    expGlobantDesc: 'Comencé a trabajar en entornos reales de la nube y a participar en flujos de trabajo de infraestructura y despliegue a nivel de producción. Obteniendo experiencia práctica con prácticas DevOps, automatización de infraestructura y pipelines CI/CD mientras contribuyo a mejorar los procesos de despliegue y la eficiencia operativa en un entorno empresarial profesional.',
    expCertBtn: 'Certificado',
    expCurrentTag: 'Actual',

    // Projects
    projLabel: 'Trabajo Destacado',
    projTitle: 'Proyectos',
    projSubtitle: 'Soluciones reales de infraestructura cloud y automatización',
    proj1Desc: 'Proyecto de automatización de infraestructura que despliega una arquitectura escalable utilizando EC2, Application Load Balancer y scripts Boto3.',
    proj2Desc: 'Pipeline CI/CD que construye y sube imágenes Docker a AWS ECR usando GitHub Actions para gestión automatizada de registro de contenedores.',
    projGithub: 'Ver en GitHub',

    // Skills
    skillsLabel: 'Stack Tecnológico',
    skillsTitle: 'Habilidades',
    skillsSubtitle: 'Tecnologías que uso para construir y desplegar infraestructura',
    skillsCatDevops: 'DevOps',
    skillsCatDev: 'Desarrollo',
    skillsCatOther: 'Otros',

    // Contact
    contactLabel: 'Conectemos',
    contactTitle: 'Contacto',
    contactSubtitle: '¿Tienes un proyecto u oportunidad? No dudes en escribirme',
    contactName: 'Nombre',
    contactEmail: 'Correo Electrónico',
    contactMessage: 'Mensaje',
    contactNamePh: 'Tu nombre',
    contactEmailPh: 'tu@correo.com',
    contactMessagePh: 'Cuéntame sobre tu proyecto o idea...',
    contactBtn: 'Enviar Mensaje',
    contactToast: '✓ ¡Mensaje enviado! Tu cliente de correo debería abrirse en breve.',

    // Footer
    footerText: '© 2025 David Gamboa. Todos los derechos reservados.',
  },
};
