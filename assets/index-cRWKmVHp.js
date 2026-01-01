(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const l=JSON.parse(`{"name":"Aidan Tam","pronouns":"He/Him","headline":"Mechanical + Artificial Intelligence Systems Engineering Student @ Western University","location":{"city":"Toronto","province":"Ontario","country":"Canada"},"summary":"Mechanical and Artificial Intelligence Systems Engineering student at Western University, bridging the gap between hardware engineering and intelligent automation. I specialize in deploying AI solutions, managing complex technical infrastructure, and leading cross-functional teams to drive innovation in real-world environments.","contact_info":{"email":"Atam243@uwo.ca","phone":"+1 647 918 7269"},"social_links":{"linkedin":"https://www.linkedin.com/in/aidan-tam-73b060300/"},"photo_url":"/profile-new.png","education":[{"institution":"Western University","degree":"Bachelor of Applied Science - BASc, Engineering","start_date":"September 2023","end_date":"May 2027"},{"institution":"Ursula Franklin Academy","degree":"High School Diploma"}],"experience":[{"title":"Co-Founder | Head of Product Implementation","company":"The Workforce Project","employment_type":"Contract Full-time","location":"Toronto, ON (Hybrid)","start_date":"May 2025","end_date":"Present","url":"https://theworkforceproject.com/","detailed_responsibilities":["Lead the end-to-end deployment of AI-driven automation workflows for Small and Medium Enterprises (SMEs) to optimize operational efficiency.","Develop and manage technical implementation roadmaps, ensuring products are delivered on time and align with client business objectives.","Facilitate high-level client training sessions to drive product adoption and ensure sustainable technology transition.","Collaborate with engineering teams to bridge the gap between high-level product vision and practical, field-ready technical execution."],"skills":["AI Implementation","Automation Strategy","Client Relationship Management","Product Lifecycle Management","Strategic Planning"]},{"title":"Engineering Co-op","company":"Canadian Coast Guard","location":"Sarnia, Ontario (Hybrid)","start_date":"May 2025","end_date":"September 2025","detailed_responsibilities":["Perform structural and functional inspections of marine aids to navigation, generating comprehensive condition reports to inform maintenance schedules.","Analyze the life-cycle management of large-scale marine infrastructure to predict failure points and optimize asset longevity.","Evaluate environmental response equipment and protocols to ensure operational readiness for maritime emergencies.","Liaise with interdisciplinary engineering teams (Mechanical, Civil, and Electrical) to support multi-faceted infrastructure projects."],"skills":["Technical Report Writing","Asset Lifecycle Management","Structural Inspection","Interdisciplinary Collaboration","Risk Assessment"]},{"title":"Owner","company":"Oakwood Deck & Yard","employment_type":"Self-employed","start_date":"May 2024","end_date":"September 2025","detailed_responsibilities":["Founded and scaled a residential construction firm specializing in custom outdoor living spaces and structural deck design.","Manage end-to-end project lifecycles, including site surveying, material procurement, budgeting, and final quality assurance.","Utilize project management frameworks (WBS and Gantt charting) to ensure efficient resource allocation and adherence to strict deadlines.","Negotiate contracts and maintain vendor relationships to optimize supply chain costs and material quality."],"skills":["Project Coordination","Entrepreneurship","Supply Chain Management","Financial Budgeting","Construction Management"]},{"title":"IT Support Specialist","company":"CrossSafety","employment_type":"Casual / On-call","location":"Toronto, ON · On-site","start_date":"May 2024","end_date":"September 2024","detailed_responsibilities":["Administered technical support for hardware and network systems, ensuring zero-downtime for critical safety operations.","Assisted in the integration and maintenance of recycling technology hardware, aligning IT infrastructure with corporate sustainability goals.","Troubleshot complex software-hardware interface issues within a safety-conscious workplace environment.","Standardized IT infrastructure updates to enhance data security and operational safety protocols."],"skills":["IT Hardware Support","System Maintenance","Network Troubleshooting","Cybersecurity Awareness","Sustainability Tech"]},{"title":"Lifeguard","company":"City of Toronto","employment_type":"Contract Full-time","location":"Toronto, ON · On-site","start_date":"September 2021","end_date":"September 2025","detailed_responsibilities":["Direct on-site safety operations for high-volume aquatic facilities, ensuring 100% compliance with provincial health and safety acts.","Coordinate emergency response drills and lead real-time rescue operations in high-pressure environments.","Mentor junior staff members on communication protocols and patron engagement to maintain a safe and inclusive public space."],"skills":["Emergency Response","Team Leadership","Crisis Management","Public Safety Compliance","Communication"]},{"title":"Customer Service Representative","company":"City of Toronto","employment_type":"Contract Part-time","location":"Toronto, ON · On-site","start_date":"September 2021","end_date":"June 2025","detailed_responsibilities":["Resolve complex community inquiries and conflict scenarios with professional empathy and actionable solutions.","Manage front-line communications for diverse populations, ensuring accessible information delivery for city programs.","Maintain meticulous records of community feedback to support departmental service improvements."],"skills":["Conflict Resolution","Professionalism","Public Relations","Problem Solving","Inquiry Management"]},{"title":"Varsity Athlete (Wrestling)","organization":"U SPORTS / Western University","start_date":"September 2024","end_date":"Present","detailed_responsibilities":["Dedicate 20+ hours weekly to intensive training and competition while maintaining a high academic standing in Engineering.","Develop elite-level resilience and discipline by competing at the national varsity level (U SPORTS).","Collaborate with teammates and coaches to refine strategic performance and maintain a positive, high-performance team culture."],"skills":["Time Management","Resilience","Discipline","Team Dynamics","Performance Optimization"]}],"projects":[{"id":"gesture-recognition-ai","title":"Real-Time AI Gesture Recognition & Strategic Gaming System","category":"Artificial Intelligence / Computer Vision","context":"Western University - AISE 3350A Final Project","description":"Engineered a CNN using TensorFlow/OpenCV with data augmentation for rotational invariance. Integrated a Minimax algorithm to provide live strategic move recommendations based on worst-case payoff scenarios.","video_url":"/rps-demo.mp4","challenge":"Develop a system to identify 'Rock, Paper, Scissors' gestures in dynamic environments, accounting for lighting and rotation, while integrating a game-theory-based strategic recommender for four players.","technologies":["Python 3.11","TensorFlow","OpenCV","NumPy","Game Theory"],"key_features":["4-player recognition boxes","Real-time confidence percentage tracking","Rotational invariance for multi-angle delivery","Manual locking mechanism for move validation","Minimax-based strategic output in terminal"]},{"id":"asteroid-diameter-prediction","title":"Asteroid Diameter Prediction","category":"Machine Learning & Data Science","description":"Developed a high-accuracy predictive model to estimate asteroid diameters using orbital and physical parameters from a NASA JPL dataset of over 950,000 records. The final system utilizes a Stacking Regressor ensemble (combining Random Forest, XGBoost, and MLP) to maximize generalization and minimize prediction error.","image_url":"/asteroid-preview.png","technologies":["Python","Scikit-Learn","TensorFlow/Keras","XGBoost","CatBoost","Pandas","NumPy"],"key_features":["Advanced Data Preprocessing: Mean/Median imputation and IQR outlier removal","Model Evaluation: Compared Linear, Lasso, Ridge, Random Forest, XGBoost, CatBoost, and MLP Neural Networks","Ensemble Learning: Implemented Stacking Regressor with Ridge meta-model for superior performance","Exploratory Data Analysis (EDA) on 45 features with correlation heatmaps","Achieved strong generalization with R2 Score: 0.952 and RMSE: 0.416"]},{"id":"nitinol-knee-simulator","title":"Nitinol-Driven Knee Motion Simulator","category":"Mechanical Engineering & Robotics","description":"Designed an innovative muscle actuation system for ex-vivo human joint simulators, utilizing Shape Memory Alloy (Nitinol) to improve power-to-weight ratios in rehabilitation technology.","video_url":"/nitinol-demo.mp4","technologies":["Nitinol (Shape Memory Alloy)","AISI 1020 Steel","Goniometer Joint-Motion Sensors","Load Cell Force Sensors","SolidWorks"],"key_features":["Quality Function Deployment (QFD) for consumer requirement identification","TRIZ and morphological analysis for tendon-driven actuator innovation","PERT/CPM and Work Breakdown Structures (WBS) project management","Optimized Power-to-weight ratio for expected 20-year lifespan (10M cycles)"]},{"id":"travel-planner-app","title":"Travel Planner","category":"Software Development / API Integration","description":"An interactive Python command-line application designed to streamline trip planning by integrating weather forecasts, hotel searches, local attractions, and car rental suggestions.","technologies":["Python 3","RapidAPI (Hotel & Car Rental)","OpenWeatherMap API","Google Maps & Places API","Pytest & Unittest.mock"],"key_features":["Real-time Weather Forecasts for destinations","Hotel Search with Destination ID lookup","Geocoding-based Attraction Discovery","Car Rental Finder sorted by price/availability","Full unit test suite with API mocking"]}],"skills":["Computer-Aided Design (CAD)","SOLIDWORKS","Java","AI Implementation","Automation Strategy","Technical Report Writing","Project Coordination","Team Leadership","Python","API Integration"],"certifications":[{"name":"Certified SOLIDWORKS Associate","issuer":"Dassault Systèmes","issue_date":"November 2024","credential_id":"C-S7A8TBXZ2D"},{"name":"CPR/AED/First Aid","issuer":"Lifesaving Society Ontario"}],"honors_awards":[{"title":"Dean's List","issuer":"Western University - Faculty of Engineering","year":"2024","criteria":"Cumulative average of 80%+"},{"title":"Dean's List","issuer":"Western University - Faculty of Engineering","year":"2023"}]}`),c={profile:l},{profile:t}=c;document.querySelector("#app").innerHTML=`
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
            <h1 class="hero-name"><span class="gradient-text">${t.name}</span></h1>
            <h2 class="hero-role">${t.headline}</h2>
            <p class="hero-location">📍 ${t.location.city}, ${t.location.country}</p>
            
            <p class="hero-bio">${t.summary}</p>

            <div class="cta-group">
              <a href="#projects" class="btn">View Work</a>
              <a href="#contact" class="btn btn-secondary">Contact Me</a>
              ${t.social_links.linkedin?`<a href="${t.social_links.linkedin}" target="_blank" class="btn btn-secondary" style="color: #0077b5; border-color: rgba(0, 119, 181, 0.3);">LinkedIn</a>`:""}
            </div>

            <div class="hero-skills">
                <p class="text-secondary" style="margin-bottom: 0.5rem; font-size: 0.9rem; text-transform: uppercase;">Core Technologies</p>
                <div class="skills-list" style="justify-content: flex-start;">
                    ${t.skills.map(e=>`<span class="skill-tag">${e}</span>`).join("")}
                </div>
            </div>
        </div>

        <div class="hero-visual">
            ${t.photo_url?`<img src="${t.photo_url}" alt="${t.name}" class="profile-img-large" onerror="this.src='https://ui-avatars.com/api/?name=${t.name.replace(" ","+")}&size=400&background=0284c7&color=fff'"/>`:""}
        </div>

      </div>
    </section>

    <section id="experience" class="container">
      <h2>Work Experience</h2>
      <div class="grid">
        ${t.experience.map(e=>`
          <div class="card experience-card">
            <h3>${e.title}</h3>
            <h4>
                ${e.url?`<a href="${e.url}" target="_blank" style="color: inherit; text-decoration: underline; text-decoration-color: var(--accent-primary);">${e.company||e.organization}</a>`:e.company||e.organization}
            </h4>
            <div class="text-secondary" style="margin-bottom: 0.5rem; font-size: 0.9em;">
                <span>${e.start_date} - ${e.end_date}</span>
                ${e.location?` • ${e.location}`:""}
            </div>
            ${e.description?`<p>${e.description}</p>`:""}
            ${e.highlights?`<ul>${e.highlights.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
            ${e.responsibilities?`<ul>${e.responsibilities.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
            ${e.detailed_responsibilities?`<ul>${e.detailed_responsibilities.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
            
            ${e.skills?`
                <div class="skills-list" style="margin-top: 1rem; justify-content: flex-start;">
                    ${e.skills.map(i=>`<span class="skill-tag" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">${i}</span>`).join("")}
                </div>
            `:""}
          </div>
        `).join("")}
      </div>
    </section>

    <section id="projects" class="container">
      <h2>Projects</h2>
      <div class="grid">
        ${t.projects&&t.projects.length>0?t.projects.map(e=>`
          <div class="card" style="display: flex; flex-direction: column;">
            <div style="margin-bottom: 0.5rem;">
                <span class="text-secondary" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">${e.category||"Project"}</span>
            </div>
            <h3 style="font-size: 1.25rem;">${e.title}</h3>
            ${e.context?`<h4 style="font-size: 0.95rem; color: var(--accent-secondary); margin-bottom: 0.75rem;">${e.context}</h4>`:""}
            
            <p style="margin-bottom: 1rem; flex-grow: 1;">${e.description}</p>
            
            ${e.video_url?`
                <div style="margin-bottom: 1rem; border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border-subtle);">
                    <video controls style="width: 100%; display: block;">
                        <source src="${e.video_url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            `:""}

            ${e.image_url?`
                <div style="margin-bottom: 1rem; border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border-subtle);">
                    <img src="${e.image_url}" alt="${e.title} Preview" style="width: 100%; display: block; height: auto;">
                </div>
            `:""}

            ${e.download_url?`
                <div style="margin-bottom: 1rem;">
                    <a href="${e.download_url}" download class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        ${e.download_url.endsWith(".ipynb")?"Download Source Code (.ipynb)":"Download Project Files (.zip)"}
                    </a>
                </div>
            `:""}
            
            ${e.key_features?`
                <div style="margin-bottom: 1rem; background: var(--bg-secondary); padding: 0.75rem; border-radius: var(--radius-sm);">
                    <strong style="font-size: 0.85rem; display: block; margin-bottom: 0.5rem;">Key Features</strong>
                    <ul style="padding-left: 1.2rem; margin: 0;">
                        ${e.key_features.map(i=>`<li style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.25rem;">${i}</li>`).join("")}
                    </ul>
                </div>
            `:""}

            ${e.technologies?`
                <div class="skills-list" style="margin-top: auto; justify-content: flex-start;">
                    ${e.technologies.map(i=>`<span class="skill-tag" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">${i}</span>`).join("")}
                </div>
            `:""}
          </div>
        `).join(""):"<p>More projects coming soon!</p>"}
      </div>
    </section>

    <section id="education" class="container">
      <h2>Education</h2>
      <div class="grid">
        ${t.education.map(e=>`
          <div class="card">
            <h3>${e.institution}</h3>
            <p class="text-secondary">${e.degree}</p>
            ${e.start_date?`<p class="date text-secondary" style="margin-top:0.5rem;">${e.start_date} - ${e.end_date||"Present"}</p>`:""}
          </div>
        `).join("")}
      </div>
    </section>
    
    <section id="contact" class="contact-section">
        <div class="container">
            <h2 class="gradient-text">Get In Touch</h2>
            <p class="section-intro"> I'm always open to discussing new opportunities, projects, or just chatting about tech.</p>
            
            <div class="contact-details">
                <p><strong>Email:</strong> ${t.contact_info.email}</p>
                <p><strong>Phone:</strong> ${t.contact_info.phone}</p>
            </div>

            <div class="cta-group contact-actions">
                <a href="mailto:${t.contact_info.email}" class="btn">Send Email</a>
                ${t.social_links.linkedin?`<a href="${t.social_links.linkedin}" target="_blank" class="btn btn-secondary">LinkedIn</a>`:""}
            </div>
        </div>
    </section>

  </main>

  <footer>
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${t.name}. All rights reserved.</p>
    </div>
  </footer>
`;
