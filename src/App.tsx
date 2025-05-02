import React, { useState } from 'react';
import { Search, Users, Sparkles, ArrowRight, BrainCircuit, MapPin, Zap, Target, Globe, Rocket, Shield, Brain, CheckCircle2, Download, ArrowDown, Phone, Youtube, Instagram, MessageSquare, Clock, Menu, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Import local assets
import autopilotLeads from './assets/autopilot-leads.jpg';
import socialMediaIntent from './assets/social-media-intent.jpeg';
import instagramPostInteraction from './assets/instagram-post-interaction.jpg';
import aiAssistant from './assets/ai-assistant.jpg';
import smartConsent from './assets/smartconsent.jpg';
import softwareLicense from './assets/SOFTWARE LICENSE AND PRIVACY AGREEMENT - Google Docs.pdf';
import privacyPolicy from './assets/PRIVACY POLICY.pdf';
import termsOfService from './assets/TERMS OF SERVICE AND LEGAL AGREEMENT.pdf';
import securityPolicy from './assets/SECURITY POLICY.pdf';
import contactUsImage from './assets/contact-us.jpg';
import logoImage from './assets/image.png';
import smartleadsExe from './assets/smartleads.exe';
import smartleadsAppZip from './assets/smartleads.app-20250502T194833Z-1-001.zip';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [formTitle, setFormTitle] = useState('Book a Demo');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isPolicyAgreed, setIsPolicyAgreed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPolicyAgreed) {
      alert('You must agree to the Privacy Policy, Terms of Service, Security Policy, and Software License Agreement to proceed.');
      return;
    }

    const emailData = {
      form_title: formTitle,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs.send(
      'service_d76x92s',
      'template_r75oava',
      emailData,
      'WCwpfDLkO-ZPQ6rd8'
    )
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      setShowContactForm(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsPolicyAgreed(false);

      if (formTitle === 'Download for Free' || formTitle === 'Start Free Now') {
        setShowDownloadModal(true);
      } else {
        alert('Thank you! Our team will contact you shortly.');
      }
    })
    .catch((error: any) => {
      console.error('Failed to send email:', error);
      alert('There was an error sending your request. Please try again later.');
    });
  };

  const handleDownload = (platform: string) => {
    const link = document.createElement('a');
    if (platform === 'Windows') {
      link.href = smartleadsExe;
      link.download = 'smartleads.exe';
    } else if (platform === 'macOS') {
      link.href = smartleadsAppZip;
      link.download = 'smartleads.app-20250502T194833Z-1-001.zip';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowDownloadModal(false);
    alert(`Thank you for downloading Smartleads for ${platform}! As a newly launched application, it may require you to select 'Run anyway', 'Keep' or 'Download suspicious file' if blocked or prompted by your system. For added confidence, you can scan the file with your antivirus software. Contact us at salesfinderai@gmail.com if you need assistance.`);
  };

  const openForm = (title: string) => {
    setFormTitle(title);
    setShowContactForm(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <h3 className="text-xl font-bold mb-4 text-amber-400">{formTitle}</h3>
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
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="policy-agreement"
                  checked={isPolicyAgreed}
                  onChange={(e) => setIsPolicyAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 text-amber-500 bg-gray-700 border-gray-600 rounded focus:ring-amber-500"
                />
                <label htmlFor="policy-agreement" className="text-sm text-gray-300">
                  I agree to the{' '}
                  <a href={privacyPolicy} className="text-amber-500 hover:underline" target="_blank">Privacy Policy</a>,{' '}
                  <a href={termsOfService} className="text-amber-500 hover:underline" target="_blank">Terms of Service</a>,{' '}
                  <a href={securityPolicy} className="text-amber-500 hover:underline" target="_blank">Security Policy</a>, and{' '}
                  <a href={softwareLicense} className="text-amber-500 hover:underline" target="_blank">Software License Agreement</a>.
                </label>
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

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800/90 backdrop-blur-md p-6 rounded-xl max-w-md w-full relative border border-gray-700/50">
            <button 
              onClick={() => setShowDownloadModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Download Smartleads</h3>
            <p className="text-gray-300 mb-6">
              Thank you for your submission! Please select your platform to download the Smartleads application.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleDownload('macOS')}
                className="bg-amber-500 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-amber-400 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                macOS
              </button>
              <button
                onClick={() => handleDownload('Windows')}
                className="bg-amber-500 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-amber-400 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Windows
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="Smartleads Logo" className="w-7 h-7" />
            <span className="text-lg font-bold text-white drop-shadow-md">Smartleads</span>
          </div>
          {/* Hamburger Menu Button (Visible on Mobile) */}
          <button 
            className="md:hidden text-gray-300 hover:text-amber-500 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Navigation Links (Visible on Desktop) */}
          <div className="hidden md:flex items-center gap-5">
            <a href="#features" className="text-gray-300 hover:text-amber-500 transition-colors">Features</a>
            <a href="#benefits" className="text-gray-300 hover:text-amber-500 transition-colors">Why Smartleads</a>
            <a href="#contact" className="text-gray-300 hover:text-amber-500 transition-colors">Contact Us</a>
            <button 
              onClick={() => openForm('Book a Demo')} 
              className="text-amber-500 font-semibold hover:text-amber-400 transition-colors"
            >
              Book a Demo
            </button>
            <button 
              onClick={() => openForm('Start Free Now')}
              className="bg-amber-500 text-black px-3 py-1.5 rounded-md font-semibold hover:bg-amber-400 transition-all duration-300 shadow-lg"
            >
              Download for Free
            </button>
          </div>
        </div>
        {/* Dropdown Menu (Visible on Mobile when Menu is Open) */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="flex flex-col items-center gap-4 py-4">
              <a href="#features" className="text-gray-300 hover:text-amber-500 transition-colors" onClick={toggleMenu}>Features</a>
              <a href="#benefits" className="text-gray-300 hover:text-amber-500 transition-colors" onClick={toggleMenu}>Why Smartleads</a>
              <a href="#contact" className="text-gray-300 hover:text-amber-500 transition-colors" onClick={toggleMenu}>Contact Us</a>
              <button 
                onClick={() => { openForm('Book a Demo'); toggleMenu(); }}
                className="text-amber-500 font-semibold hover:text-amber-400 transition-colors"
              >
                Book a Demo
              </button>
              <button 
                onClick={() => { openForm('Start Free Now'); toggleMenu(); }}
                className="bg-amber-500 text-black px-3 py-1.5 rounded-md font-semibold hover:bg-amber-400 transition-all duration-300 shadow-lg"
              >
                Download for Free
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16">
        <ArrowDown className="absolute bottom-3 w-7 h-7 text-amber-500 animate-bounce" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-amber-900/20 to-black/90 z-10" />
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1628260410227-8a5bf0b4e2be?auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-20 md:pt-8 mt-8 animate-fade-in pb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-loose tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600 drop-shadow-lg pb-5">
            Stop Waiting, Start Finding
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200 font-medium">
            Smartleads: Autopilot Lead Generation
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-6">
            AI-powered local leads for realtors & small businesses, built with industry experts.
          </p>

          {/* Free Trial Offer with FOMO */}
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
                    <span>Access to All Platforms & Search Features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span>Localized Leads in Your Area</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <button 
                  onClick={() => openForm('Download for Free')}
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 mx-auto shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download for Free
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
            <div className="animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Advanced Analytics Dashboard"
                className="rounded-lg shadow-xl mb-6 w-full h-48 object-cover border border-gray-700/50"
              />
              <h3 className="text-xl font-bold mb-3 text-amber-400 drop-shadow-sm">Algorithm-Powered Local Leads</h3>
              <p className="text-gray-300">
                Our AI identifies high-intent leads in your area, ensuring you connect with clients ready to buy or partner.
              </p>
            </div>
            
            <div className="animate-fade-in-up delay-100">
              <img 
                src={autopilotLeads}
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

          <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 rounded-xl p-6 mb-10 backdrop-blur-md border border-gray-700/50">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <style>{`
                  h3 {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                `}</style>
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
                  src={socialMediaIntent}
                  alt="Social Media Intent Search"
                  className="rounded-lg shadow-xl w-full h-64 object-cover border border-gray-700/50"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 rounded-xl p-6 mb-10 backdrop-blur-md border border-gray-700/50">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <style>{`
                  h3 {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                `}</style>
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
                  src={instagramPostInteraction}
                  alt="Ad/Post Interactions Search"
                  className="rounded-lg shadow-xl w-full h-64 object-cover border border-gray-700/50"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 rounded-xl p-6 mb-10 backdrop-blur-md border border-gray-700/50">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <style>{`
                  h3 {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                `}</style>
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
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Business Networking Event"
                  className="rounded-lg shadow-xl w-full h-64 object-cover border border-gray-700/50"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/90 rounded-lg overflow-hidden backdrop-blur-md border border-gray-700/50">
              <img 
                src={aiAssistant}
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
                src={smartConsent}
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

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800" id="contact">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-row justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">Get in Touch</h2>
            <button 
              onClick={() => openForm('Book a Demo')}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Book a Demo
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src={contactUsImage}
                alt="Contact Us"
                className="rounded-lg shadow-xl w-full h-64 object-cover border border-gray-700/50"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <p className="text-gray-300 mb-4">
                <strong>Email:</strong> <a href="mailto:salesfinderai@gmail.com" className="text-amber-500 hover:underline">salesfinderai@gmail.com</a>
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Phone:</strong> <a href="tel:+17785129921" className="text-amber-500 hover:underline">+1 (778) 512-9921</a>
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Location:</strong> Vancouver, British Columbia, Canada
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <Instagram className="w-6 h-6 text-amber-500" />
                <span>Follow our <a href="https://www.instagram.com/salesfinderai/" className="text-amber-500 hover:underline" target="_blank">Instagram</a> for more updates, feature information, and demos!</span>
              </p>
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
              onClick={() => openForm('Book a Demo')}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Book a Demo
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => openForm('Start Free Now')}
              className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500/20 font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <Download size={18} />
              Download for Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-black text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <img src={logoImage} alt="Smartleads Logo" className="w-8 h-8 mb-3" />
              <h3 className="text-white font-semibold mb-2 text-amber-400">Smartleads</h3>
              <p className="text-sm">
                The future of sales. High-intent, local leads for realtors and small businesses.
              </p>
              <div className="flex gap-3 mt-3">
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <Youtube size={20} />
                </a>
                <a href="https://www.instagram.com/salesfinderai/" className="text-gray-400 hover:text-amber-500" target="_blank">
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
                <li><a href="#features" className="hover:text-amber-500">About Smartleads</a></li>
                <li>Blog</li>
                <li>Careers</li>
                <li><a href="#contact" className="hover:text-amber-500">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-1 text-sm">
                <li><a href={privacyPolicy} target="_blank" className="hover:text-amber-500">Privacy Policy</a></li>
                <li><a href={termsOfService} target="_blank" className="hover:text-amber-500">Terms of Service</a></li>
                <li><a href={securityPolicy} target="_blank" className="hover:text-amber-500">Security Policy</a></li>
                <li><a href={softwareLicense} target="_blank" className="hover:text-amber-500">Software License Agreement</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-sm">© 2025 Smartleads by SalesFinderAI. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;