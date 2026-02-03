import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaFire, FaLinkedin, FaGithub,FaPhone,FaGlobe } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import { SiDart } from 'react-icons/si';
import { IoLogoHtml5 } from 'react-icons/io5';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from '../assets/aboutmephoto.jpg'
const MainContent = () => {
    return (
        <div className="container mt-5" style={{ backgroundColor: '#f9f9f9', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="row">
          <div className="col-md-6 text-center">
            <img 
              src={photo}// Replace with your actual image URL
              className="rounded-circle"
              style={{ width: '300px', height: '300px' }}
              alt="Mertcan İNCİOĞULLARI"
            />
            <h2>Mertcan İNCİOĞULLARI</h2>
            <p>Full Stack Developer</p>
            <a href='Https://mertcaninciogullari.com'>mertcaninciogullari.com</a>
            <p>
              Mobile App development, Online Marketing websites, Web applications, 
              Web services, Cross-platform development, Google Flutter project management, 
              Play Store services, Google (ADS,SEO,GA4,Business)
            </p>   <div className="social-links">
        <a href="https://www.linkedin.com/in/mertcan-incioğulları-14a23325a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{ margin: '0 10px' }} />
        </a>
        <a href="https://github.com/samsathecoder" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} style={{ margin: '0 10px' }} />
        </a>
        <p>
          <AiOutlineMail style={{ marginRight: '10px' }} />
          mertcan.i@outlook.com
        </p>
        <p>
          <FaPhone style={{ marginRight: '10px' }} />
          +90 (545) 532 29 72 
        </p>
      
        <p>
          <FaGlobe style={{ marginRight: '10px' }} />
           Istanbul,TURKEY 
        </p>
      </div>
      <div class="container-fluid" className='introducearea'> <h6>Let me introduce  myself briefly</h6>
      <p>After graduating from a vocational high school of Tourism and Hotel Management, 
I shifted my focus to software development — a field I had been interested in for many years — 
and enrolled in the Computer Programming department at university, where I completed my studies up to the final semester.

During my academic years, I built a solid foundation in programming concepts such as 
Object-Oriented Programming and worked with languages including Java, C#, C++, Python, and ASP.NET MVC.

Over time, I focused on developing myself independently as a software developer. 
I have mainly worked on individual projects and provided software support for real-world use cases 
within my professional network.

I have hands-on experience in building applications **from scratch to production**, including:
- application architecture and development  
- server and database management  
- deployment, publishing, and maintenance  
- performance optimization and compatibility troubleshooting  
- basic advertising and growth-related processes  
Although I have experience publishing mobile applications with Flutter and Dart, 
my core expertise is centered on **web applications**, where I have built and maintained 
**production-level, live websites** using technologies such as 
Next.js, React, Node.js, Strapi, and framework.
I have published applications to the **Google Play Store** and handled the entire lifecycle 
from development to release, maintenance, and optimization.  
My most recent work includes applications written from scratch, which can be reviewed on my Github Pages

</p></div>
          </div>
          <div className="col-md-6">
       
          <h2 className="mt-4">Education</h2>
            <div className="education-list">
                <div className="education-item">
                    <span className="bullet">•</span>
                    <h6>Computer Programming</h6>
                    <p>Istanbul Esenyurt University (2019-2021)</p>
                    <p>(nongraduate)</p>
                </div>
                <div className="education-item">
                    <span className="bullet">•</span>
                    <h6>Anadolu University</h6>
                    <p>Computer Programming-distance(2024-2027)</p>
                    <p>(continues)</p>

              
            </div>
            <div className="education-item">
                    <span className="bullet">•</span>
                    <h6>İstanbul Eğitim Akademi</h6>
                    <p>FullStack software engineer training </p>
                    <p>(completed)</p>

            </div>
            </div>
            <div  class="container" className='seperator'> <hr  />
</div>
            <style jsx>{`
            .introducearea{
            }
            .seperator{
                padding-top:30px;
            }
                .education-list {
                    position: relative;
                    padding-left: 30px; /* Indent for bullet points */
                }
                .education-item {
                    position: relative;
                    margin-bottom: 1rem; /* Space between items */
                    padding-left: 10px; /* Indent for item text */
                }
                .education-item:not(:first-child)::before {
                    content: '';
                    position: absolute;
                    left: 0; /* Line starts from left */
                    top: 0; /* Align line with the top of the item */
                    height: calc(100% + 1rem); /* Extend the line */
                    width: 1px; /* Line thickness */
                    background-color: #ccc; /* Line color */
                }
                .education-item:first-child::before {
                    height: 20px; /* Start the line below the first item */
                    top: 20px; /* Adjust line position */
                }
                .bullet {
                    font-size: 1.5rem; /* Bullet point size */
                    color: #000; /* Bullet point color */
                    position: absolute; /* Position bullet */
                    left: -25px; /* Adjust bullet position */
                }
            `}</style>
            <h2 className="mt-4"   >Certifications</h2>
            <div className="education-list">
                <div className="education-item">
                    <span className="bullet">•</span>
                    <h6>Mobile app development with flutter</h6>
                    <p>BTK akademi (2024)</p>
                </div>
                   <div className="education-item">
                    <span className="bullet">•</span>
                    <h6>Figma-Teknokent Pendik </h6>
                    <p>BTK akademi (2025)</p>
                </div>
                </div>
                <div  class="container" className='seperator'> <hr  />
</div><h2 className="mt-4" style={{ paddingTop: "40px" }}>Skills</h2>

<div className="row mt-3">

  {/* Mobile */}
  <div className="col-md-4 mb-4">
    <h5>Mobile</h5>
    <ul className="list-unstyled">
      <li>Flutter</li>
      <li>Dart</li>
    </ul>
  </div>

  {/* Frontend */}
  <div className="col-md-4 mb-4">
    <h5>Frontend</h5>
    <ul className="list-unstyled">
      <li>React</li>
      <li>Next.js</li>
      <li>HTML / CSS</li>
      <li>Tailwind</li>
            <li>bootstrap</li>

    </ul>
  </div>

  {/* Backend & CMS */}
  <div className="col-md-4 mb-4">
    <h5>Backend & CMS</h5>
    <ul className="list-unstyled">
      <li>Node.js</li>
      <li>Strapi</li>
      <li>Mailgun</li>
    </ul>
  </div>

  {/* Database */}
  <div className="col-md-4 mb-4">
    <h5>Database</h5>
    <ul className="list-unstyled">
      <li>SQL</li>
      <li>NoSQL</li>
      <li>MongoDB Atlas</li>
    </ul>
  </div>

  {/* DevOps & Hosting */}
  <div className="col-md-4 mb-4">
    <h5>DevOps & Hosting</h5>
    <ul className="list-unstyled">
      <li>Netlify</li>
      <li>Vercel</li>
      <li>GitHub Pages</li>
    </ul>
  </div>

  {/* Version Control */}
  <div className="col-md-4 mb-4">
    <h5>Version Control</h5>
    <ul className="list-unstyled">
      <li>Git</li>
      <li>Git CLI</li>
      <li>GitHub</li>
    </ul>
  </div>

  {/* Marketing & Analytics */}
  <div className="col-md-12 mb-4">
    <h5>Marketing & Analytics</h5>
    <ul className="list-unstyled d-flex flex-wrap gap-3">
      <li>Google Ads</li>
      <li>Google Analytics (GA4)</li>
      <li>Google Search Console</li>
      <li>Meta Business</li>
      <li>Ahrefs</li>
      <li>Semrush</li>
      <li>Wix</li>
    </ul>
  </div>

</div>
        </div>
        </div>

        </div>
    );
  };

export default MainContent;