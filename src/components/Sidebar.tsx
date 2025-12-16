import React from 'react';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  isDarkMode: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setOpen, isDarkMode }) => {
  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <header>
      {/* MOBILE BAR (Top) */}
      <div className={`lg:hidden fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b transition-colors duration-500 ${
        isDarkMode ? 'bg-[#0f172a]/80 border-white/10 text-white' : 'bg-white/80 border-black/10 text-black'
      } backdrop-blur-md`}>
        <h2 className="text-xl font-black">O. BANJO</h2>
        <button onClick={() => setOpen(!isOpen)} className="p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN (The Glass Effect) */}
      <div 
        className={`lg:hidden fixed left-0 w-full z-40 transition-all duration-500 ease-in-out border-b shadow-2xl ${
          isOpen ? 'top-[65px] opacity-100' : '-top-full opacity-0'
        } ${
          isDarkMode 
            ? 'bg-slate-900/60 border-white/10 text-white' 
            : 'bg-white/60 border-black/10 text-black'
        } backdrop-blur-xl`} // backdrop-blur-xl creates the frosted glass look
      >
        <nav className="flex flex-col p-8 gap-6">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setOpen(false)}
              className="font-black text-xl tracking-tight hover:translate-x-2 transition-transform"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* DESKTOP SIDEBAR */}
      <nav className={`hidden lg:flex fixed top-0 left-0 h-full w-64 border-r transition-colors duration-500 z-40 p-8 flex-col ${
        isDarkMode ? 'bg-slate-900 border-white/10' : 'bg-gray-50 border-black/10'
      }`}>
        <h2 className={`text-2xl font-black mb-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>O. BANJO</h2>
        <div className="flex flex-col gap-8 font-bold">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`transition-all hover:translate-x-2 ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};