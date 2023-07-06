import React from 'react';

import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact_wrapper p-5" id="contact_wrapper">
            <div className="contact_info text-white">
                <h3 className="contact_me">Let's Stay Connected!</h3>
                <p className="contact_content">
                    I'm currently open to new employment opportunities and I love side projects. <br />
                    Let's collaborate!
                </p>
                <div className="contact_areas">
                    <p><i class="fas fa-envelope"></i> Email: <a className="contact_link" href="mailto: abhinandansinghbaghel2001@gmail.com" target="_blank" rel="noopener noreferrer">abhinandansinghbaghel2001@gmail.com</a></p>
                    <p><i class="fab fa-github-square"></i> GitHub: <a className="contact_link" href="https://github.com/Abhinandan-Singh-Baghel" target="_blank" rel="noopener noreferrer">github.com/Abhinandan-Singh-Baghel</a></p>
                    <p><i class="fab fa-linkedin"></i> LinkedIn: <a className="contact_link" href="https://www.linkedin.com/in/abhinandan-singh-baghel-5658b7253/" target="_blank" rel="noopener noreferrer">linkedin.com/in/abhinandan-singh-baghel-5658b7253/</a></p>
                    <p><i class="fab fa-twitter"></i> Twitter: <a className="contact_link" href="https://twitter.com/abhinandan8827" target="_blank" rel="noopener noreferrer">twitter.com/abhinandan8827</a></p>
                    

                </div>
            </div>
            <div className="spotify_embed">
                <p> My coding music </p>
                <iframe className="sp"
                    src="https://open.spotify.com/embed/artist/1Xyo4u8uXC1ZmMpatF05PJ"
                    width="300" height="380" title="the_midnight"
                    frameborder="0" allowtransparency="true"
                    allow="encrypted-media">
                </iframe>
            </div>
        </div>
    )
}

export default ContactPage;