import React from 'react';
import './contact.css';
import instaIcon from '../../assets/instagram.png';
import linkedinIcon from '../../assets/linkedin.png';

const Contact = () => {
    return (
        <div className="contact-section">
            <h1 className="contact">Contact Me</h1>
            <div className="contact-container">
                <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                    <input type="hidden" name="access_key" value="5151540c-fa99-4c4d-81f4-9493ff78fd91"></input>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder='Enter name....' required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder='Enter Email....' required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder='Write message Here....' required></textarea>

                    <button type="submit">Send Message</button>
                </form>
                <div className="social-links">
                    <h3>Connect With Me</h3>
                    <div className='links'>
                        <img src={linkedinIcon} alt='linkedIn' className='link' /><a href='https://www.linkedin.com/in/Saptarshi214'>LinkedIn</a>
                        <img src={instaIcon} alt='insta' className='link' /><a href='https://www.instagram.com/c_saptarshi/'>Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
