/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Cake, 
  Utensils, 
  GraduationCap, 
  Instagram, 
  MessageCircle, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Star,
  CheckCircle2,
  Menu,
  X,
  Award,
  Clock,
  Heart,
  ShieldCheck
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Training", href: "#training" },
    { name: "Portfolio", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <div className="min-h-screen bg-brand-bg p-4 md:p-8 selection:bg-brand-gold/30">
      {/* Outer Geometric Frame */}
      <div className="min-h-screen border-4 gold-border p-2 flex flex-col relative bg-brand-bg">
        
        {/* Navigation */}
        <nav className={`sticky top-0 w-full z-50 transition-all duration-300 border-b gold-border pb-4 mb-4 ${scrolled ? "bg-brand-bg/90 backdrop-blur-md pt-4" : "bg-transparent pt-4"}`}>
          <div className="flex justify-between items-end px-2">
            <div className="flex-1">
              <a href="#home" className="flex items-baseline group">
                <span className="serif text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-shine-gold uppercase">CakesNchops</span>
                <span className="serif text-lg sm:text-xl md:text-2xl font-bold italic text-gold-black-mix -ml-1">byZean</span>
              </a>
              <p className="hidden md:block text-[10px] uppercase tracking-[0.2em] opacity-60 mt-1">Catering & Professional Baking Training</p>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest pb-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-brand-chocolate hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn-geometric btn-gold px-6 py-2"
              >
                Order
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-brand-chocolate p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-brand-bg overflow-hidden mt-4"
              >
                <div className="flex flex-col p-4 space-y-4 border-t gold-border pt-6">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-xs font-bold uppercase tracking-widest text-brand-chocolate"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a 
                    href="#contact"
                    className="btn-geometric btn-gold text-center py-3"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section - Bento Style */}
        <section id="home" className="flex-1 grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 py-2">
          
          {/* Main Hero Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-12 lg:col-span-7 md:row-span-4 bg-brand-chocolate text-white flex flex-col justify-center p-8 md:p-12 relative overflow-hidden boarder gold-border border-2"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1557925923-33b27f891f88?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h2 className="serif text-4xl md:text-6xl leading-tight mb-6 text-white">
                <span className="text-shine-gold font-black uppercase tracking-tighter">Delicious</span> <br />
                Moments, <span className="italic font-normal text-white">Beautifully Baked.</span>
              </h2>
              <p className="max-w-md text-sm md:text-base text-gray-400 mb-10 leading-relaxed font-light">
                Premium custom cakes and gourmet small chops for Nigeria’s most memorable celebrations. 
                Founded on passion, crafted with precision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-geometric btn-gold shadow-lg text-center">Order a Cake</a>
                <a href="#training" className="btn-geometric btn-outline text-center border-white text-white hover:bg-white hover:text-black">Book Training</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-12 lg:col-span-5 md:row-span-2 bg-brand-chocolate text-white border border-brand-gold/20 p-8"
          >
            <h3 className="serif text-2xl mb-6 border-b gold-border pb-2 inline-block text-brand-gold">Our Specialties</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { title: "Custom Cakes", icon: <Cake size={16} /> },
                { title: "Small Chops", icon: <Utensils size={16} /> },
                { title: "Native Trays", icon: <CheckCircle2 size={16} /> },
                { title: "Surprises", icon: <Star size={16} /> }
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3 group cursor-default">
                   <div className="w-10 h-10 rounded-full flex items-center justify-center border border-brand-gold/30 bg-white/5 text-brand-gold">
                    {item.icon}
                  </div>
                  <p className="font-bold text-[10px] uppercase tracking-wider text-gray-300 group-hover:text-brand-gold transition-colors">{item.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* About Section - Integrated Bento */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            id="about"
            className="md:col-span-12 lg:col-span-5 md:row-span-2 bg-brand-beige border border-gray-100 p-8 flex gap-6 items-center"
          >
            <div className="hidden sm:block w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
               <img src="https://images.unsplash.com/photo-1581339399838-2a120c1836c3?q=80&w=300&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="serif text-xl mb-2 italic">The Heart of <span className="text-shine-gold not-italic font-black uppercase tracking-tighter">CakesNchops</span><span className="text-gold-black-mix font-bold ml-1">byZean</span></h3>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                Premium baking artistry. We don't just bake; we design edible experiences that last a lifetime.
              </p>
            </div>
          </motion.div>

          {/* Quality Grid Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-12 lg:col-span-4 md:row-span-2 border border-brand-gold/10 bg-white p-8 flex flex-col justify-center gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex-shrink-0 border border-brand-gold/20 flex items-center justify-center bg-brand-gold/5">
                <CheckCircle2 size={16} className="text-brand-gold" />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest mb-1 text-brand-chocolate">Organic Batter</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed uppercase">Only the finest organic ingredients for our batter and frosting.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex-shrink-0 border border-brand-gold/20 flex items-center justify-center bg-brand-gold/5">
                <Star size={16} className="text-brand-gold" />
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest mb-1 text-brand-chocolate">Artisanal Design</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed uppercase">Every design is unique to your personality and event theme.</p>
              </div>
            </div>
          </motion.div>

          {/* Social/Contact Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-12 lg:col-span-4 md:row-span-2 border border-brand-gold/20 bg-brand-bg p-8 flex flex-col justify-between"
          >
            <h4 className="serif text-xl mb-4">Let's Connect</h4>
            <div className="space-y-3">
              {[
                { label: "Lagos, Nigeria", val: "Lagos" },
                { label: "@cakesnchopsbyzean", val: "Instagram" },
                { label: "+234 814 925 2373", val: "Phone" }
              ].map((item) => (
                <p key={item.label} className="text-[10px] flex items-center gap-3 uppercase tracking-widest font-medium opacity-70">
                  <span className="text-brand-gold">●</span> {item.label}
                </p>
              ))}
            </div>
            <a 
              href="https://wa.me/2348149252373"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] mt-6 transition-all hover:bg-emerald-700 flex items-center justify-center gap-2"
            >
              <MessageCircle size={14} /> WhatsApp Inquiry
            </a>
          </motion.div>

          {/* Image Grid Card - Expanded */}
            <div className="md:col-span-12 lg:col-span-4 md:row-span-2 bg-brand-beige border border-brand-gold/10 p-0 overflow-hidden flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-brand-gold/5 backdrop-blur-sm"></div>
              <div className="relative text-center p-6">
                <span className="serif text-lg text-brand-gold/40 italic block mb-2">Visual Showcase</span>
                <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto"></div>
              </div>
            </div>
        </section>

        {/* Process Highlights */}
        <section className="py-24 px-4 bg-brand-bg md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1 space-y-8">
               <h2 className="serif text-4xl md:text-5xl">The Process</h2>
               <div className="space-y-6">
                 {[
                   { step: "01", title: "Design Concept", desc: "We sketch and consult to ensure the vision is perfect." },
                   { step: "02", title: "Fresh Sourcing", desc: "Sourcing premium cocoa, butter and seasonal fruits." },
                   { step: "03", title: "Artistic Bake", desc: "The oven meets artistry to create your masterpiece." }
                 ].map(item => (
                   <div key={item.step} className="flex gap-6 items-start">
                     <span className="text-brand-gold font-serif text-3xl font-bold opacity-30">{item.step}</span>
                     <div>
                       <h4 className="font-bold text-xs uppercase tracking-widest">{item.title}</h4>
                       <p className="text-[10px] text-gray-500 uppercase mt-1 leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="aspect-[3/4] rounded-none border border-brand-gold/20 bg-white shadow-xl overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Design Concept" />
                    <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-[8px] uppercase tracking-widest font-bold bg-white/90 text-brand-chocolate px-2 py-1">Concept A</span>
                    </div>
                  </div>
                  <div className="aspect-square rounded-none border border-brand-gold/10 bg-brand-pink/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700" alt="Fresh Sourcing" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square rounded-none border border-brand-gold/10 bg-brand-beige overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=600&fit=crop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700" alt="Artistic Bake" />
                  </div>
                  <div className="aspect-[3/4] rounded-none border border-brand-gold/20 bg-white shadow-xl overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Final Masterpiece" />
                    <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-[8px] uppercase tracking-widest font-bold bg-white/90 text-brand-chocolate px-2 py-1">Concept B</span>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-4 bg-[#151515] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 px-4">
              <motion.div {...fadeIn}>
                <p className="text-[10px] uppercase tracking-[0.4em] text-shine-gold font-bold mb-4">THE GOLD STANDARD</p>
                <h2 className="serif text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">Why Choose <span className="text-shine-gold uppercase font-black tracking-tighter">CakesNchops</span><span className="text-gold-black-mix italic font-bold ml-1">byZean</span>?</h2>
                <div className="w-16 h-1 bg-shine-gold mx-auto mt-6"></div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: <Award className="text-white" size={28} />,
                  title: "Unmatched Artistry",
                  desc: "Every creation is a unique, handcrafted work of art designed to tell your specific story."
                },
                {
                  icon: <ShieldCheck className="text-white" size={28} />,
                  title: "Premium Quality",
                  desc: "We never compromise. Only the finest organic ingredients and luxury chocolates enter our kitchen."
                },
                {
                  icon: <Clock className="text-white" size={28} />,
                  title: "Reliable Delivery",
                  desc: "Prompt and professional handling ensures your treats arrive in pristine condition and right on time."
                },
                {
                  icon: <Heart className="text-white" size={28} />,
                  title: "Client-Centric",
                  desc: "Founded on passion, we prioritize your satisfaction through detailed consultations and care."
                }
              ].map((point, i) => (
                <motion.div 
                  key={point.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-white/10 bg-white/5 hover:border-brand-gold/50 transition-all duration-500 group text-center"
                >
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-full bg-shine-gold flex items-center justify-center border border-white/20 shadow-lg">
                      {point.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-3 text-shine-gold">{point.title}</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Baking Training Section */}
        <section id="training" className="py-32 px-4 bg-[#151515] text-white overflow-hidden relative">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
            <GraduationCap size={600} strokeWidth={0.5} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-3 bg-shine-gold rounded-xl flex-shrink-0 shadow-lg">
                    <GraduationCap className="text-white" size={32} />
                  </div>
                  <h2 className="serif text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.85]">
                    <span className="text-shine-gold">CakesNchops</span>
                    <span className="text-gold-black-mix italic lowercase font-bold tracking-normal -ml-1">byZean</span> <br />
                    <span className="text-shine-gold italic font-bold tracking-wide text-2xl md:text-3xl">Academy</span>
                  </h2>
                </div>
                
                <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed font-light max-w-lg">
                  Master the art of premium confectionery. Our curriculum blends traditional mastery with modern aesthetics, designed for both beginners and aspiring professional bakers in Nigeria.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold border-b border-brand-gold/20 pb-2">Curriculum</h4>
                    <ul className="space-y-3">
                      {["Foundation of Baking", "Crumb Coating & Levelling", "Fondant & Sharp Edges", "Sugar Floral Art"].map(topic => (
                        <li key={topic} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-400">
                          <CheckCircle2 size={12} className="text-brand-gold shrink-0" /> {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold border-b border-brand-gold/20 pb-2">Business Units</h4>
                    <ul className="space-y-3">
                      {["Pricing for Profit", "Social Media Marketing", "Packaging & Branding", "Customer Management"].map(topic => (
                        <li key={topic} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-400">
                          <CheckCircle2 size={12} className="text-brand-gold shrink-0" /> {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-center bg-white/5 p-6 border border-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-1">Duration & Schedule</p>
                    <p className="text-sm font-serif">4-Week Immersion Masterclass</p>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">Saturdays & Wednesdays | 10am - 4pm</p>
                  </div>
                  <a 
                    href="https://wa.me/2348149252373" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-geometric btn-gold w-full sm:w-auto px-8 py-3 flex items-center justify-center gap-2"
                  >
                    Enroll for 2026 <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>

              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="min-h-[500px] flex items-center justify-center border border-white/10 bg-white/5 rounded-[3rem] backdrop-blur-sm">
                  <div className="text-center p-8">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold mb-4 opacity-50">In-Class Photography</p>
                    <h3 className="serif text-2xl text-white/30 italic">Academy Life Visuals Arriving Soon</h3>
                  </div>
                </div>

                {/* Floating Metric */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-brand-chocolate p-6 rounded-2xl border-4 gold-border shadow-2xl text-center min-w-[160px] hidden md:block">
                  <p className="text-3xl font-serif font-bold text-brand-gold">500+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-50 leading-tight">Students Certified <br />Across Nigeria</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section id="services" className="py-24 px-4 border-t gold-border mt-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="mb-16">
              <h2 className="serif text-4xl md:text-5xl font-bold mb-4">Our Craftsmanship</h2>
              <div className="w-24 h-1 bg-brand-gold mb-6"></div>
              <p className="text-sm text-gray-500 uppercase tracking-widest max-w-xl">
                Expertly Curated Experiences for the Connoisseur of Sweets.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-0 border border-gray-100">
              {[
                {
                  icon: <Cake className="text-brand-gold" size={24} />,
                  title: "Custom Cakes",
                  desc: "Handcrafted designs for weddings, birthdays, and anniversaries. Every cake is a unique masterpiece.",
                  img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1000&auto=format&fit=crop"
                },
                {
                  icon: <Utensils className="text-brand-gold" size={24} />,
                  title: "Small Chops",
                  desc: "Authentic, flavorful catering packages tailored for events of all sizes in Nigeria.",
                  img: "https://images.unsplash.com/photo-1541519047971-da0c2a74c478?q=80&w=1000&auto=format&fit=crop"
                },
                {
                  icon: <MessageCircle className="text-brand-gold" size={24} />,
                  title: "Surprise Packages",
                  desc: "Premium Money Cakes and artistic cash-gift designs for that special celebration.",
                  img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1000&auto=format&fit=crop"
                }
              ].map((service, i) => (
                <motion.div 
                  key={service.title}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 border-r last:border-r-0 border-b md:border-b-0 border-gray-100 hover:bg-brand-pink/20 transition-all group"
                >
                  <div className="mb-8">{service.icon}</div>
                  <h3 className="serif text-2xl font-bold mb-4 uppercase tracking-tighter">{service.title}</h3>
                  <p className="text-xs text-gray-600 uppercase tracking-widest leading-loose mb-8">
                    {service.desc}
                  </p>
                  <button className="text-[10px] font-bold uppercase tracking-[0.3em] border-b gold-border pb-1 hover:text-brand-gold transition-colors">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery / Portfolio */}
        <section id="gallery" className="py-24 px-4 bg-brand-chocolate text-brand-bg">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <motion.div {...fadeIn}>
                <h2 className="serif text-4xl md:text-5xl mb-4 italic">The Portfolio</h2>
                <div className="w-20 h-[1px] bg-brand-gold"></div>
              </motion.div>
              <a href="https://instagram.com/cakesnchopsbyzean" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold hover:text-white transition-colors">View Our Instagram</a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { url: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&fit=crop", title: "Pearl Ruffles", desc: "Signature Anniversary Design" },
                { url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&fit=crop", title: "Noir Gold", desc: "Luxury Midnight Collection" },
                { url: "https://images.unsplash.com/photo-1623653139885-f3769c3755c3?q=80&w=800&fit=crop", title: "The Heritage Tray", desc: "Premium Gourmet Selection" },
                { url: "https://images.unsplash.com/photo-1601050690597-df056fb1d99a?q=80&w=800&fit=crop", title: "Artisan Chops", desc: "Savoury Nigerian Appetizers" },
                { url: "https://images.unsplash.com/photo-1570807319532-356b8c2d5907?q=80&w=1000&auto=format&fit=crop", title: "Gold Drip", desc: "Celebration Masterpiece" },
                { url: "https://images.unsplash.com/photo-1559718214-1a7c54791a7s?q=80&w=1000&auto=format&fit=crop", title: "Velvet Bloom", desc: "Floral Birthday Gala" },
                { url: "https://images.unsplash.com/photo-1607771194552-445206772062?q=80&w=1000&auto=format&fit=crop", title: "Azure Dreams", desc: "Modern Tiered Art" },
                { url: "https://images.unsplash.com/photo-1608743211112-0c8055c51450?q=80&w=1000&auto=format&fit=crop", title: "Pure Elegance", desc: "Soft Texture Finish" },
                { url: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=800&fit=crop", title: "Bespoke Wealth", desc: "Luxury Money Cake" },
                { url: "https://images.unsplash.com/photo-1535254973040-607b474cb80d?q=80&w=800&fit=crop", title: "Ivory Cascade", desc: "Wedding Day Special" },
                { url: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&fit=crop", title: "Chef's Stroke", desc: "Intricate Hand-Painting" },
                { url: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&fit=crop", title: "Gilded Favours", desc: "Luxury Pastry Collection" }
              ].map((item, i) => (
                <div key={i} className="aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-black relative group">
                  <img src={item.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-chocolate via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                    <h4 className="serif text-brand-gold text-xs italic font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h4>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/70 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Final Section */}
        <section id="contact" className="py-24 px-4 bg-[#151515] text-white border-t gold-border">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h2 className="serif text-2xl md:text-4xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                <span className="text-white italic font-light tracking-tight text-xl md:text-3xl">Connect</span> <br />
                <span className="text-shine-gold">CakesNchops</span>
                <span className="text-gold-black-mix italic lowercase font-bold tracking-normal -ml-1">byZean</span>
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] leading-relaxed text-gray-400 mb-12">
                We are currently accepting bespoke commissions for 2026. 
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 h-8 bg-brand-gold"></div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest opacity-40 text-white">Consultation</h4>
                    <p className="serif text-lg">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-8 bg-brand-gold"></div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest opacity-40 text-white">Direct Line</h4>
                    <p className="serif text-lg">+234 814 925 2373</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7 bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-md">
               <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <input className="bg-transparent border-b border-white/20 py-3 text-xs uppercase tracking-widest outline-none focus:border-brand-gold transition-colors text-white" placeholder="Full Name" />
                    <input className="bg-transparent border-b border-white/20 py-3 text-xs uppercase tracking-widest outline-none focus:border-brand-gold transition-colors text-white" placeholder="Phone Number" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] uppercase tracking-[0.3em] font-bold opacity-40">Select Event Type</label>
                    <select className="w-full bg-transparent border-b border-white/20 py-3 text-xs uppercase tracking-widest outline-none focus:border-brand-gold transition-colors appearance-none text-white">
                      <option className="bg-[#151515]">Birthday</option>
                      <option className="bg-[#151515]">Wedding</option>
                      <option className="bg-[#151515]">Wedding Anniversary</option>
                      <option className="bg-[#151515]">Graduation</option>
                      <option className="bg-[#151515]">Thanksgiving</option>
                      <option className="bg-[#151515]">Other Bespoke Event</option>
                    </select>
                  </div>
                  <textarea className="w-full bg-transparent border-b border-white/20 py-3 text-xs uppercase tracking-widest outline-none focus:border-brand-gold transition-colors resize-none text-white" rows={3} placeholder="Event Details & Expected Date"></textarea>
                  <button className="btn-geometric btn-gold w-full mt-4">Submit Commission</button>
               </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-[0.2em] opacity-50 border-t gold-border py-8 px-2">
          <p>© 2026 <span className="text-shine-gold font-black uppercase tracking-tighter">CakesNchops</span><span className="text-gold-black-mix font-bold italic ml-1">byZean</span>. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="https://instagram.com/cakesnchopsbyzean" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Instagram</a>
            <a href="https://wa.me/2348149252373" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">WhatsApp</a>
            <a href="#services" className="hover:text-brand-gold transition-colors">Training</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
