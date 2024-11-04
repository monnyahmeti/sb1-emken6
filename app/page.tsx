"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Brush, 
  Code2, 
  MessageSquare, 
  Megaphone, 
  Video, 
  Users, 
  Palette,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Applications",
    description: "Creating intuitive and responsive web experiences that engage users and drive results."
  },
  {
    icon: <Brush className="w-8 h-8" />,
    title: "Logo Design",
    description: "Crafting unique visual identities that capture the essence of your brand."
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Strategic digital campaigns that connect with your audience and achieve business goals."
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "PR",
    description: "Building and maintaining positive relationships between your brand and the public."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Creative Direction",
    description: "Guiding visual storytelling and brand aesthetics across all platforms."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Casting",
    description: "Finding the perfect talent to bring your creative vision to life."
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Editing",
    description: "Crafting compelling visual narratives through expert video editing."
  }
];

const projects = [
  {
    title: "Neon Dreams Campaign",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A vibrant brand campaign featuring neon aesthetics and urban photography."
  },
  {
    title: "Minimal Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Clean, minimalistic fashion photography and art direction."
  },
  {
    title: "Tech Innovation",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Futuristic tech product launches and marketing materials."
  }
];

const testimonials = [
  {
    quote: "Arta's creative vision transformed our brand completely. The results exceeded our expectations.",
    author: "Sarah Chen",
    position: "CEO, TechStart"
  },
  {
    quote: "Working with Arta was an incredible experience. Their attention to detail and innovative approach sets them apart.",
    author: "Michael Rodriguez",
    position: "Marketing Director, Nova Brands"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background" />
        <motion.div 
          className="container px-4 mx-auto text-center z-10"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6">
            Arta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Creative Director & Digital Artist
          </p>
          <Button size="lg" className="rounded-full">
            View Work <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/50">
        <motion.div 
          className="container px-4 mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-center">About</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              With over a decade of experience in creative direction, I specialize in crafting unique digital experiences 
              that merge aesthetics with functionality. My approach combines innovative design thinking with strategic 
              problem-solving to create impactful solutions for brands and businesses.
            </p>
            <Button variant="outline" className="rounded-full">Learn More</Button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-16 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:bg-muted/50 transition-colors">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-16 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Button variant="outline" size="sm">View Project</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-16 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6">
                  <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <Separator className="my-4" />
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-16 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Let's Create Together</h3>
              <p className="text-muted-foreground mb-6">
                Ready to bring your vision to life? Get in touch to discuss your next project.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}