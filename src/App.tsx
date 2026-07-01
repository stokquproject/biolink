import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Moon, Sun, BadgeCheck, ChevronRight, ChevronDown, Search } from 'lucide-react';
import { config } from './config';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});

  const toggleFolder = (folderTitle: string) => {
    setOpenFolders(prev => ({
      ...prev,
      [folderTitle]: !prev[folderTitle]
    }));
  };

  // Initialize theme based on system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Toggle theme class on HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: config.profile.name,
          text: config.profile.bio,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <div className="min-h-screen relative transition-colors duration-500 bg-noise selection:bg-blue-500/30 font-sans">
      
      {/* Fixed Background ambient shapes - Separated to prevent scroll lag and DOM resizing */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-[100px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-400/20 dark:bg-purple-500/10 blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="px-4 py-8 sm:py-12 sm:px-6 lg:px-8 max-w-md mx-auto relative z-10 flex flex-col min-h-screen">
        {/* Controls */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Share"
          >
            <Share2 size={20} />
          </button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center flex-1 w-full"
        >
          {/* Profile Section & Search */}
          <motion.div variants={itemVariants} className="mb-8 w-full">
            <div className="relative inline-block mb-4 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              <img
                src={config.profile.avatarUrl}
                alt={config.profile.name}
                className="relative w-24 h-24 rounded-full object-cover border-[3px] border-white dark:border-white/10 shadow-xl"
              />
            </div>
            <div className="flex items-center justify-center gap-1.5 mb-2">
              <h1 className="text-2xl font-bold tracking-tight font-heading text-slate-900 dark:text-white">
                {config.profile.name}
              </h1>
              {config.profile.verified && (
                <BadgeCheck className="w-6 h-6 text-blue-500 fill-blue-50 dark:fill-blue-900/20" />
              )}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mx-auto leading-relaxed mb-6">
              {config.profile.bio}
            </p>

            {/* Search Box */}
            <div className="relative max-w-sm mx-auto group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search links..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200/50 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-800 dark:text-slate-200 placeholder-slate-400/70 transition-all shadow-sm"
              />
            </div>
          </motion.div>

          {/* Links Section */}
          <div className="w-full space-y-8 mb-10">
            {config.linkGroups.map((group, groupIndex) => {
              // Filter links in this group
              const filteredLinks = group.links.filter(link => {
                const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase());
                const subLinksMatch = link.subLinks?.some(sub => sub.title.toLowerCase().includes(searchQuery.toLowerCase()));
                return matchesSearch || subLinksMatch;
              });

              if (filteredLinks.length === 0) return null;

              return (
                <motion.div key={groupIndex} variants={itemVariants} className="w-full">
                  {group.title && (
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-px bg-slate-200/50 dark:bg-white/10 flex-1"></div>
                      <h2 className="text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-400">
                        {group.title}
                      </h2>
                      <div className="h-px bg-slate-200/50 dark:bg-white/10 flex-1"></div>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    {filteredLinks.map((link, linkIndex) => {
                      const Icon = link.icon;
                      const isFolder = !!link.subLinks;
                      const isOpen = openFolders[link.title];

                      if (isFolder) {
                        return (
                          <div key={linkIndex} className="w-full">
                            <motion.button
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              onClick={() => toggleFolder(link.title)}
                              className="flex items-center w-full p-4 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)] hover:shadow-lg dark:hover:bg-white/10 transition-all group overflow-hidden relative"
                            >
                              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent skew-x-12"></div>
                              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-100/80 dark:bg-white/10 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors z-10">
                                {Icon && <Icon size={20} strokeWidth={2.5} />}
                              </div>
                              <span className="flex-1 font-semibold font-heading text-slate-800 dark:text-slate-100 ml-4 text-left z-10">
                                {link.title}
                              </span>
                              <div className="text-slate-400 group-hover:text-blue-500 transition-all z-10 duration-300">
                                <ChevronDown size={20} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                              </div>
                            </motion.button>
                            
                            {/* Accordion Sublinks */}
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                                  className="overflow-hidden"
                                >
                                  <div className="pt-3 pb-1 px-2 space-y-2">
                                    {link.subLinks?.filter(sub => sub.title.toLowerCase().includes(searchQuery.toLowerCase()) || link.title.toLowerCase().includes(searchQuery.toLowerCase())).map((subLink, subIndex) => {
                                      const SubIcon = subLink.icon;
                                      return (
                                        <motion.a
                                          key={subIndex}
                                          whileHover={{ scale: 1.01 }}
                                          whileTap={{ scale: 0.99 }}
                                          href={subLink.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center w-full p-3 pl-4 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-all group relative overflow-hidden"
                                        >
                                          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-12"></div>
                                          {SubIcon && (
                                            <div className="mr-3 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors z-10">
                                              <SubIcon size={18} strokeWidth={2} />
                                            </div>
                                          )}
                                          <span className="flex-1 text-sm font-medium text-slate-700 dark:text-slate-300 z-10">
                                            {subLink.title}
                                          </span>
                                        </motion.a>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      }

                      return (
                        <motion.a
                          key={linkIndex}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full p-4 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)] hover:shadow-lg dark:hover:bg-white/10 transition-all group overflow-hidden relative"
                        >
                          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent skew-x-12"></div>
                          
                          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-100/80 dark:bg-white/10 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors z-10">
                            {Icon && <Icon size={20} strokeWidth={2.5} />}
                          </div>
                          <span className="flex-1 font-semibold font-heading text-slate-800 dark:text-slate-100 ml-4 text-left z-10">
                            {link.title}
                          </span>
                          <div className="text-slate-400 group-hover:text-blue-500 transition-colors z-10 group-hover:translate-x-1 duration-300">
                            <ChevronRight size={20} />
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Socials Section */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {config.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="p-3 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm hover:shadow"
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-auto pt-12 pb-4 text-xs font-medium text-slate-400/80 dark:text-slate-400">
            <p>Powered by Open Source</p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
