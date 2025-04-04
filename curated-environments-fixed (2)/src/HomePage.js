
import { useState } from "react";

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Connect to Formspree, EmailJS, Airtable, etc.
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/CURATED ENVIRONMENTS FINAL DRAFT BLUE.png" alt="Logo" className="w-10 h-10" />
          <span className="text-lg font-bold">Curated Environments</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#portfolio" className="hover:underline">Projects</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <div className="flex flex-col items-center justify-center">
          <img src="/CURATED ENVIRONMENTS FINAL DRAFT BLUE.png" alt="Curated Environments Logo" className="w-32 h-32 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Spaces That Inspire. Studios That Perform.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Custom creative environments for content creators, musicians, and remote professionals—bridging space, tech, and personal brand.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-white text-black font-semibold px-6 py-3 rounded-2xl shadow">Book a Consultation</a>
            <a href="#portfolio" className="border border-white px-6 py-3 rounded-2xl">View Our Work</a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Custom Studio Builds</h3>
            <p>Full-service workspace design and installation for creators, musicians, and professionals.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Brand & Social Strategy</h3>
            <p>Align your content, visuals, and audience growth with your creative environment.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Curated Gear & Tools</h3>
            <p>Recommended tech setups with affiliate links and hands-on integration support.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About Curated Environments</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Founded in the U.S. and now based in Amsterdam, we specialize in building creative spaces that are technically sound, aesthetically powerful, and fully personalized. From solo creators to startup teams, we help you do your best work—one curated space at a time.
        </p>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/project1.jpg" alt="Studio Setup 1" className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Amsterdam Streaming Room</h3>
              <p className="text-sm text-gray-600">Custom lighting, sound treatment, and camera angles optimized for livestreaming.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/project2.jpg" alt="Studio Setup 2" className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Berlin Music Production Hub</h3>
              <p className="text-sm text-gray-600">Modular desk, acoustic panels, and multi-monitor setup for hybrid production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Contact Form */}
      <section id="contact" className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Curate Your Space</h2>
        <p className="max-w-xl mx-auto mb-8 text-lg">Tell us a bit about your project and we’ll reach out for a personalized consultation.</p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4 text-left">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="border rounded-xl p-3" required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="border rounded-xl p-3" required />
          <input type="text" name="service" placeholder="What do you need help with?" value={formData.service} onChange={handleChange} className="border rounded-xl p-3" />
          <textarea name="message" placeholder="Tell us more about your space, goals, or timeline..." value={formData.message} onChange={handleChange} className="border rounded-xl p-3" rows={5}></textarea>
          <button type="submit" className="bg-black text-white font-semibold px-6 py-3 rounded-2xl shadow">Submit</button>
        </form>
      </section>
    </main>
  );
}
