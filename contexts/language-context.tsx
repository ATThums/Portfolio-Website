"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "pt" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.games": "Jogos",
    "nav.gallery": "Galeria IA",
    "nav.works": "Trabalhos",
    "nav.contact": "Contato",

    // Hero Section
    "hero.title": "Desenvolvedor de Jogos & Artista Digital",
    "hero.subtitle": "Criando experiências interativas e arte digital inovadora",
    "hero.cta": "Ver Portfólio",
    "hero.downloadCV": "Baixar CV",
    "hero.connectWith": "Conecte-se comigo:",
    "hero.scrollExplore": "Role para explorar",

    // About Section
    "about.badge": "Conheça-me",
    "about.title": "Sobre Mim",
    "about.subtitle": "Desenvolvedor apaixonado por tecnologia e inovação",
    "about.description":
      "Desenvolvedor de Jogos Digitais formado pela Universidade de Caxias do Sul (UCS), com experiência em Unity, Unreal, programação e modelagem de software. Possuo histórico de 8 anos como militar no Exército Brasileiro, o que consolidou habilidades de disciplina, liderança, trabalho em equipe e resiliência. Atualmente atuo na WMC Tecnologia, prestando suporte técnico e funcional para sistemas ERP e plataformas Android, com foco em análise, melhorias e usabilidade. Participou da Game Jam Plus 2022, conquistando o 1º lugar regional com o jogo Dodge Circle. Sou apaixonado por tecnologia, criatividade, games e inovação, sempre buscando aprendizado contínuo e novos desafios.",
    "about.education": "Formação",
    "about.educationDesc": "Tecnólogo em Jogos Digitais - UCS",
    "about.experience": "Experiência Militar",
    "about.experienceDesc": "8 anos no Exército Brasileiro",
    "about.achievement": "Conquista",
    "about.achievementDesc": "1º lugar Game Jam Plus 2022",
    "about.current": "Atual",
    "about.currentDesc": "Desenvolvedor na WMC Tecnologia",
    "about.passions": "Paixões e Interesses",

    // Skills
    "skills.title": "Habilidades Técnicas",
    "skills.subtitle": "Tecnologias e ferramentas que domino",
    "skills.expertise": "Expertise Técnica",
    "skills.programming": "Programação",
    "skills.gameEngines": "Engines de Jogos",
    "skills.designTools": "Ferramentas de Design",
    "skills.aiTools": "Ferramentas de IA",
    "skills.webDevelopment": "Desenvolvimento Web",
    "skills.webDevelopmentDesc":
      "Criação de sites responsivos, aplicações web modernas e interfaces interativas usando as tecnologias mais atuais.",
    "skills.gameDevelopment": "Desenvolvimento de Jogos",
    "skills.gameDevelopmentDesc":
      "Desenvolvimento de jogos completos, desde o conceito até a publicação, usando engines modernas e linguagens especializadas.",
    "skills.design": "Design & Arte Digital",
    "skills.designDesc":
      "Criação de arte digital, interfaces de usuário, modelagem 3D e design gráfico para diversos tipos de projetos.",
    "skills.ai": "Inteligência Artificial",
    "skills.aiDesc":
      "Geração de arte digital usando IA, prompts avançados e integração de ferramentas de inteligência artificial em projetos.",
    "skills.additionalTech": "Tecnologias e Conceitos Adicionais",
    "skills.yearsExp": "Anos de Experiência",
    "skills.projectsCompleted": "Projetos Concluídos",
    "skills.gamesPublished": "Jogos Publicados",
    "skills.aiArtworks": "Obras de Arte IA",

    // Games
    "games.title": "Projetos de Jogos",
    "games.subtitle": "Jogos desenvolvidos com paixão e criatividade",
    "games.viewGame": "Ver Jogo",
    "games.playGame": "Jogar",
    "games.featured": "Projetos em Destaque",
    "games.allProjects": "Todos os Projetos",
    "games.sourceCode": "Código Fonte",
    "games.downloads": "Downloads",
    "games.rating": "Avaliação",

    // Gallery
    "gallery.title": "Galeria de Arte IA",
    "gallery.subtitle": "Criações artísticas geradas por inteligência artificial",
    "gallery.featured": "Obras em Destaque",
    "gallery.allArtworks": "Todas as Obras",
    "gallery.allCategories": "Todas as Categorias",
    "gallery.portraits": "Retratos",
    "gallery.landscapes": "Paisagens",
    "gallery.abstract": "Abstrato",
    "gallery.fantasy": "Fantasia",
    "gallery.scifi": "Ficção Científica",
    "gallery.conceptArt": "Arte Conceitual",
    "gallery.likes": "Curtidas",
    "gallery.viewFull": "Ver Completo",
    "gallery.download": "Baixar",
    "gallery.prompt": "Prompt",
    "gallery.model": "Modelo",
    "gallery.totalArtworks": "Total de Obras",
    "gallery.totalLikes": "Total de Curtidas",
    "gallery.avgRating": "Avaliação Média",

    // Works
    "works.title": "Outros Trabalhos",
    "works.subtitle": "Projetos diversos e colaborações",
    "works.viewProject": "Ver Projeto",
    "works.client": "Cliente",
    "works.year": "Ano",
    "works.tech": "Tecnologias",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Vamos conversar sobre seu próximo projeto",
    "contact.name": "Nome",
    "contact.email": "E-mail",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.availability": "Disponibilidade",
    "contact.available": "Disponível para novos projetos",
    "contact.response": "Tempo de Resposta",
    "contact.hours24": "24 horas",
    "contact.location": "Localização",
    "contact.brazil": "Brasil",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.games": "Games",
    "nav.gallery": "AI Gallery",
    "nav.works": "Works",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Game Developer & Digital Artist",
    "hero.subtitle": "Creating interactive experiences and innovative digital art",
    "hero.cta": "View Portfolio",
    "hero.downloadCV": "Download CV",
    "hero.connectWith": "Connect with me:",
    "hero.scrollExplore": "Scroll to explore",

    // About Section
    "about.badge": "Get to Know Me",
    "about.title": "About Me",
    "about.subtitle": "Developer passionate about technology and innovation",
    "about.description":
      "Digital Game Developer graduated from the University of Caxias do Sul (UCS), with experience in Unity, Unreal, programming and software modeling. I have an 8-year background as a military in the Brazilian Army, which consolidated skills in discipline, leadership, teamwork and resilience. Currently working at WMC Tecnologia, providing technical and functional support for ERP systems and Android platforms, focusing on analysis, improvements and usability. Participated in Game Jam Plus 2022, winning 1st place regionally with the game Dodge Circle. I am passionate about technology, creativity, games and innovation, always seeking continuous learning and new challenges.",
    "about.education": "Education",
    "about.educationDesc": "Digital Games Technology - UCS",
    "about.experience": "Military Experience",
    "about.experienceDesc": "8 years in Brazilian Army",
    "about.achievement": "Achievement",
    "about.achievementDesc": "1st place Game Jam Plus 2022",
    "about.current": "Current",
    "about.currentDesc": "Developer at WMC Tecnologia",
    "about.passions": "Passions & Interests",

    // Skills
    "skills.title": "Technical Skills",
    "skills.subtitle": "Technologies and tools I master",
    "skills.expertise": "Technical Expertise",
    "skills.programming": "Programming",
    "skills.gameEngines": "Game Engines",
    "skills.designTools": "Design Tools",
    "skills.aiTools": "AI Tools",
    "skills.webDevelopment": "Web Development",
    "skills.webDevelopmentDesc":
      "Creating responsive websites, modern web applications and interactive interfaces using the latest technologies.",
    "skills.gameDevelopment": "Game Development",
    "skills.gameDevelopmentDesc":
      "Developing complete games from concept to publication using modern engines and specialized programming languages.",
    "skills.design": "Design & Digital Art",
    "skills.designDesc":
      "Creating digital art, user interfaces, 3D modeling and graphic design for various types of projects.",
    "skills.ai": "Artificial Intelligence",
    "skills.aiDesc":
      "Generating digital art using AI, advanced prompts and integrating artificial intelligence tools into projects.",
    "skills.additionalTech": "Additional Technologies & Concepts",
    "skills.yearsExp": "Years Experience",
    "skills.projectsCompleted": "Projects Completed",
    "skills.gamesPublished": "Games Published",
    "skills.aiArtworks": "AI Artworks",

    // Games
    "games.title": "Game Projects",
    "games.subtitle": "Games developed with passion and creativity",
    "games.viewGame": "View Game",
    "games.playGame": "Play Game",
    "games.featured": "Featured Projects",
    "games.allProjects": "All Projects",
    "games.sourceCode": "Source Code",
    "games.downloads": "Downloads",
    "games.rating": "Rating",

    // Gallery
    "gallery.title": "AI Art Gallery",
    "gallery.subtitle": "Artistic creations generated by artificial intelligence",
    "gallery.featured": "Featured Artworks",
    "gallery.allArtworks": "All Artworks",
    "gallery.allCategories": "All Categories",
    "gallery.portraits": "Portraits",
    "gallery.landscapes": "Landscapes",
    "gallery.abstract": "Abstract",
    "gallery.fantasy": "Fantasy",
    "gallery.scifi": "Sci-Fi",
    "gallery.conceptArt": "Concept Art",
    "gallery.likes": "Likes",
    "gallery.viewFull": "View Full",
    "gallery.download": "Download",
    "gallery.prompt": "Prompt",
    "gallery.model": "Model",
    "gallery.totalArtworks": "Total Artworks",
    "gallery.totalLikes": "Total Likes",
    "gallery.avgRating": "Average Rating",

    // Works
    "works.title": "Other Works",
    "works.subtitle": "Diverse projects and collaborations",
    "works.viewProject": "View Project",
    "works.client": "Client",
    "works.year": "Year",
    "works.tech": "Technologies",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Let's talk about your next project",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.availability": "Availability",
    "contact.available": "Available for new projects",
    "contact.response": "Response Time",
    "contact.hours24": "24 hours",
    "contact.location": "Location",
    "contact.brazil": "Brazil",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language") as Language
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("portfolio-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
