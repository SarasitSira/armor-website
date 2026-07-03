import React, { useState } from 'react';
import { 
  Activity, 
  Factory, 
  Package, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

import bexoImage from './assets/bexo-suit.jpg';

// Custom Logo Component exactly matching the provided geometric footprint
const ArmorLogo = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 264.58 264.58" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="matrix(1.0500572,0,0,1.0500572,132.28395,-1055.7746)">
      {/* Gray 'A' - Legs extended to true bottom bounds */}
      <path 
        d="M -83.96,1205.05 L 0,1040.27 L 83.96,1205.05" 
        className="stroke-slate-600"
        strokeWidth="25.735"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />
      {/* Orange 'V' */}
      <path 
        d="M -83.95,1149.69 L 0,1233.64 L 83.95,1149.69" 
        className="stroke-orange-500"
        strokeWidth="24.47"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />
    </g>
  </svg>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Import Orbitron Font from Google Fonts */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&display=swap');`}
      </style>

      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div href="#" className="flex items-center gap-3">
              <ArmorLogo className="h-10 w-10" />
              <span 
                className="text-2xl font-extrabold text-white tracking-widest"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                ARMOR
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#industries" className="text-slate-300 hover:text-white transition-colors">Industries</a>
              <a href="#product" className="text-slate-300 hover:text-white transition-colors">The Bexo Suit</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">Our Team</a>
              <a href="mailto:sarasit.sira@armor-exo.com?subject=Request a Demo" className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-orange-500/30">
                Request Demo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#industries" className="block px-3 py-2 text-slate-300 hover:text-white font-medium">Industries</a>
              <a href="#product" className="block px-3 py-2 text-slate-300 hover:text-white font-medium">The Bexo Suit</a>
              <a href="#about" className="block px-3 py-2 text-slate-300 hover:text-white font-medium">Our Team</a>
              <a href="mailto:sarasit.sira@armor-exo.com?subject=Request a Demo" className="w-full text-left bg-orange-600 text-white px-3 py-2 rounded-md font-medium mt-4 hover:bg-orange-500 transition-colors">
                Request Demo
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-slate-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-orange-400 font-medium text-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
            Introducing Bexo: The Future of Occupational Ergonomics
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8">
            Protect Your Workforce. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Empower Their Performance.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
            ARMOR develops lightweight, wearable back exosuits that reduce lower back muscle activation by 40-50% per lift cycle on average - protecting workers, slashing injury liability costs, and improve productivity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#product"  className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2">
              Discover Bexo <ArrowRight className="h-5 w-5" />
            </a>
            {/* <button className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
              View Safety Data
            </button> */}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">40-50%</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Strain Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">25+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Years Expertise Combined</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">Two</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Configurations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">Zero</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Workflow Changes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Industries Grid */}
      <div id="industries" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-orange-600 font-semibold tracking-wide uppercase mb-3">Industries We Serve</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Addressing a $10B+ Occupational Challenge</h3>
            <p className="text-lg text-slate-600">
              Cumulative musculoskeletal load is a primary driver of occupational injury. Our modular platform serves both cost-sensitive and performance-driven buyers across demanding sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Healthcare */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="h-14 w-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <Activity className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Nursing & Rehab</h4>
              <p className="text-slate-600 mb-6 flex-grow">
                Patient transfers expose staff to repeated awkward-posture loading. Bexo reduces cumulative load over a shift, sustaining the high quality of care your patients deserve.
              </p>
              {/* <a href="#" className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                Read clinical use case <ChevronRight className="h-4 w-4" />
              </a> */}
            </div>

            {/* Manufacturing */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="h-14 w-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <Factory className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Manufacturing & Assembly</h4>
              <p className="text-slate-600 mb-6 flex-grow">
                Every incident costs $50B annually in both direct and indirect costs. Bexo kicks in with extra assistance precisely when the back is most at risk, ensuring consistent output and fewer errors.
              </p>
              {/* <a href="#" className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                Read factory use case <ChevronRight className="h-4 w-4" />
              </a> */}
            </div>

            {/* 3PL */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="h-14 w-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <Package className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">3PL & Logistics</h4>
              <p className="text-slate-600 mb-6 flex-grow">
                3PL operators can dramatically reduce lower-back injury risk across long shifts - without needing to invest in costly warehouse automation or workflow redesigns.
              </p>
              {/* <a href="#" className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                Read warehouse use case <ChevronRight className="h-4 w-4" />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* The Product Info Section */}
      <div id="product" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Meet Bexo. <br/> <span className="text-2xl font-bold text-slate-500 mb-6 italic">Safety Engineered into Every Movement </span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Developed in collaboration with Georgia Tech's EPIC Lab and a team boasting 25+ years in exoskeleton research, ARMOR's Bexo is available in both passive and hybrid configurations. 
              </p>
              
              <div className="space-y-4">
                {[
                  "Ergonomic Integration: Low profile, lightweight, wearable like a vest.",
                  "Zero Restrictions: Designed with minimal interference to natural movement.",
                  "Dynamic Support: Hybrid actuation provides support exactly when needed.",
                  "Scalable Integration: Seamless path from initial pilot to full workforce."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-orange-100 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
              {/* Note: This image is a placeholder. You'll want to swap this with a photo of the actual Bexo suit on a worker. */}
              <img 
                src={bexoImage} 
                alt="Passive_Bexo" 
                className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover grayscale-[20%]"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Activity className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Proven Results</div>
                  <div className="text-xs text-orange-600 font-medium">Averaging 40-50% reduction for Hybrid Configuration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your workforce?</h2>
          <p className="text-xl text-slate-400 mb-10">
            Bring injury prevention within reach. Contact our deployment team to discuss bringing Bexo to your facility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:sarasit.sira@armor-exo.com?subject=Request a Demo" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-orange-500/25">
              Request a Demo
            </a>
            {/* <button className="bg-transparent hover:bg-slate-800 text-white border border-slate-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Speak to an Ergonomist
            </button> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <ArmorLogo className="h-8 w-8" />
                <span 
                  className="text-xl font-extrabold text-white tracking-widest"
                  style={{ fontFamily: '"Orbitron", sans-serif' }}
                >
                  ARMOR
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                Safety Engineered into Every Movement
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Bexo Passive</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Bexo Hybrid</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Fleet Management</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Ergonomic Data</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                {/* <li><a href="#" className="hover:text-orange-400 transition-colors">Research & Data</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li> */}
                <li><a href="mailto:sarasit.sira@armor-exo.com" className="hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://www.linkedin.com/company/armor-exo" className="hover:text-orange-400 transition-colors">LinkedIn</a></li>
                <li><a  className="hover:text-orange-400 transition-colors">Media Inquiries</a></li>
                <li><a href="mailto:sarasit.sira@armor-exo.com" className="hover:text-orange-400 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &#169; {new Date().getFullYear()} <span style={{ fontFamily: '"Orbitron", sans-serif' }} className="font-bold">ARMOR</span> All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-slate-500">
              {/* <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}