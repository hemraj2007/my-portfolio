'use client';

import React, { useState } from "react";


export default function Home() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ message: '', type: '' });

    try {
      const res = await axios.post(`https://my-bus-backend-api.onrender.com/contact/`, formData);

      setAlert({
        message: 'Message sent successfully! We will get back to you soon.',
        type: 'success',
      });

      // ✅ subject hata diya reset se
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail || 'Error sending message. Please try again later.';
      setAlert({
        message: errorMessage,
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar-header">
            <img src="img/profile.jpg" alt="Image" />
          </div>
          <div className="sidebar-content">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <a href="#" className="navbar-brand">
                Navigation
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#header">
                      Home
                      <i className="fa fa-home" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                      <i className="fa fa-address-card" />
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#experience">
                      Experience
                      <i className="fa fa-star" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#service">
                      Service
                      <i className="fa fa-tasks" />
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">
                      Portfolio
                      <i className="fa fa-file-archive" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="sidebar-footer">
            <a className="btn" href="https://www.linkedin.com/in/hemraj-kumawat-bb79a5338/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>

            <a className="btn" href="https://www.instagram.com/hemrajkumawat76/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>

            <a className="btn" href="https://www.youtube.com/@HemrajKumawat-g3q" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube" />
            </a>

          </div>
        </div>
        <div className="content">
          {/* Header Start */}
          <div className="header" id="header">
            <div className="content-inner">
              <p>I'm</p>
              <h1>Hemraj kumawat</h1>
              <h2 />
              <div className="typed-text">
                full stack devlooper
              </div>
            </div>
          </div>
          {/* Header End */}
          {/* Large Button Start */}
          <div className="large-btn">
            <div className="content-inner">
              <a
                className="btn"
                href="https://docs.google.com/document/d/16ri8N2mMJduUHPs0GtKxxmcgvwYRGy6Mfb4UMEbScrk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-download" />
                Resume
              </a>

              <a className="btn" href="#">
                <i className="fa fa-hands-helping" />
                Hire Me
              </a>
            </div>
          </div>
          {/* Large Button End */}
          {/* About Start */}
          <div className="about" id="about">
            <div className="content-inner">
              <div className="content-header">
                <h2>About Me</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 col-lg-5">
                  <img src="img/about.jpg" alt="Image" />
                </div>
                <div className="col-md-6 col-lg-7">
                  <p>
                    I’m a Full-Stack Developer who loves clean code, smart design, and turning ideas into digital solutions. When I’m not coding, I’m busy learning or dreaming up the next big thing.
                  </p>
                  <a className="btn" href="#">
                    Hire Me
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="skills">
                    <div className="skill-name">
                      <p>Python(Fastapi)</p>
                      <p>85%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="skill-name">
                      <p>JavaScript(React)</p>
                      <p>95%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skills">
                    <div className="skill-name">
                      <p>DBMS(MySql)</p>
                      <p>90%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="skill-name">
                      <p>Marketing</p>
                      <p>85%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
          {/* Education Start */}
          <div className="education" id="education">
            <div className="content-inner">
              <div className="content-header">
                <h2>Education</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="edu-col">
                    <span>
                      October-2024 <i>to</i> Pursuing
                    </span>
                    <h3>Diploma corse</h3>
                    <p>
                      Full Stack Web Development.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="edu-col">
                    <span>
                      01-Aug-2022 <i>to</i> Pursuing
                    </span>
                    <h3>Bachelor of Computer Applications (BCA)</h3>
                    <p>
                      Currently pursuing BCA with a focus on programming, web development, and computer fundamentals. Actively building projects and enhancing my coding skills.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="edu-col">
                    <span>
                      01-Jul-2023 <i>to</i> 30-May-2024
                    </span>
                    <h3>Senior Secondary education</h3>
                    <p>
                      Completed 12th in 2024 with 73% from Tagore Vidya Mandir, Jobner. Studied under Science stream with a focus on Biology, building a solid foundation in the subject.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="edu-col">
                    <span>
                      01-Jul-2021 <i>to</i> 30-May-2022
                    </span>
                    <h3>secondary education</h3>
                    <p>
                      Completed 10th in 2022 with 67% from Government School, Chak Begus. Gained a strong academic base and developed an interest in technology and science.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* Education Start */}
          {/* Experience Start */}
          {/* <div className="experience" id="experience">
            <div className="content-inner">
              <div className="content-header">
                <h2>Experience</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="exp-col">
                    <span>
                      01-Jan-2020 <i>to</i> 31-Dec-2050
                    </span>
                    <h3>Codex Solution</h3>
                    <h4>San Francisco, CA</h4>
                    <h5>Project Manager</h5>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                      velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="exp-col">
                    <span>
                      01-Jan-2020 <i>to</i> 31-Dec-2050
                    </span>
                    <h3>Soft Solution Ltd</h3>
                    <h4>San Francisco, CA</h4>
                    <h5>Web Developer</h5>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                      velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="exp-col">
                    <span>
                      01-Jan-2020 <i>to</i> 31-Dec-2050
                    </span>
                    <h3>ABC Soft Ltd</h3>
                    <h4>San Francisco, CA</h4>
                    <h5>Web Designer</h5>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                      velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="exp-col">
                    <span>
                      01-Jan-2020 <i>to</i> 31-Dec-2050
                    </span>
                    <h3>Soft Agency</h3>
                    <h4>San Francisco, CA</h4>
                    <h5>Graphic Designer</h5>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                      velit id libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* Experience Start */}
          {/* Service Start */}
          {/* <div className="service" id="service">
            <div className="content-inner">
              <div className="content-header">
                <h2>Service</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-desktop" />
                    <h3>Web Design</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                      velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-laptop" />
                    <h3>Web Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                      velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-search" />
                    <h3>SEO</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                      velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-envelope-open-text" />
                    <h3>Digital Marketing</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie
                      velit id libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* Service Start */}
          {/* Portfolio Start */}
          <div className="portfolio" id="portfolio">
            <div className="content-inner">
              <div className="content-header">
                <h2>Portfolio</h2>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">
                      All
                    </li>
                    <li data-filter=".web-des">Design</li>
                    <li data-filter=".web-dev">Development</li>
                    <li data-filter=".dig-mar">Marketing</li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 portfolio-item web-des">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/portfolio-1.jpg" className="img-fluid" alt="Gymster Project" />
                      <a
                        href="img/portfolio-1.jpg"
                        data-lightbox="portfolio"
                        data-title="Gymster Project"
                        className="link-preview"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="https://e-com-frontend-i5dr.onrender.com" className="link-details" title="Live Site" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="https://e-com-frontend-i5dr.onrender.com" target="_blank" rel="noopener noreferrer">
                        e-commarce Project <span>Web Design</span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item web-des">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/portfolio-2.jpg" className="img-fluid" alt="Gymster Project" />

                      <a
                        href="img/portfolio-2.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Gymster Project"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>

                      <a
                        href="https://gymster-fronted.onrender.com"
                        className="link-details"
                        title="Live Site"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link" />
                      </a>

                      <a
                        className="portfolio-title"
                        href="https://gymster-fronted.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gymster Project <span>Web Design</span>
                      </a>
                    </figure>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/portfolio-3.jpg" className="img-fluid" alt="Gymster Project" />

                      <a
                        href="img/portfolio-3.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Gymster Project"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>

                      <a
                        href="https://gymster-fronted.onrender.com"
                        className="link-details"
                        title="Live Site"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link" />
                      </a>

                      <a
                        className="portfolio-title"
                        href="https://gymster-fronted.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gymster Project <span>Web Development</span>
                      </a>
                    </figure>
                  </div>
                </div>

                {/* <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/portfolio-4.jpg" className="img-fluid" alt="" />
                      <a
                        href="img/portfolio-4.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="#">
                        Project Name <span>Web Development</span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item dig-mar">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/portfolio-5.jpg" className="img-fluid" alt="" />
                      <a
                        href="img/portfolio-5.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="#">
                        Project Name <span>Digital Marketing</span>
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item dig-mar">
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/portfolio-6.jpg" className="img-fluid" alt="" />
                      <a
                        href="img/portfolio-6.jpg"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link" />
                      </a>
                      <a className="portfolio-title" href="#">
                        Project Name <span>Digital Marketing</span>
                      </a>
                    </figure>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* Portfolio Start */}
          {/* Review Start */}
          {/* <div className="review" id="review">
            <div className="content-inner">
              <div className="content-header">
                <h2>Review</h2>
              </div>
              <div className="row align-items-center review-slider">
                <div className="col-md-12">
                  <div className="review-slider-item">
                    <div className="review-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        eu suscipit orci. Donec molestie velit id libero blandit,
                        quis suscipit urna suscipit. Donec aliquet erat eu lacinia
                        iaculis. Ut tempor tellus eu sem pharetra feugiat.
                      </p>
                    </div>
                    <div className="review-img">
                      <img src="img/review-1.jpg" alt="Image" />
                      <div className="review-name">
                        <h3>Client Name</h3>
                        <p>Profession</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="review-slider-item">
                    <div className="review-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        eu suscipit orci. Donec molestie velit id libero blandit,
                        quis suscipit urna suscipit. Donec aliquet erat eu lacinia
                        iaculis. Ut tempor tellus eu sem pharetra feugiat.
                      </p>
                    </div>
                    <div className="review-img">
                      <img src="img/review-2.jpg" alt="Image" />
                      <div className="review-name">
                        <h3>Client Name</h3>
                        <p>Profession</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="review-slider-item">
                    <div className="review-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        eu suscipit orci. Donec molestie velit id libero blandit,
                        quis suscipit urna suscipit. Donec aliquet erat eu lacinia
                        iaculis. Ut tempor tellus eu sem pharetra feugiat.
                      </p>
                    </div>
                    <div className="review-img">
                      <img src="img/review-3.jpg" alt="Image" />
                      <div className="review-name">
                        <h3>Client Name</h3>
                        <p>Profession</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* Review End */}
          {/* Contact Start */}
          <div className="contact" id="contact">
            <div className="content-inner">
              <div className="content-header">
                <h2>Contact</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="contact-info">
                    <p>
                      <i className="fa fa-user" />
                      Hemraj kumawat
                    </p>
                    <p>
                      <i className="fa fa-tag" />
                      full stack developer
                    </p>
                    <p>
                      <i className="fa fa-envelope" />
                      <a href="mailto:info@example.com">hemrajkumawat68005@gmail.com</a>
                    </p>
                    <p>
                      <i className="fa fa-phone" />
                      <a href="tel:+1234567890">+91- 7877024910</a>
                    </p>
                    <p>
                      <i className="fa fa-map-marker" />
                      kargawalo ke dhani begus road boraj,jaipur
                    </p>
                    <div className="social">
                      {/* <a className="btn" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn" href="">
                        <i className="fab fa-facebook-f" />
                      </a> */}
                      <a className="btn" href="https://www.linkedin.com/in/hemraj-kumawat-bb79a5338/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in" />
                      </a>

                      <a className="btn" href="https://www.instagram.com/hemrajkumawat76/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>

                      <a className="btn" href="https://www.youtube.com/@HemrajKumawat-g3q" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube" />
                      </a>

                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form">
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* ❌ Subject field hata diya */}

                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          rows={5}
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <button className="btn" type="submit" disabled={loading}>
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span> Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* Contact End */}
          {/* Footer Start */}
          <div className="footer">
            <div className="content-inner">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <p>
                    © Copyright <a href="https://htmlcodex.com">HTML Codex</a>. All
                    Rights Reserved
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Powered by <a href="https://htmlcodex.com">HTML Codex</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Start */}
        </div>
      </div>
      {/* Back to Top */}

    </>

  );
}
