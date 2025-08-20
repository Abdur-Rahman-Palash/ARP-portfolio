function Hero() {
  try {
    return (
      <section id="home" className="gradient-bg section-padding pt-24" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-yellow-300">Md. Abdur Rahman</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                Senior Web Developer & Designer
              </p>
              <p className="text-lg mb-8 text-blue-100 leading-relaxed">
                Creative professional specializing in responsive website development, PSD template design, 
                and document editing. I deliver quality projects with client satisfaction guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-[var(--primary-color)] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[var(--primary-color)] transition-all duration-200"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                  <img 
                    src="https://app.trickle.so/storage/public/images/usr_14359bb3e0000001/c53c04b2-63f6-43b4-a489-ebdbc977e809.png" 
                    alt="Md. Abdur Rahman" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[var(--accent-color)] text-white p-4 rounded-full shadow-lg">
                  <div className="icon-code text-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}