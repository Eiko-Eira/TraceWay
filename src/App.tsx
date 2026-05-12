import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  Layers,
  LineChart,
  ShieldCheck,
  Clock,
} from 'lucide-react';

const TracewayLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 26 22 L 74 22 L 74 30 L 53.5 30 L 53.5 46 L 46.5 46 L 46.5 30 L 26 30 Z" />
    <path d="M 17 33 L 26 33 L 41 62 L 46.5 49 L 53.5 49 L 59 62 L 74 33 L 83 33 L 63 74 L 50 57 L 37 74 Z" />
  </svg>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'What We Do', href: '#features' },
    { name: 'Products', href: '#products' },
    { name: 'Funding', href: '#funding' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-green-100 selection:text-green-900 flex flex-col">
      {/* Navigation */}
      <nav className="h-20 border-b border-slate-200 bg-white sticky top-0 z-50 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer text-[#013B1F]" onClick={() => window.scrollTo(0, 0)}>
              <TracewayLogo className="w-12 h-12" />
              <span className="font-bold text-2xl tracking-tight text-green-800 italic uppercase">Traceway</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-green-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wellfound.com/company/traceway"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition-colors font-bold"
              >
                Join Us
              </a>
              <a
                href="#contact"
                className="px-5 py-2 bg-green-700 text-white rounded-full text-sm font-semibold hover:bg-green-800 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-500 hover:text-slate-900 p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-slate-200"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-green-700 hover:bg-slate-50 rounded-md"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wellfound.com/company/traceway"
                  onClick={() => setIsMobileMenuOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-bold text-green-700 hover:bg-slate-50 rounded-md"
                >
                  Join Us
                </a>
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-3 py-2 text-base font-medium bg-green-700 text-white hover:bg-green-800 rounded-md shadow-sm"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative shrink-0 bg-green-50 pt-24 pb-32 lg:pt-36 lg:pb-40 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider rounded-sm mb-4">
                Electronics Division
              </div>
              <h1 className="text-5xl lg:text-7xl font-light text-slate-900 mb-6 leading-tight">
                Designing Electronics For <span className="font-bold text-green-700 italic">Hobbyist</span>.
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Our mission is to design and prototype our Linux based watches for hobbyist in mind.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2 rounded bg-green-700 text-white font-bold hover:bg-green-800 transition-colors text-sm"
                >
                  Start the conversation <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-5 py-2 rounded bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors text-sm"
                >
                  Discover what we do
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Subtle background decoration */}
          <div className="hidden" />
        </section>

        {/* What We Do Section */}
        <section id="features" className="py-24 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="mb-16">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">What We Do</h2>
              <h3 className="text-3xl font-light text-slate-900 mb-4 items-center">Engineering Excellence</h3>
              <p className="text-slate-600 text-lg max-w-2xl">We maintain rigorous professional standards across our entire development lifecycle, ensuring our open-source hardware and software are built to industrial quality.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Layers,
                  title: 'Advanced PCB Design',
                  description: 'Utilizing industry-standard EDA tools to engineer compact, multi-layer printed circuit boards optimized for wearable form factors.'
                },
                {
                  icon: ShieldCheck,
                  title: 'Embedded Linux',
                  description: 'Deep expertise in porting and optimizing Linux kernels for constrained, low-power microprocessors.'
                },
                {
                  icon: LineChart,
                  title: 'Quality & Testing',
                  description: 'Rigorous prototyping and quality assurance pipelines, ensuring RoHS compliance and robust manufacturing yields.'
                },
                {
                  icon: Layers,
                  title: 'Open Source Hardware',
                  description: 'Dedicated to fostering open innovation, we design our schematics and software to be accessible and modifiable by the community.'
                },
                {
                  icon: Clock,
                  title: 'Agile Prototyping',
                  description: 'Rapid, iterative development from schematic capture to 3D-printed enclosures and functional hardware prototypes.'
                }
              ].map((feature, i) => (
                <div key={i} className="p-8 border border-slate-200 bg-white">
                  <div className="w-12 h-12 bg-green-50 rounded-md flex items-center justify-center mb-6 text-green-700">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-3">{feature.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Products</h2>
              <h3 className="text-3xl font-light text-slate-900 mb-8">Hardware Prototypes</h3>
              
              <div className="p-2 border border-slate-200 bg-slate-50 relative aspect-video flex items-center justify-center overflow-hidden group cursor-pointer rounded flex flex-col gap-4 shadow-inner">
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 via-slate-50 to-slate-50 transition-colors group-hover:bg-slate-200 z-0 opacity-50 duration-500"></div>
                 <Layers className="w-16 h-16 text-slate-400 group-hover:scale-110 transition-transform duration-500 z-10" />
                 <div className="z-10 text-center">
                    <h4 className="font-bold text-slate-800 mb-1">Interactive PCB View</h4>
                    <p className="text-sm text-slate-500">3D Demo Coming Soon</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funding Section */}
        <section id="funding" className="py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Our Funding</h2>
              <h3 className="text-3xl font-light text-slate-900 mb-6">Bootstrapped and Community Supported</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We are building Traceway through our own investments and the support of the hobbyist community.
              </p>
              
              <div className="border-t border-slate-200 pt-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">$2K</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Capital Raised</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="mb-16">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Leadership Team</h2>
              <h3 className="text-3xl font-light text-slate-900 mb-4">The minds behind Traceway</h3>
              <p className="text-slate-600 text-lg">A multidisciplinary team of engineers, designers, and strategists.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group p-6 border border-slate-200 flex items-center gap-4 hover:border-green-300 transition-colors">
                <div className="w-16 h-16 bg-slate-100 rounded-full overflow-hidden shrink-0 border border-slate-200 flex items-center justify-center">
                  <img src="/avatar.jpg" alt="Cambrein Henderson" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; if(e.currentTarget.parentElement) { e.currentTarget.parentElement.innerHTML = '<span class="text-slate-400 font-bold">CH</span>'; } }} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Cambrein Henderson</h4>
                  <p className="text-xs text-slate-500 italic mt-1">Founder / Embedded Systems Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Contact</h2>
              <h3 className="text-3xl font-light text-slate-900 mb-6">Let's build together</h3>
              <p className="text-slate-600 text-lg mb-10">
                Whether you're interested in our upcoming products, looking to partner, or just want to learn more about our approach, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="mb-6">
                  <div className="text-sm font-bold text-green-800 mb-1">founder@traceway.org</div>
                  <div className="text-sm text-slate-500 mb-2">(252) 248-1113</div>
                  <div className="text-sm text-slate-500 font-medium">Oklahoma City, OK</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (Links Section) */}
      <footer className="bg-white border-t border-slate-200 h-16 flex items-center justify-between shrink-0 px-4 sm:px-6 lg:px-10">
        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold hover:text-slate-600 transition-colors">© {new Date().getFullYear()} Traceway. All Rights Reserved.</div>
        <div className="hidden md:flex gap-6 text-[10px] text-slate-400 uppercase font-bold">
          <span className="hover:text-green-700 transition-colors cursor-default">Oklahoma City, OK</span>
        </div>
      </footer>
    </div>
  );
}
