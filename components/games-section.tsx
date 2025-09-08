"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Game {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  platform: string
  status: "Published" | "In Development" | "Beta"
  downloads?: string
  gameUrl?: string
  githubUrl?: string
  featured?: boolean
}

export function GamesSection() {
  const { t } = useLanguage()
  const [hoveredGame, setHoveredGame] = useState<string | null>(null)

  const games: Game[] = [
    {
      id: "1",
      title: "Revelação",
      description: "Jogo estilo Walking Simulator, com temática de suspense e terror",
      image: "/horror-walking-simulator-dark-atmosphere.jpg",
      tags: ["Unity", "C#", "Horror", "Walking Simulator"],
      platform: "PC",
      status: "Published",
      gameUrl: "https://andersontt.itch.io/jogo-revelao",
      featured: true,
    },
    {
      id: "2",
      title: "As Crônicas do Mago Negro",
      description: "As Crônicas do Mago Negro demo - Adventure game with magical elements",
      image: "/dark-wizard-fantasy-adventure-game.jpg",
      tags: ["Unity", "C#", "Adventure", "Fantasy"],
      platform: "Browser/PC",
      status: "Published",
      gameUrl: "https://andersontt.itch.io/as-cronicas-do-mago-negro-demo",
      featured: true,
    },
    {
      id: "3",
      title: "Dodge Circle v.1.2",
      description: "Enhanced version of the award-winning platformer game",
      image: "/dodge-circle-platformer-game-colorful.jpg",
      tags: ["Unity", "C#", "Platformer", "Arcade"],
      platform: "PC",
      status: "Published",
      gameUrl: "https://andersontt.itch.io/dodge-circle-v12",
      featured: true,
    },
    {
      id: "4",
      title: "Dodge Circle v.1",
      description: "Game developed for Game Jam Plus 2022 - Finalist in the regional category - RS - Brazil",
      image: "/dodge-circle-original-version-game-jam.jpg",
      tags: ["Unity", "C#", "Game Jam", "Platformer"],
      platform: "PC",
      status: "Published",
      downloads: "1K+",
      gameUrl: "https://andersontt.itch.io/dodge-circle",
    },
    {
      id: "5",
      title: "Quadrimático",
      description: "Jogo desenvolvido para o Projeto de Game Mobile do Curso Tecnólogo em Jogos Digitais da UCS",
      image: "/educational-math-game-mobile-colorful.jpg",
      tags: ["Unity", "C#", "Educational", "Mobile"],
      platform: "Mobile",
      status: "Published",
      gameUrl: "https://andersontt.itch.io/quadrimatico",
    },
    {
      id: "6",
      title: "Cross the Road",
      description: "Classic arcade-style road crossing game with modern mechanics",
      image: "/cross-the-road-arcade-game-cars-traffic.jpg",
      tags: ["JavaScript", "WebGL", "Browser", "Arcade"],
      platform: "Browser",
      status: "Published",
      downloads: "2K+",
      gameUrl: "https://andersontt.itch.io/cross-the-road",
    },
    {
      id: "7",
      title: "Space Combat",
      description: "A game inspired in Space Invaders with modern graphics and gameplay",
      image: "/space-combat-invaders-shooter-retro.jpg",
      tags: ["JavaScript", "WebGL", "Space Shooter", "Retro"],
      platform: "Browser",
      status: "Published",
      downloads: "3K+",
      gameUrl: "https://andersontt.itch.io/space-combat",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-600 text-white border-green-600"
      case "In Development":
        return "bg-blue-600 text-white border-blue-600"
      case "Beta":
        return "bg-orange-600 text-white border-orange-600"
      default:
        return "bg-gray-600 text-white border-gray-600"
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Play className="w-4 h-4 mr-2" />
            Interactive Experiences
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">{t("games.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("games.subtitle")}</p>
        </div>

        {/* Featured Games */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-accent" />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {games
              .filter((game) => game.featured)
              .map((game) => (
                <Card
                  key={game.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-border/50 hover:border-primary/50"
                  onMouseEnter={() => setHoveredGame(game.id)}
                  onMouseLeave={() => setHoveredGame(null)}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(game.status)}>{game.status}</Badge>
                    </div>
                    {hoveredGame === game.id && (
                      <div className="absolute inset-0 flex items-center justify-center gap-3">
                        {game.gameUrl && (
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                            onClick={() => window.open(game.gameUrl, "_blank")}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            {t("games.playGame")}
                          </Button>
                        )}
                        {game.githubUrl && (
                          <Button size="sm" variant="outline" className="bg-background/90">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                        {game.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground mb-4">{game.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {game.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{game.platform}</span>
                      {game.downloads && <span>{game.downloads} downloads</span>}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Games Grid */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            All Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card
                key={game.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/50"
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={getStatusColor(game.status)} variant="outline">
                      {game.status}
                    </Badge>
                  </div>
                  {hoveredGame === game.id && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-2">
                      {game.gameUrl && (
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                          onClick={() => window.open(game.gameUrl, "_blank")}
                        >
                          <Play className="w-4 h-4" />
                          {t("games.playGame")}
                        </Button>
                      )}
                      {game.githubUrl && (
                        <Button size="sm" variant="outline" className="bg-background/90">
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {game.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{game.platform}</span>
                    {game.downloads && <span>{game.downloads}</span>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-chart-2/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Want to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new game projects and bring creative ideas to life. Let's create something
              amazing together!
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <ExternalLink className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
