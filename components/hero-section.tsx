"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToPortfolio = () => {
    const element = document.querySelector("#skills")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                <span className="block">{t("hero.title")}</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">{t("hero.subtitle")}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToPortfolio}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t("hero.cta")}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                {t("hero.downloadCV")}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-sm text-muted-foreground">{t("hero.connectWith")}</span>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-chart-2 to-accent rounded-full blur-lg opacity-30 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-accent via-primary to-chart-2 rounded-full blur-md opacity-40" />

              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eu.jpg-y6dv4dnx19SFj5vb6EhEznSoqW3lca.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating elements */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-foreground">
            <span className="text-sm">{t("hero.scrollExplore")}</span>
            <ArrowDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  )
}
