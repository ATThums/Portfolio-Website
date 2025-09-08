"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"
import Image from "next/image"

interface Work {
  id: string
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  year: string
  client?: string
  status: "Completed" | "Ongoing" | "Collaboration"
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export function WorksSection() {
  const { t } = useLanguage()

  const works: Work[] = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
      image: "/placeholder.svg?key=work1",
      category: "Web Development",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      year: "2024",
      client: "TechStore Inc.",
      status: "Completed",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "2",
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with workout plans and progress analytics.",
      image: "/placeholder.svg?key=work2",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
      year: "2024",
      client: "FitLife Studio",
      status: "Completed",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "3",
      title: "AI Art Generator",
      description: "Web application for generating and editing AI artwork with custom prompts and styles.",
      image: "/placeholder.svg?key=work3",
      category: "AI/ML",
      technologies: ["Python", "FastAPI", "Stable Diffusion", "React"],
      year: "2023",
      status: "Ongoing",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "4",
      title: "Corporate Website",
      description: "Professional corporate website with CMS integration and SEO optimization.",
      image: "/placeholder.svg?key=work4",
      category: "Web Development",
      technologies: ["WordPress", "PHP", "MySQL", "SCSS"],
      year: "2023",
      client: "Business Solutions Ltd.",
      status: "Completed",
      liveUrl: "#",
    },
    {
      id: "5",
      title: "Game Analytics Dashboard",
      description: "Real-time analytics dashboard for game developers to track player behavior and metrics.",
      image: "/placeholder.svg?key=work5",
      category: "Data Visualization",
      technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
      year: "2023",
      status: "Collaboration",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "6",
      title: "Educational Platform",
      description: "Online learning platform with video streaming, quizzes, and progress tracking.",
      image: "/placeholder.svg?key=work6",
      category: "EdTech",
      technologies: ["Angular", "NestJS", "PostgreSQL", "AWS"],
      year: "2022",
      client: "EduTech Academy",
      status: "Completed",
      liveUrl: "#",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-accent/10 text-accent border-accent/20"
      case "Ongoing":
        return "bg-primary/10 text-primary border-primary/20"
      case "Collaboration":
        return "bg-chart-2/10 text-chart-2 border-chart-2/20"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Professional Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">{t("works.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("works.subtitle")}</p>
        </div>

        {/* Featured Works */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {works
              .filter((work) => work.featured)
              .map((work) => (
                <Card
                  key={work.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-border/50 hover:border-primary/50"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(work.status)}>{work.status}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        {work.liveUrl && (
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {work.githubUrl && (
                          <Button size="sm" variant="outline" className="bg-background/90">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                        {work.title}
                      </h4>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {work.year}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{work.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{work.category}</span>
                      {work.client && <span className="text-primary font-medium">{work.client}</span>}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Works Grid */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-8 h-1 bg-gradient-to-r from-accent to-chart-2 rounded-full" />
            All Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work) => (
              <Card
                key={work.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/50"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={getStatusColor(work.status)} variant="outline">
                      {work.status}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    {work.liveUrl && (
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                    {work.githubUrl && (
                      <Button size="sm" variant="outline" className="bg-background/90">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {work.title}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {work.year}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{work.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {work.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{work.category}</span>
                    {work.client && <span className="text-primary font-medium">{work.client}</span>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
