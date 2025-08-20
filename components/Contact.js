function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ASubject: ${formData.subject}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.open(`mailto:abdurrahmanpalashbd@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`);
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <section id="contact" className="section-padding bg-[var(--secondary-color)]" data-name="contact" data-file="components/Contact.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Get In Touch</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Ready to start your project? Let's discuss how I can help bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Let's Connect</h3>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                I'm always open to discussing new opportunities and exciting projects. 
                Whether you need a responsive website, PSD template design, or document editing services, 
                I'm here to help you achieve your goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-mail text-xl text-white"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">Email</p>
                    <p className="text-[var(--text-secondary)]">abdurrahmanpalashbd@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--accent-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-phone text-xl text-white"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">Phone</p>
                    <p className="text-[var(--text-secondary)]">+8801773832609 / +8801786433078</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-map-pin text-xl text-white"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">Location</p>
                    <p className="text-[var(--text-secondary)]">Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="card">
              <h4 className="text-xl font-bold text-[var(--text-primary)] mb-6">Send Message</h4>
              
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent resize-vertical"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
