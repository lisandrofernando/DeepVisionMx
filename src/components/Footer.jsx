import React,{useRef} from 'react'
import {Link} from "react-scroll"
import "./Footer.css"
import myLog from '../assets/logoandvideos/FullLogo_Transparent.png'
import emailjs from '@emailjs/browser';
function Footer() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_brxds1b', 'template_hvivqam', form.current, 'hEbfIY72eSxATYRfB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <div className='footer-container' id='contact'>
       <section className='footer-subscription'>
         <p className='footer-subscription-heading'>
             PARTNER WITH US
         </p>
        <div className='input-areas'>
          <form ref={form} onSubmit={sendEmail}>
            <input type="name" name="name" id="name" placeholder='Your Name'  className='footer-input' required/>
            <input type="email" name='email' test-data-id='email' placeholder='Your Email' className='footer-input'required/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message' className='footer-input' required></textarea>
            <button type='submit' className='btn-btn'> Send Message</button>
          </form>
        </div>
          </section> 
          <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            {/* <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link> */}
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            {/* <Link to='/'>Destinations</Link> */}
            <Link to='/'>Sponsor Us</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/deepvision101/" target='_blank' rel="noreferrer" >Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=100091952197954" target='_blank' rel="noreferrer" >Facebook</a>
            <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A91192290&keywords=deep%20visionmx&origin=RICH_QUERY_SUGGESTION&position=0&searchId=50e70c45-3a84-478a-83a9-7e7904f9662c&sid=598" target='_blank' rel="noreferrer" >LinkedIn</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            {/* <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link> */}
             <div className="footer__logo">
             <img src={myLog} alt="Company Logo" />
               </div>
          </div>
          <small class='website-rights'>Deep Vision By Eng.Lisandro Fernando. All Rights Reserved © 2023</small>
          <div class='social-icons'>
            <a href="https://www.facebook.com/profile.php?id=100091952197954"
              class='social-icon-link facebook'
              rel="noreferrer" 
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a href="https://www.instagram.com/deepvision101/"
              class='social-icon-link instagram'
              rel="noreferrer" 
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link> */}
            <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A91192290&keywords=deep%20visionmx&origin=RICH_QUERY_SUGGESTION&position=0&searchId=50e70c45-3a84-478a-83a9-7e7904f9662c&sid=598"
              class='social-icon-link linkedin'
              rel="noreferrer" 
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer