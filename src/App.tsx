import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home'; 
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contacts';
import { Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black'}`}>
      
      {/* Floating Theme Toggle */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all active:scale-90 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700"
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebarOpen} isDarkMode={isDarkMode} />
      
      <main className={`pt-20 lg:pt-0 lg:ml-64 p-6 lg:p-12 max-w-7xl mx-auto transition-all`}>
        <Home isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
    </div>
  );
};

export default App;