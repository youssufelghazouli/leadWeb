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
          <div className="bg-gray-800 p-6 rounded-xl max-w-md w-full relative">
            <button 
              onClick={() => setShowContactForm(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Book a Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  required
                  rows={3}
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-black font-semibold py-2 rounded-md hover:bg-amber-400"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Header Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="w-7 h-7 text-amber-500" />
            <span className="text-lg font-bold">Smartleads</span>
          </div>
          <div className="flex items-center gap-5">
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
              className="bg-amber-500 text-black px-3 py-1.5 rounded-md font-semibold hover:bg-amber-400"
            >
              Start Free Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Social Media Interaction Image */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16">
        <ArrowDown className="absolute bottom-3 w-7 h-7 text-amber-500 animate-bounce" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1611162617210-7d673bf0f2a6?auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
            Stop Waiting, Start Finding
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            Smartleads: Autopilot Lead Generation
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-6">
            AI-powered local leads for realtors & small businesses, built with industry experts.
          </p>

          {/* Free Trial Offer */}
          <div id="download-section" className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 p-6 rounded-xl backdrop-blur-sm mb-10">
            <h3 className="text-xl font-bold mb-3">🚀 Exclusive Launch Offer</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
              <div className="flex-1 text-left">
                <h4 className="text-lg font-semibold mb-3">Start Free Today</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span>3 Free High-Intent Lead Searches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span>Access to All Platforms & Features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span>Localized Leads in Your Area</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <button 
                  onClick={handleTryItFree}
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 mx-auto shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  Get Started Free
                </button>
                <p className="text-sm mt-2 text-gray-400">Limited spots - Join the future of sales!</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-800" id="benefits">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Why Smartleads Changes Everything
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Algorithm-Powered Leads"
                className="rounded-lg shadow-md mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-3 text-amber-500">Algorithm-Powered Local Leads</h3>
              <p className="text-gray-300">
                Our AI identifies high-intent leads in your area, ensuring you connect with clients ready to buy or partner.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516321310764-8d8c946490b4?auto=format&fit=crop&w=800&q=80"
                alt="Autopilot Automation"
                className="rounded-lg shadow-md mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-3 text-amber-500">Autopilot Lead Generation</h3>
              <p className="text-gray-300">
                No more ad spend or cold calls. Smartleads delivers hot leads automatically, freeing you to close deals.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-5 rounded-lg">
              <Shield className="w-10 h-10 text-amber-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Legal Consent Compliance</h3>
              <p className="text-gray-400 text-sm">
                Contact leads legally with our automated consent system, ensuring compliance and trust.
              </p>
            </div>
            
            <div className="bg-gray-900 p-5 rounded-lg">
              <Brain className="w-10 h-10 text-amber-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Expert-Built Solution</h3>
              <p className="text-gray-400 text-sm">
                Designed with real estate and small business experts to solve today’s lead challenges.
              </p>
            </div>
            
            <div className="bg-gray-900 p-5 rounded-lg">
              <Users className="w-10 h-10 text-amber-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Happy Clients</h3>
              <p className="text-gray-400 text-sm">
                Join realtors and businesses thriving with Smartleads’ high-intent, untouched leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900" id="features">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Built for Realtors & Small Businesses
          </h2>

          {/* Social Media Intent Search */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-amber-500">
                  Social Media Intent Search
                </h3>
                <p className="text-gray-300 mb-4">
                  Find leads across social media by tracking keywords that signal buyer intent. Get emails, phone numbers, and names where available.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Globe className="text-amber-500 w-5 h-5" />
                    <span>Scans Facebook, Instagram, Reddit, and more</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="text-amber-500 w-5 h-5" />
                    <span>Pinpoints high-intent prospects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare className="text-amber-500 w-5 h-5" />
                    <span>Delivers actionable contact details</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80"
                  alt="Social Media Analytics"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Ad/Post Interactions Search */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-amber-500">
                  Ad/Post Interactions Search
                </h3>
                <p className="text-gray-300 mb-4">
                  Capture leads engaging with competitors’ ads and posts. Get usernames and names to contact them legally, outsmarting competitors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Zap className="text-amber-500 w-5 h-5" />
                    <span>Tracks likes, comments, shares</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="text-amber-500 w-5 h-5" />
                    <span>Legally compliant outreach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Rocket className="text-amber-500 w-5 h-5" />
                    <span>Beats competitors to leads</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80"
                  alt="Social Media Engagement"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* B2B Local Business Search */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-amber-500">
                  B2B Local Business Search
                </h3>
                <p className="text-gray-300 mb-4">
                  Find local businesses for partnerships or services, tailored to your area and industry needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <MapPin className="text-amber-500 w-5 h-5" />
                    <span>Location-based discovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="text-amber-500 w-5 h-5" />
                    <span>Perfect for B2B partnerships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BrainCircuit className="text-amber-500 w-5 h-5" />
                    <span>Targets interested businesses</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800&q=80"
                  alt="Local Business Networking"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
                alt="AI Copilot Interface"
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">AI Copilot Assistance</h3>
                <p className="text-gray-400 text-sm">
                  Optimize searches with our AI Copilot, guiding you to the best keywords and strategies.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516321310764-8d8c946490b4?auto=format&fit=crop&w=800&q=80"
                alt="Secure Consent System"
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Smart Consent Feature</h3>
                <p className="text-gray-400 text-sm">
                  Legally contact leads with automated consent tracking and manual outreach options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Transform Sales with Smartleads
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Find high-intent, untouched leads in your area. Built for realtors and small businesses.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 shadow-lg"
            >
              Book a Demo
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={handleTryItFree}
              className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10 font-semibold px-6 py-3 rounded-md flex items-center gap-2"
            >
              <Download size={18} />
              Start Free Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <Bot className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="text-white font-semibold mb-2">Smartleads</h3>
              <p className="text-sm">
                The future of sales. High-intent, local leads for realtors and small businesses.
              </p>
              <div className="flex gap-3 mt-3">
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Platform</h4>
              <ul className="space-y-1 text-sm">
                <li>Social Media Intent Search</li>
                <li>Ad/Post Interactions</li>
                <li>B2B Local Search</li>
                <li>Copilot & Consent Features</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-1 text-sm">
                <li>About Smartleads</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-1 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-sm">© 2025 Smartleads by SalesFinderAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;