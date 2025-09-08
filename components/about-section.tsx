"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, GraduationCap, Briefcase, Trophy, Target } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: GraduationCap,
      title: t("about.education"),
      description: t("about.educationDesc"),
    },
    {
      icon: Briefcase,
      title: t("about.experience"),
      description: t("about.experienceDesc"),
    },
    {
      icon: Trophy,
      title: t("about.achievement"),
      description: t("about.achievementDesc"),
    },
    {
      icon: Target,
      title: t("about.current"),
      description: t("about.currentDesc"),
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-medium mb-4">
            <User className="w-4 h-4 mr-2" />
            {t("about.badge")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">{t("about.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/eu.jpg"
                alt="Anderson Tonin Thums"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Anderson Tonin Thums</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("about.description")}</p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary rounded-lg">
                        <highlight.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{highlight.title}</h4>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills Tags */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t("about.passions")}</h4>
              <div className="flex flex-wrap gap-2">
                {["Tecnologia", "Criatividade", "Games", "Inovação", "Aprendizado Contínuo"].map((passion) => (
                  <Badge key={passion} variant="outline" className="bg-primary border-primary text-white">
                    {passion}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
