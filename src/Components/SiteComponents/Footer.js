import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="page-footer fl-fix">
    <div className="footer-top fl-fix bg-gray c-black">
      <div className="wrapper">
        <div className="footer-logo jc-sb d-f ai-c padTB40">
          <a href="index.html" className="d-ib" title="MyArthritisRx Home Page">
            <img
              src="assets/dist/images/logo-color.png"
              alt="MyArthritisRx Logo Color"
            />
          </a>
          <div className="connect-us ff-MuseoSans-500">
            For Any Inquiry, Call Us at (Toll Free){" "}
            <span>
              <strong className="ff-MuseoSans-900">
                <a href="tel: 833-888-6279">833-888-6279</a>
              </strong>{" "}
              (MARX)
            </span>
          </div>
        </div>
        <nav className="footer-links d-f jc-sb w100 ai-fs marB30">
          <div className="col w25">
            <ul>
              <li className="parent">
                <a href="our-program.html" target="">
                  Our Program
                </a>
                <ul className="">
                  <li>
                    <a href="our-program.html#six-week-program" target="">
                      6 Week Program
                    </a>
                  </li>
                  <li>
                    <a href="our-program.html#benefits" target="">
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a href="our-program.html#faq" target="">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="our-program.html#register" target="">
                      Register
                    </a>
                  </li>
                  <li>
                    <a href="our-program.html#referrals" target="">
                      Referrals
                    </a>
                  </li>
                  <li>
                    <a href="webinars.html" target="">
                      Webinars
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col w50">
            <ul>
              <li className="parent">
                <a href="about-arthritis.html" target="">
                  About Arthritis
                </a>
                <ul className="d-f jc-sb w100 fxw-w">
                  <li>
                    <a href="about-arthritis.html#what-is-arthritis" target="">
                      What is MyArthritisRx
                    </a>
                  </li>
                  <li>
                    <a href="about-arthritis.html#types-of-arthritis" target="">
                      Types of Arthritis
                    </a>
                  </li>
                  <li>
                    <a href="about-arthritis.html#basic-anatomy" target="">
                      Basic Anatomy
                    </a>
                  </li>
                  <li>
                    <a href="about-arthritis.html#signs-and-symptoms" target="">
                      Signs and Symptoms
                    </a>
                  </li>
                  <li>
                    <a href="about-arthritis.html#different-stages1" target="">
                      Stage Arthritis
                    </a>
                  </li>
                  <li>
                    <a href="about-arthritis.html#Incidence-prevalence" target="">
                      Incidence &amp; Prevalence
                    </a>
                  </li>
                  <li>
                    <a href="about-arthritis.html#risk-factor" target="">
                      Risk Factors
                    </a>
                  </li>
                  <li>
                    <a href="about-arthritis.html#joint-prevention" target="">
                      Joint Preservation
                    </a>
                  </li>
                  <li>
                    <a href="about-arthritis.html#treatments" target="">
                      Treatments
                    </a>
                  </li>
                  <li>
                    <a href="about-arthritis.html#glossary" target="">
                      Glossary
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col w25">
            <ul>
              <li className="parent">
                <a href="about-us.html" target="">
                  About Us
                </a>
                <ul className="">
                  <li>
                    <a href="about-us.html#about-arthritis" target="">
                      What is MyArthritisRx
                    </a>
                  </li>
                  <li>
                    <a href="about-us.html#leadership" target="">
                      Our Leadership Team
                    </a>
                  </li>
                </ul>
              </li>
              <li className="parent">
                <a href="videos.html" target="">
                  Videos
                </a>
              </li>
              <li className="parent">
                <a href="blog.html" target="">
                  Blog
                </a>
              </li>
              <li className="parent">
                <Link to='/ContactUs' target="">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="social-icons c-blue d-f ai-c">
              <li>
                <a
                  href="https://www.facebook.com/MyArthritisRx"
                  title="Facebook"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/myarthritisrx/"
                  title="Instagram"
                  target="_blank"
                >
                  <i className="fab fab fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/MyArthritisRx"
                  title="Twitter"
                  target="_blank"
                >
                  <i className="fab  fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/myarthritisrx/"
                  title="LinkedIn"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    {/*Copyright Section*/}
    <div className="footer-bottom fl-fix c-white">
      <div className="wrapper">
        <div className=" d-f jc-sb">
          <span className="copy">
            Copyright © 2022 MyArthritisRx Creative Concept by{" "}
            <a href="https://www.aumcore.com/" target="_blank">
              Aumcore
            </a>{" "}
            and Developed by{" "}
            <a href="https://www.omniesolutions.com/" target="_blank">
              Omnie Solutions
            </a>
          </span>
          <ul className="links d-f">
            <li>
              <Link to='/Privacy'>Privacy Statement</Link>
            </li>
            <li>
              <Link to='/TermsOfUse'>Terms of Use</Link>
            </li>
            <li>
              <Link to='/HippaComplience'>HIPAA Compliance</Link>
            </li>
            <li>
              <Link to='/SiteMap'>Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
  )
}
