import { useState } from 'react';
import { Code, Terminal, Play, Zap, Users, Shield, Download, ChevronRight, ExternalLink, Menu, X , Check } from 'lucide-react';
import santanu from "../assets/coders/santanu.jpg"
import aniket from "../assets/coders/aniket.jpg"
import sayani from "../assets/coders/sayani.jpg"
import soham from "../assets/coders/soham.jpg"
import suman from "../assets/coders/suman.jpg"

export default function CompilerLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SAS-Coding</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="/login" className="text-gray-600 hover:text-indigo-600 transition-colors">Join Us</a>
              <a href="/compiler" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Try it Free
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-indigo-600"  
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-4 space-y-1">
              <a href="#features" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50">
                Features
              </a>
              <a href="#pricing" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50">
                Pricing
              </a>
              <a href="#docs" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50">
                Documentation
              </a>
              <div className="pl-3 pr-4 py-2">
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Try it Free
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Compile Code,</span>
                  <span className="block text-indigo-200">Anywhere, Anytime</span>
                </h1>
                <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  The most powerful online compiler for developers. Run, share, and collaborate on your code instantly from any device.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/questions"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/compiler"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-white text-white hover:bg-indigo-500 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-indigo-900 sm:h-72 md:h-96 lg:w-full lg:h-full p-8 flex items-center justify-center">
            <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-md p-4 text-left">
              <div className="flex mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-green-400 font-mono text-sm overflow-hidden">
                <code>
                  {`// Hello, Code-Craft Compile!
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div id="features" className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Features</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Everything you need to code with ease
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Our online Node.js compiler provides all the tools you need to write, run, and debug your code effortlessly.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-md bg-indigo-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-500">
                  Our optimized runtime environment ensures your code runs instantly. Focus on coding, not waiting.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-md bg-indigo-100 flex items-center justify-center mb-4">
                  <Terminal className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2"> JS, Python, C++ Support</h3>
                <p className="text-gray-500">
                  Access the complete js, python, c++ standard and ready to use.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-md bg-indigo-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-500">
                  Share your code with teammates in real-time. Perfect for pair programming and code reviews.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-md bg-indigo-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Secure Environment</h3>
                <p className="text-gray-500">
                  Your code runs in isolated containers with enterprise-grade security to protect your intellectual property.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-md bg-indigo-100 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Export & Import</h3>
                <p className="text-gray-500">
                  Easily export your projects to your local machine or import existing code from GitHub repositories.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-md bg-indigo-100 flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Instant Preview</h3>
                <p className="text-gray-500">
                  See your application running in real-time with our integrated preview window. Perfect for web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Plans for teams of all sizes
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Choose the plan that fits your needs. All plans include our core features.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {/* Free Plan */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transform transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Free</h3>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">$0</p>
                <p className="mt-1 text-sm text-gray-500">per month</p>
                <p className="mt-4 text-sm text-gray-500">Perfect for hobby projects and learning.</p>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">5 projects</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Basic Node.js environment</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Community support</p>
                  </li>
                </ul>
              </div>

              <div className="px-6 py-4 bg-gray-50">
                <a
                  href="#"
                  className="block w-full bg-indigo-600 border border-transparent rounded-md py-2 text-sm font-medium text-white text-center hover:bg-indigo-700"
                >
                  Start for free
                </a>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-lg border-2 border-indigo-600 overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-xl relative">
              <div className="absolute top-0 inset-x-0">
                <div className="h-1 bg-indigo-600"></div>
              </div>
              <div className="absolute top-0 right-0 mt-3 mr-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  Popular
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Pro</h3>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">$19</p>
                <p className="mt-1 text-sm text-gray-500">per month</p>
                <p className="mt-4 text-sm text-gray-500">For professionals and small teams.</p>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Unlimited projects</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Advanced Node.js environment</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Team collaboration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Priority support</p>
                  </li>
                </ul>
              </div>

              <div className="px-6 py-4 bg-gray-50">
                <a
                  href="#"
                  className="block w-full bg-indigo-600 border border-transparent rounded-md py-2 text-sm font-medium text-white text-center hover:bg-indigo-700"
                >
                  Start free trial
                </a>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transform transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Enterprise</h3>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">$49</p>
                <p className="mt-1 text-sm text-gray-500">per user / month</p>
                <p className="mt-4 text-sm text-gray-500">For large teams and organizations.</p>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Everything in Pro</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Custom environment configuration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">SSO and advanced security</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Dedicated support manager</p>
                  </li>
                </ul>
              </div>

              <div className="px-6 py-4 bg-gray-50">
                <a
                  href="#"
                  className="block w-full bg-gray-800 border border-transparent rounded-md py-2 text-sm font-medium text-white text-center hover:bg-gray-700"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Testimonials</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Loved by developers
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              See what our users are saying about NodeCompile.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-200">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">Frontend Developer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "NodeCompile has completely changed how I prototype my Node.js applications. The speed and reliability are unmatched."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-green-200"></div>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">Michael Chen</h3>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "As a team lead, the collaboration features have been invaluable. We can review code together no matter where team members are located."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-purple-200"></div>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">Emily Rodriguez</h3>
                  <p className="text-sm text-gray-500">CS Student</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "I can work on my programming assignments from any device. The interface is intuitive and the compiler is extremely fast."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-purple-200"></div>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">Emily Rodriguez</h3>
                  <p className="text-sm text-gray-500">CS Student</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "I can work on my programming assignments from any device. The interface is intuitive and the compiler is extremely fast."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-purple-200"></div>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">Emily Rodriguez</h3>
                  <p className="text-sm text-gray-500">CS Student</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "I can work on my programming assignments from any device. The interface is intuitive and the compiler is extremely fast."
              </p>
            </div>
          </div>
        </div>
      </div> */}

    {/* Development Team */}
    {/* <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Team</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Meet the Developers
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              The team behind NodeCompile.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <div className="flex-shrink-0 mx-auto">
                <div className="h-24 w-24 rounded-full bg-indigo-200 mx-auto">
                  <img src={santanu} alt="Developer" className="rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-medium text-gray-900">Santanu Raj</h3>
                <p className="text-sm text-gray-500">Fullstack Developer</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <div className="flex-shrink-0 mx-auto">
                <div className="h-24 w-24 rounded-full bg-green-200 mx-auto">
                  <img src={aniket} alt="Developer" className="rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-medium text-gray-900">Aniket Dey</h3>
                <p className="text-sm text-gray-500">Frontend Developer</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <div className="flex-shrink-0 mx-auto">
                <div className="h-24 w-24 rounded-full bg-purple-200 mx-auto">
                  <img src={soham} alt="Developer" className="rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-medium text-gray-900">Soham Goswami</h3>
                <p className="text-sm text-gray-500">Backend Developer</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <div className="flex-shrink-0 mx-auto">
                <div className="h-24 w-24 rounded-full bg-yellow-200 mx-auto">
                  <img src={sayani} alt="Developer" className="rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-medium text-gray-900">Sayani Ghosh</h3>
                <p className="text-sm text-gray-500">Frontend Developer</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <div className="flex-shrink-0 mx-auto">
                <div className="h-24 w-24 rounded-full bg-red-200 mx-auto">
                  <img src={suman} alt="Developer" className="rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-medium text-gray-900">Suman Santra</h3>
                <p className="text-sm text-gray-500">UI/UX Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/* Development Team */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Team</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Meet the Developers
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              The team behind NodeCompile.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <div className="flex-shrink-0 mx-auto">
                <div className="h-24 w-24 rounded-full bg-indigo-200 mx-auto">
                  <img src={santanu} alt="Developer" className="rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-medium text-gray-900">Santanu Raj</h3>
                <p className="text-sm text-gray-500">Lead Developer</p>
              </div>
              <div className="mt-4 flex justify-center space-x-3">
                <a href="https://github.com/santanu0101" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/santanu-raj/" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <div className="flex-shrink-0 mx-auto">
                <div className="h-24 w-24 rounded-full bg-green-200 mx-auto">
                  <img src={aniket} alt="Developer" className="rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-medium text-gray-900">Aniket Dey</h3>
                <p className="text-sm text-gray-500">Frontend Developer</p>
              </div>
              <div className="mt-4 flex justify-center space-x-3">
                <a href="https://github.com/AniketDey06" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/aniket-dey-/" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <div className="flex-shrink-0 mx-auto">
                <div className="h-24 w-24 rounded-full bg-purple-200 mx-auto">
                  <img src={soham} alt="Developer" className="rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-medium text-gray-900">Soham Goswami</h3>
                <p className="text-sm text-gray-500">Full Stack Developer</p>
              </div>
              <div className="mt-4 flex justify-center space-x-3">
                <a href="https://github.com/GoswamiSoham" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/goswamisoham/" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <div className="flex-shrink-0 mx-auto">
                <div className="h-24 w-24 rounded-full bg-yellow-200 mx-auto">
                  <img src={sayani} alt="Developer" className="rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-medium text-gray-900">Sayani Ghosh</h3>
                <p className="text-sm text-gray-500">Forntend Developer</p>
              </div>
              <div className="mt-4 flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sayani-ghosh-47176421b" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center">
              <div className="flex-shrink-0 mx-auto">
                <div className="h-24 w-24 rounded-full bg-red-200 mx-auto">
                  <img src={suman} alt="Developer" className="rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-medium text-gray-900">Suman Santra</h3>
                <p className="text-sm text-gray-500">UI/UX Developer</p>
              </div>
              <div className="mt-4 flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* CTA */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-200">Start using NodeCompile today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/login"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Features</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Pricing</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Updates</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Beta Program</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Documentation</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Guides</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">API Status</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Contact Us</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">About</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Careers</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Press</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Terms</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Cookie Policy</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Licenses</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
            <div className="flex items-center">
              <Code className="h-6 w-6 text-indigo-400" />
              <span className="ml-2 text-lg font-medium text-white">NodeCompile</span>
            </div>
            <p className="mt-4 md:mt-0 text-base text-gray-400">
              &copy; 2025 NodeCompile, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}