function Projects() {
  try {
    const projects = [
      {
        title: 'Corporate Website Design',
        description: 'Fully responsive HTML/CSS website for a small business with modern design and optimized performance.',
        category: 'Web Development',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
        liveLink: 'https://example-corporate-site.netlify.app',
        githubLink: 'https://github.com/abdurrahman/corporate-website'
      },
      {
        title: 'PSD Template Creation',
        description: 'Professional PSD templates designed for e-commerce and business clients with pixel-perfect layouts.',
        category: 'Design',
        technologies: ['Photoshop', 'PSD Design', 'UI/UX', 'Layout Design'],
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
        liveLink: 'https://dribbble.com/abdurrahman',
        githubLink: 'https://github.com/abdurrahman/psd-templates'
      },
      {
        title: 'Document Editing Project',
        description: 'Converted and formatted legal documents in multiple formats ensuring professional presentation.',
        category: 'Document Editing',
        technologies: ['PDF Editing', 'Image Processing', 'Format Conversion', 'Quality Control'],
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop',
        liveLink: 'https://portfolio.abdurrahman.com/documents',
        githubLink: 'https://github.com/abdurrahman/document-editing'
      }
    ];

    return (
      <section id="projects" className="section-padding bg-white" data-name="projects" data-file="components/Projects.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Featured Projects</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A showcase of successfully delivered projects demonstrating my skills and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)] px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{project.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 no-underline"
                  >
                    <div className="icon-external-link text-sm"></div>
                    <span>View Live</span>
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-[var(--primary-color)] text-[var(--primary-color)] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--primary-color)] hover:text-white transition-all flex items-center justify-center space-x-2 no-underline"
                  >
                    <div className="icon-github text-sm"></div>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://github.com/abdurrahman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 bg-[var(--secondary-color)] px-6 py-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer no-underline"
            >
              <div className="icon-github text-2xl text-[var(--primary-color)]"></div>
              <div className="text-left">
                <p className="font-semibold text-[var(--text-primary)]">View More Projects</p>
                <p className="text-sm text-[var(--text-secondary)]">Check out my GitHub repository for additional work samples</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}