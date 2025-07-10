"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Code,
  Smartphone,
  Network,
  GraduationCap,
  Users,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Clock,
  Target,
  TrendingUp,
  Heart,
  Monitor,
  Wifi,
  Video,
  Headphones,
  BrainCog
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stats, setStats] = useState({
    students: 0,
    projects: 0,
    clients: 0,
    satisfaction: 0,
  });

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Startup Founder",
      content:
        "The Modernest helped us build our entire web platform from scratch. Their expertise in modern development practices is unmatched.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Sarah Kim",
      role: "Mobile App Developer",
      content:
        "Outstanding mobile app development support. They guided us through the entire process and delivered beyond expectations.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Michael Rodriguez",
      role: "Network Administrator",
      content:
        "Their CISCO networking expertise saved our company thousands. Professional, knowledgeable, and reliable support.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  const services = [
    {
      icon: Code,
      title: "Web Dev Support",
      description:
        "Full-stack web development support with modern frameworks and technologies",
      price: "From $50/hour",
      features: [
        "React & Next.js",
        "Node.js Backend",
        "Database Design",
        "API Development",
        "Deployment Support",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Dev Support",
      description:
        "Native and cross-platform mobile application development assistance",
      price: "From $60/hour",
      features: [
        "React Native",
        "Flutter Development",
        "iOS & Android",
        "App Store Deployment",
        "UI/UX Design",
      ],
    },
    {
      icon: BrainCog, // Using Lucide's AI-themed icon
      title: "AI Development & Support",
      description:
        "Professional AI solutions including machine learning and intelligent system support",
      price: "From $120/hour", // Adjusted price for AI services
      features: [
        "AI Model Development",
        "Machine Learning Configuration",
        "Neural Network Setup",
        "Data Processing & Analysis",
        "Performance Optimization",
      ],
    },
    {
      icon: GraduationCap,
      title: "Exam Preparation",
      description:
        "Comprehensive exam preparation for technical certifications and assessments",
      price: "From $40/hour",
      features: [
        "CISCO Certifications",
        "Programming Tests",
        "Technical Interviews",
        "Practice Exams",
        "Study Materials",
      ],
    },
  ];

  const trainingTypes = [
    {
      name: "Online Training",
      icon: Monitor,
      price: "$299",
      period: "/month",
      description: "Interactive online sessions with live instructors",
      features: [
        "Live interactive sessions",
        "Screen sharing & collaboration",
        "Recorded sessions for review",
        "24/7 online support",
        "Digital resources & materials",
        "Progress tracking dashboard",
      ],
      popular: false,
    },
    {
      name: "Offline Training",
      icon: Users,
      price: "$499",
      period: "/month",
      description: "In-person training at our modern facilities",
      features: [
        "Face-to-face instruction",
        "Hands-on lab sessions",
        "Physical study materials",
        "Networking opportunities",
        "Dedicated workspace",
        "Equipment & tools provided",
        "Flexible scheduling",
      ],
      popular: true,
    },
    {
      name: "Podcast & Video Lectures",
      icon: Headphones,
      price: "$99",
      period: "/month",
      description: "Self-paced learning through multimedia content",
      features: [
        "High-quality video lectures",
        "Audio podcasts for mobile learning",
        "Downloadable content",
        "Subtitles & transcripts",
        "Mobile app access",
        "Offline viewing capability",
      ],
      popular: false,
    },
  ];

  // Animate stats on component mount
  useEffect(() => {
    const animateStats = () => {
      const targets = {
        students: 2500,
        projects: 150,
        clients: 80,
        satisfaction: 99,
      };
      const duration = 2000;
      const steps = 50;
      const stepDuration = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;

        setStats({
          students: Math.floor(targets.students * progress),
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
        });

        if (step >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    animateStats();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu-container") &&
        !target.closest(".hamburger-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Scroll to section function
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   setIsMenuOpen(false);
  // };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); // Close menu immediately

    // Use setTimeout to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Calculate position accounting for fixed header height
        const offset = 80; // Adjust this based on your header height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300); // Match this with your menu closing animation duration
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    // Create mailto link
    const subject = `Service Inquiry: ${data.service}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\n\nMessage:\n${data.message}`;
    const mailtoLink = `mailto:tazul.sust.cse@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="/logo.png"
                alt="The Modernist Logo"
                className="h-9 sm:h-10 md:h-12 object-contain filter grayscale-0 hover:grayscale-0"
              />
              {/* <Image
                src="/logo.png"
                alt="The Modernist Logo"
                width={200} // Approximate display width in pixels
                height={80} // Approximate display height
                quality={100} // Adjust compression (1-100)
                className="-mt-8"
              /> */}
              <div className="flex flex-col">
                <span className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 cursive-font">
                  The Modernest
                </span>
                <span className="text-xs text-gray-600 italic hidden sm:block">
                  Let you be happy
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursive-font text-base xl:text-lg"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursive-font text-base xl:text-lg"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursive-font text-base xl:text-lg"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("training")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursive-font text-base xl:text-lg"
              >
                Training
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursive-font text-base xl:text-lg"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 text-white px-4 xl:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursive-font text-sm xl:text-base"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hamburger-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg"
            >
              <div className="px-4 py-2 space-y-2">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Reviews
                </button>
                <button
                  onClick={() => scrollToSection("training")}
                  className="block w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Training
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Contact
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-2"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Hero Section */}
      <section className="pt-20 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Welcome to
                <span className="text-blue-600 relative cursive-font">
                  <span className="relative z-10"> The Modernest</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 h-3 bg-blue-200 -z-10"
                  />
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                Your premier destination for cutting-edge development support,
                networking solutions, and technical excellence. We make
                technology work for you, so you can focus on what matters most.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors flex items-center gap-2 cursive-font w-full sm:w-auto justify-center"
                >
                  Start Your Journey
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("services")}
                  className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition-colors cursive-font w-full sm:w-auto justify-center"
                >
                  Explore Services
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Stats Section */}

      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                {stats.students.toLocaleString()}+
              </div>
              <div className="text-sm sm:text-base text-gray-600 cursive-font">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                {stats.projects}+
              </div>
              <div className="text-sm sm:text-base text-gray-600 cursive-font">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                {stats.clients}+
              </div>
              <div className="text-sm sm:text-base text-gray-600 cursive-font">
                Enterprise Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                {stats.satisfaction}%
              </div>
              <div className="text-sm sm:text-base text-gray-600 cursive-font">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 cursive-font px-4">
              About The Modernest
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Pioneering the future of technology education and support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="px-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 cursive-font">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                At The Modernest, we believe that technology should empower, not
                intimidate. Our mission is to bridge the gap between complex
                technical concepts and practical, real-world applications. We're
                dedicated to making cutting-edge technology accessible to
                everyone, from beginners taking their first steps into the
                digital world to seasoned professionals looking to expand their
                expertise.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Founded by a team of passionate technologists and educators, we
                combine years of industry experience with innovative teaching
                methodologies to deliver unparalleled learning experiences. Our
                approach is hands-on, personalized, and designed to adapt to
                your unique learning style and pace.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900 cursive-font text-sm sm:text-base">
                    Expert-Led
                  </div>
                  <div className="text-sm text-gray-600">
                    Industry professionals
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900 cursive-font text-sm sm:text-base">
                    Results-Driven
                  </div>
                  <div className="text-sm text-gray-600">
                    Proven success methods
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 px-4"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 cursive-font">
                  Why Choose Us?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm sm:text-base text-gray-600">
                      Personalized learning paths tailored to your goals
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm sm:text-base text-gray-600">
                      24/7 support from certified professionals
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm sm:text-base text-gray-600">
                      Hands-on projects with real-world applications
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm sm:text-base text-gray-600">
                      Flexible scheduling to fit your lifestyle
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm sm:text-base text-gray-600">
                      Continuous updates with latest technologies
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                <h4 className="text-base sm:text-lg font-semibold mb-3 cursive-font">
                  Our Vision
                </h4>
                <p className="text-sm sm:text-base text-blue-100">
                  To create a world where technology barriers don't exist, and
                  everyone has the tools and knowledge to turn their digital
                  dreams into reality. We envision a future where learning is
                  limitless, accessible, and genuinely enjoyable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 cursive-font px-4">
              Our Premium Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive technical support across all modern development
              platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 cursive-font">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="text-base sm:text-lg font-bold text-blue-600 mb-4 cursive-font">
                  {service.price}
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-8 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 cursive-font px-4">
              Client Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Real experiences from our satisfied clients across the globe
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg mx-4"
              >
                <div className="text-center">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      )
                    )}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 italic">
                    "{testimonials[activeTestimonial].content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900 cursive-font text-base sm:text-lg">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Types Section */}
      <section id="training" className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 cursive-font px-4">
              Training Types
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choose the learning format that best fits your lifestyle and
              preferences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {trainingTypes.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative card-hover ${
                  training.popular ? "border-2 border-blue-600" : ""
                }`}
              >
                {training.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold cursive-font">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-lg w-fit mx-auto mb-4">
                    <training.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 cursive-font">
                    {training.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {training.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                      {training.price}
                    </span>
                    <span className="text-sm sm:text-base text-gray-600">
                      {training.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {training.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm sm:text-base text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors cursive-font ${
                      training.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 cursive-font px-4">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Ready to transform your ideas into reality? Get in touch for a
              free consultation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="px-4"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 cursive-font">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-sm sm:text-base text-gray-700">
                    tazul.sust.cse@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-sm sm:text-base text-gray-700">
                    +088 01571408884
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-sm sm:text-base text-gray-700">
                    {" "}
                    Khilkhet-151(a) ,Bot-tola, Dhaka-1229
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="px-4"
            >
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 cursive-font">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 cursive-font">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 cursive-font">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Dev Support">Web Dev Support</option>
                    <option value="Mobile App Dev Support">
                      Mobile App Dev Support
                    </option>
                    <option value="CISCO Networking Support">
                      AI Development Support
                    </option>
                    <option value="Exam Preparation">Exam Preparation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 cursive-font">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursive-font text-base sm:text-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo.png"
                  alt="The Modernist Logo"
                  className="h-8 w-auto  "
                />
                <span className="text-lg sm:text-xl font-bold cursive-font">
                  The Modernest
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                Empowering businesses and individuals with cutting-edge
                technology solutions and expert support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 cursive-font text-base sm:text-lg">
                Services
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors"
                  >
                    Web Dev Support
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors"
                  >
                    Mobile App Dev
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors"
                  >
                    AI Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors"
                  >
                    Exam Preparation
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 cursive-font text-base sm:text-lg">
                Training
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("training")}
                    className="hover:text-white transition-colors"
                  >
                    Online Training
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("training")}
                    className="hover:text-white transition-colors"
                  >
                    Offline Training
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("training")}
                    className="hover:text-white transition-colors"
                  >
                    Video Lectures
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("training")}
                    className="hover:text-white transition-colors"
                  >
                    Podcasts
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 cursive-font text-base sm:text-lg">
                Support
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm sm:text-base text-gray-400">
            <p>
              &copy; 2025 The Modernest. All rights reserved. Let you be happy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
