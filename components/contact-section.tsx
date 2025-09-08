"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    const mailtoLink = `mailto:your.email@example.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            Let's Connect
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your visions.
                Whether you're looking for a game developer, digital artist, or technical collaborator, I'd love to hear
                from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">your.email@example.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+55 (11) 99999-9999</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-chart-2" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">São Paulo, Brazil</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-chart-2/10 rounded-2xl p-6 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Current Availability</h4>
              <p className="text-muted-foreground text-sm mb-3">
                I'm currently available for new projects and collaborations. Response time is typically within 24 hours.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="text-sm text-accent font-medium">Available for hire</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    {t("contact.name")}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    {t("contact.email")}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    {t("contact.message")}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project, ideas, or how we can work together..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t("contact.send")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Portfolio. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}
