function Skills() {
  try {
    const skills = [
      { name: 'PSD Template Design & Editing', icon: 'image', level: 85 },
      { name: 'HTML & CSS', icon: 'code', level: 90 },
      { name: 'JavaScript (Basic)', icon: 'zap', level: 70 },
      { name: 'Responsive Website Development', icon: 'smartphone', level: 88 },
      { name: 'Document Editing (PDF, JPG, PNG, PSD)', icon: 'file-edit', level: 92 },
      { name: 'Data Analysis', icon: 'chart-bar', level: 75 }
    ];

    return (
      <section id="skills" className="section-padding bg-[var(--secondary-color)]" data-name="skills" data-file="components/Skills.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Core Skills</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              My technical expertise and creative abilities that drive successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="card">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <div className={`icon-${skill.icon} text-xl text-[var(--primary-color)]`}></div>
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] flex-1">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[var(--primary-color)] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right mt-2">
                  <span className="text-sm text-[var(--text-secondary)]">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Additional Capabilities</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Client Communication', 'Project Coordination', 'Image Optimization', 'Layout Optimization', 'Quality Assurance', 'Deadline Management'].map((capability, index) => (
                <span key={index} className="bg-white px-4 py-2 rounded-full text-[var(--text-secondary)] border border-[var(--border-color)]">
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}