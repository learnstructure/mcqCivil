import React from 'react'
import '../css/contact.css';
import { Helmet } from 'react-helmet';
function Contact() {
    return (
        <div className='page-container'>
            <Helmet>
                <title>Contact Civil Mcq</title>
                <meta name="description" content="contact us page" />
            </Helmet>
            <form className='contactform' action="https://formsubmit.co/abinashmandal33486@gmail.com" method="POST">
                <textarea rows={3} cols={40} placeholder="Your message here..." type="text" name="name" required />
                <br />
                <textarea rows={1} cols={40} placeholder="Your email address here..." type="email" name="email" required />
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_next" value="https://civilengineering-mcq.web.app/thanks"></input>
                <button type="submit">Send</button>

            </form>
            <p>You can also contact us by emailing at <strong><em>structurerealm@gmail.com </em></strong></p>

        </div>

    )
}

export default Contact