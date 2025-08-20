function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-primary)] text-white section-padding" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AR</span>
                </div>
                <span className="font-bold text-xl">Abdur Rahman</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Creative web developer and designer delivering quality projects with client satisfaction guaranteed.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Responsive Website Development</li>
                <li>PSD Template Design</li>
                <li>Document Editing</li>
                <li>Data Analysis</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>abdurrahmanpalashbd@gmail.com</p>
                <p>+8801773832609</p>
                <p>Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2025 Md. Abdur Rahman. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open('https://github.com/abdurrahman', '_blank')}
                className="w-10 h-10 bg-gray-700 hover:bg-[var(--primary-color)] rounded-lg flex items-center justify-center cursor-pointer transition-colors"
              >
                <div className="icon-github text-lg"></div>
              </button>
              <button 
                onClick={() => window.open('https://linkedin.com/in/abdurrahman', '_blank')}
                className="w-10 h-10 bg-gray-700 hover:bg-[var(--primary-color)] rounded-lg flex items-center justify-center cursor-pointer transition-colors"
              >
                <div className="icon-linkedin text-lg"></div>
              </button>
              <button 
                onClick={() => window.open('mailto:abdurrahmanpalashbd@gmail.com')}
                className="w-10 h-10 bg-gray-700 hover:bg-[var(--primary-color)] rounded-lg flex items-center justify-center cursor-pointer transition-colors"
              >
                <div className="icon-mail text-lg"></div>
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}