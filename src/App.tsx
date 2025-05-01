import React, { useState } from 'react';
import { Bot, Search, Users, Sparkles, ArrowRight, BrainCircuit, MapPin, Zap, Target, Globe, Rocket, Shield, Brain, CheckCircle2, Download, ArrowDown, Phone, Youtube, Instagram, MessageSquare } from 'lucide-react';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowContactForm(false);
    alert('Thank you! Our team will contact you shortly.');
  };

  const handleTryItFree = () => {
    const downloadSection = document.querySelector('#download-section');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full relative">
            <button 
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-6">Book a Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-black font-semibold py-3 rounded-md hover:bg-amber-400"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Header Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-amber-500" />
            <span className="text-xl font-bold">Smartleads</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-amber-500">Features</a>
            <a href="#benefits" className="text-gray-300 hover:text-amber-500">Why Smartleads</a>
            <button 
              onClick={() => setShowContactForm(true)} 
              className="text-amber-500 font-semibold hover:text-amber-400"
            >
              Book a Demo
            </button>
            <button 
              onClick={handleTryItFree}
              className="bg-amber-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-amber-400"
            >
              Start Free Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image Background */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20">
        <ArrowDown className="absolute bottom-4 w-8 h-8 text-amber-500 animate-bounce" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1516321310764-8d8c946490b4?auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600 pb-2">
            Stop Waiting, Start Finding
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Smartleads: The Future of Sales. Discover untouched, high-intent leads in your area with our AI-powered social media intent search.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Built with industry experts for realtors and small businesses to revolutionize lead generation.
          </p>

          {/* Free Trial Offer */}
          <div id="download-section" className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 p-8 rounded-xl backdrop-blur-sm mb-12">
            <h3 className="text-2xl font-bold mb-4">🚀 Exclusive Launch Offer</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
              <div className="flex-1 text-left">
                <h4 className="text-xl font-semibold mb-4">Start Free Today</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" />
                    <span>3 Free High-Intent Lead Searches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" />
                    <span>Access to All Platforms & Features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" />
                    <span>Localized Leads in Your Area</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <button 
                  onClick={handleTryItFree}
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-lg flex items-center gap-2 mx-auto"
                >
                  <Download className="w-5 h-5" />
                  Get Started Free
                </button>
                <p className="text-sm mt-3 text-gray-400">Limited spots - Join the future of sales today!</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800" id="benefits">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Smartleads is a Game-Changer
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
                alt="Localized Leads"
                className="rounded-lg shadow-xl mb-8"
              />
              <h3 className="text-2xl font-bold mb-4 text-amber-500">Untouched, Localized Leads</h3>
              <p className="text-gray-300">
                Find high-intent leads in your area who are actively seeking your services. Our AI pinpoints prospects based on your location, ensuring you connect with clients ready to act.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1557426272-fc91f7ad2e5b?auto=format&fit=crop&w=800&q=80"
                alt="Autopilot Lead Generation"
                className="rounded-lg shadow-xl mb-8"
              />
              <h3 className="text-2xl font-bold mb-4 text-amber-500">Autopilot Lead Generation</h3>
              <p className="text-gray-300">
                Stop wasting money on ads or chasing cold leads. Smartleads’ AI works 24/7 to deliver hot leads directly to you, so you can focus on closing deals.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Shield className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Legal Consent Compliance</h3>
              <p className="text-gray-400">
                Our unique consent feature ensures you contact leads legally, with automated or manual consent requests via email or social media.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <Brain className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Industry Expert Design</h3>
              <p className="text-gray-400">
                Built with insights from real estate and mortgage experts to solve modern lead generation challenges.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <Zap className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">High-Intent Leads</h3>
              <p className="text-gray-400">
                Our algorithms track online behavior to identify leads who have shown clear intent, giving you a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900" id="features">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Revolutionary Features for Realtors & Small Businesses
          </h2>

          {/* Social Media Intent Search */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-amber-500">
                  Social Media Intent Search
                </h3>
                <p className="text-gray-300 mb-6">
                  Search across all social media and online platforms for keywords that signal buyer intent. Get a detailed leads list with emails, phone numbers, and names (where available).
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Globe className="text-amber-500" />
                    <span>Covers Facebook, Instagram, Reddit, and more</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="text-amber-500" />
                    <span>Targets high-intent prospects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare className="text-amber-500" />
                    <span>Delivers actionable contact details</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
                  alt="Social Media Search"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Ad/Post Interactions Search */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-amber-500">
                  Ad/Post Interactions Search
                </h3>
                <p className="text-gray-300 mb-6">
                  Find leads who have liked, commented, or shared competitors’ ads and posts. Get their social media usernames and names to contact them legally, bypassing privacy restrictions competitors face.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Zap className="text-amber-500" />
                    <span>Tracks likes, comments, and shares</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="text-amber-500" />
                    <span>Legally compliant contact approach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Rocket className="text-amber-500" />
                    <span>Outsmart competitors effortlessly</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=800&q=80"
                  alt="Ad Interactions"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* B2B Local Business Search */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-amber-500">
                  B2B Local Business Search
                </h3>
                <p className="text-gray-300 mb-6">
                  Discover local businesses in your area that need your services or are open to partnerships. Perfect for realtors and small businesses looking to expand their network.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <MapPin className="text-amber-500" />
                    <span>Location-based business discovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="text-amber-500" />
                    <span>Ideal for B2B partnerships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BrainCircuit className="text-amber-500" />
                    <span>Targets businesses with intent</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="B2B Local Search"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
                alt="Copilot Assistance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">AI Copilot Assistance</h3>
                <p className="text-gray-400">
                  Maximize every search with our AI Copilot, guiding you to optimize keywords and strategies for the best lead results.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596524430619-0369a6b94f69?auto=format&fit=crop&w=800&q=80"
                alt="Consent Feature"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Smart Consent Feature</h3>
                <p className="text-gray-400">
                  Legally contact leads with our automated consent system. Track consent status (granted, denied, pending) and send manual requests via email or social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Future of Sales with Smartleads
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Built for realtors and small businesses to dominate lead generation. Find high-intent, untouched leads in your area today.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-md flex items-center gap-2"
            >
              Book a Demo
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={handleTryItFree}
              className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10 font-semibold px-8 py-4 rounded-md flex items-center gap-2"
            >
              <Download size={20} />
              Start Free Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Bot className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-white font-semibold mb-2">Smartleads</h3>
              <p className="text-sm">
                The future of sales. Built with real estate and small business experts to deliver high-intent, localized leads.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <Youtube size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>Social Media Intent Search</li>
                <li>Ad/Post Interactions</li>
                <li>B2B Local Search</li>
                <li>Copilot & Consent Features</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>About Smartleads</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© 2025 Smartleads by SalesFinderAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;