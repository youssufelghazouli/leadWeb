import React, { useState } from 'react';
import { Bot, Search, Users, Sparkles, ArrowRight, BrainCircuit, Clock, MapPin, Zap, Target, Calendar, Phone, Youtube, Instagram, ArrowDown, Download, CheckCircle2, MessageSquare, Globe, BarChart as ChartBar, Rocket, Shield, Brain } from 'lucide-react';

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
    // Handle form submission
    setShowContactForm(false);
    alert('Thank you! Our team will contact you shortly.');
  };

  const handleTryItFree = () => {
    // Scroll to download section
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
            <span className="text-xl font-bold">SalesFinderAI</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-amber-500">Features</a>
            <a href="#benefits" className="text-gray-300 hover:text-amber-500">Benefits</a>
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
              Try It Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20">
        <ArrowDown className="absolute bottom-4 w-8 h-8 text-amber-500 animate-bounce" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://cdn.pixabay.com/vimeo/328714728/AI%20-%2018316.mp4?width=1280&hash=c9d3c2a5c1c7c1d5c1c7c1d5c1c7c1d5c1c7c1d5" type="video/mp4" />
        </video>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600 pb-2">
            Stop Searching. Get Hot Leads Instantly.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Turn Cold Leads into Hot Opportunities with SmartLeads AI
          </p>

          {/* Free Trial Offer */}
          <div id="download-section" className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 p-8 rounded-xl backdrop-blur-sm mb-12">
            <h3 className="text-2xl font-bold mb-4">🏷️ Special Launch Offer</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
              <div className="flex-1 text-left">
                <h4 className="text-xl font-semibold mb-4">Start Free Today</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" />
                    <span>3 Free Lead Searches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" />
                    <span>Full Access to All Features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" />
                    <span>All with One Click</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-lg flex items-center gap-2 mx-auto">
                  <Download className="w-5 h-5" />
                  Download Now
                </button>
                <p className="text-sm mt-3 text-gray-400">Limited time offer - Start today!</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800" id="benefits">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Supercharge Your Lead Generation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="AI Analysis"
                className="rounded-lg shadow-xl mb-8"
              />
              <h3 className="text-2xl font-bold mb-4 text-amber-500">Save Time and Money</h3>
              <p className="text-gray-300">
                Focus on your current clients while our AI discovers your next ones. No more wasting 
                time on cold calls or manual searches. Our platform identifies high-intent prospects 
                who are actively seeking solutions like yours.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Intent Analysis"
                className="rounded-lg shadow-xl mb-8"
              />
              <h3 className="text-2xl font-bold mb-4 text-amber-500">Smart Intent Detection</h3>
              <p className="text-gray-300">
                Our advanced algorithms analyze keywords, context, and user behavior to identify genuine buying signals. 
                Get notified instantly when potential clients express interest in services like yours, giving you 
                the first-mover advantage.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Globe className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cross-Platform Search</h3>
              <p className="text-gray-400">
                Find opportunities across Facebook, Instagram, Reddit, and more - catch negative reviews and comments before they escalate
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <Calendar className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Time-Based Search</h3>
              <p className="text-gray-400">
                Search through specific time periods to find trending opportunities and seasonal patterns
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <Rocket className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Automated Social Search</h3>
              <p className="text-gray-400">
                Let AI scan social media while you focus on growing your business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900" id="features">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cutting-Edge Features
          </h2>

          {/* AI Chatbot Feature */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-amber-500">
                  AI-Powered Keyword Assistant
                </h3>
                <p className="text-gray-300 mb-6">
                  Our intelligent chatbot helps you discover the perfect keywords for your industry. 
                  Simply describe your business, and our AI will suggest optimized search terms based on:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Brain className="text-amber-500" />
                    <span>Your specific profession and industry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="text-amber-500" />
                    <span>Target customer profiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare className="text-amber-500" />
                    <span>Common pain points and needs</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
                  alt="AI Chatbot"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="Beat Competition"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Beat Your Competition</h3>
                <p className="text-gray-400">
                  Get to potential clients before your competitors do with our advanced social media monitoring and instant notifications
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Lead Scoring"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Smart Lead Scoring</h3>
                <p className="text-gray-400">
                  Our AI automatically ranks leads based on intent signals, helping you focus on the most promising opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Shield className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data Security</h3>
              <p className="text-gray-400">
                Enterprise-grade security to protect your leads and data
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <Users className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Find B2B Clients</h3>
              <p className="text-gray-400">
                Specialized algorithms to identify and qualify B2B opportunities
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <BrainCircuit className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Endless Lead Possibilities</h3>
              <p className="text-gray-400">
                Discover new opportunities across multiple industries and platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join industry leaders using SmartLeads to capture high-intent prospects before the competition
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-md flex items-center gap-2"
            >
              Book a Demo
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10 font-semibold px-8 py-4 rounded-md flex items-center gap-2">
              <Phone size={20} />
              Contact Sales
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
              <h3 className="text-white font-semibold mb-2">SalesFinderAI</h3>
              <p className="text-sm">
                Revolutionizing lead generation with SmartLeads technology
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
                <li>SmartLeads Features</li>
                <li>Pricing</li>
                <li>Case Studies</li>
                <li>Documentation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>About SalesFinderAI</li>
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
            <p>&copy; 2025 SalesFinderAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;