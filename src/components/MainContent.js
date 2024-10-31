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
            <p>
              Mobile App development, Online Marketing websites, Web applications, 
              Web services, Cross-platform development, Google Flutter project management, 
              Play Store services.
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
      <p>After graduating from the vocational 
        high school of tourism and hotel management, I turned to the computer field, which I was always 
        interested in, and I settled in the computer programming department at the university.
         then I did not graduate for some special reasons, I studied until the last semester.
         During my university years, I took java, OOP, C#, asp.net mvc, c ++, python courses.
         then I tried to develop myself individually in the field of software, I am working.
          but I have not yet had a corporate experience. The work I have done is more individual or 
          I have provided software support to help my circle of friends.
         among the things I can do are server management database management, 
         site management setup. as well as I focused more on mobile myself. 
         I have had individual studies in areas such as Google firebase, flutter, firebase admin-sdk react,
          node.js, dart. as well as I have had studies such as publishing applications to the play store, 
          publishing, optimization compatibility troubleshooting. recently, you can see the applications 
          I have written from scratch on github. 

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
                    <p>Computer Programming-distance(2024-2026)</p>
                    <p>(continues)</p>

              
            </div>
            <div className="education-item">
                    <span className="bullet">•</span>
                    <h6>İstanbul Eğitim Akademi</h6>
                    <p>FullStack software engineer training </p>
                    <p>(continues)</p>

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
                </div>
                <div  class="container" className='seperator'> <hr  />
</div>
            <h2 className="mt-4" style={{ paddingTop: '40px' }}>Skills</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex align-items-center mb-2">
                        <FaFire className="me-2" /> <span>Flutter</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <SiDart className="me-2" /> <span>Dart</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <FaDatabase className="me-2" /> <span>SQL</span>
                    </div>
                    
                </div>
                <div className="col-6">
                    <div className="d-flex align-items-center mb-2">
                        <FaReact className="me-2" /> <span>React</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <FaNodeJs className="me-2" /> <span>Node.js</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <IoLogoHtml5 className="me-2" /> <span>HTML</span>
                    </div>
                </div>
            </div>
        </div>
        </div>

        </div>
    );
  };

export default MainContent;