import React from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

// 1. Define an explicit interface for the props
interface ContactProps {
  isDarkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  
  const handleResumeClick = () => {
    // Ensure the path here matches exactly what is in your public folder
    const resumePath = '/OLUWADAMILOLABANJOCV.pdf';

    // 1. Open the PDF in a new tab for viewing
    window.open(resumePath, '_blank');

    // 2. Programmatically trigger the download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Oluwadamilola_Banjo_Resume.pdf'; // Name for the saved file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20">
      <div className={`p-12 lg:p-20 rounded-[3rem] text-center border transition-all duration-500 ${
        isDarkMode 
        ? 'bg-blue-600/10 border-white/10 text-white' 
        : 'bg-blue-50 border-blue-100 text-black'
      }`}>
        <h2 className="text-4xl font-black mb-6">Let's Work Together</h2>
        
        <div className="flex justify-center gap-8 mb-12">
          {/* Email and Social Links */}
          <a href="mailto:banjooluwadamilola.ng@gmail.com" className="hover:text-blue-500 transition-colors">
            <Mail size={28} />
          </a>
          <a href="https://github.com/damiyyo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <Github size={28} />
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            <Linkedin size={28} />
          </a>
        </div>

        {/* The Action Button */}
        <button 
          type="button"
          onClick={handleResumeClick}
          className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/30 active:scale-95"
        >
          <Download className="mr-3" size={22} /> View & Download Resume
        </button>
      </div>
    </section>
  );
};