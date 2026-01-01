import './style.css'
import data from './data.json'

const { profile } = data;

document.querySelector('#app').innerHTML = `
  <nav class="navbar">
    <div class="container nav-content">
      <a href="#" class="logo">Aidan Tam</a>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <main>
    <section class="hero">
      <div class="container hero-split-layout">
        
        <div class="hero-text">
            <h1 class="hero-name"><span class="gradient-text">${profile.name}</span></h1>
            <h2 class="hero-role">${profile.headline}</h2>
            <p class="hero-location">📍 ${profile.location.city}, ${profile.location.country}</p>
            
            <p class="hero-bio">${profile.summary}</p>

            <div class="cta-group">
              <a href="#projects" class="btn">View Work</a>
              <a href="#contact" class="btn btn-secondary">Contact Me</a>
              ${profile.social_links.linkedin ? `<a href="${profile.social_links.linkedin}" target="_blank" class="btn btn-secondary" style="color: #0077b5; border-color: rgba(0, 119, 181, 0.3);">LinkedIn</a>` : ''}
            </div>

            <div class="hero-skills">
                <p class="text-secondary" style="margin-bottom: 0.5rem; font-size: 0.9rem; text-transform: uppercase;">Core Technologies</p>
                <div class="skills-list" style="justify-content: flex-start;">
                    ${profile.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        </div>

        <div class="hero-visual">
            ${profile.photo_url ? `<img src="${profile.photo_url}" alt="${profile.name}" class="profile-img-large" onerror="this.src='https://ui-avatars.com/api/?name=${profile.name.replace(' ', '+')}&size=400&background=0284c7&color=fff'"/>` : ''}
        </div>

      </div>
    </section>

    <section id="experience" class="container">
      <h2>Work Experience</h2>
      <div class="grid">
        ${profile.experience.map(exp => `
          <div class="card experience-card">
            <h3>${exp.title}</h3>
            <h4>
                ${exp.url ? `<a href="${exp.url}" target="_blank" style="color: inherit; text-decoration: underline; text-decoration-color: var(--accent-primary);">${exp.company || exp.organization}</a>` : (exp.company || exp.organization)}
            </h4>
            <div class="text-secondary" style="margin-bottom: 0.5rem; font-size: 0.9em;">
                <span>${exp.start_date} - ${exp.end_date}</span>
                ${exp.location ? ` • ${exp.location}` : ''}
            </div>
            ${exp.description ? `<p>${exp.description}</p>` : ''}
            ${exp.highlights ? `<ul>${exp.highlights.map(h => `<li>${h}</li>`).join('')}</ul>` : ''}
            ${exp.responsibilities ? `<ul>${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>` : ''}
            ${exp.detailed_responsibilities ? `<ul>${exp.detailed_responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>` : ''}
            
            ${exp.skills ? `
                <div class="skills-list" style="margin-top: 1rem; justify-content: flex-start;">
                    ${exp.skills.map(skill => `<span class="skill-tag" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">${skill}</span>`).join('')}
                </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </section>

    <section id="projects" class="container">
      <h2>Projects</h2>
      <div class="grid">
        ${profile.projects && profile.projects.length > 0 ? profile.projects.map(proj => `
          <div class="card" style="display: flex; flex-direction: column;">
            <div style="margin-bottom: 0.5rem;">
                <span class="text-secondary" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">${proj.category || 'Project'}</span>
            </div>
            <h3 style="font-size: 1.25rem;">${proj.title}</h3>
            ${proj.context ? `<h4 style="font-size: 0.95rem; color: var(--accent-secondary); margin-bottom: 0.75rem;">${proj.context}</h4>` : ''}
            
            <p style="margin-bottom: 1rem; flex-grow: 1;">${proj.description}</p>
            
            ${proj.video_url ? `
                <div style="margin-bottom: 1rem; border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border-subtle);">
                    <video controls style="width: 100%; display: block;">
                        <source src="${proj.video_url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            ` : ''}

            ${proj.image_url ? `
                <div style="margin-bottom: 1rem; border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border-subtle);">
                    <img src="${proj.image_url}" alt="${proj.title} Preview" style="width: 100%; display: block; height: auto;">
                </div>
            ` : ''}

            ${proj.download_url ? `
                <div style="margin-bottom: 1rem;">
                    <a href="${proj.download_url}" download class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        ${proj.download_url.endsWith('.ipynb') ? 'Download Source Code (.ipynb)' : 'Download Project Files (.zip)'}
                    </a>
                </div>
            ` : ''}
            
            ${proj.key_features ? `
                <div style="margin-bottom: 1rem; background: var(--bg-secondary); padding: 0.75rem; border-radius: var(--radius-sm);">
                    <strong style="font-size: 0.85rem; display: block; margin-bottom: 0.5rem;">Key Features</strong>
                    <ul style="padding-left: 1.2rem; margin: 0;">
                        ${proj.key_features.map(f => `<li style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.25rem;">${f}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${proj.technologies ? `
                <div class="skills-list" style="margin-top: auto; justify-content: flex-start;">
                    ${proj.technologies.map(tech => `<span class="skill-tag" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">${tech}</span>`).join('')}
                </div>
            ` : ''}
          </div>
        `).join('') : '<p>More projects coming soon!</p>'}
      </div>
    </section>

    <section id="education" class="container">
      <h2>Education</h2>
      <div class="grid">
        ${profile.education.map(edu => `
          <div class="card">
            <h3>${edu.institution}</h3>
            <p class="text-secondary">${edu.degree}</p>
            ${edu.start_date ? `<p class="date text-secondary" style="margin-top:0.5rem;">${edu.start_date} - ${edu.end_date || 'Present'}</p>` : ''}
          </div>
        `).join('')}
      </div>
    </section>
    
    <section id="contact" class="contact-section">
        <div class="container">
            <h2 class="gradient-text">Get In Touch</h2>
            <p class="section-intro"> I'm always open to discussing new opportunities, projects, or just chatting about tech.</p>
            
            <div class="contact-details">
                <p><strong>Email:</strong> ${profile.contact_info.email}</p>
                <p><strong>Phone:</strong> ${profile.contact_info.phone}</p>
            </div>

            <div class="cta-group contact-actions">
                <a href="mailto:${profile.contact_info.email}" class="btn">Send Email</a>
                ${profile.social_links.linkedin ? `<a href="${profile.social_links.linkedin}" target="_blank" class="btn btn-secondary">LinkedIn</a>` : ''}
            </div>
        </div>
    </section>

  </main>

  <footer>
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${profile.name}. All rights reserved.</p>
    </div>
  </footer>
`
