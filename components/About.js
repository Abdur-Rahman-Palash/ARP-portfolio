function About() {
  try {
    return (
      <section id="about" className="section-padding bg-white" data-name="about" data-file="components/About.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">About Me</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Learn more about my background, experience, and passion for web development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Professional Summary</h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Creative and detail-oriented professional with expertise in static responsive website development 
                using HTML, CSS, and JavaScript. I specialize in PSD template creation and editing, document editing 
                (PDF, JPG, PNG, PSD), and data analysis at a medium level.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
                    <div className="icon-check text-sm text-white"></div>
                  </div>
                  <span className="text-[var(--text-primary)]">3+ Client Projects Successfully Delivered</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
                    <div className="icon-check text-sm text-white"></div>
                  </div>
                  <span className="text-[var(--text-primary)]">Senior Team Member at Raju Freelancing Home</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
                    <div className="icon-check text-sm text-white"></div>
                  </div>
                  <span className="text-[var(--text-primary)]">Professional Working Proficiency in English</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h4 className="text-xl font-bold text-[var(--text-primary)] mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="icon-mail text-lg text-[var(--primary-color)]"></div>
                  <span className="text-[var(--text-secondary)]">abdurrahmanpalashbd@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="icon-phone text-lg text-[var(--primary-color)]"></div>
                  <span className="text-[var(--text-secondary)]">+8801773832609</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="icon-map-pin text-lg text-[var(--primary-color)]"></div>
                  <span className="text-[var(--text-secondary)]">Bangladesh</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
                <h5 className="font-semibold text-[var(--text-primary)] mb-2">Education</h5>
                <p className="text-[var(--text-secondary)]">HSC - Dinajpur Sangeet Degree College</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}