"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Sparkles, Eye, Download, Heart, Filter } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface AIArtwork {
  id: string
  title: string
  description: string
  image: string
  category: string
  prompt: string
  model: string
  style: string
  likes: number
  featured?: boolean
}

export function AIGallerySection() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedArtwork, setSelectedArtwork] = useState<AIArtwork | null>(null)

  const artworks: AIArtwork[] = [
    {
      id: "1",
      title: "Cyberpunk Cityscape",
      description: "Neon-lit futuristic city with flying cars and holographic advertisements",
      image: "/placeholder.svg?key=ai1",
      category: "Sci-Fi",
      prompt: "cyberpunk city at night, neon lights, flying cars, holographic ads, rain, cinematic",
      model: "Stable Diffusion XL",
      style: "Photorealistic",
      likes: 245,
      featured: true,
    },
    {
      id: "2",
      title: "Ethereal Portrait",
      description: "Mystical character with glowing eyes and flowing energy",
      image: "/placeholder.svg?key=ai2",
      category: "Portrait",
      prompt: "ethereal fantasy character, glowing eyes, magical aura, detailed face, digital art",
      model: "Midjourney v6",
      style: "Fantasy Art",
      likes: 189,
      featured: true,
    },
    {
      id: "3",
      title: "Abstract Dimensions",
      description: "Geometric patterns with vibrant colors and depth",
      image: "/placeholder.svg?key=ai3",
      category: "Abstract",
      prompt: "abstract geometric patterns, vibrant colors, 3D depth, mathematical beauty",
      model: "DALL-E 3",
      style: "Abstract",
      likes: 156,
    },
    {
      id: "4",
      title: "Dragon's Lair",
      description: "Majestic dragon in a crystal cave environment",
      image: "/placeholder.svg?key=ai4",
      category: "Fantasy",
      prompt: "ancient dragon in crystal cave, magical lighting, detailed scales, fantasy art",
      model: "Stable Diffusion XL",
      style: "Fantasy Art",
      likes: 298,
      featured: true,
    },
    {
      id: "5",
      title: "Cosmic Nebula",
      description: "Swirling colors of a distant nebula in space",
      image: "/placeholder.svg?key=ai5",
      category: "Space",
      prompt: "colorful nebula in deep space, stars, cosmic dust, astronomical photography style",
      model: "Midjourney v6",
      style: "Photorealistic",
      likes: 167,
    },
    {
      id: "6",
      title: "Steampunk Inventor",
      description: "Victorian-era inventor with mechanical contraptions",
      image: "/placeholder.svg?key=ai6",
      category: "Portrait",
      prompt: "steampunk inventor, Victorian clothing, mechanical gadgets, workshop setting",
      model: "Stable Diffusion XL",
      style: "Steampunk",
      likes: 134,
    },
    {
      id: "7",
      title: "Bioluminescent Forest",
      description: "Magical forest with glowing plants and creatures",
      image: "/placeholder.svg?key=ai7",
      category: "Nature",
      prompt: "bioluminescent forest, glowing plants, magical creatures, night scene, fantasy",
      model: "DALL-E 3",
      style: "Fantasy Art",
      likes: 223,
    },
    {
      id: "8",
      title: "Mech Warrior",
      description: "Futuristic robot warrior in battle stance",
      image: "/placeholder.svg?key=ai8",
      category: "Sci-Fi",
      prompt: "futuristic mech warrior, battle damaged, dramatic lighting, concept art style",
      model: "Midjourney v6",
      style: "Concept Art",
      likes: 187,
    },
  ]

  const categories = ["All", ...Array.from(new Set(artworks.map((art) => art.category)))]

  const filteredArtworks =
    selectedCategory === "All" ? artworks : artworks.filter((art) => art.category === selectedCategory)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Generated Art
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">{t("gallery.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("gallery.subtitle")}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Artworks */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-accent" />
            Featured Creations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks
              .filter((art) => art.featured)
              .map((artwork) => (
                <Dialog key={artwork.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-border/50 hover:border-primary/50">
                      <div className="relative overflow-hidden">
                        <Image
                          src={artwork.image || "/placeholder.svg"}
                          alt={artwork.title}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-accent/10 text-accent border-accent/20">{artwork.category}</Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h4 className="font-semibold mb-1">{artwork.title}</h4>
                          <p className="text-sm text-white/80 line-clamp-2">{artwork.description}</p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="sm" className="bg-primary/90 hover:bg-primary">
                            <Eye className="w-4 h-4 mr-2" />
                            View Full Size
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                    <div className="space-y-4">
                      <Image
                        src={artwork.image || "/placeholder.svg"}
                        alt={artwork.title}
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-serif font-bold">{artwork.title}</h3>
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            <span className="text-sm text-muted-foreground">{artwork.likes} likes</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{artwork.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Model:</span> {artwork.model}
                          </div>
                          <div>
                            <span className="font-medium">Style:</span> {artwork.style}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <span className="font-medium text-sm">Prompt:</span>
                          <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg font-mono">
                            {artwork.prompt}
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <Button className="flex-1">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline">
                            <Heart className="w-4 h-4 mr-2" />
                            Like
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
          </div>
        </div>

        {/* All Artworks Grid */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            All Creations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredArtworks.map((artwork) => (
              <Dialog key={artwork.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/50">
                    <div className="relative overflow-hidden">
                      <Image
                        src={artwork.image || "/placeholder.svg"}
                        alt={artwork.title}
                        width={300}
                        height={300}
                        className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge variant="outline" className="text-xs bg-background/90">
                          {artwork.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-black/70 text-white p-2 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="font-medium">{artwork.title}</div>
                          <div className="flex items-center gap-1 mt-1">
                            <Heart className="w-3 h-3" />
                            {artwork.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                  <div className="space-y-4">
                    <Image
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-serif font-bold">{artwork.title}</h3>
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-muted-foreground">{artwork.likes} likes</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{artwork.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Model:</span> {artwork.model}
                        </div>
                        <div>
                          <span className="font-medium">Style:</span> {artwork.style}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className="font-medium text-sm">Prompt:</span>
                        <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg font-mono">
                          {artwork.prompt}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Button className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline">
                          <Heart className="w-4 h-4 mr-2" />
                          Like
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Artworks Created", value: "200+" },
              { label: "AI Models Used", value: "8" },
              { label: "Total Likes", value: "2.5K+" },
              { label: "Categories", value: "6" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-3xl font-serif font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
