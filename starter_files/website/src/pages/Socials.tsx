import { motion } from 'framer-motion';

export const Socials = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl"
          >
            Social Media Kit
          </motion.h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to spread the word about TechStack Conference 2026.
          </p>
        </div>

        {/* Brand Assets Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          <div className="p-8 space-y-8">
            
            {/* Logo Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                Official Logo
              </h2>
              <div className="flex justify-center p-8 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <img src="/logo.svg" alt="TechStack Conference Logo" className="w-64 h-64" />
              </div>
              <div className="flex justify-center">
                <a 
                  href="/logo.svg" 
                  download 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Download Logo (SVG)
                </a>
              </div>
            </div>

            {/* Colors Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                Brand Colors
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Primary Color */}
                <div className="space-y-2">
                  <div className="h-24 rounded-lg shadow-inner flex items-center justify-center" style={{ backgroundColor: '#6366f1' }}>
                    <span className="text-white font-mono font-bold text-lg drop-shadow-md">#6366f1</span>
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Primary Indigo</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Main Brand Color</span>
                  </div>
                </div>

                {/* Secondary Color */}
                <div className="space-y-2">
                  <div className="h-24 rounded-lg shadow-inner flex items-center justify-center" style={{ backgroundColor: '#fb7185' }}>
                    <span className="text-white font-mono font-bold text-lg drop-shadow-md">#fb7185</span>
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Secondary Rose</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Accent Color</span>
                  </div>
                </div>

                 {/* Dark Teal */}
                 <div className="space-y-2">
                  <div className="h-24 rounded-lg shadow-inner flex items-center justify-center" style={{ backgroundColor: '#0d2c2d' }}>
                    <span className="text-white font-mono font-bold text-lg drop-shadow-md">#0d2c2d</span>
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Dark Teal</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Deep Backgrounds</span>
                  </div>
                </div>

                 {/* Dark Blue */}
                 <div className="space-y-2">
                  <div className="h-24 rounded-lg shadow-inner flex items-center justify-center" style={{ backgroundColor: '#1d2f58' }}>
                    <span className="text-white font-mono font-bold text-lg drop-shadow-md">#1d2f58</span>
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Navy Blue</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Structural Elements</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Typography Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                Typography
              </h2>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <p className="text-xl text-slate-900 dark:text-white font-bold mb-2">Inter</p>
                <p className="text-slate-600 dark:text-slate-400">
                  We use Inter for all headings and body text to maintain a clean, modern, and readable aesthetic across all our digital properties.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-normal">Regular 400</span>
                  <span className="font-medium">Medium 500</span>
                  <span className="font-semibold">SemiBold 600</span>
                  <span className="font-bold">Bold 700</span>
                </div>
              </div>
            </div>

            {/* Social Tag Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                Social Media
              </h2>
              <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Official Tag</h3>
                  <p className="text-slate-600 dark:text-slate-400">Use this handle when mentioning us on X, Instagram, or LinkedIn.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 px-4 py-2 rounded-md border border-slate-200 dark:border-slate-600 shadow-sm">
                  <span className="text-xl font-mono font-bold text-primary-600 dark:text-primary-400">@techstackconf2026</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};
