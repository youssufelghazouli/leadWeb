import React, { useState } from 'react';
import { Bot, Search, Users, Sparkles, ArrowRight, BrainCircuit, MapPin, Zap, Target, Globe, Rocket, Shield, Brain, CheckCircle2, Download, ArrowDown, Phone, Youtube, Instagram, MessageSquare, Clock } from 'lucide-react';

// Import only the images that exist in src/assets/
import AutopilotLeads from '../assets/autopilot-leads.jpg';
import SocialMediaIntent from '../assets/social-media-intent.jpeg';
import InstagramPostInteraction from '../assets/instagram-post-interaction.jpg';
import AIAssistant from '../assets/ai-assistant.jpg';
import SmartConsent from '../assets/smartconsent.jpg';

// Comment out imports for missing images
// import HeroBackground from '../assets/hero-background.jpg';
// import AlgorithmLeads from '../assets/algorithm-leads.jpg';
// import B2BLocal from '../assets/b2b-local.jpg';

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
          <div className="bg-gray-800/90 backdrop-blur-md p-6 rounded-xl max-w-md w-full relative border border-gray-700/50">
            <button 
              onClick={() => setShowContactForm(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Book a Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 rounded-md bg-gray-700/50 border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-2 rounded-md bg-gray-700/50 border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full p-2 rounded-md bg-gray-700/50 border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  required
                  rows={3}
                  className="w-full p-2 rounded-md bg-gray-700/50 border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-black font-semibold py-2 rounded-md hover:bg-amber-400 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Header Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="w-7 h-7 text-amber-500" />
            <span className="text-lg font-bold text-white drop-shadow-md">Smartleads</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#features" className="text-gray-300 hover:text-amber-500 transition-colors">Features</a>
            <a href="#benefits" className="text-gray-300 hover:text-amber-500 transition-colors">Why Smartleads</a>
            <button 
              onClick={() => setShowContactForm(true)} 
              className="text-amber-500 font-semibold hover:text-amber-400 transition-colors"
            >
              Book a Demo
            </button>
            <button 
              onClick={handleTryItFree}
              className="bg-amber-500 text-black px-3 py-1.5 rounded-md font-semibold hover:bg-amber-400 transition-all duration-300 shadow-lg"
            >
              Start Free Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Comment out due to missing HeroBackground image */}
      {/* <header className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16">
        <ArrowDown className="absolute bottom-3 w-7 h-7 text-amber-500 animate-bounce" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-amber-900/20 to-black/90 z-10" />
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${HeroBackground})`
          }}
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600 drop-shadow-lg">
            Stop Waiting, Start Finding
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200 font-medium">
            Smartleads: Autopilot Lead Generation
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-6">
            AI-powered local leads for realtors & small businesses, built with industry experts.
          </p>

          <div id="download-section" className="bg-gradient-to-r from-amber-500/30 to-yellow-600/30 p-6 rounded-xl backdrop-blur-md mb-10 border border-amber-500/20 shadow-2xl">
            <h3 className="text-xl font-bold mb-3 text-amber-400">🚀 Elite Launch Offer</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
              <div className="flex-1 text-left">
                <h4 className="text-lg font-semibold mb-3 text-gray-100">Join Elite Realtors Now</h4>
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
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 mx-auto shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <Download className="w-5 h-5" />
                  Get Started Free
                </button>
                <p className="text-sm mt-2 text-gray-300 flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4 text-amber-400" />
                  Limited Spots - Don’t Miss Out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {/* Temporary Hero Section Placeholder */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16 bg-gray-800">
        <ArrowDown className="absolute bottom-3 w-7 h-7 text-amber-500 animate-bounce" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600 drop-shadow-lg">
            Stop Waiting, Start Finding
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200 font-medium">
            Smartleads: Autopilot Lead Generation
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-6">
            AI-powered local leads for realtors & small businesses, built with industry experts.
          </p>

          <div id="download-section" className="bg-gradient-to-r from-amber-500/30 to-yellow-600/30 p-6 rounded-xl backdrop-blur-md mb-10 border border-amber-500/20 shadow-2xl">
            <h3 className="text-xl font-bold mb-3 text-amber-400">🚀 Elite Launch Offer</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
              <div className="flex-1 text-left">
                <h4 className="text-lg font-semibold mb-3 text-gray-100">Join Elite Realtors Now</h4>
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
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 mx-auto shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <Download className="w-5 h-5" />
                  Get Started Free
                </button>
                <p className="text-sm mt-2 text-gray-300 flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4 text-amber-400" />
                  Limited Spots - Don’t Miss Out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900" id="benefits">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white drop-shadow-md">
            Why Smartleads Changes Everything
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Comment out Algorithm-Powered Local Leads due to missing image */}
            {/* <div className="animate-fade-in-up">
              <img 
                src={AlgorithmLeads}
                alt="Algorithm-Powered Local Leads"
                className="rounded-lg shadow-xl mb-6 w-full h-48 object-cover border border-gray-700/50"
              />
              <h3 className="text-xl font-bold mb-3 text-amber-400 drop-shadow-sm">Algorithm-Powered Local Leads</h3>
              <p className="text-gray-300">
                Our AI identifies high-intent leads in your area, ensuring you connect with clients ready to buy or partner.
              </p>
            </div> */}
            
            <div className="animate-fade-in-up delay-100">
              <img 
                src={AutopilotLeads}
                alt="Autopilot Lead Generation"
                className="rounded-lg shadow-xl mb-6 w-full h-48 object-cover border border-gray-700/50"
              />
              <h3 className="text-xl font-bold mb-3 text-amber-400 drop-shadow-sm">Autopilot Lead Generation</h3>
              <p className="text-gray-300">
                No more ad spend or cold calls. Smartleads delivers hot leads automatically, freeing you to close deals.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/90 backdrop-blur-md p-5 rounded-lg border border-gray-700/50 animate-fade-in-up delay-200">
              <Shield className="w-10 h-10 text-amber-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-amber-400">Legal Consent Compliance</h3>
              <p className="text-gray-400 text-sm">
                Contact leads legally with our automated consent system, ensuring compliance and trust.
              </p>
            </div>
            
            <div className="bg-gray-800/90 backdrop-blur-md p-5 rounded-lg border border-gray-700/50 animate-fade-in-up delay-300">
              <Brain className="w-10 h-10 text-amber-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-amber-400">Expert-Built Solution</h3>
              <p className="text-gray-400 text-sm">
                Designed with real estate and small business experts to solve today’s lead challenges.
              </p>
            </div>
            
            <div className="bg-gray-800/90 backdrop-blur-md p-5 rounded-lg border border-gray-700/50 animate-fade-in-up delay-400">
              <Users className="w-10 h-10 text-amber-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-amber-400">Elite Success Stories</h3>
              <p className="text-gray-400 text-sm">
                Top realtors and businesses thrive with Smartleads’ high-intent, untouched leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900" id="features">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white drop-shadow-md">
            Built for Realtors & Small Businesses
          </h2>

          {/* Online and Social Media Intent Search */}
          <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 rounded-xl p-6 mb-10 backdrop-blur-md border border-gray-700/50">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-amber-400 drop-shadow-sm">
                  Online and Social Media Intent Search
                </h3>
                <p className="text-gray-300 mb-4">
                  Find leads across online platforms by tracking keywords that signal buyer intent. Get emails, phone numbers, and names where available.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Globe className="text-amber-500 w-5 h-5" />
                    <span>Scans LinkedIn, Facebook, Reddit, and more</span>
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
                  src={SocialMediaIntent}
                  alt="Online and Social Media Intent Search"
                  className="rounded-lg shadow-xl w-full h-64 object-cover border border-gray-700/50"
                />
              </div>
            </div>
          </div>

          {/* Ad/Post Interactions Search */}
          <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 rounded-xl p-6 mb-10 backdrop-blur-md border border-gray-700/50">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-amber-400 drop-shadow-sm">
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
                  src={InstagramPostInteraction}
                  alt="Ad/Post Interactions Search"
                  className="rounded-lg shadow-xl w-full h-64 object-cover border border-gray-700/50"
                />
              </div>
            </div>
          </div>

          {/* Comment out B2B Local Business Search due to missing image */}
          {/* <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 rounded-xl p-6 mb-10 backdrop-blur-md border border-gray-700/50">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-amber-400 drop-shadow-sm">
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
                  src={B2BLocal}
                  alt="B2B Local Business Search"
                  className="rounded-lg shadow-xl w-full h-64 object-cover border border-gray-700/50"
                />
              </div>
            </div>
          </div> */}

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/90 rounded-lg overflow-hidden backdrop-blur-md border border-gray-700/50">
              <img 
                src={AIAssistant}
                alt="AI Copilot Assistance"
                className="w-full h-40 object-cover border-b border-gray-700/50"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-amber-400">AI Copilot Assistance</h3>
                <p className="text-gray-400 text-sm">
                  Optimize searches with our AI Copilot, guiding you to the best keywords and strategies.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/90 rounded-lg overflow-hidden backdrop-blur-md border border-gray-700/50">
              <img 
                src={SmartConsent}
                alt="Smart Consent Feature"
                className="w-full h-40 object-cover border-b border-gray-700/50"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-amber-400">Smart Consent Feature</h3>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white drop-shadow-md">
            Transform Sales with Smartleads
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Join elite realtors and businesses finding high-intent, untouched leads in their area.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Book a Demo
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={handleTryItFree}
              className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500/20 font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <Download size={18} />
              Start Free Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-black text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <Bot className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="text-white font-semibold mb-2 text-amber-400">Smartleads</h3>
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
                <li>Online and Social Media Intent Search</li>
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
            <p className="text-sm mt-2">
              Image Credits: 
              <span className="mx-1">Autopilot Lead Generation image designed by <a href="http://www.freepik.com" className="text-amber-500 hover:underline">stories / Freepik</a></span> | 
              <span className="mx-1">Smart Consent Feature image by macrovector</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;