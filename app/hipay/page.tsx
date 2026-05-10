'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  ShieldCheck, 
  Code, 
  TrendingUp, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  Check,
  Zap
} from 'lucide-react';

// --- Sub-components for easy extraction later ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/hipay" className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="bg-blue-600 text-white p-1 rounded-lg">Hi</span>
              <span>Pay</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#solutions" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Solutions</Link>
            <Link href="#developers" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Developers</Link>
            <Link href="#pricing" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Pricing</Link>
            <Link href="#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">About</Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/signin" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Sign In</Link>
            <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm shadow-blue-200">
              Create Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#solutions" className="block px-3 py-2 text-slate-600 hover:text-slate-900 font-medium">Solutions</Link>
            <Link href="#developers" className="block px-3 py-2 text-slate-600 hover:text-slate-900 font-medium">Developers</Link>
            <Link href="#pricing" className="block px-3 py-2 text-slate-600 hover:text-slate-900 font-medium">Pricing</Link>
            <Link href="#about" className="block px-3 py-2 text-slate-600 hover:text-slate-900 font-medium">About</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-slate-100 px-5 flex flex-col gap-2">
            <Link href="/signin" className="text-center text-slate-600 hover:text-slate-900 font-medium py-2 transition-colors">Sign In</Link>
            <Link href="/signup" className="text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm shadow-blue-200">
              Create Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              <Zap size={16} />
              <span>Next-Generation Payment Gateway</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Seamless Payment Processing Across <span className="text-blue-600">Asia</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              Empower your business with multi-currency support, enterprise-grade security, and lightning-fast API integration. Accept payments anywhere in Asia with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                Start Processing Now <ArrowRight size={18} />
              </Link>
              <Link href="#developers" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                Read API Docs
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Check size={16} className="text-emerald-500" /> No Setup Fees
              </div>
              <div className="flex items-center gap-1">
                <Check size={16} className="text-emerald-500" /> PCI DSS Compliant
              </div>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 blur-2xl opacity-70 rounded-3xl -z-10"></div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden p-6 aspect-[4/3] flex flex-col justify-between">
              {/* Mockup Header */}
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Total Volume</p>
                  <p className="text-2xl font-bold text-slate-900">$1,245,800.00</p>
                </div>
                <div className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-xs font-medium">
                  +12.4%
                </div>
              </div>
              {/* Mockup Chart Area */}
              <div className="flex-grow flex items-end gap-2 pt-6">
                <div className="bg-blue-100 h-1/3 w-full rounded-t-md"></div>
                <div className="bg-blue-100 h-2/3 w-full rounded-t-md"></div>
                <div className="bg-blue-200 h-1/2 w-full rounded-t-md"></div>
                <div className="bg-blue-100 h-3/4 w-full rounded-t-md"></div>
                <div className="bg-blue-600 h-full w-full rounded-t-md"></div>
                <div className="bg-blue-200 h-2/3 w-full rounded-t-md"></div>
              </div>
              {/* Mockup Footer */}
              <div className="border-top border-slate-100 pt-4 mt-4 flex justify-between text-sm text-slate-500">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PaymentMethods = () => {
  const methods = [
    'Visa', 'Mastercard', 'Alipay', 'WeChat Pay', 'PromptPay', 'GrabPay', 'UnionPay', 'ShopeePay'
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
          Supported Payment Methods
        </p>
        
        {/* Marquee effect using CSS */}
        <div className="relative">
          <div className="flex space-x-12 animate-marquee items-center justify-around">
            {methods.map((method, index) => (
              <div key={index} className="text-2xl font-bold text-slate-300 hover:text-slate-500 transition-colors cursor-default whitespace-nowrap">
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Globe className="text-blue-600" size={24} />,
      title: 'Border-less Payments',
      description: 'Accept payments in 30+ Asian currencies and settle in your preferred currency with zero hassle.'
    },
    {
      icon: <ShieldCheck className="text-blue-600" size={24} />,
      title: 'Enterprise-grade Security',
      description: 'Advanced fraud detection and full PCI-DSS compliance to keep your transactions safe and secure.'
    },
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: 'Developer-Friendly API',
      description: 'Integrate in minutes with our robust SDKs and well-documented REST APIs designed for developers.'
    },
    {
      icon: <TrendingUp className="text-blue-600" size={24} />,
      title: 'High Conversion Rates',
      description: 'Optimized checkout flows and localized payment methods to reduce cart abandonment.'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Built for Modern Commerce in Asia
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to accept payments, send payouts, and manage your business online across the continent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Developer = () => {
  return (
    <section id="developers" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Terminal size={16} />
              <span>For Developers</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
              Integration so simple, it feels like magic.
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Our developer experience is second to none. With clear documentation, SDKs for every popular language, and a robust sandbox environment, you can go live in a few hours.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-blue-50 text-blue-600 p-1 rounded-full mt-1">
                  <Check size={14} />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Pre-built UI components</p>
                  <p className="text-sm text-slate-500">Drop-in checkouts that handle everything.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-50 text-blue-600 p-1 rounded-full mt-1">
                  <Check size={14} />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Rich Webhooks</p>
                  <p className="text-sm text-slate-500">Get notified of payments, refunds, and more.</p>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                Explore our Documentation <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          {/* Code Mockup */}
          <div className="bg-slate-900 rounded-2xl p-6 shadow-xl relative">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="mt-8 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="text-slate-500 mb-2">{"// Initialize the HiPay JS SDK"}</div>
              <div>
                <span className="text-pink-500">import</span> <span className="text-white">HiPay</span> <span className="text-pink-500">from</span> <span className="text-emerald-400">&apos;@hipay/sdk&apos;</span>;
              </div>
              <div className="text-white mt-4">
                <span className="text-pink-500">const</span> <span className="text-blue-400">hipay</span> = <span className="text-pink-500">new</span> <span className="text-yellow-400">HiPay</span>(<span className="text-emerald-400">&apos;pk_live_... &apos;</span>);
              </div>
              <div className="text-white mt-4">
                <span className="text-pink-500">const</span> <span className="text-blue-400">session</span> = <span className="text-pink-500">await</span> <span className="text-blue-400">hipay</span>.<span className="text-blue-400">checkout</span>.<span className="text-blue-400">create</span>({'{'}
              </div>
              <div className="text-white pl-4">
                <span className="text-slate-400">amount:</span> <span className="text-violet-400">5000</span>, <span className="text-slate-500">{"// in cents"}</span>
              </div>
              <div className="text-white pl-4">
                <span className="text-slate-400">currency:</span> <span className="text-emerald-400">&apos;SGD&apos;</span>,
              </div>
              <div className="text-white pl-4">
                <span className="text-slate-400">methods:</span> [<span className="text-emerald-400">&apos;visa&apos;</span>, <span className="text-emerald-400">&apos;alipay&apos;</span>, <span className="text-emerald-400">&apos;grabpay&apos;</span>],
              </div>
              <div className="text-white pl-4">
                <span className="text-slate-400">successUrl:</span> <span className="text-emerald-400">&apos;https://yoursite.com/success&apos;</span>,
              </div>
              <div className="text-white">{'}'});</div>
              
              <div className="text-white mt-4">
                <span className="text-pink-500">return</span> <span className="text-blue-400">session</span>.<span className="text-blue-400">url</span>;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for Terminal icon since it wasn't listed but fits well
const Terminal = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
);

const FinalCTA = () => {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white blur-3xl rounded-full"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white blur-3xl rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Ready to Grow Your Business in Asia?
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Join thousands of businesses that trust HiPay to handle their payments every day.
        </p>
        <Link href="/signup" className="bg-white hover:bg-slate-50 text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-blue-800 flex items-center justify-center gap-2 inline-flex">
          Create Your Free Account <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/hipay" className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <span className="bg-blue-600 text-white p-1 rounded-lg">Hi</span>
              <span>Pay</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Modern payment infrastructure for global commerce across Asia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5-.72 1.03-1.07 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.41.49-.61 1.11-.6 1.75V22"/><path d="M9 20.9c-5.5 2-5.5-2.5-7-3"/></svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Checkout</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Subscriptions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Fraud Protection</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Global Payments</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Guides</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} HiPay. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page Component ---

export default function HiPayLanding() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Add Custom Styles for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <Navigation />
      <Hero />
      <PaymentMethods />
      <Features />
      <Developer />
      <FinalCTA />
      <Footer />
    </div>
  );
}
