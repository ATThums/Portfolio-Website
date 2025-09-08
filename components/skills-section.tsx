"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Gamepad2, Bot } from "lucide-react"

interface SkillCategory {
  title: string
  description: string
  icon: React.ReactNode
  technologies: string[]
}

export function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories: SkillCategory[] = [
    {
      title: t("skills.webDevelopment"),
      description: t("skills.webDevelopmentDesc"),
      icon: <Code className="w-8 h-8 text-primary" />,
      technologies: ["React", "Next.js", "TailwindCSS", "TypeScript", "Node.js"],
    },
    {
      title: t("skills.gameDevelopment"),
      description: t("skills.gameDevelopmentDesc"),
      icon: <Gamepad2 className="w-8 h-8 text-primary" />,
      technologies: ["Unity", "C#", "Unreal Engine", "Godot"],
    },
    {
      title: t("skills.design"),
      description: t("skills.designDesc"),
      icon: <Palette className="w-8 h-8 text-primary" />,
      technologies: ["Photoshop", "Figma", "Blender", "Aseprite"],
    },
    {
      title: t("skills.ai"),
      description: t("skills.aiDesc"),
      icon: <Bot className="w-8 h-8 text-primary" />,
      technologies: ["Stable Diffusion", "Midjourney", "ChatGPT", "Claude"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-accent rounded-full mr-2" />
            {t("skills.expertise")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">{t("skills.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("skills.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20 hover:border-primary/50 bg-card/80 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Icon */}
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">{category.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap justify-center gap-2 pt-4">
                    {category.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="px-3 py-1 text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="text-center">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-6">{t("skills.additionalTech")}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git & GitHub",
              "Agile/Scrum",
              "Game Design",
              "UI/UX Design",
              "Pixel Art",
              "3D Modeling",
              "Animation",
              "Shader Programming",
              "Multiplayer Networking",
              "Mobile Development",
              "VR/AR",
              "Machine Learning",
              "Procedural Generation",
              "Performance Optimization",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default border-primary/30 hover:border-primary"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: t("skills.yearsExp"), value: "5+" },
            { label: t("skills.projectsCompleted"), value: "50+" },
            { label: t("skills.gamesPublished"), value: "12" },
            { label: t("skills.aiArtworks"), value: "200+" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
