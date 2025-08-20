function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AR</span>
              </div>
              <span className="font-bold text-xl text-[var(--text-primary)]">Abdur Rahman</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Contact</button>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="icon-menu text-xl text-[var(--text-primary)]"></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[var(--border-color)]">
              <nav className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-left py-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-left py-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="text-left py-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Contact</button>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}